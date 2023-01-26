import { fromMaybe, noOp } from "../utils/utils.reach";
import { errorResult, successResult } from "../utils";
import {
  BigNumber,
  createReachAPI,
  formatCurrency,
  parseAddress,
  ReachAccount,
  ReachContract,
  ReachToken
} from "../reach-helpers/index";
import {
  TransactionResult,
  PoolFetchOpts,
  ReachTxnOpts,
  Address,
  SDKStakingRewards
} from "../types";
import { stakingBackend, StakingContract } from "../build/backend";
import { fetchToken } from "../contracts/index";
import { formatRewardsPair } from "../utils/utils.staker";
import CHAIN_CONSTANTS from "../json";
import { checkStakingBalance } from "./Staker.API";
import { getBlockchain } from "../constants";

export type DeployerOptsUnformatted = {
  /** Non-network reward token */
  rewardToken1: BigNumber;
  /** Total Rewards for farm [`network`, `nonNetwork`] */
  rewards: [BigNumber, BigNumber];
  /** Token to stake in exchange for `rewardToken1`  */
  stakeToken: BigNumber;
  /** Block at which the farm will start distributing rewards */
  start: BigNumber;
  /** Block at which the farm will stop distributing rewards */
  end: BigNumber;
  /** The account that will deposit ALGO into the farm */
  Rewarder0?: Address;
};
export type DeployerOptsFormatted = {
  /** Non-network reward token */
  rewardToken1: string;
  /** Total Rewards for farm [`network`, `nonNetwork`] */
  rewardsPerBlock?: SDKStakingRewards;
  /** Token to stake in exchange for `rewardToken1`  */
  stakeToken: string;
  /** Block at which the farm will start distributing rewards */
  start: number;
  /** Block at which the farm will stop distributing rewards */
  end: number;
} & Pick<DeployerOptsUnformatted, "Rewarder0">;

/** Staking Pool fetch opts */
export type FetchStakingPoolOpts = PoolFetchOpts & {
  formatResult?: boolean;
};
/** Raw contract FarmView */
export type FarmView = {
  REWARDS_PREC: BigNumber; // used in contract for calculations
  /** Last [ network, non-network ] rewards paid per user */
  lastRewardsPerShare_: [BigNumber, BigNumber];
  /** Farm information */
  opts: DeployerOptsUnformatted;
  /** Remaining [ network, non-network ] rewards */
  remainingRewards: [BigNumber, BigNumber];
  /** total staked in farm */
  totalStaked: BigNumber;
};

export type FarmAndTokens = {
  farmView: SDKFarmView;
  stakeToken: ReachToken | null;
  rewardToken: ReachToken | null;
  userStaked: string;
};

export type FarmAndTokensDefined = {
  farmView: SDKFarmView;
  stakeToken: ReachToken;
  rewardToken: ReachToken;
  userStaked: string;
};

export type SDKFarmView = {
  /** When farming pool ends */
  end?: string;
  /** When farming pool begins */
  start?: string;
  /** Initial values submitted by contract creator */
  opts: DeployerOptsFormatted;
  /** Amount of rewards left in contract [`network`, `nonNetwork`] */
  remainingRewards: SDKStakingRewards;
  /** Total amount staked in contract */
  totalStaked: string;
  /** Farm contract ID */
  poolAddress: string;
  /** Total rewards (contract lifetime) */
  totalRewards: { network: string; rewardToken: string };
};

export type SDKFarmViewUnformatted = {
  /** When farming pool ends */
  end?: BigNumber;
  /** When farming pool begins */
  start?: BigNumber;
  /** Initial values submitted by contract creator */
  opts: DeployerOptsUnformatted;
  /** Amount of rewards left in contract [`network`, `nonNetwork`] */
  remainingRewards: SDKStakingRewards;
  /** Total amount staked in contract */
  totalStaked: BigNumber;
  /** Farm contract ID */
  poolAddress: string;
  /** Total rewards (contract lifetime) */
  totalRewards: { network: BigNumber; rewardToken: BigNumber };
};

/** Pair of tokens from farm data */
export type FarmTokens = {
  rewardToken: ReachToken | null;
  stakeToken: ReachToken | null;
};

export type FetchFarmTokenOpts = ReachTxnOpts & {
  contract?: StakingContract | null;
  tokenType?: "stake" | "reward";
};

