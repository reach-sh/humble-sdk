import { noOp, parseAddress, ReachAccount } from "../reach-helpers";
import { stakingBackend } from "../build/backend";
import {
  ReachTxnOpts,
  StakingDeployerOpts,
  StakingRewards,
  TransactionResult,
} from "../types";
import { createPoolFailed } from "../utils.pool";

/** Transaction options (create staking pool) */
type CreateFarmTxnOpts = { opts: StakingDeployerOpts } & ReachTxnOpts;

/** Transaction result (create staking pool) */
type CreateFarmTxnResult = TransactionResult<{
  /** App id of new staking pool */
  stakingPoolAddress?: string | number;
  /** User-deposited amounts in contract */
  amountsDeposited?: StakingRewards;
}>;

/**  Create a staking contract for farming liquidity tokens */
export async function createStakingPool(
  acc: any,
  stakingOpts: CreateFarmTxnOpts
): Promise<CreateFarmTxnResult> {
  const { onProgress = noOp, onComplete = noOp, opts } = stakingOpts;

  //    validate args
  const required = [
    opts.rewardsPerBlock,
    opts.duration,
    opts.nnRewardToken,
    opts.stakeToken,
  ];
  if (required.some((f) => !f)) {
    return createPoolFailed(
      { amountsDeposited: [0, 0] },
      "Missing required fields"
    );
  }

  //    deploy and fund contract
  onProgress(`Creating staking pool`);
  const deployment = await deployFarmContract(acc, opts);

  //    notify user
  if (deployment.message) onProgress(deployment.message);
  onComplete(deployment);
  return deployment;
}

/** @internal Deploy staking pool contract */
async function deployFarmContract(
  acc: ReachAccount,
  opts: StakingDeployerOpts
): Promise<CreateFarmTxnResult> {
  const ctc = acc.contract(stakingBackend);

  return new Promise((resolve) =>
    ctc.participants.Deployer({
      opts,
      async readyForStakers() {
        const stakingPoolAddress = parseAddress(await ctc.getInfo());
        const { rewardsPerBlock, duration } = opts;
        const mul = (r: string | number) => Number(r) * Number(duration);
        const deposits = rewardsPerBlock.map(mul) as StakingRewards;

        resolve({
          succeeded: true,
          data: {
            amountsDeposited: deposits,
            stakingPoolAddress,
          },
        });
      },
    })
  );
}
