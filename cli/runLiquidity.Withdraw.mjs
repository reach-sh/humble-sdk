import { withdrawLiquidity } from "@reach-sh/humble-sdk";
import { iout, Blue, Green, Yellow, Red, rerunOrExit } from "./utils.mjs";

/** Pull Liquidity from a pool */
export async function runWithdrawLiquidity(acc, opts, poolFetchData) {
  Blue(`\t * Running WITHDRAW-LIQUIDITY (pool "${opts.poolAddress}")`);
  const { percentToWithdraw, exchangeLPTokens } = opts;
  const { data: poolFetchResult, contract } = poolFetchData;
  const { pool } = poolFetchResult;
  const { succeeded, message, data } = await withdrawLiquidity(acc, {
    exchangeLPTokens,
    percentToWithdraw,
    contract,
    n2nn: pool.n2nn,
    onProgress: Yellow,
    poolAddress: pool.poolAddress,
    poolTokenId: pool.poolTokenId
  });

  if (!succeeded) {
    Red(`Withdraw failed: ${message}`);
    Blue("'Withdraw Liquidity' test complete");
  } else {
    Green("Withdraw successful!");
    iout(message || "Withdraw successful", data || "(no data)");
    Blue("'Withdraw Liquidity' test complete");
  }
}
