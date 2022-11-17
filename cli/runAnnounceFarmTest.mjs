import {
  announceFarm,
  asMaybe,
  createReachAPI,
  fetchFarmAndTokens,
  fetchLiquidityPool,
  fetchStakingPool,
  getNetworkProvider,
  isPartnerFarm,
  subscribeToFarmStream
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  exitWithMsgs,
  Blue,
  Red,
  Yellow,
  iout,
  Green,
  answerOrDie
} from "./utils.mjs";

let exitTimeout;
const LIMIT = 100;
const TIMEOUT = 15;
const pools = new Set();

/* 
  Announced 08/18
=====================
farm          pool
123132710     122708890
 */

/** Announce a single farm */
export async function runAnnounceFarmTest(acc) {
  console.clear();
  Red(`ANNOUNCING ${getNetworkProvider()} FARM`);
  const farmId = await answerOrDie("Enter Farm ID");
  Yellow(`Fetching farm ${farmId}`);
  const farmResult = await fetchFarmAndTokens(acc, {
    poolAddress: farmId,
    formatResult: false,
    includeTokens: true
  });

  if (!farmResult.succeeded) {
    return exitWithMsgs(`Farm id ${farmId} not found`);
  }

  const { farmView: farm, stakeToken, rewardToken } = farmResult.data;
  const isPartner = isPartnerFarm({ farmView: farm });
  const label = isPartner ? `PARTNER FARM` : `FARM`;
  Green(`Fetched ${label} id ${farmId}`);
  Blue(JSON.stringify(farmResult.data, null, 2));
  if (!isPartner) Red("WARNING: This is a Permissionless farm!");

  const poolId = await answerOrDie("Enter Liquidity Pool Address:");
  if (!poolId)
    return exitWithMsgs("Use Humble API to search pool by LP token ID");

  const n2nn = (await answerOrDie("Does the pool contain ALGO? (y/n)")) === "y";
  Yellow("Fetching Liquidity Pool ...");
  const poolResult = await fetchLiquidityPool(acc, {
    poolAddress: poolId,
    n2nn,
    includeTokens: true,
    onProgress: Yellow
  });

  if (!poolResult.succeeded) return exitWithMsgs(`Pool id ${poolId} not found`);
  const { data: poolData } = poolResult;
  const { contract: farmContract } = farmResult;
  const stdlib = createReachAPI();
  if (poolData.pool.poolTokenId.toString() !== stakeToken.id.toString()) {
    return exitWithMsgs("Pool Liquidity Token does not match Farm Stake Token");
  }

  const stakeTokenRaw = await acc.tokenMetadata(stakeToken.id);
  const staticFarmData = {
    ctcInfo: stdlib.bigNumberify(farmId),
    endBlock: farm.opts.end,
    pairTokenAId: asMaybe(null),
    pairTokenASymbol: poolData.tokens[0].symbol,
    pairTokenBId: stdlib.bigNumberify(poolData.tokens[1].id),
    pairTokenBSymbol: poolData.tokens[1].symbol,
    rewardsPerBlock: farm.opts.rewardsPerBlock,
    rewardTokenDecimals: stdlib.bigNumberify(rewardToken.decimals),
    rewardTokenId: farm.opts.rewardToken1,
    rewardTokenSymbol: rewardToken.symbol,
    stakedTokenDecimals: stdlib.bigNumberify(stakeToken.decimals),
    stakedTokenId: farm.opts.stakeToken,
    stakedTokenPoolId: stdlib.bigNumberify(poolId),
    stakedTokenSymbol: stakeToken.symbol,
    stakedTokenTotalSupply: stakeTokenRaw.supply,
    startBlock: farm.opts.start
  };

  iout(`Ready to announce ${label} "${farmId}"`, staticFarmData);
  if (!isPartner) Red("REMINDER: This is a Permissionless farm!");

  const continues = (await answerOrDie("Continue? (y/n)")) === "y";
  if (!continues) return exitWithMsgs("Exiting ...");

  Yellow("Announcing Farm ...");
  const result = await announceFarm(acc, { staticFarmData });
  if (!result.succeeded) return exitWithMsgs(result.message);

  Green(`Announced Farm ${farmId}`);
  console.log();
  console.log();
  Blue(JSON.stringify(result, null, 2));
  console.log();
  console.log();

  return (await answerOrDie("Announce another farm? (y/n)")) === "y"
    ? runAnnounceFarmTest(acc)
    : exitWithMsgs("Done");
}
