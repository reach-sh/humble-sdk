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
  console.clear();
  Blue(`Running TOKEN`);
  const tokenId = id || (await answerOrDie("Enter token id:"));

  Yellow(`Fetching Token "${tokenId}"...`);
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
