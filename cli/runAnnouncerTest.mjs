import { subscribeToPoolStream } from "humble-sdk";
import {
  Bright,
  exitWithMsgs,
  FgBlue,
  FgRed,
  FgYellow,
  iout,
} from "./utils.mjs";

let exitTimeout;
const LIMIT = 100;
const TIMEOUT = 10;
const pools = new Set();

/** Attach to pool announcer and list a subset of pools */
export function runAnnouncerTest(acc) {
  console.log(Bright(FgBlue(`Running ANNOUNCER`)));
  console.log(Bright(FgYellow(`Attaching pool listener ...`)));
  subscribeToPoolStream(acc, {
    onPoolReceived(msg) {
      Bright(FgBlue(msg));
    },

    onPoolFetched,
  });
  console.log(Bright(FgBlue(`Listening for up to ${LIMIT} pools.`)));
  resetTimer();
}

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onPoolFetched({ succeeded, poolAddress, data, message }) {
  if (pools.size >= LIMIT) return;
  if (!succeeded) return console.log(Bright(FgRed(message)));

  pools.add(poolAddress);
  iout(`\t * Fetched "${poolAddress}" (${pools.size} of ${LIMIT})`, data.pool);
  resetTimer();
}

/** HELPER | Restart Pool Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
  const m = `\t * Auto-timeout in ${TIMEOUT}s`;
  console.log(Bright(FgBlue(m)));
}

/** End CLI */
export function stopTest() {
  clearTimeout(exitTimeout);
  exitWithMsgs("Timer stopped. Exiting ...");
}
