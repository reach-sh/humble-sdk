import { fetchPool } from "../lib/index.js";
import { iout, exitWithMsgs, Blue, Yellow, onProgress } from "./utils.mjs";

/** Fetch a single pool */
export async function runFetchPoolTest(acc, [addr, n2nn]) {
  Blue(`Running POOL-FETCH`);
  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);
  iout("Fetched pool", await fetchPool(acc, addr, { onProgress, n2nn }));
  exitWithMsgs("Test complete! Exiting ...");
}