/** @internal */
const NO_REWARDS: SDKFarmView["remainingRewards"] = ["0", "0"];
/** @internal */
const EMPTY_FV_OPTS: SDKFarmView["opts"] = {
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
  totalRewards: { network: "0", rewardToken: "0" }
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
    userStaked: "0"
  };

  const { poolAddress: farmId, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = farmId?.toString();
  if (!poolAddress) {
    return errorResult("Farm ID is required", poolAddress, data, null);
  }

  // If fetch failed, just ... just get out of here
  const vr = await fetchFarmView(acc, { ...opts, poolAddress, onProgress });
  if (!vr.data || !vr.contract) {
    const fvm = vr.message;
    return errorResult(`Fetch failed: ${fvm}`, poolAddress, data, vr.contract);
  }

  onProgress("Fetching tokens");
  const { contract, data: view } = vr;
  const { data: userStake } = await checkStakingBalance(acc, {
    contract,
    poolAddress,
    onProgress
  });
  data.userStaked = userStake.balance;

  if (opts.includeTokens) {
    const [{ stakeToken, rewardToken }] = await Promise.all([
      fetchFarmTokens(acc, view.opts)
    ]);
    data.stakeToken = stakeToken;
    data.rewardToken = rewardToken;
  }

  if (opts.formatResult) {
    data.farmView = formatSDKFarmView(view, poolAddress, {
      currentBlock: await createReachAPI().getNetworkTime(),
      tokens: { stakeToken: data.stakeToken, rewardToken: data.rewardToken }
    }) as SDKFarmView;
  } else data.farmView = formatSDKFarmView(view, poolAddress) as SDKFarmView;

  const msg = "OK";
  const result = successResult(msg, poolAddress, contract, data);
  onComplete(result);
  return result;
}

/**
 * Get unformatted staking pool view (token ids, amount staked, etc) from chain
 * @returns General information about staking pool (or `null` if not found)
 */
export async function fetchFarmView(
  acc: ReachAccount,
  o: FetchStakingPoolOpts
) {
  const { contract, poolAddress: id, onComplete = noOp, onProgress = noOp } = o;
  const poolAddress = id?.toString();
  let ctc = contract as ReachContract<typeof stakingBackend>;
  if (!ctc) ctc = acc.contract(stakingBackend, poolAddress);

  try {
    onProgress("Fetching farm metadata");
    const view = fromMaybe(await ctc.views.Info()) as FarmView;
    if (!view) return errorResult("Farm not found", poolAddress, null, ctc);
    const result = successResult("Fetched farm", poolAddress, ctc, view);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = "Farm was not fetched";
    const result = errorResult(msg, poolAddress, null, ctc);
    console.log(msg, error);
    onComplete(result);
    return result;
  }
}

/**
 * Get formatted/unformatted information from staking pool view (token ids, amount staked, etc)
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
): Promise<TransactionResult<SDKFarmView>> {
  const {
    contract,
    poolAddress: id,
    onComplete = noOp,
    onProgress = noOp
  } = opts;
  const poolAddress = id?.toString();
  let ctc = contract as ReachContract<typeof stakingBackend>;
  if (!ctc) ctc = acc.contract(stakingBackend, poolAddress);

  try {
    const vo = {
      ...opts,
      poolAddress,
      onComplete,
      onProgress,
      contract: ctc
    };
    const { data: view, message } = await fetchFarmView(acc, vo);
    if (!view) throw new Error(message);

    const f: FormatOpts = {};
    if (opts.formatResult) {
      onProgress("Fetching Token metadata");
      const [tokens, now] = await Promise.all([
        fetchFarmTokens(acc, view.opts),
        createReachAPI().getNetworkTime()
      ]);
      f.currentBlock = now;
      f.tokens = tokens;
    }

    const data = formatSDKFarmView(view, poolAddress, f);
    const result = successResult("Fetched farm", poolAddress, ctc, data);
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

/** Fetch farm's stake or reward token */
export async function fetchFarmToken(
  acc: ReachAccount,
  opts: FetchFarmTokenOpts
) {
  const { tokenType = "stake", contract, poolAddress } = opts;
  const warn = "Contract and pool address are required to fetch farm token";
  if (!contract && !poolAddress) throw new Error(warn);

  const ctc = contract || acc.contract(stakingBackend, poolAddress);
  const info = fromMaybe(await ctc.views.Info());
  if (!info) return null;

  const { stakeToken, rewardToken1 } = info.opts as FarmView["opts"];
  const id = tokenType === "stake" ? stakeToken : rewardToken1;
  return fetchToken(acc, parseAddress(id).toString());
}

