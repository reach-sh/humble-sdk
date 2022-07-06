import {
  fetchLiquidityPool,
  subscribeToPoolStream,
  getPoolAnnouncer,
  createReachAPI,
} from "@reach-sh/humble-sdk";
import { exitWithMsgs, Blue, Red, Yellow, iout, Green } from "./utils.mjs";

let exitTimeout;
const LIMIT = 3;
const TIMEOUT = 15;
const pools = new Set();

/** Attach to pool announcer and list a subset of pools */
export function runAnnouncerTest(acc) {
  console.clear();
  Blue(`Running ANNOUNCER ${getPoolAnnouncer()}`);
  Yellow(`Attaching pool listener ...`);
  subscribeToPoolStream(acc, {
    includeTokens: true,
    onPoolReceived: (msg) => {
      if (msg[2] === 470842789) return listenTo(msg[0], acc);

      //   Blue("* Received [poolId, tokenA, tokenB]");
      //   Green(`\t ${JSON.stringify(msg)}`);
      //   resetTimer();
    },
    onPoolFetched,
  });
  Blue(`Listening for up to ${LIMIT} pools.`);
  resetTimer();
}

async function listenTo(poolId, acc) {
  console.log(poolId);
  process.exit();

  const res = await fetchLiquidityPool(acc, {
    includeTokens: true,
    poolAddress: poolId,
    n2nn: true,
  });

  const stdlib = createReachAPI();
  const { contract } = res;
  const big = stdlib.bigNumberify(21958514);
  contract.events.Harvest.seek(big);
  contract.events.Harvest.monitor(({ when, what }) => {
    Blue("\tHarvest");
    console.log(what);
  });
  contract.events.Withdraw.seek(big);
  contract.events.Withdraw.monitor(({ when, what }) => {
    Blue("\tWithdraw");
    console.log(what);
  });
  contract.events.Deposit.seek(big);
  contract.events.Deposit.monitor(({ when, what }) => {
    Blue("\tDeposit");
    console.log(what);
  });
  contract.events.Swap.seek(big);
  contract.events.Swap.monitor(({ when, what }) => {
    Blue("\tSwap");
    console.log(what);
  });
}

/** HELPER | When a pool is received, fetch details and reset the timer */
async function onPoolFetched({
  contract,
  succeeded,
  poolAddress,
  data,
  message,
}) {
  if (pools.size >= LIMIT) return;
  if (!succeeded) return Red(message);
  if (!data.tradeable) return Red("Untradeable pool " + poolAddress);

  pools.add(poolAddress);
  Blue(`\t * Got "${poolAddress}" (${pools.size} of ${LIMIT})`);
  iout(poolAddress, data);
  iout("\tABI", contract.getABI());
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
