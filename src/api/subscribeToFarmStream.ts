import {
  ReachAccount,
  createReachAPI,
  formatCurrency,
  parseAddress
} from "../reach-helpers";
import { fromMaybe, noOp, trimByteString } from "../utils/utils.reach";
import { farmAnnouncerBackend } from "../build/backend";
import { getFarmAnnouncer, getProtocolFunder0x } from "../constants";
import {
  ReachTxnOpts,
  StaticFarmDataFormatted,
  StaticFarmDataUnformatted,
  TransactionResult
} from "types";
import { successResult } from "../utils";
import { SDKFarmView } from "./Staker.API";

/** Options for subscribing to farms */
export type FarmSubscriptionOpts = {
  /** called when contract data is received */
  onFarmFetched(
    data: TransactionResult<StaticFarmDataUnformatted | StaticFarmDataFormatted>
  ): any;
  /** boolean to determine whether the farm data should be formatted or left unformatted */
  format?: boolean;
  /** When `true`, only report farms created after subscription */
  seekNow?: boolean;
} & ReachTxnOpts;

/** Result of monitoring the farm stream */
export type FarmRegisterEvent = {
  /** Actual event data */
  what: [
    addr: string,
    data: StaticFarmDataUnformatted | StaticFarmDataFormatted,
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
    let farmData = what[1];
    const stakePoolId = what[1].stakedTokenPoolId;
    if (format) {
      const { bigNumberToNumber } = createReachAPI();
      const stakedTokenPoolId = bigNumberToNumber(stakePoolId).toString();
      let pairTokenAId = "";
      let pairTokenBId = "";
      if (stakedTokenPoolId !== "0") {
        pairTokenAId = fromMaybe(what[1].pairTokenAId, bigNumberToNumber, "0");
        pairTokenAId = pairTokenAId.toString();
        pairTokenBId = bigNumberToNumber(what[1].pairTokenBId).toString();
      }

      const [networkRewards, nnRewards] = farmData.rewardsPerBlock as [any, any];
      farmData = {
        ctcInfo: parseAddress(farmData.ctcInfo).toString(),
        startBlock: bigNumberToNumber(farmData.startBlock),
        endBlock: bigNumberToNumber(farmData.endBlock),
        rewardTokenId: bigNumberToNumber(farmData.rewardTokenId).toString(),
        rewardsPerBlock: {
          asDefaultNetworkToken: formatCurrency(networkRewards, 6),
          asRewardToken: formatCurrency(nnRewards, farmData.rewardTokenDecimals)
        },
        stakedTokenId: bigNumberToNumber(farmData.stakedTokenId).toString(),
        pairTokenAId,
        pairTokenASymbol: trimByteString(farmData.pairTokenASymbol),
        pairTokenBId,
        pairTokenBSymbol: trimByteString(farmData.pairTokenBSymbol),
        rewardTokenDecimals: bigNumberToNumber(farmData.rewardTokenDecimals),
        rewardTokenSymbol: farmData.rewardTokenSymbol.split("\u0000")[0],
        stakedTokenDecimals: bigNumberToNumber(farmData.stakedTokenDecimals),
        stakedTokenPoolId:
          stakedTokenPoolId === "0" ? undefined : stakedTokenPoolId,
        stakedTokenSymbol: trimByteString(farmData.stakedTokenSymbol),
        stakedTokenTotalSupply: formatCurrency(
          farmData.stakedTokenTotalSupply,
          bigNumberToNumber(farmData.stakedTokenDecimals)
        )
      } as StaticFarmDataFormatted;
    }
    onFarmFetched(successResult("Farm fetched", "", ctc, farmData));
  });
}

/** Determine if Farm was created by a Humbleswap Parter */
export function isPartnerFarm(opts: {
  rewarderAddress?: string;
  farmViewOpts?: SDKFarmView["opts"];
  farmView?: SDKFarmView;
}) {
  const { rewarderAddress, farmViewOpts, farmView } = opts;
  if (rewarderAddress) return rewarderAddress === getProtocolFunder0x();
  if (farmViewOpts) return farmViewOpts.Rewarder0 === getProtocolFunder0x();
  if (farmView) return farmView.opts.Rewarder0 === getProtocolFunder0x();
  return false;
}
