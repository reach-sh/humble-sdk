import { stakingBackend } from "../build/backend";
import { ReachAccount, fromMaybe } from "../reach-helpers/index";
import { TransactionResult, ReachTxnOpts } from "../types";

/**
 * Fetch data about a staking pool
 * @param acc User account
 * @param opts Transaction options
 * @param opts.poolAddress Contract ID for staking farm
 * @returns Staking pool info
 */
export async function fetchFarm(
  acc: ReachAccount,
  opts: ReachTxnOpts
): Promise<TransactionResult<any>> {
  const { poolAddress } = opts;
  const ctc = acc.contract(stakingBackend, poolAddress);
  const view = fromMaybe(await ctc.views.Info());
  return {
    succeeded: Boolean(view),
    contract: ctc,
    message: "Staking Pool not found",
    data: view,
    poolAddress,
  };
}

/**
 * Stake `acc` owner's tokens in a pool for rewards
 * @param acc User account
 * @param opts Transaction options
 * @returns Transaction result
 */
export async function stakeTokensInPool(
  acc: ReachAccount,
  opts: any
): Promise<TransactionResult<any>> {
  console.assert({ acc, opts });
  return {
    succeeded: false,
    message: "Unimplemented function 'stakeTokensInPool'",
  };
}

/**
 * Withdraw a user's allocated rewards from a staking pool
 * @param acc User account
 * @param opts Transaction options
 * @returns
 */
export async function harvestStakingRewards(
  acc: ReachAccount,
  opts: any
): Promise<TransactionResult<any>> {
  console.assert({ acc, opts });
  return {
    succeeded: false,
    message: "Unimplemented function 'harvestStakingRewards'",
  };
}

/**
 * Withdraw `acc` owner's stake from a pool (and ditch any further rewards)
 * @param acc User account
 * @param opts Transaction options
 * @returns Transaction result
 */
export async function withdrawStake(
  acc: ReachAccount,
  opts: any
): Promise<TransactionResult<any>> {
  console.assert({ acc, opts });
  return {
    succeeded: false,
    message: "Unimplemented function 'withdrawStake'",
  };
}
