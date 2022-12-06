import { noOp } from "../utils/utils.reach";
import { stakingBackend, StakingContract } from "../build/backend";
import {
  createReachAPI,
  formatCurrency,
  parseCurrency,
  ReachAccount
} from "../reach-helpers/index";
import { PoolFetchOpts } from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import {
  formatStakeRewardsUpdate,
  SDKStakeUpdate
} from "../utils/utils.staker";
import { fetchFarmTokens } from "./Staker.Fetch";
import { TXN_SIGN } from "../constants";

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
  const { isBigNumber, setSigningMonitor } = createReachAPI();
  const data: SDKStakeUpdate = { amountStaked: "0", newTotalStaked: "0" };
  const { amount: stk, onProgress = noOp, onComplete = noOp } = opts;
  if (!opts.poolAddress) {
    return errorResult("Pool address is required", null, data, null);
  }

  onProgress("Fetching stake token");
  const id = opts.poolAddress?.toString();
  const contract: StakingContract =
    opts.contract || acc.contract(stakingBackend, id);
  const { stakeToken } = await fetchFarmTokens(acc, {
    contract,
    poolAddress: id
  });

  if (!stakeToken) {
    return errorResult("Stake token not found", id, data, contract);
  }

  onProgress("Withdrawing stake");

  try {
    setSigningMonitor(() => onProgress(TXN_SIGN));
    const { decimals, symbol } = stakeToken;
    const amt = isBigNumber(stk) ? stk : parseCurrency(stk, decimals);
    const update = await contract.a.Staker.withdrawAndHarvest(amt);
    const withdrew = isBigNumber(stk) ? formatCurrency(stk, decimals) : stk;
    const msg = `Withdrew ${withdrew} ${symbol}`;
    onProgress(msg);

    const fmt = formatStakeRewardsUpdate(update[0], decimals);
    const result = successResult(msg, id, contract, fmt);

    setSigningMonitor(noOp);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError(`Unstaking failed.`, error);
    const result = errorResult(msg, id, data, contract);
    console.log(msg, { e: error });

    setSigningMonitor(noOp);
    onComplete(result);
    return result;
  }
}
