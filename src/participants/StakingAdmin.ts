import { noOp, ReachAccount } from "../reach-helpers";
// import { stakingBackend } from "../build/backend";
import { ReachTxnOpts, StakingDeployerOpts, TransactionResult } from "../types";

type CreateFarmTxnOpts = StakingDeployerOpts & ReachTxnOpts;

/** @internal Create a staking contract for farming liquidity tokens */
export async function createStakingPool(
  acc: any,
  opts: CreateFarmTxnOpts
): Promise<TransactionResult<any>> {
  const { onProgress = noOp, onComplete = noOp } = opts;
  //    validate args
  //    deploy and fund contract
  //    notify user

  onProgress(`Creating pool`);
  const deployment = await deployFarmContract(acc, {});
  if (!deployment.succeeded) return deployment;

  const result = { succeeded: true, message: "Staking created" };
  onComplete(result);
  return result;
}

/** @placeholder */
async function deployFarmContract(
  _acc: ReachAccount,
  _opts: ReachTxnOpts & Record<string, any>
): Promise<TransactionResult<any>> {
  //   const ctc = acc.contract(stakingBackend);
  return Promise.resolve({ succeeded: false });
}
