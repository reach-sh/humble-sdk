import { fromMaybe, noOp } from "../utils/utils.reach";
import {
  stakingBackend,
  StakingContract,
  StakingContractViews,
} from "../build/backend";
import {
  BigNumber,
  createReachAPI,
  formatAddress,
  formatCurrency,
  ReachAccount,
} from "../reach-helpers";
import {
  TransactionResult,
  StakingRewards,
  RewardsPair,
  PoolFetchOpts,
} from "../types";
import { errorResult, successResult } from "../utils";
import { fetchFarmToken } from "./Staker.Fetch";
import { formatRewardsPair } from "../utils/utils.staker";

export {
  fetchFarmAndTokens,
  fetchStakingPool,
  formatFarmView,
  FarmTokens,
  FarmAndTokens,
  SDKFarmView,
  FarmView,
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

  const { contract, onProgress = noOp, onComplete = noOp } = opts;
  const id = opts.poolAddress?.toString();
  const ctc = (contract || acc.contract(stakingBackend, id)) as StakingContract;

  onProgress("Checking rewards");
  // const ctc = farmAndTokens.contract as StakingContract;
  const rewardsAtTime = fromMaybe(
    await (opts.time
      ? ctc.views.rewardsAvailableAt(formatAddress(acc), opts.time)
      : ctc.views.rewardsAvailable(formatAddress(acc)))
  ) as RewardsPair;

  // error result
  if (!Array.isArray(rewardsAtTime)) {
    const message = "Could not fetch rewards";
    return errorResult(message, id, data, ctc);
  }

  // Success result
  let rTokenDecimals = opts.rewardTokenDecimals;
  if (isNaN(Number(opts.rewardTokenDecimals))) {
    const tokenType = "reward";
    const rToken = await fetchFarmToken(acc, { contract: ctc, tokenType });
    rTokenDecimals = rToken?.decimals;
  }

  const fRewards = formatRewardsPair(rewardsAtTime, rTokenDecimals);
  const result = successResult("OK", id, ctc, fRewards);
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
