import { ReachAccount, Maybe, BigNumber, createReachAPI, formatCurrency } from "../reach-helpers";
import { fromMaybe } from "../utils/utils.reach";
import { farmAnnouncerBackend } from "../build/backend";
import { getFarmAnnouncer } from "../constants";
import {  ReachTxnOpts, TransactionResult } from "types";
import { successResult } from "../utils";

/** Options for subscribing to farms */
type FarmSubscriptionOpts = {
  /** called when contract data is received */
  onFarmFetched(data: TransactionResult<StaticFarmDataUnformatted | StaticFarmDataFormatted>): any;
  /** boolean to determine whether the farm data should be formatted or left unformatted */
  format?: boolean
} & ReachTxnOpts;


type StaticFarmDataUnformatted = {
  ctcInfo: BigNumber,
  startBlock: BigNumber,
  endBlock: BigNumber,
  rewardTokenId: BigNumber,
  rewardsPerBlock: [ 
    BigNumber, 
    BigNumber 
  ],
  stakedTokenId: BigNumber,
  pairTokenAId: Maybe<any>,
  pairTokenASymbol: string,
  pairTokenBId: BigNumber,
  pairTokenBSymbol: string,
  rewardTokenDecimals: BigNumber,
  rewardTokenSymbol: string,
  stakedTokenDecimals: BigNumber,
  stakedTokenPoolId: BigNumber,
  stakedTokenSymbol: string,
  stakedTokenTotalSupply: BigNumber
}

type StaticFarmDataFormatted = {
  ctcInfo: string,
  startBlock: number,
  endBlock: number,
  rewardTokenId: string,
  rewardsPerBlock: [ 
    string, 
    string 
  ],
  stakedTokenId: string,
  pairTokenAId: string,
  pairTokenASymbol: string,
  pairTokenBId: string,
  pairTokenBSymbol: string,
  rewardTokenDecimals: number,
  rewardTokenSymbol: string,
  stakedTokenDecimals: number,
  stakedTokenPoolId: string,
  stakedTokenSymbol: string,
  stakedTokenTotalSupply: string
}

// TODO fix params for this
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
export function subscribeToFarmStream(
  acc: ReachAccount,
  opts: FarmSubscriptionOpts
) {
  const announcerInfo = getFarmAnnouncer();
  if (!announcerInfo) throw new Error("Farm announcer is not set");

  const ctc = acc.contract(farmAnnouncerBackend, announcerInfo);
  const { onFarmFetched, format = false } = opts;

  return ctc.events.Announce.monitor(({ what }: FarmRegisterEvent) => {
    let farmData = what[1]
    if (format) {
      const { bigNumberToNumber } = createReachAPI();
      farmData = {
        ctcInfo: bigNumberToNumber(farmData.ctcInfo).toString(),
        startBlock: bigNumberToNumber(farmData.startBlock),
        endBlock: bigNumberToNumber(farmData.endBlock),
        rewardTokenId: bigNumberToNumber(farmData.rewardTokenId).toString(),
        rewardsPerBlock: [ 
          formatCurrency(farmData.rewardsPerBlock[0], 6), 
          formatCurrency(farmData.rewardsPerBlock[1], farmData.rewardTokenDecimals)
        ],
        stakedTokenId: bigNumberToNumber(farmData.stakedTokenId).toString(),
        pairTokenAId: fromMaybe(farmData.pairTokenAId, bigNumberToNumber, "0").toString(),
        pairTokenASymbol: farmData.pairTokenASymbol.split('\u0000')[0],
        pairTokenBId: bigNumberToNumber(farmData.pairTokenBId).toString(),
        pairTokenBSymbol: farmData.pairTokenBSymbol.split('\u0000')[0],
        rewardTokenDecimals: bigNumberToNumber(farmData.rewardTokenDecimals),
        rewardTokenSymbol: farmData.rewardTokenSymbol.split('\u0000')[0],
        stakedTokenDecimals: bigNumberToNumber(farmData.stakedTokenDecimals),
        stakedTokenPoolId: bigNumberToNumber(farmData.stakedTokenPoolId).toString(),
        stakedTokenSymbol: farmData.stakedTokenSymbol.split('\u0000')[0],
        stakedTokenTotalSupply: formatCurrency(farmData.stakedTokenTotalSupply, bigNumberToNumber(farmData.stakedTokenDecimals))
      }
    }
    onFarmFetched(successResult('Farm fetched', '', ctc, farmData));
  });
}
