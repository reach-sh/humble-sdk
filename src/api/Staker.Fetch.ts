import { fromMaybe, noOp } from "../utils/utils.reach";
import { errorResult, successResult } from "../utils";
import { BigNumber, ReachAccount, ReachToken } from "../reach-helpers/index";
import { TransactionResult, ReachTxnOpts, StakingRewards } from "../types";
import { stakingBackend } from "../build/backend";
import { fetchToken } from "../participants";

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

const NO_REWARDS: FarmView["remainingRewards"] = ["0", "0"];
const EMPTY_FV_OPTS: FarmView["opts"] = {
  duration: "0",
  rewardToken1: "0",
  rewardsPerBlock: NO_REWARDS,
  stakeToken: "0",
};
const EMPTY_FV: FarmView = {
  end: "0",
  opts: EMPTY_FV_OPTS,
  remainingRewards: NO_REWARDS,
  totalStaked: "0",
};

type FarmAndTokens = {
  farmView: FarmView;
  stakeToken: ReachToken | null;
  rewardToken: ReachToken | null;
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
): Promise<TransactionResult<FarmAndTokens>> {
  // Response data
  const data: FarmAndTokens = {
    stakeToken: null,
    rewardToken: null,
    farmView: EMPTY_FV,
  };

  const { poolAddress: farmId, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = farmId?.toString();
  if (!poolAddress) {
    const message = `Could not fetch farm tokens (invalid pool address)`;
    return errorResult(message, poolAddress, data, null);
  }

  const farmResult = await fetchStakingPool(acc, opts);
  const { contract, succeeded, data: farmView } = farmResult;

  // If fetch failed, just ... just get out of here
  if (!succeeded || !contract) {
    const message = `Fetch failed: ${farmResult.message}`;
    return errorResult(message, poolAddress, data, contract);
  }

  onProgress("Fetching farm tokens");
  const { opts: farmOpts } = farmView;
  const { stakeToken: stakeTokenId, rewardToken1: rewardTokenId } = farmOpts;
  const [stakeToken, rewardToken] = await Promise.all([
    fetchToken(acc, stakeTokenId),
    fetchToken(acc, rewardTokenId),
  ]);

  data.farmView = farmView;
  data.stakeToken = stakeToken;
  data.rewardToken = rewardToken;
  const msg = "Fetched farm and tokens";
  const result = successResult(msg, poolAddress, contract, data);
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
): Promise<TransactionResult<FarmView>> {
  const {
    contract,
    poolAddress: id,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const poolAddress = id?.toString();
  const ctc = contract || acc.contract(stakingBackend, poolAddress);

  try {
    onProgress("Fetching farm metadata");
    const data = fromMaybe(await ctc.views.Info());
    const succeeded = Boolean(data);
    const message = succeeded ? "Fetched farm" : "Farm was not found";
    const result = succeeded
      ? successResult(message, poolAddress, ctc, data)
      : errorResult(message, poolAddress, EMPTY_FV, ctc);

    onComplete(result);
    return result;
  } catch (error: any) {
    console.log("Fetch staking pool err", error);
    const message = "Farm was not fetched";
    return errorResult(message, poolAddress, EMPTY_FV, ctc);
  }
}
