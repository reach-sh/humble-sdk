import { fromMaybe, noOp } from "../utils/utils.reach";
import { errorResult, successResult } from "../utils";
import {
  BigNumber,
  createReachAPI,
  formatCurrency,
  ReachAccount,
  ReachContract,
  ReachToken,
} from "../reach-helpers/index";
import {
  TransactionResult,
  StakingRewards,
  PoolFetchOpts,
  ReachTxnOpts,
  Address,
} from "../types";
import { stakingBackend, StakingContract } from "../build/backend";
import { fetchToken } from "../participants";
import { formatRewardsPair } from "../utils/utils.staker";
import CHAIN_CONSTANTS from "../json";
import { checkStakingBalance } from "./Staker.API";

export type DeployerOpts = {
  /** Non-network reward token */
  rewardToken1: BigNumber;
  /** Rewards emitted per block [`network`, `nonNetwork`] */
  rewardsPerBlock: StakingRewards;
  /** Token to stake in exchange for `rewardToken1`  */
  stakeToken: BigNumber;
  /** Block at which the farm will start distributing rewards */
  start: number;
  /** Block at which the farm will stop distributing rewards */
  end: number;
  /** The account that will deposit ALGO into the farm */
  Rewarder0?: Address;
};

/** Staking Pool fetch opts */
export type FetchStakingPoolOpts = PoolFetchOpts & {
  formatResult?: boolean;
};

/** Staking Contract details */
export type FarmView = {
  /** When farming pool ends */
  end?: BigNumber;
  /** Initial values submitted by contract creator */
  opts: DeployerOpts;
  /** Amount of rewards left in contract [`network`, `nonNetwork`] */
  remainingRewards: StakingRewards;
  /** Total amount staked in contract */
  totalStaked: BigNumber;
};

/** @internal */
const NO_REWARDS: FarmView["remainingRewards"] = ["0", "0"];
/** @internal */
const EMPTY_FV_OPTS: FarmView["opts"] = {
  rewardToken1: "0",
  rewardsPerBlock: NO_REWARDS,
  stakeToken: "0",
  start: 0,
  end: 0
};
/** @internal */
const EMPTY_FV: SDKFarmView = {
  poolAddress: "",
  end: "0",
  opts: EMPTY_FV_OPTS,
  remainingRewards: NO_REWARDS,
  totalStaked: "0",
  totalRewards: { network: "0", rewardToken: "0" },
};

export type FarmAndTokens = {
  farmView: SDKFarmView;
  stakeToken: ReachToken | null;
  rewardToken: ReachToken | null;
  userStaked: string;
};

/**
 * Fetch `staking` and (non-network) `reward` tokens for a farm
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.contract Staking farm contract (if available)
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns \{ `stakingToken`: ReachToken, `rewardToken`: ReachToken }
 */
