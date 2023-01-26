import { fromMaybe, noOp } from "../utils/utils.reach";
import {
  stakingBackend,
  StakingContract,
  StakingContractViews
} from "../build/backend";
import {
  BigNumber,
  createReachAPI,
  formatAddress,
  formatCurrency,
  ReachAccount
} from "../reach-helpers";
import {
  TransactionResult,
  StakingRewards,
  RewardsPair,
  PoolFetchOpts
} from "../types";
import { errorResult, successResult } from "../utils";
import { fetchFarmTokens } from "./Staker.Fetch";
import { formatRewardsPair } from "../utils/utils.staker";

export {
  fetchFarmAndTokens,
  fetchStakingPool,
  FarmTokens,
  FarmAndTokens,
  SDKFarmView,
  FarmView
} from "./Staker.Fetch";
export { stakeTokensToFarm } from "./Staker.Stake";
export { unstakeTokensFromFarm } from "./Staker.Unstake";
export { harvestStakingRewards } from "./Staker.Harvest";

type CheckStakeBalanceOpts = PoolFetchOpts & { stakeTokenDecimals?: number };

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
  opts: CheckStakeBalanceOpts
) {
  // Response data
  const data = { balance: "0" };
  const { onComplete = noOp, onProgress = noOp } = opts;
  const [valid, why] = protectArgs(acc, opts);
  if (!valid) return errorResult(why, opts.poolAddress, data);

  onProgress("Fetching staking balance");
  const ctc = (opts.contract ||
    acc.contract(stakingBackend, opts.poolAddress)) as StakingContract;
  const view: StakingContractViews = ctc.views;
  const rawStaked = await view?.staked(formatAddress(acc));
  const poolAddress = opts.poolAddress.toString();

  let decimals: number;
  if (!opts.stakeTokenDecimals || isNaN(Number(opts.stakeTokenDecimals))) {
    const reach = createReachAPI();
    const info = fromMaybe(await view.Info());
    const { decimals: d } = await acc.tokenMetadata(info?.opts.stakeToken);
    if (d) decimals = reach.bigNumberToNumber(d);
  } else decimals = opts.stakeTokenDecimals;

  data.balance = fromMaybe(rawStaked, (v: any) => formatCurrency(v, decimals));
  const result = successResult("OK", poolAddress, ctc, data);
  onComplete(result);
  return result;
}

/** Options for checking rewards */
export type GetRewardsOpts = {
  time?: string | number | BigNumber;
  rewardTokenDecimals?: number;
} & PoolFetchOpts;

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
  if (!valid || !opts.poolAddress)
    return errorResult(why, opts.poolAddress, data);

  const { contract: ctc, onProgress = noOp, onComplete = noOp } = opts;
  const id = opts.poolAddress?.toString();
  const contract = ctc || acc.contract(stakingBackend, id);

  onProgress("Checking rewards");
  const rewardsAtTime = fromMaybe<RewardsPair>(
    await (opts.time
      ? contract.views.rewardsAvailableAt(formatAddress(acc), opts.time)
      : contract.views.rewardsAvailable(formatAddress(acc)))
  );

  // error result
  if (!Array.isArray(rewardsAtTime)) {
    return errorResult("Could not fetch rewards", id, data, ctc);
  }

  // Success result
  let rewardDecimals = opts.rewardTokenDecimals;
  if (isNaN(Number(opts.rewardTokenDecimals))) {
    const { rewardToken } = await fetchFarmTokens(acc, {
      contract,
      poolAddress: id
    });
    rewardDecimals = rewardToken?.decimals;
  }

  const formatted = formatRewardsPair(rewardsAtTime, rewardDecimals);
  const result = successResult("OK", id, ctc, formatted);
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
