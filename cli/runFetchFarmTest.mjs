import axios from "axios";
import {
  fetchFarmAndTokens,
  fetchLiquidityPool,
  fetchStakingPool
} from "@reach-sh/humble-sdk";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  fromArgs
} from "./utils.mjs";

// Pool IDs
// 89038727 [ NEW ]
// 88045040, 88908491

/** Fetch a single staking pool (farm) */
export async function runFetchFarmTest(acc) {
  console.clear();
  Blue(`Running STAKING-FARM-FETCH`);

  const addr =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter Farm ID:"));

  if (!addr) return exitWithMsgs("FARM address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);

  const formatPrompt = "Format response? [ y/n ]";
  const formatResult = (await answerOrDie(formatPrompt)) === "y";
  const opts = { poolAddress: addr, onProgress, formatResult };

  const withTokensPrompt = "Fetch token data? [ y/n ]";
  const withTokens = (await answerOrDie(withTokensPrompt)) === "y";
  const result = withTokens
    ? await fetchFarmAndTokens(acc, opts)
    : await fetchStakingPool(acc, opts);

  if (withTokens) {
    const qq = "Render old UI format [MainNet farms only]? (y/n)";
    if (await answerOrDie(qq) === 'y') return renderFarmData(acc, result);
  }

  if ((await answerOrDie("View ABI?")) === "y") {
    iout("Farm ABI", await result.contract.getABI());
  }

  iout(result.message, result.data);
  exitWithMsgs("Test complete! Exiting ...");
}

const getBalanceTokenLink = () =>
  `https://indexer.algoexplorerapi.io/stats/v2/accounts/rich-list?limit=1&asset-id=`;
const fetchPrimaryStakeTokenBalance = async (assetId) => {
  const asset = await axios
    .get(`${getBalanceTokenLink()}${assetId}`)
    .then((res) => res.data);
  return Array.isArray(asset.accounts) ? asset.accounts[0]?.balance || 0 : 0;
};

async function renderFarmData(acc, result) {
  const { farmView, rewardToken, stakeToken } = result.data;
  const poolID = await answerOrDie("Enter Liquidity Pool address");
  const n2nn = (await answerOrDie("Does this pool contain ALGO?")) === 'y';
  if (!poolID) return exitWithMsgs("No pool address supplied");

  const { succeeded, data } = await fetchLiquidityPool(acc, {
    includeTokens: true,
    poolAddress: poolID,
    n2nn
  });

  if (!succeeded) return exitWithMsgs(`Pool #${poolID} not found`);

  if (data.pool.poolTokenId.toString() !== stakeToken.id.toString()) {
    return exitWithMsgs("Pool Liquidity Token does not match Farm Stake Token");
  }

  const { pool, tokens } = data;
  const UIFormat = {
    contractId: farmView.poolAddress,
    startBlock: farmView.start,
    endBlock: farmView.end,
    pairTokenAId: tokens[0].id,
    pairTokenASymbol: tokens[0].symbol,
    pairTokenBId: tokens[1].id,
    pairTokenBSymbol: tokens[1].symbol,
    remainingRewardA: farmView.remainingRewards[0],
    remainingRewardB: farmView.remainingRewards[1],
    rewardsPerBlock: {
      asDefaultNetworkToken: farmView.opts.rewardsPerBlock[0],
      asRewardToken: farmView.opts.rewardsPerBlock[0]
    },
    rewardTokenDecimals: rewardToken.decimals,
    rewardTokenId: rewardToken.id,
    rewardTokenSymbol: rewardToken.symbol,
    stakedTokenAmt: "0",
    stakedTokenDecimals: stakeToken.decimals,
    stakedTokenId: stakeToken.id,
    stakedTokenPoolId: pool.poolAddress.toString(),
    stakedTokenSymbol: stakeToken.symbol,
    stakedTokenTotalSupply: Number(stakeToken.supply),
    totalReward: {
      A: farmView.totalRewards.network,
      B: farmView.totalRewards.rewardToken
    },
    totalStaked: farmView.totalStaked,
    primaryStakeTokenBalance: await fetchPrimaryStakeTokenBalance(stakeToken.id)
  };

  return iout("Done", UIFormat);
}
