import { fetchPool, performSwap } from "humble-sdk";
import { calculatePriceImpact, calculateTokenSwap } from "humble-sdk";
import { stopTest } from "./runAnnouncerTest.mjs";
import {
  exitWithMsgs,
  Blue,
  Yellow,
  Green,
  fromArgs,
  onProgress,
  Red,
  iout,
} from "./utils.mjs";

const isNetworkToken = (v) => [0, "0"].includes(v);

/** Swap between two tokens in the command line */
export async function runSwapTest(
  acc,
  [tokenAId, amountA, tokenBId, poolAddress]
) {
  const args = process.argv.slice(2);
  Blue(`Running SWAP test on pool "${poolAddress}"`);

  // Fetch pool (delegate logging)
  const n2nn = [tokenAId, tokenBId].some(isNetworkToken);
  const { pool, contract } = await fetchSwapPool(acc, poolAddress, n2nn);

  // Calculate price impact
  let swap = { amountA, tokenAId, tokenBId };
  const calcOpts = { pool, swap };
  const impact = calculatePriceImpact(swap.amountA, calcOpts);
  if (Number(impact) < 3) Green(`* Price impact: ${impact}`);
  else Red(`* Price impact: ${impact}`);

  // Calculate expected swap output
  swap = calculateTokenSwap(calcOpts);
  Blue(`* Expected out: ${JSON.stringify(swap, null, 2)}`);

  // Perform swap
  Yellow(`Swapping in pool "${poolAddress}" ... `);
  const { data, message, succeeded } = await performSwap(acc, {
    poolAddress,
    contract,
    swap,
    pool,
    onProgress,
  });

  const out = { poolAddress, data, message };
  if (succeeded) iout(`* Swap complete!`, out);
  else Red(`* Swap failed: ${JSON.stringify(out, null, 2)}`);

  // Exit
  stopTest();
}

/** Helper | Fetch target pool for swap */
async function fetchSwapPool(acc, poolAddress, n2nn) {
  Yellow(`Fetching pool "${poolAddress}"`);
  const opts = { n2nn, onProgress };
  const res = await fetchPool(acc, poolAddress, opts);
  const { succeeded, data, message, contract } = res;
  if (!succeeded) return exitWithMsgs(message);

  const { pool, tradeable } = data;
  if (!tradeable) return exitWithMsgs("Pool is partially or completely empty");

  Blue("* Got pool");
  JSON.stringify(pool, null, 2);
  return { pool, contract };
}
