import { ReachAccount, createReachAPI, formatCurrency } from "../reach-helpers";
import { fromMaybe, noOp } from "../utils/utils.reach";
import { farmAnnouncerBackend } from "../build/backend";
import { getFarmAnnouncer } from "../constants";
import {  ReachTxnOpts, StaticFarmDataFormatted, StaticFarmDataUnformatted, TransactionResult } from "types";
import { successResult } from "../utils";

/** Options for subscribing to farms */
type FarmSubscriptionOpts = {
  /** called when contract data is received */
  onFarmFetched(data: TransactionResult<StaticFarmDataUnformatted | StaticFarmDataFormatted>): any;
  /** boolean to determine whether the farm data should be formatted or left unformatted */
  format?: boolean
  /** When `true`, only report farms created after subscription */
  seekNow?: boolean
} & ReachTxnOpts;

/** Result of monitoring the farm stream */
type FarmRegisterEvent = {
  /** Actual event data */
  what: [
    addr: string,
    data: StaticFarmDataUnformatted,
  something: any
  ];
  /** Block time when event was received */
  when: any;
};

/** Passively attach `acc` to a Farm Listener to discover new farm */
export async function subscribeToFarmStream(
  acc: ReachAccount,
  opts: FarmSubscriptionOpts
) {
  const announcerInfo = getFarmAnnouncer();
  if (!announcerInfo) throw new Error("Farm announcer is not set");

  const ctc = acc.contract(farmAnnouncerBackend, announcerInfo);
  const { onFarmFetched, onProgress = noOp, format = false } = opts;
  if (opts.seekNow) {
    onProgress("WARN: Listener will only report new farms");
    await ctc.events.Announce.seekNow();
  } 
  
  return ctc.events.Announce.monitor(({ what }: FarmRegisterEvent) => {
    let farmData: StaticFarmDataUnformatted | StaticFarmDataFormatted = what[1]
    if (format) {
      const { bigNumberToNumber } = createReachAPI();
      const stakedTokenPoolId = bigNumberToNumber(farmData.stakedTokenPoolId).toString()
      farmData = {
        ctcInfo: bigNumberToNumber(farmData.ctcInfo).toString(),
        startBlock: bigNumberToNumber(farmData.startBlock),
        endBlock: bigNumberToNumber(farmData.endBlock),
        rewardTokenId: bigNumberToNumber(farmData.rewardTokenId).toString(),
        rewardsPerBlock: { 
          asDefaultNetworkToken: formatCurrency(farmData.rewardsPerBlock[0], 6), 
          asRewardToken: formatCurrency(farmData.rewardsPerBlock[1], farmData.rewardTokenDecimals)
        },
        stakedTokenId: bigNumberToNumber(farmData.stakedTokenId).toString(),
        pairTokenAId: stakedTokenPoolId === '0' ? '' : fromMaybe(farmData.pairTokenAId, bigNumberToNumber, "0").toString(),
        pairTokenASymbol: farmData.pairTokenASymbol.split('\u0000')[0],
        pairTokenBId: stakedTokenPoolId === '0' ? '' : bigNumberToNumber(farmData.pairTokenBId).toString(),
        pairTokenBSymbol: farmData.pairTokenBSymbol.split('\u0000')[0],
        rewardTokenDecimals: bigNumberToNumber(farmData.rewardTokenDecimals),
        rewardTokenSymbol: farmData.rewardTokenSymbol.split('\u0000')[0],
        stakedTokenDecimals: bigNumberToNumber(farmData.stakedTokenDecimals),
        stakedTokenPoolId: stakedTokenPoolId === '0' ? undefined : stakedTokenPoolId,
        stakedTokenSymbol: farmData.stakedTokenSymbol.split('\u0000')[0],
        stakedTokenTotalSupply: formatCurrency(farmData.stakedTokenTotalSupply, bigNumberToNumber(farmData.stakedTokenDecimals))
      }
    } 
    onFarmFetched(successResult('Farm fetched', '', ctc, farmData));
  });
}
