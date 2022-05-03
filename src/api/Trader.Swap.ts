import { poolBackend, poolBackendN2NN } from "../build/backend";
import { Balances, SwapTxnOpts, TransactionResult } from "../types";
import {
  formatCurrency,
  noOp,
  parseAddress,
  parseCurrency,
  ReachAccount,
  ReachContract,
} from "../reach-helpers";
import { ASSURANCE_MSG, getSlippage } from "../constants";
import { isNetworkToken } from "../utils";
import { fetchToken } from "../participants/index";

type SwapResult = { amountIn: string; amountOut: string };

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
  if (!pool) return onSwapError("", "Pool data is required");

  const { poolAddress } = pool;
  if (!poolAddress) return onSwapError("", "Valid Pool address is required");

  const addr = parseAddress(poolAddress);
  if (addr !== parseAddress(pool.poolAddress)) {
    return onSwapError(poolAddress, "Pool address does not match data");
  }

  if (!swap.tokenAId || !swap.tokenBId)
    return onSwapError(poolAddress, "Invalid swap info", {});

  // onProgress(`Fetching metadata`);
  const { n2nn, tokenBId } = pool;
  const [tokenB, optedInB] = await Promise.all([
    fetchToken(acct, tokenBId),
    !isNetworkToken(tokenBId) && acct.tokenAccepted(tokenBId),
  ]);
  const [[amtIn, expectedOut, swapBForA], _optIn] = await Promise.all([
    alignTradeAmounts(opts),
    !optedInB && acct.tokenAccept(tokenBId),
  ]);

  const backend = n2nn ? poolBackendN2NN : poolBackend;
  const ctc: ReachContract<typeof backend> =
    contract || acct.contract(backend, addr);
  const traderAPI = ctc.apis.Trader;

  try {
    onProgress(`Swapping for "${tokenB?.symbol}"`);
    const swapResult: Balances = swapBForA
      ? await traderAPI.swapBForA(amtIn, expectedOut)
      : await traderAPI.swapAForB(amtIn, expectedOut);
    const amountIn = swap.amountA;
    const out = swapBForA ? swapResult.A : swapResult.B;
    const decs = [pool.tokenADecimals, pool.tokenBDecimals];
    if (swapBForA) decs.reverse();

    const amountOut = formatCurrency(out, decs[1] === undefined ? 6 : decs[1]);
    const txnResult = {
      poolAddress,
      data: { amountIn, amountOut },
      succeeded: true,
      message: "Swap complete",
      contract: ctc,
    };
    onComplete(txnResult);
    return txnResult;
  } catch (e) {
    return onSwapError(poolAddress, "The Swap transaction failed", e);
  }
}

/** INTERNAL HELPER | Parse txn error into something user friendly */
function onSwapError(
  poolAddress: string | number,
  reason?: string,
  e: any = {}
): TransactionResult<any> {
  const error = e.toString();
  const data = { error: e, reason };
  let message = reason || "";

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
  return { poolAddress, data, succeeded: false, message };
}

/** INTERNAL HELPER | organize trade amounts into expected Token A and Token B */
async function alignTradeAmounts(opts: SwapTxnOpts) {
  const { swap, pool } = opts;
  if (!pool) return [0, 0, false];

  const { poolAddress } = pool;
  if (!poolAddress) return [0, 0, false];

  const { tokenAId, tokenBId, amountA, amountB } = swap;
  const { tokenADecimals = 6, tokenBDecimals = 6 } = pool;
  if (!tokenAId || !tokenBId || !poolAddress) return [0, 0, false];

  // re-arrange tokens to match pool if token order is reversed:
  // - If user is swapping B-in-pool for A, amtA must be 0
  // - else for pool-A-to-B, amtB must be 0.
  const isAligned = parseAddress(tokenAId) === parseAddress(pool.tokenAId);
  const [decimalsA, decimalsB] = isAligned
    ? [tokenADecimals, tokenBDecimals]
    : [tokenBDecimals, tokenADecimals];
  const amtIn = parseCurrency(amountA, decimalsA);
  const out = parseCurrency(minimumReceived(amountB), decimalsB);
  return [amtIn, out, !isAligned];
}

/**
 * Calculate minimum expected amount out from a swap, given user's slippage preference.
 * If no slippage was provided to the SDK, it will default to a preference of `0.5`% */
function minimumReceived(expected: number) {
  return (Number(expected) * (100 - getSlippage())) / 100;
}
