import {
  ReachAccount,
  createReachAPI,
  formatCurrency,
  parseAddress
} from "../reach-helpers";
import { fromMaybe, noOp, trimByteString } from "../utils/utils.reach";
import { farmAnnouncerBackend } from "../build/backend";
import { getAnnouncers, getProtocolFunder0x } from "../constants";
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
  onFarmFetched(data: TransactionResult<StaticFarmDataFormatted>): any;
  /** boolean to determine whether the farm data should be formatted or left unformatted */
  format?: boolean;
  /** When `true`, only report farms created after subscription */
  seekNow?: boolean;
  /** When `true`, include permissionless farms */
  includePublicFarms?: boolean;
} & ReachTxnOpts;

/** Result of monitoring the farm stream */
export type FarmRegisterEvent = {
  /** Actual event data */
  what: [addr: string, data: StaticFarmDataUnformatted, something: any];
  /** Block time when event was received */
  when: any;
};

/** Passively attach `acc` to a Farm Listener to discover new farm */
export async function subscribeToFarmStream(
  acc: ReachAccount,
  opts: FarmSubscriptionOpts
) {
  const { publicFarmAnnouncer, partnerFarmAnnouncer: announcerInfo } =
    getAnnouncers();
  if (!announcerInfo || !publicFarmAnnouncer)
    throw new Error("Farm announcer is not set");

  const partnerCtc = acc.contract(farmAnnouncerBackend, announcerInfo);
  const { onFarmFetched, onProgress = noOp, includePublicFarms = false } = opts;
  const runAnnouncer = async (
    ctcInfo: string | number,
    label: string,
    partner = false
  ) => {
    const ctc = acc.contract(farmAnnouncerBackend, ctcInfo);
    if (opts.seekNow) {
      onProgress(`WARN: ${label} Farm Listener will only report new farms`);
      await ctc.events.Announce.seekNow();
    }

    return ctc.events.Announce.monitor((e) => onRegisterEvent(e, partner));
  };

  if (includePublicFarms) runAnnouncer(publicFarmAnnouncer, "Public");
  return runAnnouncer(announcerInfo, "Partner", true);

  async function onRegisterEvent(
    { what }: FarmRegisterEvent,
    partner: boolean
  ) {
    const eventData = what[1];
    const stakePoolId = what[1].stakedTokenPoolId;
    const { bigNumberToNumber } = createReachAPI();
    const stakedTokenPoolId = bigNumberToNumber(stakePoolId).toString();
    let pairTokenAId = "";
    let pairTokenBId = "";
    const toString = (v: any) => parseAddress(v).toString();
    if (stakedTokenPoolId !== "0") {
      pairTokenAId = fromMaybe(what[1].pairTokenAId, toString, "0");
      pairTokenAId = pairTokenAId.toString();
      pairTokenBId = toString(what[1].pairTokenBId);
    }

    const farmData: StaticFarmDataFormatted = {
      ctcInfo: toString(eventData.ctcInfo),
      startBlock: bigNumberToNumber(eventData.startBlock),
      endBlock: bigNumberToNumber(eventData.endBlock),
      rewardTokenId: toString(eventData.rewardTokenId),
      // rewards start at 0 until distribution begins
      rewardsPerBlock: { asDefaultNetworkToken: "0", asRewardToken: "0" },
      stakedTokenId: toString(eventData.stakedTokenId),
      pairTokenAId,
      pairTokenASymbol: trimByteString(eventData.pairTokenASymbol),
      pairTokenBId,
      pairTokenBSymbol: trimByteString(eventData.pairTokenBSymbol),
      rewardTokenDecimals: bigNumberToNumber(eventData.rewardTokenDecimals),
      rewardTokenSymbol: eventData.rewardTokenSymbol.split("\u0000")[0],
      stakedTokenDecimals: bigNumberToNumber(eventData.stakedTokenDecimals),
      stakedTokenPoolId:
        stakedTokenPoolId === "0" ? undefined : stakedTokenPoolId,
      stakedTokenSymbol: trimByteString(eventData.stakedTokenSymbol),
      stakedTokenTotalSupply: formatCurrency(
        eventData.stakedTokenTotalSupply,
        bigNumberToNumber(eventData.stakedTokenDecimals)
      ),
      isPartnerFarm: partner
    };

    onFarmFetched(successResult("Farm fetched", "", partnerCtc, farmData));
  }
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
