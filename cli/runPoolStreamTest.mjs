import { subscribeToPoolStream, getPoolAnnouncer } from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  exitWithMsgs,
  Blue,
  Red,
  Yellow,
  iout,
  Green,
  answerOrDie
} from "./utils.mjs";

let exitTimeout;
let LIMIT = 10;
const TIMEOUT = 15;
const pools = new Set();

/** Attach to pool announcer and list a subset of pools */
export async function runPoolStreamTest(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getPoolAnnouncer()}`);
  Yellow("Start from now?");
  const seekNow = (await answerOrDie("y = yes; 'Enter' to skip")) === "y";
  Yellow("Stop after how many? Enter a number:");
  const hmPrompt = `[ press 'Enter' to default to 10 ]`;
  LIMIT = (await answerOrDie(hmPrompt)) || 10;

  Blue(`Attaching pool listener ...`);
  subscribeToPoolStream(acc, {
    onPoolReceived: (msg) => {
      Blue("* Received [poolId, tokenA, tokenB]");
      Green(`\t ${JSON.stringify(msg)}`);
      resetTimer();
    },
    onPoolFetched,
    seekNow,
    includeTokens: true
  });
  Blue(`Listening for up to ${LIMIT} pools.`);
  resetTimer();
}

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onPoolFetched({ succeeded, poolAddress, data, message }) {
  if (pools.size >= LIMIT) return stopTest();
  if (!succeeded) return Red(`(${poolAddress}) ${message}`);
  if (!data.tradeable) return Red("Untradeable pool " + poolAddress);

  pools.add(poolAddress);
  Blue(`\t * Got "${poolAddress}" (${pools.size} of ${LIMIT})`);
  iout(poolAddress, data.pool);
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
  exitWithMsgs(`Timer stopped: listed ${pools.size} pools. Exiting ...`);
}
