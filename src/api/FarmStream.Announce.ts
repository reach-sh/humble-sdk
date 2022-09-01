import { noOp } from "../utils/utils.reach";
import { farmAnnouncerBackend, FarmAnnouncerContract } from "../build/backend";
import { parseAddress, ReachAccount } from "../reach-helpers/index";
import { ReachTxnOpts, StaticFarmDataUnformatted } from "../types";
import { errorResult, parseContractError, successResult } from "../utils";
import { getAnnouncers, getProtocolFunder0x } from "../constants";
import { fetchStakingPool } from "./Staker.Fetch";

/** Options for announcing a Farm */
type AnnounceOpts = {
  staticFarmData: StaticFarmDataUnformatted;
} & ReachTxnOpts;

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
export async function announceFarm(acc: ReachAccount, opts: AnnounceOpts) {
  const {
    contract,
    staticFarmData: farmData,
    onProgress = noOp,
    onComplete = noOp
  } = opts;

  const { partnerFarmAnnouncer, publicFarmAnnouncer } = getAnnouncers();
  const farmId = parseAddress(farmData.ctcInfo);
  const { data, succeeded } = await fetchStakingPool(acc, {
    poolAddress: farmId,
    formatResult: true
  });
  if (!succeeded) return errorResult(`Farm ${farmId} not found`, farmId, data);

  const { Rewarder0 } = data.opts;
  const isPartner = Rewarder0 === getProtocolFunder0x();
  const ctcInfo = isPartner ? partnerFarmAnnouncer : publicFarmAnnouncer;
  const ctc: FarmAnnouncerContract =
    contract || acc.contract(farmAnnouncerBackend, ctcInfo);

  onProgress(`Announcing ${isPartner ? 'Partner' : 'Public'} Farm`);

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
