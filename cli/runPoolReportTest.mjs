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
const LIMIT = 150;
const TIMEOUT = 15;
const pools = new Set();

/** Attach to pool announcer and list a subset of pools */
export async function runPoolReport(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getPoolAnnouncer()}`);
  Yellow(`Attaching pool listener ...`);
  const seekNow = await answerOrDie("Start from now? (y/n)", yesno);

  subscribeToPoolStream(acc, {
    onPoolFetched,
    seekNow,
    includeTokens: true
  });
  Blue(`Listening for up to ${LIMIT} pools.`);
  console.log();
  Yellow(
    `poolName,poolAddress,lpTokenId,tokenAId,tokenADecimals,tokenABalance,tokenBId,tokenBDecimals,tokenBBalance`
  );
  resetTimer();
}

/** HELPER | When a pool is received, fetch details and reset the timer */
function tokenName(token) {
  const { symbol, name } = token;
  const invalid =
    symbol.startsWith("AF-POOL") || ["HMBL2LT", "TMPOOL11"].includes(symbol);
  return invalid ? name : symbol;
}

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onPoolFetched({ succeeded, poolAddress, data, message }) {
  if (pools.size >= LIMIT) return stopTest();
  if (!succeeded) return;
  const { pool, tradeable, tokens } = data;
  if (!tradeable) return;

  pools.add(poolAddress);
  resetTimer();

  const poolName = `${tokenName(tokens[0])}/${tokenName(tokens[1])}`;
  const d = [
    poolName,
    data.pool.poolAddress,
    data.pool.poolTokenId,
    data.pool.tokenAId,
    data.pool.tokenADecimals,
    data.pool.tokenABalance,
    data.pool.tokenBId,
    data.pool.tokenBDecimals,
    data.pool.tokenBBalance
  ];

  Blue(d.join(","));
  // Blue(`\t * Got "${poolAddress}" (${pools.size} of ${LIMIT})`);
  // iout(poolAddress, data.pool);
}

/** HELPER | Restart Pool Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
  // Blue(`\t * Auto-timeout in ${TIMEOUT}s`);
}

/** End CLI */
function stopTest() {
  clearTimeout(exitTimeout);
  exitWithMsgs(`Timer stopped: fetched ${pools.size} pools. Exiting ...`);
}