export async function fetchFarmAndTokens(
  acc: ReachAccount,
  opts: FetchStakingPoolOpts
): Promise<TransactionResult<FarmAndTokens>> {
  // Response data
  const data: FarmAndTokens = {
    stakeToken: null,
    rewardToken: null,
    farmView: EMPTY_FV,
    userStaked: "0",
  };

  const { poolAddress: farmId, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = farmId?.toString();
  if (!poolAddress) {
    const message = `Could not fetch farm tokens (invalid pool address)`;
    return errorResult(message, poolAddress, data, null);
  }

  const ffOpts = { ...opts, poolAddress, formatResult: false };
  const farmResult = await fetchStakingPool(acc, ffOpts);
  const { contract, succeeded, data: farmView } = farmResult;

  // If fetch failed, just ... just get out of here
  if (!succeeded || !contract) {
    const message = `Fetch failed: ${farmResult.message}`;
    return errorResult(message, poolAddress, data, contract);
  }

  onProgress("Fetching farm tokens");
  const [{ stakeToken, rewardToken }, now] = await Promise.all([
    fetchFarmTokens(acc, { contract }),
    createReachAPI().getNetworkTime(),
  ]);

  const stakedResult = await checkStakingBalance(acc, {
    contract,
    poolAddress,
    onProgress,
    stakeTokenDecimals: stakeToken?.decimals,
  });

  data.farmView = opts.formatResult
    ? formatFarmView(farmView, { stakeToken, rewardToken }, poolAddress, now)
    : rawSDKFarmView(farmView, poolAddress);
  data.stakeToken = stakeToken;
  data.rewardToken = rewardToken;
  data.userStaked = stakedResult.data.balance;
  const msg = "Fetched farm and tokens";
  const result = successResult(msg, poolAddress, contract, data);
  onComplete(result);
  return result;
}

/**
 * Get information from staking pool view (token ids, amount staked, etc)
 * @param acc Connected blockchain account
 * @param opts Transaction options
 * @param opts.poolAddress Staking farm contract ID
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns General information about staking pool (or `null` if not found)
 */
export async function fetchStakingPool(
  acc: ReachAccount,
  opts: FetchStakingPoolOpts
): Promise<TransactionResult<FarmView>> {
  const {
    contract,
    poolAddress: id,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const poolAddress = id?.toString();
  let ctc = contract as ReachContract<typeof stakingBackend>;
  if (!ctc) ctc = acc.contract(stakingBackend, poolAddress);

  try {
    onProgress("Fetching farm metadata");
    const data = fromMaybe(await ctc.views.Info());
    const result = data
      ? successResult("Fetched farm", poolAddress, ctc, data)
      : errorResult("Farm was not found", poolAddress, EMPTY_FV, ctc);

    if (result.succeeded && opts.formatResult) {
      onProgress("Fetching Token metadata");
      const [tokens, now] = await Promise.all([
        fetchFarmTokens(acc, { contract: ctc, poolAddress }),
        createReachAPI().getNetworkTime(),
      ]);
      result.data = formatFarmView(result.data, tokens, poolAddress, now);
    } else result.data = rawSDKFarmView(result.data, poolAddress);

    onComplete(result);
    return result;
  } catch (error: any) {
    console.log("Fetch staking pool err", error);
    const msg = "Farm was not fetched";
    const result = errorResult(msg, poolAddress, EMPTY_FV, ctc);
    onComplete(result);
    return result;
  }
}

type FetchFarmTokenOpts = ReachTxnOpts & {
  contract?: StakingContract | null;
  tokenType?: "stake" | "reward";
};

/** Fetch farm's stake or reward token */
export async function fetchFarmToken(
  acc: ReachAccount,
  opts: FetchFarmTokenOpts
) {
  const { tokenType = "stake", contract, poolAddress } = opts;
  if (!contract && !poolAddress)
    throw new Error(
      "Contract and pool address are required to fetch farm token"
    );

  const ctc = contract || acc.contract(stakingBackend, poolAddress);
  const info = fromMaybe(await ctc.views.Info()) as FarmView;
  if (!info) return null;

  const { stakeToken, rewardToken1 } = info.opts;
  const id = tokenType === "stake" ? stakeToken : rewardToken1;
  return fetchToken(acc, id);
}

/** Fetch farm's stake or reward token */
export async function fetchFarmTokens(
  acc: ReachAccount,
  opts: ReachTxnOpts & { contract?: StakingContract | null }
) {
  const { contract, poolAddress } = opts;
  const ctc = contract || acc.contract(stakingBackend, poolAddress);
  const [stakeToken, rewardToken] = await Promise.all([
    fetchFarmToken(acc, { tokenType: "stake", contract: ctc }),
    fetchFarmToken(acc, { tokenType: "reward", contract: ctc }),
  ]);

  return { stakeToken, rewardToken };
}

export type SDKFarmView = FarmView & {
  /** Farm contract ID */
  poolAddress: string;
  /** Total rewards (contract lifetime) */
  totalRewards: { network: string; rewardToken: string };
};

/** Pair of tokens from farm data */
export type FarmTokens = {
  rewardToken: ReachToken | null;
  stakeToken: ReachToken | null;
};

/** @internal Generate default response data shape */
function rawSDKFarmView(d: FarmView, poolAddress: string): SDKFarmView {
  const reach = createReachAPI();
  const { end, start, rewardsPerBlock } = d.opts;
  const duration = end - start

  return {
    poolAddress,
    ...d,
    totalRewards: {
      network: reach.mul(rewardsPerBlock[0], duration),
      rewardToken: reach.mul(rewardsPerBlock[1], duration),
    },
  };
}

/** @internal Format BigNumber and byte values for UI */
function formatFarmView(
  d: FarmView,
  tokens: FarmTokens,
  poolAddress: string,
  currentBlock: number,
): SDKFarmView {
  const { rewardToken, stakeToken } = tokens;
  if ([rewardToken, stakeToken].includes(null)) return d as SDKFarmView;

  const reach = createReachAPI();
  const { avgBlockDuration } = CHAIN_CONSTANTS[reach.connector];
  const { id: rId, decimals: rewardDecs } = rewardToken as ReachToken;
  const { rewardsPerBlock, start, end, Rewarder0 } = d.opts;
  const duration = end - start;
  const blocksDiff = end - currentBlock;
  

  return {
    poolAddress,
    end: inDays(blocksDiff * avgBlockDuration),
    totalStaked: formatCurrency(d.totalStaked, stakeToken?.decimals),
    opts: {
      rewardToken1: rId,
      stakeToken: stakeToken?.id,
      rewardsPerBlock: formatRewardsPair(rewardsPerBlock, rewardDecs),
      start,
      end,
      Rewarder0
    },
    totalRewards: {
      network: formatCurrency(reach.mul(rewardsPerBlock[0], duration)),
      rewardToken: formatCurrency(
        reach.mul(rewardsPerBlock[1], duration),
        rewardDecs
      ),
    },
    remainingRewards: formatRewardsPair(d.remainingRewards, rewardDecs),
  };
}

/** @internal Compute end time for farming pool */
function inDays(val: number) {
  const endsIn = Math.ceil(val / 1000 / (60 * 60 * 24));
  return endsIn > 0 ? `${endsIn} day(s)` : "0";
}
