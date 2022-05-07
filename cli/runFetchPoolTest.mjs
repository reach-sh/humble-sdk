import { fetchLiquidityPool } from "@reach-sh/humble-sdk";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
} from "./utils.mjs";

/** Fetch a single pool */
export async function runFetchPoolTest(acc, [info, isN2nn]) {
  console.clear();
  Blue(`Running LIQUIDITY-POOL-FETCH`);

  const isNetworkPrompt = "Does the pool contain ALGO or ETH?";
  const n2nn = isN2nn || (await answerOrDie(isNetworkPrompt));
  const addr = info || (await answerOrDie("Enter pool address:"));
  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);
  iout("Fetched pool", await fetchLiquidityPool(acc, addr, { onProgress, n2nn }));
  exitWithMsgs("Test complete! Exiting ...");
}
