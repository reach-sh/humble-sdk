import {
  createReachAPI,
  formatAddress,
  parseAddress,
  parseCurrency,
  ReachAccount,
} from "../reach-helpers";
import { noOp } from "../utils/utils.reach";
import { stakingBackend } from "../build/backend";
import {
  ReachTxnOpts,
  StakingDeployerOpts,
  StakingRewards,
  TransactionResult,
} from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { fetchToken } from "./PoolAnnouncer";
import { checkRewardsImbalance } from "./calculateRewardsPerBlock";

/** Transaction options (create staking pool) */
type CreateFarmTxnOpts = {
  opts: StakingDeployerOpts & { rewardTokenDecimals?: number };
} & ReachTxnOpts;

/** Transaction result (create staking pool) */
type CreateFarmTxnResult = {
  /** App id of new staking pool */
  poolAddress?: string;
  /** User-deposited amounts in contract */
  amountsDeposited?: StakingRewards;
};

/** @internal Required fields  */
const requiredFields = [
  "rewardTokenId",
  "stakeTokenId",
  "totalRewardsPayout",
  "startBlock",
  "endBlock",
];

/** Create a staking contract for earning yield from liquidity tokens */
export async function createStakingPool(
  acc: any,
  stakingOpts: CreateFarmTxnOpts
): Promise<TransactionResult<CreateFarmTxnResult>> {
  const { onProgress = noOp, onComplete = noOp, opts } = stakingOpts;
  const data: CreateFarmTxnResult = { amountsDeposited: [0, 0] };

  //    validate args
  const required = [
    opts.rewardTokenId,
    opts.stakeTokenId,
    opts.totalRewardsPayout,
    opts.startBlock,
    opts.endBlock,
  ];

  const missing = required
    .reduce((agg, curr, i) => {
      if (!curr === undefined) agg.push(requiredFields[i]);
      return agg;
    }, [] as string[])
    .join(", ");

  if (required.some((f) => !f)) {
    return errorResult(`Missing fields "${missing}"`, null, data);
  }

  const stakeToken = await fetchToken(acc, opts.stakeTokenId);
  if (stakeToken?.symbol !== "HMBL2LT") {
    return errorResult("Staking token is not a Liquidity Pool token", null, data);
  }

  //    deploy and fund contract
  onProgress(`Creating staking pool`);
  const deployment = await deployFarmContract(acc, stakingOpts);
  if (deployment.message) onProgress(deployment.message);
  onComplete(deployment);
  return deployment;
}

/** @internal Deploy staking pool contract */
async function deployFarmContract(
  acc: ReachAccount,
  opts: CreateFarmTxnOpts
): Promise<TransactionResult<CreateFarmTxnResult>> {
  const { onProgress = noOp, onComplete = noOp, opts: rest } = opts;
  const reach = createReachAPI();
  const [networkRewards, totalReward] = rest.totalRewardsPayout;
  const { stakeTokenId, rewardTokenId } = rest;
  const rewardTokenDecimals =
    rest.rewardTokenDecimals === undefined
      ? (await fetchToken(acc, rewardTokenId))?.decimals
      : rest.rewardTokenDecimals;
  const {
    networkRewardsPerBlock: networkRewardsPerDay,
    rewardsPerBlock: rewardsPerDay,
    startBlock,
    endBlock,
    imbalance,
    totalRewards,
  } = await checkRewardsImbalance({
    endDateTime: rest.endBlock,
    startDateTime: rest.startBlock,
    stakeTokenId: stakeTokenId?.toString(),
    rewardTokenId: rewardTokenId?.toString(),
    rewardTokenDecimals,
    networkRewards,
    networkRewardsFunder: rest.rewarder0,
    totalReward,
  });

  // Prevent creation if user expects to pay significantly less
  // than the actual cost over the farm's block-duration.
  if (imbalance) {
    const expected = `expected ${networkRewards}, ${totalReward}`;
    const got = `got ${totalRewards[0]}, ${totalRewards[1]}`;
    const msg = `
    Rewards cost does not match input: ${expected}, ${got}
    `;
    return errorResult(msg, null, {
      amountsDeposited: [0, 0] as StakingRewards,
      poolAddress: "",
    });
  }

  const ctc = acc.contract(stakingBackend);

  onProgress("Fetching reward token metadata");
  const rToken = await fetchToken(acc, rest.rewardTokenId);

  onProgress("Deploying Farm contract");
  const deployerOpts = {
    rewardToken1: rest.rewardTokenId,
    stakeToken: rest.stakeTokenId,
    rewardsPerBlock: [
      parseCurrency(networkRewardsPerDay),
      parseCurrency(rewardsPerDay, rToken?.decimals),
    ],
    start: startBlock,
    end: endBlock,
    Rewarder0: rest.rewarder0,
  };

  /** Response data */
  const data: CreateFarmTxnResult = {
    amountsDeposited: [0, 0] as StakingRewards,
    poolAddress: "",
  };

  try {
    onProgress("Deploying contract");
    let resolveReadyForRewarder: any = null;
    const pReadyForRewarder = new Promise((r) => (resolveReadyForRewarder = r));
    reach.withDisconnect(() =>
      ctc.p.Deployer({
        opts: deployerOpts,
        readyForRewarder: () => resolveReadyForRewarder(),
        readyForStakers: () => {},
      })
    );
    data.poolAddress = parseAddress(await ctc.getInfo());
    data.amountsDeposited = rest.totalRewardsPayout;
    await pReadyForRewarder;
    if (rest.rewarder0 === formatAddress(acc)) {
      try {
        await ctc.a.Setup.fund();
      } catch (error: any) {
        throw new Error(error);
      }
    }
    const result = successResult("Farm created", data.poolAddress, ctc, data);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError("Deploy Farm error", error);
    console.log(msg, { error });
    return errorResult(msg, null, data);
  }
}
