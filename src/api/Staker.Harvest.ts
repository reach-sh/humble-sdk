import { noOp } from "../utils/utils.reach";
import { stakingBackend, StakingContract } from "../build/backend";
import { formatCurrency, ReachAccount } from "../reach-helpers/index";
import {
  PoolFetchOpts,
  StakingRewardsUpdate,
  SDKStakingRewards
} from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { fetchFarmTokens } from "./Staker.Fetch";

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
  opts: PoolFetchOpts & { rewardTokenDecimals?: number }
) {
  // Response data
  const data: SDKRewardsUpdate = {
    userReceived: ["0", "0"],
    totalRemaining: ["0", "0"]
  };

  const { onProgress = noOp, onComplete = noOp } = opts;
  const id = opts.poolAddress.toString();
  const contract: StakingContract =
    opts.contract || acc.contract(stakingBackend, id);
  let rDecimals = opts.rewardTokenDecimals;
  if (isNaN(Number(rDecimals))) {
    onProgress("Fetching reward token metadata");
    const { rewardToken } = await fetchFarmTokens(acc, {
      contract,
      poolAddress: id
    });
    rDecimals = rewardToken?.decimals;
  }

  try {
    onProgress("Claiming rewards");
    const resp: StakingRewardsUpdate = await contract.a.Staker.harvest();
    const fmt = formatStakeHarvestUpdate(resp, rDecimals);
    data.totalRemaining = fmt.totalRemaining;
    data.userReceived = fmt.userReceived;
    const result = successResult("OK", id, contract, data);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError(`Claiming failed.`, error);
    console.log(msg, { e: error });
    const result = errorResult(msg, id, data, contract);
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
      formatCurrency(data.userReceived[1], rewardTokenDecs)
    ],
    totalRemaining: [
      formatCurrency(data.totalRemaining[0]),
      formatCurrency(data.totalRemaining[1], rewardTokenDecs)
    ]
  };
}
