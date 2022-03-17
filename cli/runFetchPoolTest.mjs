import { fetchPool } from "humble-sdk";
import {
  iout,
  Bright,
  exitWithMsgs,
  FgBlue,
  FgYellow,
  fromArgs,
  onProgress,
} from "./utils.mjs";
import { stopTest } from "./runAnnouncerTest.mjs";

/** Fetch a single pool */
export async function runFetchPoolTest(acc, [addr, n2nn]) {
  console.log(Bright(FgBlue(`Running POOL-FETCH`)));
  if (!addr) return exitWithMsgs("POOL address required but not found");

  console.log(Bright(FgYellow(`Fetching single pool "${addr}"...`)));
  iout("Fetched pool", await fetchPool(acc, addr, { onProgress, n2nn }));
  stopTest();
}
