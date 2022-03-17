import {
  createReachAPI,
  formatCurrency,
  parseAddress,
  parseCurrency,
} from "./reach-helpers";
import { PoolDetails, PoolInfo, SwapInfo, SwapTxnOpts } from "./types";
import { FEE_INFO } from "./constants";
import { backendUtils } from "./build/backend";

const MAX_DECIMALS = 5;

/**
 * Calculate the required input amount for the other half of a token pair.
 * @param amountIn User's input amount
 * @param tokenIn The token associated with the input amount
 * @param pool The Liquidity pool target
 * @returns
 */
export function calculatePairOpposite(
  amountIn: number,
  tokenIn: string | number,
  pool: PoolDetails
) {
  if (!pool) return "0";

  const {
    tokenABalance = 0,
    tokenBBalance = 0,
    tokenADecimals,
    tokenBDecimals,
  } = pool;
  if (tokenABalance === 0 && tokenBBalance === 0) return "0";

  if (
    tokenABalance === 0 ||
    tokenBBalance === 0 ||
    amountIn === 0 ||
    Number.isNaN(amountIn)
  ) {
    return "0";
  }

  const balA = Number(tokenABalance);
  const balB = Number(tokenBBalance);
  const tokenA = tokenIn === pool.tokenAId;
  const conversionRate = tokenA ? balB / balA : balA / balB;
  const output = amountIn * conversionRate;
  const tokDecimals = tokenA ? tokenBDecimals : tokenADecimals;
  const minimum = Number(`1.0e-${tokDecimals}`);
  if (output < minimum) return "0";

  return getValueWithMaxDecimals(output.toString(), tokDecimals);
}

/**
 * Compares the size of expected swap output to the size of an "ideal" output
 * @param amtA Input amount for swap
 * @param opts Swap options
 * @returns Price impact (percentage) as a string
 */
export function calculatePriceImpact(amtA: any, opts: SwapTxnOpts) {
  const { pool, swap } = opts;
  if (!pool) return 0;
  const { tokenABalance, tokenBBalance } = pool;
  let balA = Number(tokenABalance);
  let balB = Number(tokenBBalance);
  const aligned = alignSwapInfo(swap, pool)[1];
  if (!aligned) {
    balA = Number(tokenBBalance);
    balB = Number(tokenABalance);
  }

  if (!balA || !balB) return 0;

  const fmtA = Number(amtA);
  const idealAmtOut = (balB / balA) * fmtA;
  const amtOutWithPriceImpact = balB - (balA / (balA + fmtA)) * balB;
  const priceImpact = (idealAmtOut / amtOutWithPriceImpact - 1) * 100;
  return priceImpact.toFixed(2);
}

/** Helper: update UI state when a token is selected */
export function calculateTokenSwap(opts: SwapTxnOpts): SwapInfo {
  // Exit if one token is missing
  const { pool, swap } = opts;
  const { amountA, amountB, tokenAId, tokenBId } = swap;
  if (!opts || (!tokenAId && !tokenBId) || !pool) return swap;

  const inputIsAligned = alignSwapInfo(swap, pool)[1];
  const decimals = [pool.tokenADecimals, pool.tokenBDecimals];
  if (!inputIsAligned) decimals.reverse();

  const swapped = { ...swap };
  if (amountB && !amountA) {
    // Convert Token B to Token A | user typed into field "B"
    const expectedIn = reverseTokenBToA(amountB, pool, inputIsAligned);
    swapped.amountA = adjustForPriceImpact(expectedIn, opts);
  } else {
    // Else convert Token A to Token B
    swapped.amountB = inputIsAligned
      ? swapTokenAToB(amountA, pool)
      : swapTokenBToA(amountA, pool);
  }

  swapped.amountB = getValueWithMaxDecimals(swapped.amountB, decimals[1]);
  swapped.tokenIn = tokenAId;
  return swapped;
}

/**
 * Given an output amount, calculate the expected input. This function
 * calls `swapTokenBToA` if a possible overflow is detected (i.e. `amtOut`
 * is greater than the balance of `amtOut` token in the pool)
 */
