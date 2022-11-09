import { subscribeToFarmStream } from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  exitWithMsgs,
  Blue,
  Red,
  Yellow,
  iout,
  answerOrDie
} from "./utils.mjs";

let exitTimeout;
let LIMIT = 10;
const TIMEOUT = 15;

/** Attach to farm announcer and list a subset of pools */
export async function runFarmStreamTest(acc) {
  console.clear();
  Blue(`Running FARM ANNOUNCER TEST`);
  Yellow(`Attaching Farm listener ...`);

  const hmPrompt = `Stop after how many? (Leave blank to default to 10)`;
  const howMany = (await answerOrDie(hmPrompt)) || 10;
  LIMIT = howMany;

  const seekNow = await answerOrDie("Start from now? (y/n)", yesno);
  subscribeToFarmStream(acc, {
    includePublicFarms: true,
    onFarmFetched,
    format: true,
    seekNow,
    onProgress: seekNow ? Yellow : undefined
  });
  Blue(`Listening for up to ${LIMIT} farms.`);
  resetTimer();
}

let farmsFetched = 0;

/** HELPER | When a farm is received, fetch details and reset the timer */
async function onFarmFetched({ succeeded, poolAddress, data, message }) {
  if (!succeeded) return Red(message);

  farmsFetched += 1;
  Blue(`\t * Got "${data.ctcInfo}"`);
  iout(data.ctcInfo, data);
  resetTimer();
}

/** HELPER | Restart Pool Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
  Blue(`\t * Auto-timeout in ${TIMEOUT}s`);
}

/** End CLI */
function stopTest() {
  clearTimeout(exitTimeout);
  const fetched = farmsFetched;
  farmsFetched = 0;
  exitWithMsgs(`Timer stopped: got ${fetched} farms. Exiting ...`);
}
