import {
  subscribeToPoolStream,
  getPoolAnnouncer,
  getAnnouncers,
  subscribeToLimitOrders
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  exitWithMsgs,
  Blue,
  Red,
  Yellow,
  iout,
  Green,
  answerOrDie,
  onProgress
} from "./utils.mjs";

let exitTimeout;
let LIMIT = 10;
const TIMEOUT = 15;
const orders = new Set();

/** Attach to pool announcer and list a subset of pools */
export async function runLimitOrderStreamTest(acc) {
  console.clear();
  const loAnnouncer = getAnnouncers().limitOrderAnnouncer;
  Blue(`Running LIMIT-ORDER ANNOUNCER ${loAnnouncer}`);
  const seekNow = (await answerOrDie("Start from now? (y/n)")) === "y";

  Yellow("Stop after how many?");
  const hmPrompt = `Enter limit (Leave blank to default to 10)`;
  LIMIT = Number(await answerOrDie(hmPrompt)) || 10;
  if (isNaN(LIMIT)) {
    Red("Invalid limit specified: reverting to default '10'");
    LIMIT = 10;
  }

  Blue(`Attaching LIMIT-ORDER listener ...`);
  subscribeToLimitOrders(acc, {
    onOrderReceived(order) {
      iout(order.creator, order);
      resetTimer();
    },
    onOrderFetched,
    seekNow,
    includeAll: true,
    includeTokens: true,
    onProgress: Yellow
  });
  Blue(`Listening for up to ${LIMIT} pools.`);
  resetTimer();
}

/** HELPER | When an order is received reset the timer */
async function onOrderFetched({ succeeded, contractId, data, message }) {
  if (orders.size >= LIMIT) return stopTest();
  if (!succeeded) return Red(`(${contractId}) ${message}`);
  if (data.error) return Red(`(${contractId} error): ${JSON.stringify(data)}`);

  orders.add(contractId);
  Blue(`\t * Got "${contractId}" (${orders.size} of ${LIMIT})`);
  iout(contractId, data);
  resetTimer();
}

/** HELPER | Restart Limit Order Listener timer (TEST only) */
function resetTimer() {
  if (exitTimeout) clearTimeout(exitTimeout);
  exitTimeout = setTimeout(stopTest, TIMEOUT * 1000);
  Blue(`\t * Auto-timeout in ${TIMEOUT}s`);
}

/** End CLI */
function stopTest() {
  clearTimeout(exitTimeout);
  exitWithMsgs(`Timer stopped: fetched ${orders.size} orders. Exiting ...`);
}
