import { noOp } from "../utils/utils.reach";
import { farmAnnouncerBackend, FarmAnnouncerContract } from "../build/backend";
import { parseAddress, ReachAccount } from "../reach-helpers/index";
import {
  ReachTxnOpts,
  SDKStakingRewards,
  StaticFarmDataUnformatted
} from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { getAnnouncers } from "../constants";
import { fetchStakingPool } from "./Staker.Fetch";
import { isPartnerFarm } from "./subscribeToFarmStream";

/** Options for announcing a Farm */
export type AnnounceOpts = {
  staticFarmData: StaticFarmDataUnformatted;
} & ReachTxnOpts;

/**
 * Publish a farm (i.e. notify an `Announcer` contract, so the UI and server
 * can find the new farm.)
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.staticFarmData The Farm object that you wnat to announce
 * @param opts.contract Farm Announcer reach `contract` (optional)
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns
 */
export async function announceFarm(acc: ReachAccount, opts: AnnounceOpts) {
  const {
    contract,
    staticFarmData: farmData,
    onProgress = noOp,
    onComplete = noOp
  } = opts;

  const { partnerFarmAnnouncer, publicFarmAnnouncer } = getAnnouncers();
  const farmId = parseAddress(farmData.ctcInfo);
  const { data } = await fetchStakingPool(acc, {
    poolAddress: farmId,
    formatResult: true
  });
  if (!data) return errorResult(`Farm ${farmId} not found`, farmId, data);

  const isPartner = isPartnerFarm({ farmView: data });
  const ctcInfo = isPartner ? partnerFarmAnnouncer : publicFarmAnnouncer;
  const ctc: FarmAnnouncerContract =
    contract || acc.contract(farmAnnouncerBackend, ctcInfo);

  onProgress(`Announcing ${isPartner ? "Partner" : "Public"} Farm`);

  try {
    const resp = await ctc.apis.announce(farmData);
    const result = successResult("OK", farmId, resp, ctc);
    onComplete(result);
    return result;
  } catch (error) {
    const msg = parseContractError(`Farm announcement failed.`, error);
    console.log(msg, { e: error });
    const result = errorResult(msg, farmId, farmData, ctc);
    onComplete(result);
    return result;
  }
}

/**
 * ESTIMATION ONLY: divide rewards by farm duration. Inaccurate since it ignores token decimals
 * @param rewards reward amounts
 * @param duration farm length
 */
export function estimateRewardsPerBlock(
  rewards: SDKStakingRewards,
  duration: number
) {
  const [net, nonnet] = rewards.map(Number);
  return [Math.ceil(net / duration), Math.ceil(nonnet / duration)].map(String);
}
