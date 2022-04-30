import { fetchToken } from "@reach-sh/humble-sdk";
import {
  exitWithMsgs,
  Blue,
  Yellow,
  fromArgs,
  iout,
  answerOrDie,
} from "./utils.mjs";

/** Fetch and display data for a single token */
export async function runFetchTokenTest(acc, id) {
  Blue(`Running TOKEN`);
  const tokenId = id || (await answerOrDie("Enter token id:"));

  Yellow(`Fetching Token "${tokenId}"...`);
  iout("Fetched token", await fetchToken(acc, tokenId));
  exitWithMsgs("Test complete! Exiting ...");
}
