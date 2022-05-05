import { formatCurrency } from "../reach-helpers/index";
import { StakeUpdate } from "../types";

/**
 * @internal Format response from staking in a farm
 * @param data Raw response data from API
 * @param data.newUserStaked Amount new user staked
 * @param data.newEveryoneStaked Total amount staked in contract
 * @param decimals Token decimals for formatting. Defaults to `6` if undefined
 * @returns
 */
export function formatStakeRewardsUpdate(
  data: StakeUpdate,
  decimals?: number
): SDKStakeUpdate {
  const { newUserStaked: newStake, newEveryoneStaked: newTotal } = data;
  return {
    amountStaked: formatCurrency(newStake, decimals),
    newTotalStaked: formatCurrency(newTotal, decimals),
  };
}

/** Formatted response from contract API */
export type SDKStakeUpdate = {
  /** Amount user staked */
  amountStaked: string;
  /** New total amount staked in contract */
  newTotalStaked: string;
};
