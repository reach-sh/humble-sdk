import { trailing0s } from "./utils.reach";
import { getComputeSwap } from "../build/backend";
import { getFeeInfo } from "../constants";
import {
  createReachAPI,
  formatCurrency,
  parseCurrency,
} from "../reach-helpers";
import {
  Balances,
  PoolDetails,
  PoolInfo,
  SwapInfo,
  SwapTxnOpts,
} from "../types";

/**
 * Calculate the required input amount for the other half of a token
 * pair. Useful when swapping or adding liquidity to a pool.
 * @param expectedOut User's input amount
 * @param tokenIn The token associated with the input amount
 * @param pool The Liquidity pool target
 * @returns
 */
export const calculatePairOpposite = calculateOtherAmount;

/**
 * Calculate the required input amount for the other half of a token
 * pair. Useful when swapping or adding liquidity to a pool.
 * @param amtIn User's input amount (could be expected output or input)
 * @param tokenIn The token associated with `input` amount
 * @param pool The Liquidity pool target
 * @returns Other amount (either swap input or second half of liquidity
 * deposit amount) as string
 */
export function calculateOtherAmount(
  amtIn: number,
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
    amtIn === 0 ||
    Number.isNaN(amtIn)
  ) {
    return "0";
  }

  const balA = Number(tokenABalance);
  const balB = Number(tokenBBalance);
  const tokenA = tokenIn === pool.tokenAId;
  const conversionRate = tokenA ? balB / balA : balA / balB;
  const output = amtIn * conversionRate;
  const tokDecimals = tokenA ? tokenBDecimals : tokenADecimals;
  const minimum = Number(`1.0e-${tokDecimals}`);
  if (output < minimum) return "0";

  return getValueWithMaxDecimals(output.toString(), tokDecimals).toString();
}

/**
 * Compares the size of expected swap output to the value of the same
 * in a "ideal"/balanced pool state (i.e. if `k` value doesn't change).
 * @param amtA Input amount for swap
 * @param opts Swap options
 * @returns Price impact (percentage) as a string
 */
export function calculatePriceImpact(amtA: any, opts: SwapTxnOpts) {
  if (!amtA) return "0";
  const { pool, swap } = opts;
  if (!pool) return "0";
  const { tokenABalance, tokenBBalance } = pool;
  let balA = Number(tokenABalance);
  let balB = Number(tokenBBalance);
  const aligned = alignSwapInfo(swap, pool)[1];
  if (!aligned) {
    balA = Number(tokenBBalance);
    balB = Number(tokenABalance);
  }

  if (!balA || !balB) return "0";

  const fmtA = Number(amtA);
  const idealAmtOut = (balB / balA) * fmtA;
  const amtOutWithPriceImpact = balB - (balA / (balA + fmtA)) * balB;
  const priceImpact = (idealAmtOut / amtOutWithPriceImpact - 1) * 100;
  return trailing0s(priceImpact.toFixed(2));
}

/**
 * Calculate the result of a token swap. Order of tokens may vary, as
 * long as all required arguments are passed.
 * @param opts options
 * @param opts.swap Swap options
 * @param opts.swap.amountA input amount
 * @param opts.swap.tokenAId input token ID
 * @param opts.swap.amountB (expected) output amount
 * @param opts.swap.tokenBId output token ID
 * @param opts.pool Swap target Pool data
 */
export function calculateTokenSwap(opts: SwapTxnOpts): SwapInfo {
  // Exit if one token is missing
  const { pool, swap } = opts;
  const { amountA, amountB, tokenAId, tokenBId } = swap;
  if (!opts || (!tokenAId && !tokenBId) || !pool) return swap;

  const decimals = [pool.tokenADecimals, pool.tokenBDecimals];
  const inputIsAligned = alignSwapInfo(swap, pool)[1];
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

  const amtB = swapped.amountB.toString();
  swapped.amountB = getValueWithMaxDecimals(amtB, decimals[1]);
  swapped.tokenIn = tokenAId;
  return swapped;
}

export type OverloadCheck = [isOverloaded: boolean, maxSwapInput: number];

/** Pre-emptively check for number overflow on swap */
export function checkPoolWillOverflow(data?: PoolDetails): OverloadCheck {
  if (!data) return [true, 0];
  const { tokenADecimals, tokenBDecimals, tokenABalance, tokenBBalance } = data;
  const reach = createReachAPI();
  const M100 = 100_000_000; // 100 million
  const big = reach.bigNumberify
  let lastInput = big(1);

  try {
    const computeSwap = getComputeSwap(reach);
    const poolBals = {
      A: parseCurrency(tokenABalance, tokenADecimals),
      B: parseCurrency(tokenBBalance, tokenBDecimals),
    };
    const pi = getFeeInfo();
    const checkA = (s: Balances) => void computeSwap(true, s, poolBals, pi);
    const checkB = (s: Balances) => void computeSwap(false, s, poolBals, pi);
    const checkNext = (): OverloadCheck => {
      // Stop if we've swapped up to 1M
      if (reach.ge(lastInput, M100)) return [false, M100];

      // Check input
      checkA({ A: lastInput, B: 0 });
      checkB({ B: lastInput, A: 0 });

      // if we got here, it worked. Increment and check again
      lastInput = reach.mul(lastInput, big(10));
      const lessThanA = reach.le(big(tokenABalance || "0"), lastInput);
      const lessThanB = reach.le(big(tokenBBalance || "0"), lastInput);
      if (!lessThanA && !lessThanB) return checkNext();

      const max = lessThanA ? tokenABalance : tokenBBalance;
      return [false, Number(max)];
    };

    return checkNext();
  } catch (e: any) {
    return [true, reach.bigNumberToNumber(lastInput)];
  }
}

