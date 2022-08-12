import { subscribeToFarmStream, getFarmAnnouncer } from "@reach-sh/humble-sdk";
import { exitWithMsgs, Blue, Red, Yellow, iout, Green } from "./utils.mjs";

let exitTimeout;
const LIMIT = 10;
const TIMEOUT = 15;
const farms = new Set();

/** Attach to farm announcer and list a subset of pools */
export function runFarmAnnouncerTest(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getFarmAnnouncer()}`);
  Yellow(`Attaching Farm listener ...`);
  subscribeToFarmStream(acc, {
    onFarmFetched,
    format: true
  });
  Blue(`Listening for up to ${LIMIT} farms.`);
  resetTimer();
}

/** HELPER | When a farm is received, fetch details and reset the timer */
async function onFarmFetched({ succeeded, poolAddress, data, message }) {
  if (!succeeded) return Red(message);

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
  exitWithMsgs("Timer stopped. Exiting ...");
}