type FetchFarmAndOrTokenOpts =
  | Partial<Pick<FarmView["opts"], "rewardToken1" | "stakeToken">> &
      Pick<ReachTxnOpts, "contract" | "poolAddress">;
/** @internal Fetch farm's stake and reward token. Optionally fetch farm first */
export async function fetchFarmTokens(
  acc: ReachAccount,
  opts: FetchFarmAndOrTokenOpts
) {
  let rtId = opts.rewardToken1 || "";
  let stId = opts.stakeToken || "";
  const address = (v: any) => parseAddress(v).toString();
  if (opts.contract && opts.poolAddress && (!rtId || !stId)) {
    const { data: view } = await fetchFarmView(acc, {
      contract: opts.contract,
      poolAddress: opts.poolAddress
    });

    if (!view) return { stakeToken: null, rewardToken: null };

    rtId = address(view.opts.rewardToken1);
    stId = address(view.opts.stakeToken);
  }

  const [rewardToken, stakeToken] = await Promise.all([
    fetchToken(acc, address(rtId)),
    fetchToken(acc, address(stId))
  ]);
  return { stakeToken, rewardToken };
}

/** @internal Farm format options */
export type FormatOpts = { tokens?: FarmTokens; currentBlock?: BigNumber };

/** @internal Format BigNumber and byte values for UI */
function formatSDKFarmView(
  d: FarmView,
  poolAddress: string,
  o: FormatOpts = {}
): SDKFarmViewUnformatted | SDKFarmView {
  const { tokens: tk, currentBlock } = o;
  if (!tk?.rewardToken || !tk.stakeToken || !currentBlock)
    return rawSDKFarmView(d, poolAddress);

  const { rewardToken, stakeToken } = tk;
  const { rewards } = d.opts;
  const { decimals: rewardDecs } = rewardToken;
  const rewardsPerBlock = formatRewardsPair(d.lastRewardsPerShare_, rewardDecs);
  const { base, opts, totalRewards } = SDKFarmViewBase(
    poolAddress,
    d.opts,
    o.currentBlock
  );

  return {
    ...base,
    totalStaked: formatCurrency(d.totalStaked, stakeToken?.decimals),
    remainingRewards: formatRewardsPair(d.remainingRewards, rewardDecs),
    opts: {
      ...opts,
      rewardsPerBlock
    },
    totalRewards: {
      ...totalRewards,
      rewardToken: formatCurrency(rewards[1], rewardDecs)
    }
  };
}

/** @internal Generate default response data shape */
function rawSDKFarmView(
  d: FarmView,
  poolAddress: string
): SDKFarmViewUnformatted {
  const { rewards } = d.opts;
  const { base, opts } = SDKFarmViewBase(poolAddress, d.opts);

  return {
    ...base,
    totalStaked: d.totalStaked,
    remainingRewards: d.remainingRewards,
    opts: { ...d.opts, ...opts },
    totalRewards: { network: rewards[0], rewardToken: rewards[1] }
  };
}

/**
 * Get shared `SDKFarmView` properties for formatted/unformatted responses
 * @param id Farm ID
 * @param view FarmView from blockchain
 * @param now Current block time (integer)
 * @returns Base formatted options
 */
function SDKFarmViewBase(id: string, view: FarmView["opts"], now?: BigNumber) {
  const { start, end, Rewarder0, rewards, rewardToken1, stakeToken } = view;
  const { avgBlockDuration } = CHAIN_CONSTANTS[getBlockchain()];
  const { bigNumberToNumber, formatAddress } = createReachAPI();

  return {
    base: {
      poolAddress: id,
      start: now ? inDays((start - now) * avgBlockDuration) : start, // blocks from Start
      end: now ? inDays((end - now) * avgBlockDuration) : end // blocks to End
    },
    opts: {
      start: bigNumberToNumber(start),
      end: bigNumberToNumber(end),
      Rewarder0: formatAddress(Rewarder0),
      rewardToken1: parseAddress(rewardToken1).toString(),
      stakeToken: parseAddress(stakeToken).toString()
    },
    totalRewards: { network: formatCurrency(rewards[0]) }
  };
}

/** @internal Compute end time for farming pool */
function inDays(val: number) {
  const endsIn = Math.ceil(val / 1000 / (60 * 60 * 24));
  return endsIn > 0 ? `${endsIn} day(s)` : "0";
}
