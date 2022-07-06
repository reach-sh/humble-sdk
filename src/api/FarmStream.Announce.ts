import { noOp } from "../utils/utils.reach";
import { farmAnnouncerBackend, FarmAnnouncerContract } from "../build/backend";
import {
  createReachAPI,
  ReachAccount,
} from "../reach-helpers/index";
import { ReachTxnOpts, StaticFarmDataUnformatted } from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { getFarmAnnouncer } from "../constants";

/** Options for announcing a Farm */
type AnnounceOpts = { staticFarmData: StaticFarmDataUnformatted } & ReachTxnOpts;

/**
 * Remove (un-stake) an amount from a contract. Reduces rewards entitlement.
 * @param acc Reach account instance
 * @param opts Txn opts
 * @param opts.staticFarmData The Farm object that you wnat to announce
 * @param opts.contract Farm Announcer reach `contract` (optional)
 * @param opts.onComplete Optional callback for consuming txn response
 * @param opts.onProgress Optional callback for txn events/updates
 * @returns
 */
export async function announceFarm(
  acc: ReachAccount,
  opts: AnnounceOpts
) {
  const { bigNumberToNumber } = createReachAPI();
  const { staticFarmData: farmData, onProgress = noOp, onComplete = noOp } = opts;

  const announcerInfo = getFarmAnnouncer();
  const ctc: FarmAnnouncerContract = opts.contract || acc.contract(farmAnnouncerBackend, announcerInfo);

  onProgress("Announcing Farm");

  try {
    const resp = await ctc.apis.announce(farmData);
    const result = successResult("OK", bigNumberToNumber(farmData.ctcInfo), resp, ctc);
    onComplete(result);
    return result;
  } catch (error) {
    const msg = parseContractError(`Farm announcement failed.`, error);
    console.log(msg, { e: error });
    const result = errorResult(msg, bigNumberToNumber(farmData.ctcInfo), farmData, ctc);
    onComplete(result)
    return result    
  }
}
