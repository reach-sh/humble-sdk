import {
  fetchFarmAndTokens,
  fetchLiquidityPool,
  fetchStakingPool,
  getNetworkProvider,
  isPartnerFarm
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  fromArgs
} from "./utils.mjs";

/** Fetch a single staking pool (farm) */
export async function runCheckPartnerFarmTest(acc) {
  console.clear();
  Blue(`Running PARTNER-FARM-CHECK on ${getNetworkProvider()}`);

  const id =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter Farm ID:"));

  if (!id) return exitWithMsgs("FARM address required but not found");
  Yellow(`Fetching single pool "${id}"...`);

  const opts = { poolAddress: id, onProgress, formatResult: true };
  const result = await fetchFarmAndTokens(acc, opts);
  if (!result.succeeded) return exitWithMsgs(`FARM "${id}" was not found`);

  const { farmView } = result.data;
  const isPartner = isPartnerFarm({ farmView });
  iout(result.message, { data: result.data, isPartner });
  exitWithMsgs("Test complete! Exiting ...");
}
