import {
  checkRewardsAvailableAt,
  fetchFarmAndTokens,
  fetchLiquidityPool,
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
export async function runCheckRewardsTest(acc) {
  console.clear();
  Blue(`Running CHECK-STAKING-REWARDS`);

  const addr =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter pool address:"));

  if (!addr) return exitWithMsgs("POOL address required but not found");

  Yellow(`Fetching single pool "${addr}"...`);

  const result = await checkRewardsAvailableAt(acc, {
    poolAddress: addr,
    onProgress,
  });

  iout(result.message, result.data);
  exitWithMsgs("Test complete! Exiting ...");
}
