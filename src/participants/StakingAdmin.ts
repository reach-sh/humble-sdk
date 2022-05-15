import { parseAddress, parseCurrency, ReachAccount } from "../reach-helpers";
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
import { convertToBlocks } from "../json";

/** Transaction options (create staking pool) */
type CreateFarmTxnOpts = { opts: StakingDeployerOpts } & ReachTxnOpts;

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
  "stakingDuration",
  "stakeTokenId",
  "totalRewardsPayout",
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
    opts.stakingDuration,
    opts.stakeTokenId,
    opts.totalRewardsPayout,
  ];
  const missing = required
    .reduce((agg, curr, i) => {
      if (!curr) agg.push(requiredFields[i]);
      return agg;
    }, [] as string[])
    .join(", ");

  if (required.some((f) => !f)) {
    return errorResult(`Missing fields "${missing}"`, null, data);
  }

  //    deploy and fund contract
  onProgress(`Creating staking pool`);
  const deployment = await deployFarmContract(acc, opts);
  if (deployment.message) onProgress(deployment.message);
  onComplete(deployment);
  return deployment;
}

/** @internal Deploy staking pool contract */
async function deployFarmContract(
  acc: ReachAccount,
  opts: StakingDeployerOpts
): Promise<TransactionResult<CreateFarmTxnResult>> {
  const { onProgress = noOp, onComplete = noOp, ...rest } = opts;
  const duration = convertToBlocks(rest.stakingDuration);
  const ctc = acc.contract(stakingBackend);
  const [nrt, nnrt] = rest.totalRewardsPayout.map(Number);
  const networkRewardsPerDay = nrt / duration;
  const rewardsPerDay = nnrt / duration;

  onProgress("Fetching reward token metadata");
  const rToken = await fetchToken(acc, rest.rewardTokenId);

  onProgress("Deploying Farm contract");
  const deployerOpts = {
    duration,
    stakeToken: rest.stakeTokenId,
    rewardToken1: rest.rewardTokenId,
    rewardsPerBlock: [
      parseCurrency(networkRewardsPerDay),
      parseCurrency(rewardsPerDay, rToken?.decimals),
    ],
    startDelay: convertToBlocks(rest.startDelay),
    graceDuration: convertToBlocks(rest.graceDuration),
  };

  /** Response data */
  const data: CreateFarmTxnResult = {
    amountsDeposited: [0, 0] as StakingRewards,
    poolAddress: "",
  };

  try {
    onProgress("Deploying contract");

    await new Promise((resolve) =>
      ctc.participants.Deployer({
        opts: deployerOpts,
        async readyForStakers() {
          data.poolAddress = parseAddress(await ctc.getInfo());
          data.amountsDeposited = rest.totalRewardsPayout;
          resolve(true);
        },
      })
    );

    const result = successResult("Farm created", data.poolAddress, ctc, data);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError("Deploy Farm error", error);
    console.log(msg, { error });
    return errorResult(msg, null, data);
  }
}
