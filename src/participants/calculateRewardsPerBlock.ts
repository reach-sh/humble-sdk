import { createReachAPI } from "../reach-helpers";
import { StakingDeployerOpts } from "../types";
import { convertDateToBlocks } from "../json";

/**
 * Calculate the start/end block of a farm, as well as expected rewards payout per day
 * @param opts Staking Deployer opts
 * @returns Network and non-network rewards; start and end block for farm
 */
export async function calculateRewardsPerBlock(opts: StakingDeployerOpts) {
  const reach = createReachAPI();
  const currentNetworkTime = Number(await reach.getNetworkTime());
  const startBlock = convertDateToBlocks(
    new Date(opts.startBlock),
    currentNetworkTime
  );
  const endBlock = convertDateToBlocks(
    new Date(opts.endBlock),
    currentNetworkTime
  );
  const duration = endBlock - startBlock;
  const [nrt, nnrt] = opts.totalRewardsPayout.map(Number);
  const networkRewardsPerDay = nrt / duration;
  const rewardsPerDay = nnrt / duration;
  return { networkRewardsPerDay, rewardsPerDay, startBlock, endBlock };
}

/* type FormData = {
  endDateTime: string;
  networkRewards: string;
  networkRewardsFunder: string;
  rewardTokenId: string;
  stakeTokenId: string;
  startDateTime: string;
  totalReward: string;
};

const checkRewardsImbalance = async (formData: FormData) => {
  const reach = createReachAPI();
  const totalRewardsPayout = [
    formData?.networkRewards || "0",
    formData?.totalReward
  ];
  const currentNetworkTime = Number(await reach.getNetworkTime());
  const startBlock = await convertDateToBlocks(
    new Date(formData?.startDateTime),
    currentNetworkTime
  );
  const endBlock = await convertDateToBlocks(
    new Date(formData?.endDateTime),
    currentNetworkTime
  );
  const duration = endBlock - startBlock;
  const [nrt, nnrt] = totalRewardsPayout.map(Number);
  const networkRewardsPerDay = Number(
    getValueWithMaxDecimals((nrt / duration).toString(), defaultDecimals())
  );
  const rewardTokenDecimals =
    getTokenById(formData.rewardTokenId)?.decimals || defaultDecimals();
  const rewardsPerDay = Number(
    getValueWithMaxDecimals((nnrt / duration).toString(), rewardTokenDecimals)
  );
  const networkRewardsImbalanced = isImbalanced(
    networkRewardsPerDay,
    duration,
    formData?.networkRewards
  );
  const rewardsImbalanced = isImbalanced(
    rewardsPerDay,
    duration,
    formData?.totalReward
  );
  return networkRewardsImbalanced || rewardsImbalanced;
};

const isImbalanced = (
  rewardsPerBlock: number,
  numberOfBlocks: number,
  originalRewardTotal: string
) => {
  const precision = 0.99;
  return (
    (rewardsPerBlock * numberOfBlocks) / Number(originalRewardTotal) < precision
  );
};
 */