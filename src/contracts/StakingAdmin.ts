import {
  createReachAPI,
  formatAddress,
  parseAddress,
  parseCurrency,
  ReachAccount
} from "../reach-helpers";
import { noOp } from "../utils/utils.reach";
import { stakingBackend } from "../build/backend";
import {
  ReachTxnOpts,
  StakingDeployerOpts,
  StakingRewards,
  TransactionResult
} from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { fetchToken } from "./PoolAnnouncer";
import { checkRewardsImbalance } from "./calculateRewardsPerBlock";
import { HUMBLE_LP_TOKEN_SYMBOL, TXN_SIGN } from "../constants";

/** Transaction options (create staking pool) */
export type CreateFarmTxnOpts = {
  opts: StakingDeployerOpts & { rewardTokenDecimals?: number };
} & ReachTxnOpts;

/** Transaction result (create staking pool) */
export type CreateFarmTxnResult = {
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
  "endBlock"
];

/** Create a staking contract for earning yield from liquidity tokens */
export async function createStakingPool(
  acc: any,
  stakingOpts: CreateFarmTxnOpts
): Promise<TransactionResult<CreateFarmTxnResult>> {
  const { onProgress = noOp, onComplete = noOp, opts } = stakingOpts;
  const data: CreateFarmTxnResult = { amountsDeposited: [0, 0] };
  const required = [
    opts.rewardTokenId, // validate all args
    opts.stakeTokenId,
    opts.totalRewardsPayout,
    opts.startBlock,
    opts.endBlock
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

  const [stakeToken, rewardToken] = await Promise.all([
    fetchToken(acc, opts.stakeTokenId),
    fetchToken(acc, opts.rewardTokenId)
  ]);

  // Warn if invalid stake and reward token selection
  if (stakeToken?.id === rewardToken?.id) {
    const err = "Staking and reward token cannot be the same";
    return errorResult(err, null, data);
  }

  // Warn if user is creating a farm with non-LP token
  if (stakeToken?.symbol !== HUMBLE_LP_TOKEN_SYMBOL) {
    onProgress("WARN: Staking token is not a Liquidity Pool token");
  }

  // Deploy and fund contract
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
  const [networkRewards, totalReward] = rest.totalRewardsPayout;
  const { stakeTokenId, rewardTokenId } = rest;
  const rewardTokenDecimals =
    rest.rewardTokenDecimals === undefined
      ? (await fetchToken(acc, rewardTokenId))?.decimals
      : rest.rewardTokenDecimals;
  const { startBlock, endBlock, imbalance, totalRewards } =
    await checkRewardsImbalance({
      endDateTime: rest.endBlock,
      startDateTime: rest.startBlock,
      stakeTokenId: stakeTokenId?.toString(),
      rewardTokenId: rewardTokenId?.toString(),
      rewardTokenDecimals,
      networkRewards,
      networkRewardsFunder: rest.rewarder0,
      totalReward
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
      poolAddress: ""
    });
  }

  const ctc = acc.contract(stakingBackend);

  onProgress("Fetching reward token metadata");
  const rToken = await fetchToken(acc, rest.rewardTokenId);

  onProgress("Deploying Farm contract");
  const deployerOpts = {
    rewardToken1: rest.rewardTokenId,
    stakeToken: rest.stakeTokenId,
    rewards: [
      parseCurrency(networkRewards),
      parseCurrency(totalReward, rToken?.decimals)
    ],
    start: startBlock,
    end: endBlock,
    Rewarder0: rest.rewarder0
  };

  /** Response data */
  const data: CreateFarmTxnResult = {
    amountsDeposited: [0, 0] as StakingRewards,
    poolAddress: ""
  };

  try {
    onProgress("Deploying contract");
    createReachAPI().setSigningMonitor(() => onProgress(TXN_SIGN));

    data.poolAddress = await new Promise((resolve) => {
      const done = async () => {
        const appId = await ctc.getInfo();
        resolve(parseAddress(appId).toString());
      };

      return ctc.p
        .Deployer({
          opts: deployerOpts,
          readyForRewarder: done,
          readyForStakers: done
        })
        .catch(() => null);
    });

    if (data.poolAddress) data.amountsDeposited = rest.totalRewardsPayout;
    if (rest.rewarder0 === formatAddress(acc)) {
      try {
        await ctc.a.Setup.fund();
      } catch (error: any) {
        throw new Error(error);
      }
    }
    const result = successResult("Farm created", data.poolAddress, ctc, data);
    createReachAPI().setSigningMonitor(noOp);
    onComplete(result);
    return result;
  } catch (error: any) {
    const msg = parseContractError("Deploy Farm error", error);
    console.log(msg, { error });
    createReachAPI().setSigningMonitor(noOp);
    return errorResult(msg, null, data);
  }
}
