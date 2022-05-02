import { createLiquidityPool } from "@reach-sh/humble-sdk";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  Dim,
} from "./utils.mjs";

const splitInput = (i) => i.split(",").map((s) => s.trim());

/** Fetch a single pool */
export async function runCreatePoolTest(acc) {
  console.clear();
  Blue(`Running POOL-CREATE`);

  //   Get token Ids
  let prompt = `Enter comma-separated token Ids ("0" for network token)
  ${Dim(`Format: "XXX..., YYY..."`)}`;
  const tokenIdsInput = await answerOrDie(prompt);
  const tokenIds = splitInput(tokenIdsInput);
  const n2nn = tokenIds.some((s) => s === "0") ? "n2nn" : "non-network";

  //   Get token amounts
  prompt = `Enter comma-separated deposit amounts
  ${Dim(`Format: "100, 200"`)}`;
  const tokenAmountsIn = await answerOrDie(prompt);
  const tokenAmounts = splitInput(tokenAmountsIn);

  //   Check inputs
  console.log({ tokenIds, tokenAmounts });
  Blue(`Creating ${n2nn} pool`);

  //   Output result
  iout(
    "Fetched pool",
    await createLiquidityPool(acc, {
      tokenAmounts,
      tokenIds,
      onProgress: Yellow,
    })
  );

  exitWithMsgs("Test complete! Exiting ...");
}
