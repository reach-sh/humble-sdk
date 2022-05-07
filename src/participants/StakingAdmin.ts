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

/** Transaction options (create staking pool) */
type CreateFarmTxnOpts = { opts: StakingDeployerOpts } & ReachTxnOpts;

/** Transaction result (create staking pool) */
type CreateFarmTxnResult = {
  /** App id of new staking pool */
  poolAddress?: string;
  /** User-deposited amounts in contract */
  amountsDeposited?: StakingRewards;
};

/* Number of algo blocks written per day (86400 secs / 4.5) */
export const ALGO_BLOCKS_PER_DAY = 19200;
/* Number of algo blocks written per day (800 blocks) */
export const ALGO_BLOCKS_PER_HR = ALGO_BLOCKS_PER_DAY / 24;
const requiredFields = [
  "rewardTokenId",
  "lengthInDays",
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
    opts.lengthInDays,
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
  /** Response data */
  const data: CreateFarmTxnResult = {
    amountsDeposited: [0, 0] as StakingRewards,
    poolAddress: "",
  };
  const { onProgress = noOp, onComplete = noOp, ...rest } = opts;
  const ctc = acc.contract(stakingBackend);
  const [nrt, nnrt] = rest.totalRewardsPayout.map(Number);
  const nrtPerDay = nrt / rest.lengthInDays / ALGO_BLOCKS_PER_DAY;
  const nnrtPerDay = nnrt / rest.lengthInDays / ALGO_BLOCKS_PER_DAY;
  const duration = rest.lengthInDays * ALGO_BLOCKS_PER_DAY;

  onProgress("Fetching reward token metadata");
  const rToken = await fetchToken(acc, rest.rewardTokenId);

  onProgress("Deploying Farm contract");
  const deployerOpts = {
    duration,
    stakeToken: rest.stakeTokenId,
    rewardToken1: rest.rewardTokenId,
    rewardsPerBlock: [
      parseCurrency(nrtPerDay),
      parseCurrency(nnrtPerDay, rToken?.decimals),
    ],
  };

  try {
    onProgress("Deploying contract");
    return (async () => {
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

      const result = successResult("OK", data.poolAddress, ctc, data);
      onComplete(result);
      return result;
    })();
  } catch (error: any) {
    const msg = parseContractError("Deploy Pool error", error);
    console.log(msg, { error });
    return errorResult(msg, null, data);
  }
}
