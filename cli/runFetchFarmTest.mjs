import { fetchFarmAndTokens, fetchLiquidityPool } from "@reach-sh/humble-sdk";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  fromArgs,
} from "./utils.mjs";

/** Fetch a single staking pool (farm) */
export async function runFetchFarmTest(acc) {
  console.clear();
  Blue(`Running STAKING-FARM-FETCH`);

  const addr =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter pool address:"));

  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);
  iout(
    "Fetched pool",
    await fetchFarmAndTokens(acc, { poolAddress: addr, onProgress })
  );

  exitWithMsgs("Test complete! Exiting ...");
}
