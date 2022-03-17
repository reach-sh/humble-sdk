import { createReachAPI, parseAddress, ReachAccount } from "../reach-helpers";
import { PoolDetails, ReachTxnOpts, TransactionResult } from "../types";
import { announcerBackend } from "../build/backend";
import { getPoolAnnouncer } from "../constants";
import { isNetworkToken } from "../utils";

/**
 * Publishing options
 */
type PublishOpts = ReachTxnOpts & PoolDetails;

/**
 * Publish a pool to an existing `Announcer` contract
 * @param acct User's `networkAccount` instance from reach stdlib
 * @param opts Additional options for publishing the new pool
 * @returns Object with transaction result details
 */
export async function publishNewPool(
  acct: ReachAccount,
  opts: PublishOpts
): Promise<TransactionResult> {
  const {
    poolAddress,
    tokenAId = "0",
    tokenBId,
    onProgress = () => null,
    onComplete = () => null,
  } = opts;
  let announcerAddress = getPoolAnnouncer();
  if (!announcerAddress) return { poolAddress, succeeded: false };
  announcerAddress = parseAddress(announcerAddress);

  const { canonicalize } = createReachAPI().T_Token;
  const tokenA = isNetworkToken(tokenAId) ? null : canonicalize(tokenAId);
  const tokenB = canonicalize(tokenBId);

  try {
    onProgress("Wrapping up (publishing pool)");
    const ctc = acct.contract(announcerBackend, announcerAddress);
    await ctc.a.Manager.getPoolInfo(poolAddress, tokenA, tokenB);

    const message = `Published pool address "${poolAddress}"`;
    const result = { poolAddress, succeeded: true, message };
    onComplete(result);
    return result;
  } catch (e) {
    return {
      poolAddress,
      succeeded: false,
      data: e,
      message: "Could not publish pool",
    };
  }
}
