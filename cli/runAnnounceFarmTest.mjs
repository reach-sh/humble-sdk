import {
  announceFarm,
  asMaybe,
  createReachAPI,
  fetchFarmAndTokens,
  fetchLiquidityPool,
  fetchStakingPool,
  formatCurrency,
  getNetworkProvider,
  isNetworkToken,
  isPartnerFarm,
  parseAddress,
  parseCurrency,
  subscribeToFarmStream
} from "@reach-sh/humble-sdk";
import { estimateRewardsPerBlock } from "@reach-sh/humble-sdk/lib/contracts/FarmStream.Announce.js";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  exitWithMsgs,
  Blue,
  Red,
  Yellow,
  iout,
  Green,
  answerOrDie,
  rerunOrExit
} from "./utils.mjs";

let exitTimeout;
const LIMIT = 100;
const TIMEOUT = 15;
const pools = new Set();

/* 
=====================
farm          pool
=====================
123132710  122708890
145130612  - (no associated pool)
=====================
New V3 (0.1.12-rc.9)
=====================
145285794  - (no associated pool)
148398027  145299469
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
  if (!farmResult.succeeded) return exitWithMsgs(`Farm id ${farmId} not found`);

  const { farmView, stakeToken, rewardToken } = farmResult.data;
  const isPartner = isPartnerFarm({ farmView });
  const label = isPartner ? `PARTNER FARM` : `FARM`;
  Green(`Fetched ${label} id ${farmId}`);
  Blue(JSON.stringify(farmResult.data, null, 2));
  if (!isPartner) Red("WARNING: This is a Permissionless farm!");

  const { contract: farmContract } = farmResult;
  const { poolAddress: poolId, tokens } = await validatePoolId(acc, stakeToken);
  const [tokA, tokB] = tokens;
  const stdlib = createReachAPI();
  const big = stdlib.bigNumberify;
  const div = stdlib.div;
  const stakeTokenRaw = await acc.tokenMetadata(stakeToken.id);
  const duration = farmView.opts.end - farmView.opts.start;
  const { totalRewards: tr } = farmView;
  const rpb = estimateRewardsPerBlock([tr.network, tr.rewardToken], duration);

  Red("=============");
  iout("total rewards", rpb);
  iout("duration (blocks)", duration);
  iout("estimate rewards per block", rpb);
  iout("parsed rewards", [
    formatCurrency(rpb[0]),
    formatCurrency(rpb[1], rewardToken.decimals)
  ]);
  Red("=============");

  const safeId = (v) => {
    const safe = v ? parseAddress(v.id) : null;
    return isNetworkToken(safe) ? null : safe;
  };
  const safeSymbol = (v) => (v ? v.symbol : "");
  const AId = safeId(tokA);
  const staticFarmData = {
    ctcInfo: parseAddress(farmId),
    endBlock: farmView.opts.end,
    pairTokenAId: asMaybe(AId),
    pairTokenASymbol: safeSymbol(tokA),
    pairTokenBId: safeId(tokB) || 0,
    pairTokenBSymbol: safeSymbol(tokB),
    rewardTokenDecimals: rewardToken.decimals,
    rewardTokenId: parseAddress(rewardToken.id),
    rewardTokenSymbol: rewardToken.symbol,
    stakedTokenDecimals: stakeToken.decimals,
    stakedTokenId: parseAddress(stakeToken.id),
    stakedTokenPoolId: parseAddress(poolId),
    stakedTokenSymbol: stakeToken.symbol,
    stakedTokenTotalSupply: big(stakeToken.supply),
    startBlock: farmView.opts.start
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

  return rerunOrExit({
    do: () => runAnnounceFarmTest(acc),
    prompt: "Announce another farm? (y/n)"
  });
}

async function validatePoolId(acc, stakeToken) {
  Yellow("Enter Liquidity Pool Address:");
  const poolAddress = await answerOrDie("Enter 0 if no pool");
  if (poolAddress === "0") return { poolAddress, tokens: [] };
  if (!poolAddress)
    return exitWithMsgs("Use Humble API to search pool by LP Token ID");

  const n2nn = (await answerOrDie("Does the pool contain ALGO? (y/n)")) === "y";
  Yellow("Fetching Liquidity Pool ...");
  const opts = { poolAddress, n2nn, includeTokens: true, onProgress: Yellow };
  const { data, succeeded } = await fetchLiquidityPool(acc, opts);

  if (!succeeded) return exitWithMsgs(`Pool id ${poolAddress} not found`);

  const { pool, tokens } = data;
  if (pool.poolTokenId.toString() !== stakeToken.id.toString()) {
    return exitWithMsgs("Pool Liquidity Token does not match Farm Stake Token");
  }

  return { poolAddress, tokens };
}
