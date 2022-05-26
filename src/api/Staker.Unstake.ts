import { noOp } from "../utils/utils.reach";
import { stakingBackend, StakingContract } from "../build/backend";
import {
  createReachAPI,
  formatCurrency,
  parseCurrency,
  ReachAccount,
} from "../reach-helpers/index";
import { PoolFetchOpts } from "../types";
import { errorResult, successResult } from "../utils";
import {
  formatStakeRewardsUpdate,
  SDKStakeUpdate,
} from "../utils/utils.staker";
import { fetchFarmToken } from "./Staker.Fetch";

/** Options for unstaking from Farm */
type UnstakeOpts = { amount: number | string } & PoolFetchOpts;

/**
 * Remove (un-stake) an amount from a contract. Reduces rewards entitlement.
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.amount Amount of `stakeToken` user wishes to withdraw.
 * @param opts.poolAddress Staking farm contract ID (required)
 * @param opts.contract Staking farm reach `contract` (optional)
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns
 */
export async function unstakeTokensFromFarm(
  acc: ReachAccount,
  opts: UnstakeOpts
) {
  const { isBigNumber } = createReachAPI();
  const data: SDKStakeUpdate = { amountStaked: "0", newTotalStaked: "0" };
  const { amount: stk, onProgress = noOp, onComplete = noOp } = opts;
  if (!opts.poolAddress) {
    return errorResult("Pool address is required", null, data, null);
  }

  const farmId = opts.poolAddress.toString();
  const ctc: StakingContract =
    opts.contract || acc.contract(stakingBackend, farmId);

  onProgress("Withdrawing stake");

  const stakeToken = await fetchFarmToken(acc, {
    contract: ctc,
    poolAddress: farmId,
    tokenType: "stake",
  });

  if (!stakeToken) {
    return errorResult("Stake token not found", farmId, data, ctc);
  }

  const { decimals, symbol } = stakeToken;
  const id = opts.poolAddress?.toString();

  try {
    const amt = isBigNumber(stk) ? stk : parseCurrency(stk, decimals);
    const update = await ctc.a.Staker.withdraw(amt);
    const fmt = formatStakeRewardsUpdate(update, decimals);
    const withdrew = isBigNumber(stk) ? formatCurrency(stk, decimals) : stk;
    const msg = `Withdrew ${withdrew} ${symbol}`;
    const result = successResult(msg, id, ctc, fmt);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = `Unstaking failed: ${error?.toString()}`;
    console.log(msg, { e: error });
    const result = errorResult(msg, id, data, ctc);
    onComplete(result)
    return result
  }
}
