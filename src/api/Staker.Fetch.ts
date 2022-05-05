import { fromMaybe, noOp } from "../utils/utils.reach";
import { errorResult, successResult } from "../utils";
import {
  BigNumber,
  ReachAccount,
  ReachToken,
  tokenMetadata,
} from "../reach-helpers/index";
import { TransactionResult, ReachTxnOpts, StakingRewards } from "../types";
import { stakingBackend } from "../build/backend";

export type DeployerOpts = {
  /** Number of blocks to run contract */
  duration: BigNumber;
  /** Non-network reward token */
  rewardToken1: BigNumber;
  /** Rewards emitted per block [`network`, `nonNetwork`] */
  rewardsPerBlock: StakingRewards;
  /** Token to stake in exchange for `rewardToken1`  */
  stakeToken: BigNumber;
};

/** Staking Contract details */
export type FarmView = {
  /** When farming pool ends */
  end: BigNumber;
  /** Initial values submitted by contract creator */
  opts: DeployerOpts;
  /** Amount of rewards left in contract [`network`, `nonNetwork`] */
  remainingRewards: StakingRewards;
  /** Total amount staked in contract */
  totalStaked: BigNumber;
};

/** @internal Flatten Token promise responses */
const flatten = (p: PromiseSettledResult<ReachToken>) => {
  return p.status === "fulfilled" ? p.value : null;
};

/**
 * Fetch `staking` and (non-network) `reward` tokens for a farm
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.contract Staking farm contract (if available)
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns \{ `stakingToken`: ReachToken, `rewardToken`: ReachToken }
 */
export async function fetchFarmAndTokens(
  acc: ReachAccount,
  opts: ReachTxnOpts
) {
  const { poolAddress: farmId, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = farmId?.toString();
  if (!poolAddress) {
    const message = `Could not fetch farm tokens (invalid pool address)`;
    return errorResult(message, poolAddress, null, null);
  }

  const farmResult = await fetchStakingPool(acc, opts);
  const { contract, succeeded, data: farmView } = farmResult;

  // If fetch failed, just ... just get out of here
  if (!succeeded || !farmView || !contract) {
    const message = `Staking failed: ${farmResult.message}`;
    return errorResult(message, poolAddress, null, contract);
  }

  onProgress("Fetching farm tokens");
  const { opts: farmOpts } = farmView;
  const { stakeToken: stakeTokenId, rewardToken1: rewardTokenId } = farmOpts;
  const tokens = await Promise.allSettled([
    tokenMetadata(acc, stakeTokenId),
    tokenMetadata(acc, rewardTokenId),
  ]);

  const [stakeToken, rewardToken] = tokens.map(flatten);
  const data = { stakeToken, rewardToken, farmView };
  const result = successResult("OK", poolAddress, contract, data);
  onComplete(result);
  return result;
}

/**
 * Get information from staking pool view (token ids, amount staked, etc)
 * @param acc Connected blockchain account
 * @param opts Transaction options
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns General information about staking pool (or `null` if not found)
 */
export async function fetchStakingPool(
  acc: ReachAccount,
  opts: ReachTxnOpts
): Promise<TransactionResult<FarmView | null>> {
  const {
    contract,
    poolAddress: id,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const poolAddress = id?.toString();
  const ctc = contract || acc.contract(stakingBackend, poolAddress);

  onProgress("Fetching farm metadata");
  const data = fromMaybe(await ctc.views.Info());
  const succeeded = Boolean(data);
  const message = succeeded ? "Fetched farm" : "Farm was not found";
  const result = succeeded
    ? successResult(message, poolAddress, ctc, data)
    : errorResult(message, poolAddress, null, ctc);

  onComplete(result);
  return result;
}
