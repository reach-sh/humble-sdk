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
import { TransactionResult, ReachTxnOpts, StakingRewards } from "../types";
import { stakingBackend } from "../build/backend";
import { fetchToken } from "../participants";
import { formatRewardsPair } from "../utils/utils.staker";
import CHAIN_CONSTANTS from "../json";

export type DeployerOpts = {
  /** Number of blocks to run contract */
  duration: BigNumber;
  /** Non-network reward token */
  rewardToken1: BigNumber;
  /** Rewards emitted per block [`network`, `nonNetwork`] */
  rewardsPerBlock: StakingRewards;
  /** Token to stake in exchange for `rewardToken1`  */
  stakeToken: BigNumber;
};

/** Staking Contract details */
export type FarmView = {
  /** When farming pool ends */
  end: BigNumber;
  /** Initial values submitted by contract creator */
  opts: DeployerOpts;
  /** Amount of rewards left in contract [`network`, `nonNetwork`] */
  remainingRewards: StakingRewards;
  /** Total amount staked in contract */
  totalStaked: BigNumber;
};

const NO_REWARDS: FarmView["remainingRewards"] = ["0", "0"];
const EMPTY_FV_OPTS: FarmView["opts"] = {
  duration: "0",
  rewardToken1: "0",
  rewardsPerBlock: NO_REWARDS,
  stakeToken: "0",
};
const EMPTY_FV: FarmView = {
  end: "0",
  opts: EMPTY_FV_OPTS,
  remainingRewards: NO_REWARDS,
  totalStaked: "0",
};

type FarmAndTokens = {
  farmView: FarmView;
  stakeToken: ReachToken | null;
  rewardToken: ReachToken | null;
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
  opts: ReachTxnOpts & { formatResult?: boolean }
): Promise<TransactionResult<FarmAndTokens>> {
  // Response data
  const data: FarmAndTokens = {
    stakeToken: null,
    rewardToken: null,
    farmView: EMPTY_FV,
  };

  const { poolAddress: farmId, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = farmId?.toString();
  if (!poolAddress) {
    const message = `Could not fetch farm tokens (invalid pool address)`;
    return errorResult(message, poolAddress, data, null);
  }

  const farmResult = await fetchStakingPool(acc, opts);
  const { contract, succeeded, data: farmView } = farmResult;

  // If fetch failed, just ... just get out of here
  if (!succeeded || !contract) {
    const message = `Fetch failed: ${farmResult.message}`;
    return errorResult(message, poolAddress, data, contract);
  }

  onProgress("Fetching farm tokens");
  const { opts: farmOpts } = farmView;
  const { stakeToken: stakeTokenId, rewardToken1: rewardTokenId } = farmOpts;
  const [stakeToken, rewardToken, now] = await Promise.all([
    fetchToken(acc, stakeTokenId),
    fetchToken(acc, rewardTokenId),
    createReachAPI().getNetworkTime(),
  ]);

  data.farmView = opts.formatResult
    ? formatFarmView(farmView, { stakeToken, rewardToken }, poolAddress, now)
    : farmView;
  data.stakeToken = stakeToken;
  data.rewardToken = rewardToken;
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
  opts: ReachTxnOpts
): Promise<TransactionResult<FarmView>> {
  const {
    contract,
    poolAddress: id,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const poolAddress = id?.toString();
  const ctc = (contract ||
    acc.contract(stakingBackend, poolAddress)) as ReachContract<
    typeof stakingBackend
  >;

  try {
    onProgress("Fetching farm metadata");
    const data = fromMaybe(await ctc.views.Info());
    const result = data
      ? successResult("Fetched farm", poolAddress, ctc, data)
      : errorResult("Farm was not found", poolAddress, EMPTY_FV, ctc);

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

type SDKFarmView = FarmView & {
  /** Farm contract ID */
  poolAddress: string;
  /** Total rewards (contract lifetime) */
  totalRewards: { network: string; rewardToken: string };
};

type FarmTokens = {
  rewardToken: ReachToken | null;
  stakeToken: ReachToken | null;
};

function formatFarmView(
  d: FarmView,
  tokens: FarmTokens,
  poolAddress: string,
  blockTime: any
): SDKFarmView {
  const { rewardToken, stakeToken } = tokens;
  if ([rewardToken, stakeToken].includes(null)) return d as SDKFarmView;

  const reach = createReachAPI();
  const { avgBlockDuration } = CHAIN_CONSTANTS[reach.connector];
  const { id: rId, decimals: rewardDecs } = rewardToken as ReachToken;
  const blocksDiff = reach.bigNumberToNumber(d.end.sub(blockTime));
  const end = inDays(blocksDiff * avgBlockDuration);
  const { duration, rewardsPerBlock } = d.opts;
  const bigDuration = reach.bigNumberToNumber(
    reach.mul(duration, avgBlockDuration)
  );

  return {
    poolAddress,
    end,
    totalStaked: formatCurrency(d.totalStaked, stakeToken?.decimals),
    opts: {
      duration: inDays(bigDuration),
      rewardToken1: rId,
      stakeToken: stakeToken?.id,
      rewardsPerBlock: formatRewardsPair(rewardsPerBlock, rewardDecs),
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

function inDays(val: number) {
  return `${Math.ceil(val / 1000 / (60 * 60 * 24))} days`;
}
