import {
  Bright,
  exitWithMsgs,
  FgBlue,
  FgYellow,
  fromArgs,
  iout,
} from "./utils.mjs";
import { fetchToken } from "humble-sdk";
import { stopTest } from "./runAnnouncerTest.mjs";

/** Fetch and display data for a single token */
export async function runFetchTokenTest(acc, tokenId) {
  console.log(Bright(FgBlue(`Running TOKEN`)));
  if (!tokenId) return exitWithMsgs("TOKEN id required but not found");

  console.log(Bright(FgYellow(`Fetching Token "${tokenId}"...`)));
  iout("Fetched token", await fetchToken(acc, tokenId));
  stopTest();
}
