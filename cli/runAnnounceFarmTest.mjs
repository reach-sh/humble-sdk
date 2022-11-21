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
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import { estimateRewardsPerBlock } from "../lib/api/FarmStream.Announce.js";
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
  Announced 08/18
=====================
farm          pool
123132710 122708890
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
  const { pool, tokens } = poolData;
  const [tokA, tokB] = tokens;
  const { contract: farmContract } = farmResult;
  const stdlib = createReachAPI();
  if (pool.poolTokenId.toString() !== stakeToken.id.toString()) {
    return exitWithMsgs("Pool Liquidity Token does not match Farm Stake Token");
  }

  const big = stdlib.bigNumberify;
  const div = stdlib.div;
  const stakeTokenRaw = await acc.tokenMetadata(stakeToken.id);
  const duration = farmView.opts.end - farmView.opts.start;
  const { totalRewards: tr } = farmView;
  const [nr, nnr] = [
    tr.network,
    tr.rewardToken
    // Number(formatCurrency(tr.network)),
    // Number(formatCurrency(tr.rewardToken, stakeToken.decimals))
  ];
  const rpb = estimateRewardsPerBlock([nr, nnr], duration);
  Red("=============");
  iout("total rewards", [nr, nnr]);
  iout("duration (blocks)", duration);
  iout("estimate rewards per block", rpb);
  iout("parsed rewards", [
    formatCurrency(parseCurrency(rpb[0])),
    formatCurrency(parseCurrency(rpb[1], tokB.decimals), tokB.decimals)
  ]);
  Red("=============");

  const Ceiling = (s) => Math.ceil(Number(s));
  const AId = isNetworkToken(tokA.id) ? null : parseAddress(tokA.id);
  const staticFarmData = {
    ctcInfo: parseAddress(farmId),
    endBlock: farmView.opts.end,
    pairTokenAId: asMaybe(AId),
    pairTokenASymbol: tokA.symbol,
    pairTokenBId: parseAddress(tokB.id),
    pairTokenBSymbol: tokB.symbol,
    rewardsPerBlock: rpb.map(Ceiling),
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
