import { noOp } from "../utils/utils.reach";
import { StakerAPI, stakingBackend } from "../build/backend";
import {
  createReachAPI,
  parseCurrency,
  ReachAccount
} from "../reach-helpers/index";
import { PoolFetchOpts, StakeUpdate } from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { formatStakeRewardsUpdate } from "../utils/utils.staker";
import { fetchFarmToken } from "./Staker.Fetch";
import { TXN_SIGN } from "../constants";

/** Options for staking */
type StakerOpts = { amountToStake: string | number } & PoolFetchOpts;

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
export async function stakeTokensToFarm(acc: ReachAccount, opts: StakerOpts) {
  // Response data
  const data = { amountStaked: "0", newTotalStaked: "0" };
  const { amountToStake, onProgress = noOp, onComplete = noOp } = opts;

  if (!opts.contract && !opts.poolAddress)
    throw new Error("Pool address or attached contract is required");

  const contract =
    opts.contract || acc.contract(stakingBackend, opts.poolAddress);
  const stakeToken = await fetchFarmToken(acc, {
    poolAddress: opts.poolAddress,
    contract: contract,
    tokenType: "stake"
  });

  if (!stakeToken) {
    const e = "Staking token not found";
    const msg = `Staking failed: ${e}`;
    return errorResult(msg, opts.poolAddress, data, contract);
  } else onProgress(`Staking ${stakeToken.symbol}`);

  const poolAddress = opts.poolAddress?.toString();
  const { decimals, symbol } = stakeToken;
  const stakerAPI = contract.apis.Staker as StakerAPI;

  try {
    createReachAPI().setSigningMonitor(() => onProgress(TXN_SIGN));
    const amt = parseCurrency(amountToStake, decimals);
    const resp: StakeUpdate = await stakerAPI.stake(amt);
    const message = `Staked ${amountToStake} ${symbol}`;
    const fmt = formatStakeRewardsUpdate(resp, decimals);

    data.amountStaked = fmt.amountStaked;
    data.newTotalStaked = fmt.newTotalStaked;
    const result = successResult(message, poolAddress, contract, data);
    createReachAPI().setSigningMonitor(noOp);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError(`Staking failed.`, error);
    console.log(msg, { error });
    const result = errorResult(msg, poolAddress, data, contract);
    onComplete(result);
    return result;
  }
}
