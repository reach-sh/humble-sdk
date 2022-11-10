import {
  subscribeToPoolStream,
  getPoolAnnouncer,
  HUMBLE_LP_TOKEN_SYMBOL
} from "@reach-sh/humble-sdk";
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
const LIMIT = 250;
const TIMEOUT = 15;
const pools = new Set();
const headings = [
  "poolName",
  "poolAddress",
  "poolTokenId",
  "tokenAId",
  "tokenADecimals",
  "tokenABalance",
  "tokenBId",
  "tokenBDecimals",
  "tokenBBalance"
];

/** Attach to pool announcer and list a subset of pools */
export async function runPoolReport(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getPoolAnnouncer()}`);
  Yellow(`Attaching pool listener ...`);

  subscribeToPoolStream(acc, { onPoolFetched, includeTokens: true });
  Blue(`Listening for up to ${LIMIT} pools.`);
  console.log();
  Yellow(headings.join(","));
  resetTimer();
}

/** HELPER | When a pool is received, fetch details and reset the timer */
function tokenName(token) {
  const { symbol, name } = token;
  const invalid =
    symbol.startsWith("AF-POOL") ||
    [HUMBLE_LP_TOKEN_SYMBOL, "TMPOOL11"].includes(symbol);
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
  const d = headings.map((h) => (h === "poolName" ? poolName : data.pool[h]));
  Blue(d.join(","));
}

/** HELPER | Restart Pool Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
}

/** End CLI */
function stopTest() {
  clearTimeout(exitTimeout);
  exitWithMsgs(`Timer stopped: fetched ${pools.size} pools. Exiting ...`);
}
