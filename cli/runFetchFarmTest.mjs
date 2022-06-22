import {
  fetchFarmAndTokens,
  fetchLiquidityPool,
  fetchStakingPool,
} from "@reach-sh/humble-sdk";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  fromArgs,
} from "./utils.mjs";

// Pool IDs
// 89038727 [ NEW ]
// 88045040, 88908491

/** Fetch a single staking pool (farm) */
export async function runFetchFarmTest(acc) {
  console.clear();
  Blue(`Running STAKING-FARM-FETCH`);

  const addr =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter pool address:"));

  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);

  const formatPrompt = "Format response? [ y/n ]";
  const formatResult = (await answerOrDie(formatPrompt)) === "y";
  const opts = { poolAddress: addr, onProgress, formatResult };

  const withTokensPrompt = "Fetch token data? [ y/n ]";
  const withTokens = (await answerOrDie(withTokensPrompt)) === "y";
  const result = withTokens
    ? await fetchFarmAndTokens(acc, opts)
    : await fetchStakingPool(acc, opts);
  iout(result.message, result.data);
  exitWithMsgs("Test complete! Exiting ...");
}
