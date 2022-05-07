import { noOp } from "../utils/utils.reach";
import { StakingContract } from "../build/backend";
import {
  createReachAPI,
  formatCurrency,
  parseCurrency,
  ReachAccount,
} from "../reach-helpers/index";
import { ReachTxnOpts } from "../types";
import { errorResult, successResult } from "../utils";
import {
  formatStakeRewardsUpdate,
  SDKStakeUpdate,
} from "../utils/utils.staker";
import { fetchFarmAndTokens } from "./Staker.Fetch";

/** Options for unstaking from Farm */
type UnstakeOpts = { amount: number | string } & ReachTxnOpts;

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
export async function unstakeTokensFromFarm(acc: ReachAccount, opts: UnstakeOpts) {
  const { isBigNumber } = createReachAPI();
  const data: SDKStakeUpdate = { amountStaked: "0", newTotalStaked: "0" };
  const { amount: stk, onProgress = noOp, onComplete = noOp } = opts;
  if (!opts.poolAddress) {
    return errorResult("Pool address is required", null, data, null);
  }

  const farmId = opts.poolAddress.toString();
  const farmAndTokens = await fetchFarmAndTokens(acc, opts);
  const { contract, data: farmData, succeeded, message } = farmAndTokens;
  if (!farmData?.stakeToken || !succeeded || !contract) {
    return errorResult(message as string, farmId, data, null);
  }

  onProgress("Withdrawing stake");
  const { decimals, symbol } = farmData.stakeToken;
  const id = opts.poolAddress?.toString();
  const withdrew = isBigNumber(stk) ? formatCurrency(stk, decimals) : stk;
  const amt = isBigNumber(stk) ? stk : parseCurrency(stk, decimals);

  try {
    const ctc: StakingContract = contract;
    const update = formatStakeRewardsUpdate(await ctc.a.Staker.withdraw(amt));
    data.amountStaked = update.amountStaked;
    data.newTotalStaked = update.newTotalStaked;

    const msg = `Withdrew ${withdrew} ${symbol}`;
    const result = successResult(msg, id, ctc, update);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = "Could not unstake from Pool";
    console.log(msg, { e: error });
    return errorResult(msg, id, data, contract);
  }
}
