import { noOp } from "../utils/utils.reach";
import { StakerAPI } from "../build/backend";
import { parseCurrency, ReachAccount } from "../reach-helpers/index";
import { ReachTxnOpts, StakeUpdate } from "../types";
import { errorResult, successResult } from "../utils";
import { formatStakeRewardsUpdate } from "../utils/utils.staker";
import { fetchFarmAndTokens } from "./Staker.Fetch";

/** Options for staking */
type StakerOpts = {
  poolAddress: string | number;
  amountToStake: string | number;
} & ReachTxnOpts;

/**
 * Stake an amount in a contract for a share in the reward
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.amountToStake Amount of `stakeToken` user wishes to stake. Plain
 * strings or numbers will be big-numberified: big numbers will cause an error.
 * @param opts.contract Staking farm contract (if available)
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns
 */
export async function stakeAmount(acc: ReachAccount, opts: StakerOpts) {
  const { amountToStake, onProgress = noOp, onComplete = noOp } = opts;
  const farmResult = await fetchFarmAndTokens(acc, opts);
  const { contract, succeeded, data: farmData } = farmResult;
  if (!succeeded || !farmData?.stakeToken || !contract) {
    const e = farmResult.message || "Staking token not found";
    const msg = `Staking failed: ${e}`;
    return errorResult(msg, opts.poolAddress, farmResult.data, contract);
  } else onProgress(`Staking ${farmData.stakeToken.symbol}`);

  const poolAddress = opts.poolAddress?.toString();
  const { decimals, symbol } = farmData.stakeToken;
  const stakerAPI = contract.apis.Staker as StakerAPI;

  try {
    const amt = parseCurrency(amountToStake);
    const resp: StakeUpdate = await stakerAPI.stake(amt);
    const message = `Staked ${amountToStake} ${symbol}`;
    const data = formatStakeRewardsUpdate(resp, decimals);
    const result = successResult(message, poolAddress, contract, data);

    onComplete(result);
    return result;
  } catch (error: any) {
    console.log('"Stake Amount" Error', { error });
    const message = `Staking failed: ${error?.toString()}`;
    const poolAddress = opts.poolAddress;
    const result = errorResult(message, poolAddress, error || null, contract);
    onComplete(result);
    return result;
  }
}
