import { fromMaybe, noOp } from "../utils/utils.reach";
import {
  stakingBackend,
  StakingContract,
  StakingContractViews,
} from "../build/backend";
import {
  BigNumber,
  createReachAPI,
  formatCurrency,
  parseCurrency,
  ReachAccount,
} from "../reach-helpers/index";
import { TransactionResult, ReachTxnOpts, StakeUpdate } from "../types";
import { errorResult, successResult } from "../utils";
import { fetchFarmAndTokens } from "./Staker.Fetch";

/**
 * Check user's staked amount in staking pool `farmId`
 * @param acc Reach account
 * @param opts Transaction options
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns Number or BigNumber of user's staking balance
 */
export const getStakingBalance = async (
  acc: ReachAccount,
  opts: ReachTxnOpts
): Promise<any> => {
  const { contract, poolAddress, onComplete = noOp, onProgress = noOp } = opts;
  const ctc = contract || acc.contract(stakingBackend, poolAddress);
  const view: StakingContractViews = ctc.views;
  const address = createReachAPI().formatAddress(acc.getAddress());

  onProgress("Fetching staking balance");
  const staked = fromMaybe(await view?.staked(address));
  onComplete(staked);
  return staked;
};

/** Options for checking rewards */
type GetRewardsOpts = { time?: string | number | BigNumber } & ReachTxnOpts;

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
 * @returns Number or BigNumber of rewards available to user at `time`
 */
export const getRewardsAvailableAt = async (
  acc: ReachAccount,
  opts: GetRewardsOpts
): Promise<TransactionResult<StakingRewards | null>> => {
  const { poolAddress: farm, contract } = opts;
  const poolAddress = farm?.toString();
  const { formatAddress, bigNumberify, getNetworkTime } = createReachAPI();
  const address = formatAddress(acc.getAddress());
  if (!address) {
    const data: StakingRewards = [bigNumberify(0), bigNumberify(0)];
    const message = "Invalid address or account supplied";
    return errorResult(message, poolAddress, data, null);
  }

  const time = opts.time || (await getNetworkTime());
  const ctc: StakingContract =
    contract || acc.contract(stakingBackend, poolAddress);
  const data = fromMaybe(
    await ctc.views.rewardsAvailableAt(address, time)
  ) as StakingRewards | null;

  // compute result
  const succeeded = Array.isArray(data);
  const message = succeeded ? "OK" : "Could not fetch rewards";
  return succeeded
    ? successResult(message, poolAddress, ctc, data)
    : errorResult(message, poolAddress, data, ctc);
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
export async function claimStakingRewards(
  acc: ReachAccount,
  opts: ReachTxnOpts
) {
  const {
    poolAddress: id,
    succeeded,
    contract,
    data: farmAndTokens,
    message,
  } = await fetchFarmAndTokens(acc, opts);
  const stop =
    !succeeded ||
    !farmAndTokens?.farmView ||
    !farmAndTokens?.stakeToken ||
    !contract;

  if (stop)
    return errorResult(
      message || "Farm or token(s) not found",
      id,
      null,
      contract
    );

  const { onProgress = noOp, onComplete = noOp } = opts;
  const { stakeToken } = farmAndTokens;
  const ctc = contract as StakingContract;
  const done = (r: any): TransactionResult<SDKStakeUpdate> => {
    onComplete(r);
    return r;
  };

  try {
    onProgress("Claiming rewards");
    const resp: StakeUpdate = await ctc.a.Staker.harvest();
    const data = formatStakeRewardsUpdate(resp, stakeToken?.decimals);
    return done(successResult("OK", id?.toString(), ctc, data));
  } catch (error: any) {
    console.log("Claim Staking Rewards Error", { e: error });
    const msg = "Rewards were not claimed";
    return done(errorResult(msg, id?.toString(), error, ctc));
  }
}

/** Options for unstaking from Farm */
type UnstakeOpts = { amount: number | string } & ReachTxnOpts;

/**
 * Remove (un-stake) an amount from a contract. Reduces rewards entitlement.
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
export async function unstakeAmount(acc: ReachAccount, opts: UnstakeOpts) {
  const {
    contract,
    poolAddress,
    amount,
    onProgress = noOp,
    onComplete = noOp,
  } = opts;
  if (!poolAddress) {
    return errorResult("Pool address is required", null, null, null);
  }

  onProgress("Withdrawing stake");
  const id = poolAddress?.toString();
  const ctc: StakingContract = contract || acc.contract(stakingBackend, id);
  const { isBigNumber } = createReachAPI();
  const amt = isBigNumber(amount) ? amount : parseCurrency(amount);

  try {
    const update = formatStakeRewardsUpdate(await ctc.a.Staker.withdraw(amt));
    const msg = `Withdrew ${isBigNumber(amount) ? "stake" : amount}`;
    const result = successResult(msg, id, ctc, update);

    onComplete(result);
    return result;
  } catch (error: any) {
    console.log("Unstake Amount", { e: error });
    const msg = "Could not unstake from Pool";
    return errorResult(msg, id, error, contract);
  }
}

/**
 * @internal Format response from staking in a farm
 * @param data Raw response data from API
 * @param data.newUserStaked Amount new user staked
 * @param data.newEveryoneStaked Total amount staked in contract
 * @param decimals
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
type SDKStakeUpdate = {
  /** Amount user staked */
  amountStaked: string;
  /** New total amount staked in contract */
  newTotalStaked: string;
};
