import { subscribeToPoolStream } from "../lib/index.js";
import { exitWithMsgs, Blue, Red, Yellow, iout, Green } from "./utils.mjs";

let exitTimeout;
const LIMIT = 10;
const TIMEOUT = 15;
const pools = new Set();

/** Attach to pool announcer and list a subset of pools */
export function runAnnouncerTest(acc) {
  Blue(`Running ANNOUNCER`);
  Yellow(`Attaching pool listener ...`);
  subscribeToPoolStream(acc, {
    onPoolReceived: (msg) => {
      Blue("* Received [poolId, tokenA, tokenB]");
      Green(`\t ${msg}`);
      resetTimer();
    },
    onPoolFetched,
  });
  Blue(`Listening for up to ${LIMIT} pools.`);
  resetTimer();
}

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onPoolFetched({ succeeded, poolAddress, data, message }) {
  console.log("onPoolFetched");
  if (pools.size >= LIMIT) return;
  if (!succeeded) return Red(message);

  pools.add(poolAddress);
  iout(`\t * Fetched "${poolAddress}" (${pools.size} of ${LIMIT})`, data.pool);
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
