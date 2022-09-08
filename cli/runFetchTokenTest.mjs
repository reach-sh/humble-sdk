import { fetchToken, peraTokenMetadata } from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import { getBlockchain, getNetworkProvider } from "../lib/constants.js";
import {
  exitWithMsgs,
  Blue,
  Yellow,
  fromArgs,
  iout,
  answerOrDie
} from "./utils.mjs";

/** Fetch and display data for a single token */
export async function runFetchTokenTest(acc, id) {
  console.clear();
  Blue(`Running TOKEN on ${getBlockchain()} ${getNetworkProvider()}`);
  Yellow("Enter token id:");
  const tokenId = id || (await answerOrDie("ID:"));
  Blue(`Fetching Token "${tokenId}"...`);

  await fetchToken(acc, tokenId)
    .then((token) => {
      iout("Fetched token", token);
      exitWithMsgs("Test complete! Exiting ...");
    })
    .catch((e) => {
      console.log({ e });
      exitWithMsgs("Token was not fetched");
    });
}
