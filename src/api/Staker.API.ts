import { fromMaybe, noOp } from "../utils/utils.reach";
import { StakingContract, StakingContractViews } from "../build/backend";
import {
  BigNumber,
  formatAddress,
  formatCurrency,
  ReachAccount,
} from "../reach-helpers/index";
import { TransactionResult, ReachTxnOpts, StakingRewards } from "../types";
import { errorResult, successResult } from "../utils";
import { fetchFarmAndTokens } from "./Staker.Fetch";

export {
  fetchFarmAndTokens,
  fetchStakingPool,
  FarmTokens,
  FarmAndTokens,
  SDKFarmView,
  FarmView,
} from "./Staker.Fetch";
export { stakeTokensToFarm } from "./Staker.Stake";
export { unstakeTokensFromFarm } from "./Staker.Unstake";
export { harvestStakingRewards } from "./Staker.Harvest";

/**
 * Check balance of user's stake in pool `poolAddress`
 * @param acc Reach account
 * @param opts Transaction options
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns Transaction result with user's staking `balance`
 */
export async function checkStakingBalance(
  acc: ReachAccount,
  opts: ReachTxnOpts
) {
  // Response data
  const data = { balance: "0" };
  const { onComplete = noOp, onProgress = noOp } = opts;
  const [valid, why] = protectArgs(acc, opts);
  if (!valid) return errorResult(why, opts.poolAddress, data);

  onProgress("Fetching Farm metadata");
  const id = opts.poolAddress?.toString();
  const farm = await fetchFarmAndTokens(acc, opts);
  if (!farm.succeeded) {
    const msg = farm.message;
    return errorResult(msg, id, data, farm.contract);
  }

  onProgress("Fetching staking balance");
  const ctc = farm.contract as StakingContract;
  const view: StakingContractViews = ctc.views;
  const rawStaked = await view?.staked(formatAddress(acc));
  const formatStake = (v: any) => {
    const { stakeToken } = farm.data;
    return formatCurrency(v, stakeToken?.decimals);
  };

  data.balance = fromMaybe(rawStaked, formatStake);
  const result = successResult("OK", id, ctc, data);
  onComplete(result);
  return result;
}

/** Options for checking rewards */
export type GetRewardsOpts = {
  time?: string | number | BigNumber;
} & ReachTxnOpts;

/**
 * Check rewards available to user at blocktime `time`. If not supplied,
 * will check for latest block time. If supplied, `time` must represent a
 * (block-)time in the past.
 * @param acc Reach account
 * @param opts Transaction options
 * @param opts.time Block time for checking rewards
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns Tuple of `network` and `rewardToken` rewards [`n`, `nn`]
 */
export async function checkRewardsAvailableAt(
  acc: ReachAccount,
  opts: GetRewardsOpts
): Promise<TransactionResult<StakingRewards>> {
  // Response data
  const data: StakingRewards = ["0", "0"];
  const [valid, why] = protectArgs(acc, opts);
  if (!valid) return errorResult(why, opts.poolAddress, data);

  const { onProgress = noOp, onComplete = noOp } = opts;
  const id = opts.poolAddress?.toString();
  const farmAndTokens = await fetchFarmAndTokens(acc, opts);
  if (!farmAndTokens.succeeded) {
    const message = "Farm not found";
    return errorResult(message, id, data, null);
  }

  onProgress("Checking rewards");
  const ctc = farmAndTokens.contract as StakingContract;
  const rewardsAtTime = fromMaybe(
    await (opts.time
      ? ctc.views.rewardsAvailableAt(formatAddress(acc), opts.time)
      : ctc.views.rewardsAvailable(formatAddress(acc)))
  );

  // error result
  if (!Array.isArray(rewardsAtTime)) {
    const message = "Could not fetch rewards";
    return errorResult(message, id, data, ctc);
  }

  // Success result
  const { rewardToken } = farmAndTokens.data;
  data[0] = formatCurrency(rewardsAtTime[0]);
  data[1] = formatCurrency(rewardsAtTime[1], rewardToken?.decimals);
  const result = successResult("OK", id, ctc, data);
  onComplete(result);
  return result;
}

/** @internal */
function protectArgs(
  acc: ReachAccount,
  opts?: GetRewardsOpts
): [boolean, string] {
  if (!acc) return [false, "Account is required"];
  if (!opts) return [false, "Options are required"];
  if (!opts.poolAddress) return [false, "Pool address is required"];
  return [true, ""];
}