const reverseTokenBToA = (
  amtOut: any,
  pool: PoolDetails,
  inputsAligned = false
) => {
  if (!amtOut || Number(amtOut) === 0) return 0;

  const { gt, bigNumberify, sub, div } = createReachAPI();
  const {
    tokenADecimals = 6,
    tokenBDecimals = 6,
    tokenABalance,
    tokenBBalance,
  } = pool;

  if (!(tokenABalance && tokenBBalance)) return 0;

  // Assume inverted
  let decimalsA = tokenBDecimals;
  let reserveA = parseCurrency(tokenBBalance, decimalsA);
  let decimalsB = tokenADecimals;
  let reserveB = parseCurrency(tokenABalance, decimalsB);
  let expected = parseCurrency(amtOut, decimalsA);

  // Align if not inverted
  if (inputsAligned) {
    decimalsA = tokenADecimals;
    decimalsB = tokenBDecimals;
    reserveA = parseCurrency(tokenABalance, decimalsA);
    reserveB = parseCurrency(tokenBBalance, decimalsB);
    expected = parseCurrency(amtOut, decimalsB);
  }

  // Check overflow (low liquidity) and use alternate calc since
  // results don't matter (UI will prevent swap)
  if (gt(expected, reserveB)) return swapTokenBToA(amtOut, pool);

  const num = reserveA.mul(expected).mul(bigNumberify(10000));
  const den = sub(reserveB, expected).mul(bigNumberify(9975));
  const input = div(num, den).add(1);
  const inputDec = inputsAligned ? decimalsA : decimalsB;
  return formatCurrency(input, inputDec);
};

function adjustForPriceImpact(amtA: any, opts: SwapTxnOpts) {
  const impactPct = Number(calculatePriceImpact(amtA, opts));
  const impact = ((pct) => {
    switch (true) {
      case pct > 10000:
        return pct / 100000;
      case pct > 1000:
        return pct / 10000;
      case pct > 100:
        return pct / 1000;
      default:
        return pct / 100;
    }
  })(impactPct);
  const formula = 1 / (1 - impact);
  if (Number.isNaN(amtA) || Number.isNaN(formula)) return "";
  const adjusted = Number(amtA) * formula;
  return adjusted;
}

/**
 * Given an output amount, calculate the expected `amount B` output.
 */
function swapTokenAToB(amountIn: any, pool: PoolDetails): any {
  try {
    const fmtIn = Number(amountIn);
    if (fmtIn === 0) return "";

    const { getAmtOutView } = backendUtils.getExports(createReachAPI());
    const {
      tokenAId,
      tokenADecimals,
      tokenBId,
      tokenBDecimals,
      tokenABalance: balA,
      tokenBBalance: balB,
    } = pool;

    if (tokenAId && tokenBId) {
      const inputCurrency = parseCurrency(fmtIn, tokenADecimals);
      const poolBalA = parseCurrency(Number(balA) + fmtIn, tokenADecimals);
      const poolBalB = parseCurrency(balB, tokenBDecimals);
      const amtOut = getAmtOutView(inputCurrency, poolBalA, poolBalB, FEE_INFO);
      return formatCurrency(amtOut, tokenBDecimals);
    }

    return "";
  } catch (err) {
    // @TODO | handle overflow error
    return "";
  }
}

/**
 * Given an output amount, calculate the expected `amount A` output.
 */
function swapTokenBToA(amtOut: any, pool: PoolDetails): any {
  try {
    const fmtAmt = Number(amtOut);
    if (fmtAmt === 0) return "";
    const { getAmtOutView } = backendUtils.getExports(createReachAPI());
    const {
      tokenADecimals,
      tokenBDecimals,
      tokenABalance: balA,
      tokenBBalance: balB,
    } = pool;

    if (tokenADecimals && tokenBDecimals) {
      const poolABalance = parseCurrency(balA, tokenADecimals);
      const poolBBalance = parseCurrency(
        Number(balB) + Number(amtOut),
        tokenBDecimals
      );
      const out = getAmtOutView(
        parseCurrency(amtOut, tokenBDecimals),
        poolBBalance,
        poolABalance,
        FEE_INFO
      );

      return formatCurrency(out, tokenADecimals);
    }
    return "";
  } catch (err) {
    // @TODO | handle overflow error
    console.warn("Error swapping A to expected", amtOut);
    return "";
  }
}

/** Helper: takes a `SwapInfo` object and orders token A/B to match pool */
function alignSwapInfo(
  swap: SwapInfo,
  pool: PoolInfo
): [s: SwapInfo, aligned: boolean] {
  const { tokenAId } = pool;
  if (!swap.tokenAId || !tokenAId) return [swap, false];

  if (parseAddress(swap.tokenAId) === parseAddress(tokenAId))
    return [{ ...swap, tokenIn: swap.tokenAId }, true];

  return [
    {
      tokenAId: swap.tokenBId,
      tokenBId: swap.tokenAId,
      amountA: swap.amountB,
      amountB: swap.amountA,
      tokenIn: swap.tokenBId,
    },
    false,
  ];
}

// checks the number amount and prevents any decimals being added than the explicitely described max decimal
function getValueWithMaxDecimals(original: string, decs = MAX_DECIMALS) {
  if (!original) return "0";
  let value = original.toString();
  const hasDecimal = value.includes(".");
  if (hasDecimal) {
    value =
      value.substring(0, value.indexOf(".")) +
      value.substring(value.indexOf("."), decs + 1);
  }
  if (decs === 0 && value) value = Math.floor(Number(value)).toString();
  return value;
}
