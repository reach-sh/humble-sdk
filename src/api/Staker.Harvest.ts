import { noOp } from "../utils/utils.reach";
import { StakingContract } from "../build/backend";
import { formatCurrency, ReachAccount } from "../reach-helpers/index";
import {
  ReachTxnOpts,
  StakingRewardsUpdate,
  SDKStakingRewards,
} from "../types";
import { errorResult, successResult } from "../utils";
import { fetchFarmAndTokens } from "./Staker.Fetch";

/** Formatted Contract response-object */
type SDKRewardsUpdate = {
  /** Network and non-network amounts that user received  */
  userReceived: SDKStakingRewards;
  /** Network and non-network amounts left in contract */
  totalRemaining: SDKStakingRewards;
};

/**
 * Claim all rewards available to user,
 * @param acc Reach account
 * @param opts Transaction options
 * @param opts.time Block time for checking rewards
 * @param opts.contract Staking farm contract (if available)
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns Number or BigNumber of rewards available to user at `time`
 */
export async function harvestStakingRewards(
  acc: ReachAccount,
  opts: ReachTxnOpts
) {
  // Response data
  const data: SDKRewardsUpdate = {
    userReceived: ["0", "0"],
    totalRemaining: ["0", "0"],
  };

  const fandTResult = await fetchFarmAndTokens(acc, opts);
  const { succeeded, contract, message, data: ftData } = fandTResult;
  const missingData = !ftData?.farmView || !ftData?.rewardToken;
  const id = opts.poolAddress?.toString();
  if (!succeeded || missingData || !contract)
    return errorResult(message, id, data, contract);

  const { onProgress = noOp, onComplete = noOp } = opts;
  const { rewardToken } = ftData;
  const ctc = contract as StakingContract;

  try {
    onProgress("Claiming rewards");
    const resp: StakingRewardsUpdate = await ctc.a.Staker.harvest();
    const fmt = formatStakeHarvestUpdate(resp, rewardToken?.decimals);

    data.totalRemaining = fmt.totalRemaining;
    data.userReceived = fmt.userReceived;
    const result = successResult("OK", id?.toString(), ctc, data);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = "Rewards were not claimed";
    console.log(msg, { e: error });
    const result = errorResult(msg, id?.toString(), data, ctc);
    onComplete(result);
    return result;
  }
}

/** @internal Format API's 'harvest' response */
function formatStakeHarvestUpdate(
  data: StakingRewardsUpdate,
  rewardTokenDecs?: number
): SDKRewardsUpdate {
  return {
    userReceived: [
      formatCurrency(data.userReceived[0]),
      formatCurrency(data.userReceived[1], rewardTokenDecs),
    ],
    totalRemaining: [
      formatCurrency(data.totalRemaining[0]),
      formatCurrency(data.totalRemaining[1], rewardTokenDecs),
    ],
  };
}
