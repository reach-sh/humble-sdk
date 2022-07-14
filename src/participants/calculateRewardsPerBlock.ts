import { createReachAPI, NETWORKS } from "../reach-helpers";
import { convertDateToBlocks } from "../json";
import { getValueWithMaxDecimals } from "../utils/utils.swap";

type RewardsFormData = {
  endDateTime: string;
  networkRewards: string;
  networkRewardsFunder: string;
  rewardTokenId: string;
  rewardTokenDecimals: number;
  stakeTokenId: string;
  startDateTime: string;
  totalReward: string;
};

/**
 * Calculate the start/end block of a farm, as well as expected rewards payout per day
 * @param opts Staking Deployer opts
 * @returns Network and non-network rewards; start and end block for farm
 */
export async function calculateRewardsPerBlock(opts: Partial<RewardsFormData>) {
  const reach = createReachAPI();
  const chain = reach.connector as keyof typeof NETWORKS;
  const defaultDecimals = NETWORKS[chain].decimals;
  const data = {
    networkRewardsPerBlock: 0,
    rewardsPerBlock: 0,
    duration: 0,
    startBlock: 0,
    endBlock: 0,
    totalRewards: [0, 0]
  };
  const {
    startDateTime,
    endDateTime,
    networkRewards = 0,
    totalReward,
    rewardTokenDecimals
  } = opts || {};
  if (!opts || !startDateTime || !endDateTime || !totalReward) {
    return data;
  }

  const totalRewardsPayout = [networkRewards || "0", totalReward];
  const currentNetworkTime = Number(await reach.getNetworkTime());
  data.startBlock = convertDateToBlocks(
    new Date(startDateTime),
    currentNetworkTime
  );
  data.endBlock = convertDateToBlocks(
    new Date(endDateTime),
    currentNetworkTime
  );
  data.duration = data.endBlock - data.startBlock;
  const [nrt, nnrt] = totalRewardsPayout.map(Number);
  data.networkRewardsPerBlock = Number(
    getValueWithMaxDecimals((nrt / data.duration).toString(), defaultDecimals)
  );
  const rewardDecimals =
    rewardTokenDecimals === undefined ? defaultDecimals : rewardTokenDecimals;
  data.rewardsPerBlock = Number(
    getValueWithMaxDecimals((nnrt / data.duration).toString(), rewardDecimals)
  );

  data.totalRewards = [
    data.networkRewardsPerBlock * data.duration,
    data.rewardsPerBlock * data.duration
  ];

  return data;
}

/** Assert sum of `rewardsPerBlock` is less than 99% of original expected */
const isImbalanced = (rewardsPerBlock: number, originalRewardTotal: string) => {
  const precision = 0.99;
  return rewardsPerBlock / Number(originalRewardTotal) < precision;
};

/**
 * Check whether the difference between what the user wants to pay and what they
 * will be billed is greater than 1%
 * @param opts Rewards form data
 */
export async function checkRewardsImbalance(
  opts: Partial<RewardsFormData> = {}
) {
  const data = await calculateRewardsPerBlock(opts);
  const [networkRewardsPerBlock, rewardsPerBlock] = data.totalRewards;
  const [networkRewardsImbalanced, rewardsImbalanced] = [
    isImbalanced(networkRewardsPerBlock, opts.networkRewards || "0"),
    isImbalanced(rewardsPerBlock, opts.totalReward || "0")
  ];

  return { ...data, imbalance: networkRewardsImbalanced || rewardsImbalanced };
}
