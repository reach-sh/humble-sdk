import { fetchToken } from "../lib/index.js";
import { exitWithMsgs, Blue, Yellow, fromArgs, iout } from "./utils.mjs";
import { stopTest } from "./runAnnouncerTest.mjs";

/** Fetch and display data for a single token */
export async function runFetchTokenTest(acc, tokenId) {
  Blue(`Running TOKEN`);
  if (!tokenId) return exitWithMsgs("TOKEN id required but not found");

  Yellow(`Fetching Token "${tokenId}"...`);
  iout("Fetched token", await fetchToken(acc, tokenId));
  stopTest();
}
