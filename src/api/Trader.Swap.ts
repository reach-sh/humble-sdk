import { poolBackend, poolBackendN2NN } from "../build/backend";
import { Balances, SwapTxnOpts, TransactionResult } from "../types";
import {
  formatCurrency,
  parseAddress,
  parseCurrency,
  ReachAccount,
  ReachContract,
} from "../reach-helpers";
import { ASSURANCE_MSG, getSlippage } from "../constants";
import { isNetworkToken } from "../utils";
import { fetchToken } from "../participants/index";
import { noOp } from "../utils.reach";

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
  const { n2nn } = pool;
  const { tokenBId } = opts.swap;
  const [aligned, tokenB, optedInB] = await Promise.all([
    alignTradeAmounts(opts),
    fetchToken(acct, tokenBId),
    !isNetworkToken(tokenBId) && acct.tokenAccepted(tokenBId),
  ]);

  if (!optedInB) await acct.tokenAccept(tokenBId);

  const [aIn, eOut, swapAForB] = aligned;
  const backend = n2nn ? poolBackendN2NN : poolBackend;
  const ctc: ReachContract<typeof backend> =
    contract || acct.contract(backend, addr);
  const traderAPI = ctc.apis.Trader;

  try {
    const expectedOut = swap.amountB;
    onProgress(`Swapping for ${expectedOut} ${tokenB?.symbol}`);

    const amountIn = swap.amountA;
    const swapResult: Balances = swapAForB
      ? await traderAPI.swapAForB(aIn, eOut)
      : await traderAPI.swapBForA(aIn, eOut);
    const out = swapAForB ? swapResult.B : swapResult.A;
    const decs = swapAForB ? pool.tokenBDecimals : pool.tokenADecimals;
    const amountOut = formatCurrency(out, decs === undefined ? 6 : decs);
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
    console.log("Swap Failed", { e });
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

/**
 * INTERNAL HELPER | organize trade amounts into expected Token A and Token B
 * @returns [`amountIn`, `expectedOut`, `swapAForB` (true|false)]
 */
async function alignTradeAmounts(opts: SwapTxnOpts) {
  const { swap, pool } = opts;
  if (!pool) return [0, 0, false];

  const { poolAddress, tokenADecimals = 6, tokenBDecimals = 6 } = pool;
  if (!poolAddress) return [0, 0, false];

  const { tokenAId, tokenBId, amountA, amountB } = swap;
  if (!tokenAId || !tokenBId) return [0, 0, false];

  // re-arrange tokens to match pool if token order is reversed:
  // - If user is swapping B-in-pool for A, amtA must be 0
  // - else for pool-A-to-B, amtB must be 0.
  const swapAForB = tokenAId.toString() === pool.tokenAId.toString();
  const [decimalsA, decimalsB] = swapAForB
    ? [tokenADecimals, tokenBDecimals]
    : [tokenBDecimals, tokenADecimals];
  const amtIn = parseCurrency(amountA, decimalsA);
  const out = parseCurrency(minimumReceived(amountB), decimalsB);
  return [amtIn, out, swapAForB];
}

/**
 * Calculate minimum expected amount out from a swap, given user's slippage preference.
 * If no slippage was provided to the SDK, it will default to a preference of `0.5`% */
function minimumReceived(expected: number) {
  return (Number(expected) * (100 - getSlippage())) / 100;
}
