import {
  subscribeToFarmStream,
  getFarmAnnouncer,
  fetchStakingPool,
  announceFarm,
  parseAddress,
  asMaybe,
  fetchLiquidityPool,
  createReachAPI
} from "@reach-sh/humble-sdk";
import { fetchFarmTokens } from "@reach-sh/humble-sdk/lib/api/Staker.Fetch.js";
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

// "farmAddress": 835160254 ALGO/VEST
// "poolAddress": 777747637,

/** Attach to pool announcer and list a subset of pools */
export async function runAnnounceFarmTest(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getFarmAnnouncer()}`);
  Yellow(`Attaching Farm listener ...`);
  const farmId = await answerOrDie("Enter Farm ID");
  const farmResult = await fetchStakingPool(acc, {
    poolAddress: farmId,
    formatResult: false,
    includeTokens: true
  });

  if (!farmResult.succeeded) {
    return exitWithMsgs(`Farm id ${farmId} not found`);
  }

  Blue(`Fetched farm id ${farmId}`);
  Green(JSON.stringify(farmResult.data, null, 2));
  Yellow(`Announcing farm id ${farmId} ...`);

  const poolId = await answerOrDie("Enter Liquidity Pool Address (if known)");
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

  if (!poolResult.succeeded) {
    return exitWithMsgs(`Pool id ${poolId} not found`);
  }

  const { data: farm, contract: farmContract } = farmResult;
  const { data: pool } = poolResult;
  const stdlib = createReachAPI();
  const { rewardToken, stakeToken } = await fetchFarmTokens(acc, {
    poolAddress: farmId,
    contract: farmContract
  });

  const stakeTokenRaw = await acc.tokenMetadata(stakeToken.id);
  const staticFarmData = {
    ctcInfo: stdlib.bigNumberify(farmId),
    endBlock: farm.opts.end,
    pairTokenAId: asMaybe(null),
    pairTokenASymbol: pool.tokens[0].symbol,
    pairTokenBId: stdlib.bigNumberify(pool.tokens[1].id),
    pairTokenBSymbol: pool.tokens[1].symbol,
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

  Yellow("Announcing Farm ...");
  const result = await announceFarm(acc, { staticFarmData });
  if (!result.succeeded) return exitWithMsgs(result.message);

  Green(`Announced Farm ${farmId}`);
  console.log();
  console.log();
  Blue(JSON.stringify(result, null, 2));
  console.log();
  console.log();
  return exitWithMsgs("Done");
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
