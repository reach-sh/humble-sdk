import { poolBackend, poolBackendN2NN } from "../build/backend";
import { Balances, SwapTxnOpts, TransactionResult } from "../types";
import {
  formatCurrency,
  parseCurrency,
  ReachAccount,
  ReachContract,
} from "../reach-helpers";
import { ASSURANCE_MSG, getSlippage } from "../constants";
import { errorResult, isNetworkToken } from "../utils";
import { fetchToken } from "../participants/index";
import { noOp } from "../utils.reach";

export type SwapResult = { amountIn: string; amountOut: string };
export type PoolContract = ReachContract<
  typeof poolBackend | typeof poolBackendN2NN
>;

/**
 * Perform a swap between two tokens
 * @param acct Reach `networkAccount` instance
 * @param opts Options for performing swap
 * @returns Transaction results
 */
export async function swapTokens(
  acct: ReachAccount,
  opts: SwapTxnOpts
): Promise<TransactionResult<SwapResult>> {
  const { contract, swap, pool, onProgress = noOp, onComplete = noOp } = opts;
  if (swap.tokenAId === undefined || swap.tokenBId === undefined) {
    const err = "Invalid swap pair";
    return errorResult(err, null, { amountIn: "0", amountOut: "0" }, null);
  }

  const data: SwapResult = { amountIn: swap.amountA, amountOut: "0" };
  if (!pool?.poolAddress) {
    return errorResult("Pool data is required", null, data, null);
  }

  onProgress(`Fetching metadata`);
  const { poolAddress, n2nn } = pool;
  const { tokenBId } = swap;
  const [tokenB, optedInB] = await Promise.all([
    fetchToken(acct, tokenBId),
    isNetworkToken(tokenBId) || acct.tokenAccepted(tokenBId),
  ]);

  if (!optedInB) {
    onProgress(`Opting in to ${tokenB?.symbol}`);
    await acct.tokenAccept(tokenBId);
  }

  const [aIn, eOut, swapAForB] = alignTradeAmounts(opts);
  const backend = n2nn ? poolBackendN2NN : poolBackend;
  const ctc: PoolContract = contract || acct.contract(backend, poolAddress);
  const traderAPI = ctc.apis.Trader;

  try {
    const expectedOut = swap.amountB;
    onProgress(`Swapping for ${expectedOut} ${tokenB?.symbol}`);

    const swapResult: Balances = swapAForB
      ? await traderAPI.swapAForB(aIn, eOut)
      : await traderAPI.swapBForA(aIn, eOut);
    const out = swapAForB ? swapResult.B : swapResult.A;
    const decs = swapAForB ? pool.tokenBDecimals : pool.tokenADecimals;
    data.amountOut = formatCurrency(out, decs === undefined ? 6 : decs);
    const txnResult = {
      poolAddress,
      data,
      succeeded: true,
      message: "Swap complete",
      contract: ctc,
    };
    onComplete(txnResult);
    return txnResult;
  } catch (e) {
    const defaultMsg = "Token Swap failed";
    const msg = swapErrorMessage(e);
    console.log(defaultMsg, { e });
    return errorResult(msg, poolAddress, data, null);
  }
}

/** @internal | Parse txn error into something user friendly */
function swapErrorMessage(e: any) {
  const error = e.toString();
  let message = "";

  switch (true) {
    case error.includes("logic eval error"):
    case error.includes("amtOut >= expectedOut"):
    case error.includes("expectedOut > 0"): {
      message = `Slippage error: the amount returned would have been below the 
      minimum you were expected to receive.`;
      break;
    }
    case e.toString().includes("balance(tokA) > 0"): {
      message = `You can't swap more tokens than are in the pool. Try lowering the amount.`;
      break;
    }

    default:
      break;
  }

  message = `${ASSURANCE_MSG} ${message}`.trim();
  // return errorResult(message, poolAddress, data, null);
  return message;
}

/**
 * @internal | Organize trade amounts into expected Token A and Token B
 * @returns [`amountIn`, `expectedOut`, `swapAForB` (true|false)]
 */
function alignTradeAmounts(opts: SwapTxnOpts) {
  const { swap, pool } = opts;
  if (!pool?.poolAddress) return [0, 0, false];

  const safe = (i?: number) => (i === undefined ? 6 : i);
  const { tokenADecimals, tokenBDecimals } = pool;
  const { tokenAId, tokenBId, amountA, amountB } = swap;
  if (!tokenAId || !tokenBId) return [0, 0, false];

  // re-arrange tokens to match pool if token order is reversed:
  const swapAForB = tokenAId.toString() === pool.tokenAId.toString();
  const [decimalsA, decimalsB] = swapAForB
    ? [tokenADecimals, tokenBDecimals]
    : [tokenBDecimals, tokenADecimals];
  const amtIn = parseCurrency(amountA, safe(decimalsA));
  const out = parseCurrency(minimumReceived(amountB), safe(decimalsB));
  return [amtIn, out, swapAForB];
}

/**
 * @internal Calculate minimum expected amount out from a swap, given user's slippage preference.
 * If no slippage was provided to the SDK, it will default to a preference of `0.5`% */
function minimumReceived(expected: number) {
  return (Number(expected) * (100 - getSlippage())) / 100;
}