/**
 * @internal
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

  // Assume inverted (and align if not)
  const decs = [tokenBDecimals, tokenADecimals];
  const balances = [tokenBBalance, tokenABalance];
  if (inputsAligned) {
    decs.reverse();
    balances.reverse();
  }

  const [decimals1, decimals2] = decs;
  const reserveA = parseCurrency(balances[0], decimals1);
  const reserveB = parseCurrency(balances[1], decimals2);
  const expected = parseCurrency(amtOut, decimals2);

  // Check overflow (low liquidity) and use alternate calc since
  // results don't matter (UI will prevent swap)
  if (gt(expected, reserveB)) return swapTokenBToA(amtOut, pool);

  const num = reserveA.mul(expected).mul(bigNumberify(10000));
  const den = sub(reserveB, expected).mul(bigNumberify(9975));
  const input = div(num, den).add(1);
  return formatCurrency(input, decimals1);
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

    const computeSwap = getComputeSwap(createReachAPI());
    const {
      tokenAId,
      tokenADecimals,
      tokenBId,
      tokenBDecimals,
      tokenABalance: balA,
      tokenBBalance: balB,
    } = pool;

    if ([tokenAId, tokenBId].every(Boolean)) {
      const input = { A: parseCurrency(fmtIn, tokenADecimals), B: 0 };
      const poolBals = {
        // A: parseCurrency(Number(balA) + fmtIn, tokenADecimals),
        A: parseCurrency(balA, tokenADecimals),
        B: parseCurrency(balB, tokenBDecimals),
      };
      const [outBals] = computeSwap(true, input, poolBals, getFeeInfo());
      return formatCurrency(outBals.B, tokenBDecimals);
    }

    return "";
  } catch (err) {
    console.log("swapTokenAToB Error:\n", err);
    return "";
  }
}

/**
 * Given an output amount, calculate the expected `amount A` output.
 */
function swapTokenBToA(amtOut: any, pool: PoolDetails): any {
  try {
    const fmtOut = Number(amtOut);
    if (fmtOut === 0) return "";
    const computeSwap = getComputeSwap(createReachAPI());
    const {
      tokenADecimals,
      tokenBDecimals,
      tokenABalance: balA,
      tokenBBalance: balB,
    } = pool;

    if ([tokenADecimals, tokenBDecimals].every((dec) => dec !== undefined)) {
      const input = { A: 0, B: parseCurrency(amtOut, tokenBDecimals) };
      const poolBals = {
        A: parseCurrency(balA, tokenADecimals),
        B: parseCurrency(balB, tokenBDecimals),
        // B: parseCurrency(Number(balB) + fmtOut, tokenBDecimals),
      };
      const [outBals] = computeSwap(false, input, poolBals, getFeeInfo());
      return formatCurrency(outBals.A, tokenADecimals);
    }
    return "";
  } catch (err) {
    console.log("swapTokenBToA Error:\n", err);
    return "";
  }
}

/** @internal Takes a `SwapInfo` object and orders token A/B to match pool */
function alignSwapInfo(
  swap: SwapInfo,
  pool: PoolInfo
): [s: SwapInfo, aligned: boolean] {
  const { tokenAId } = pool;
  if (!swap.tokenAId || !tokenAId) return [swap, false];

  if (swap.tokenAId.toString() === tokenAId.toString()) {
    return [{ ...swap, tokenIn: swap.tokenAId }, true];
  }

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

/** @internal checks the number amount and prevents any decimals being added than the explicitely described max decimal */
export function getValueWithMaxDecimals(original: string, decimals?: number) {
  const MAX_DECIMALS = 5;
  const decs =
    decimals === undefined || decimals === null ? MAX_DECIMALS : decimals;
  if (!original) return "0";
  const decIndex = original.indexOf(".");
  let value = original.toString();
  if (value.includes("e")) {
    const exPlaces = value.slice(value.indexOf("e") + 2);
    // if the exponential value (lets say 7 in 3.0e-7) is higher than the decimal
    // value for the coin (6), then the fee is zero since it's calculated amount
    // is too small for the coins precision
    if (decs < Number(exPlaces)) return "0";
    return decs;
  }

  if (decIndex > -1) {
    value = value.substring(0, decIndex) + value.substring(decIndex, decIndex + decs + 1);
  }

  if (decs === 0 && value) value = Math.floor(Number(value)).toString();
  return value;
}
