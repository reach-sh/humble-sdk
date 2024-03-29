import {
  subscribeToFarmStream,
  getFarmAnnouncer,
  fetchStakingPool,
  announceFarm,
  parseAddress,
  asMaybe,
  fetchLiquidityPool,
  createReachAPI,
  isPartnerFarm,
  getNetworkProvider,
  fetchFarmAndTokens
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
farm, pool
835260005, 778031658
 */

/** Attach to pool announcer and list a subset of pools */
export async function runAnnounceFarmTest(acc) {
  console.clear();
  Blue(`Running ${getNetworkProvider()} ANNOUNCER ${getFarmAnnouncer()}`);
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
  if (!poolId) {
    return exitWithMsgs("Check for pool ID using pools.json from s3");
  }

  const n2nn = await answerOrDie("Does the pool contain ALGO? (y/n)", yesno);
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
  const continues = await answerOrDie("Continue? (y/n)", yesno);
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

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onFarmFetched({ succeeded, poolAddress, data, message }) {
  if (!succeeded) return Red(message);

  Blue(`\t * Got "${data.ctcInfo}"`);
  iout(data.ctcInfo, data);
  resetTimer();
}

/** HELPER | Restart Pool Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
  Blue(`\t * Auto-timeout in ${TIMEOUT}s`);
}

/** End CLI */
function stopTest() {
  clearTimeout(exitTimeout);
  exitWithMsgs("Timer stopped. Exiting ...");
}
