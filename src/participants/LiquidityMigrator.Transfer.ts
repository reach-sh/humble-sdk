import { addLiquidity } from "../contracts";
import { LiquidityMigratorOpts } from "../build/backend";
import { ReachAccount } from "../reach-helpers";
import { ReachTxnOptsCore } from "../types";
import { errorResult, isNetworkToken, successResult } from "../utils";
import { calculateOtherAmount } from "../utils/utils.swap";
import { noOp } from "../utils/utils.reach";
import createLiquidityExtractor, {
  ExtractorOpts
} from "./LiquidityMigrator.Withdraw";
import { fetchLiquidityPool } from "./PoolAnnouncer";

export type MigratorOpts = LiquidityMigratorOpts.Migrate & {
  n2nn: LiquidityMigratorOpts.N2NN;
} & ReachTxnOptsCore;

export default createLiquidityMigrator;

/**
 * Migrate Liquidity from an old to a new pool. This orchestrates the
 * `LiquidityMigrator.Withdraw` and `LiquidityProvider.Add` modules. It returns
 * the `A`, `B`, and Liquidity token amounts received after all operations.
 */
export async function createLiquidityMigrator(
  acc: ReachAccount,
  opts: MigratorOpts
) {
  const { onProgress = noOp, onComplete = noOp } = opts;
  let data = { lpTokens: "0", A: "0", B: "0" }; // response data

  // Fetch new pool
  onProgress("Fetching pool ...");
  const poolResult = await fetchLiquidityPool(acc, {
    n2nn: isNetworkToken(opts.tokA),
    poolAddress: opts.newPoolId,
    includeTokens: true
  });
  const { tokens, pool } = poolResult.data;
  if (!poolResult.succeeded || !pool || !Array.isArray(tokens)) {
    const err = `New Pool #${opts.newPoolId} was not found`;
    console.log("Migrator.FetchPool Error", err);
    return errorResult(err, opts.newPoolId, data, null, "contractId");
  }

  // Extract tokens
  const [tokA, tokB] = tokens;
  if (!tokA || !tokB) {
    const err = "One or more pool tokens were not found";
    console.log("Migrator.FetchPool Error", err);
    return errorResult(err, opts.oldPoolId, data, null, "contractId");
  }

  // Withdraw old liquidity (notifications handled externally)
  const poolName = `${tokA.symbol}/${tokB.symbol}`;
  const wOpts: ExtractorOpts = { ...opts, tokens: [tokA, tokB] };
  const wdResult = await createLiquidityExtractor(acc, wOpts);
  if (!wdResult.succeeded) {
    const { message, contract, contractId } = wdResult;
    return errorResult(message, contractId, data, contract, "contractId");
  } else {
    data.A = wdResult.data.A;
    data.B = wdResult.data.B;
  }

  // Halt if user will be charged more "B" than they got back
  onProgress(`Calculating new ${poolName} deposit amounts ...`);
  const { A, B } = wdResult.data;
  const newB = calculateOtherAmount(Number(A), tokA.id, pool);
  if (Number(newB) > Number(B)) {
    const err = "Withdrawal succeeded, but transfer failed due to slippage";
    console.log("Migrator.Migrate Error", err);
    return errorResult(err, opts.newPoolId, data, poolResult.contract);
  } else {
    // deduct user's deposit amounts from amounts received
    data.A = "0";
    data.B = (Number(B) - Number(newB)).toString();
  }

  // Deposit into new pool
  const optedIn = await acc.tokenAccepted(opts.newLpToken);
  const dpRresult = await addLiquidity(acc, {
    amounts: [A, newB],
    pool,
    contract: poolResult.contract,
    optInToLPToken: !optedIn,
    onProgress
  });
  if (!dpRresult.succeeded || !dpRresult.data.lpTokens) {
    const err = `Withdrawal succeeded, but deposit failed: ${dpRresult.message}`;
    console.log("Migrator.Deposit Error", err);
    return errorResult(err, opts.newPoolId, data, poolResult.contract);
  } else data.lpTokens = dpRresult.data.lpTokens?.toString();

  const msg = `Migrated ${poolName} liquidity to #${opts.newPoolId}`;
  const result = successResult(msg, opts.newPoolId, dpRresult.contract, data);
  onComplete(result);
  return result;
}
