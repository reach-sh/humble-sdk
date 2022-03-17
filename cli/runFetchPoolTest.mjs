import { fetchPool } from "humble-sdk";
import { iout, exitWithMsgs, Blue, Yellow, onProgress } from "./utils.mjs";
import { stopTest } from "./runAnnouncerTest.mjs";

/** Fetch a single pool */
export async function runFetchPoolTest(acc, [addr, n2nn]) {
  Blue(`Running POOL-FETCH`);
  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);
  iout("Fetched pool", await fetchPool(acc, addr, { onProgress, n2nn }));
  stopTest();
}
