import {
  addLiquidity,
  calculateAmountIn,
  fetchPool,
  withdrawLiquidity,
} from "../lib/index.js";
import { exitWithMsgs, iout, parseAddress, Blue, Yellow } from "./utils.mjs";

const isNetworkToken = (v) => [0, "0"].includes(v);
const actions = ["add", "withdraw"];

/** Run Add/Withdraw Liquidity Tests */
export async function runLiquidity(acc, opts) {
  Blue("Running LIQUIDITY");
  const { action, amountIn, poolAddress, tokenIn, tokenOut } = opts;
  const expected = actions.join(", ");
  if (!actions.includes(action)) {
    const e = `Invalid action "${action}": expected one of "${expected}"`;
    return exitWithMsgs(e);
  }

  //  Fetch pool
  Yellow(`* Fetching pool "${poolAddress}"`);
  const fetchOpts = {
    n2nn: [parseAddress(tokenIn), parseAddress(tokenOut)].some(isNetworkToken),
    onProgress: Yellow,
  };
  const poolResult = await fetchPool(acc, poolAddress, fetchOpts);
  const { succeeded, message } = poolResult;
  if (!succeeded) return exitWithMsgs(JSON.stringify(message));

  //  Route to correct test
  if (action === actions[0]) return runAddLiquidity(acc, opts, poolResult);
  if (action === actions[1]) return runWithdrawLiquidity(acc, opts, poolResult);
}

/** Add Liquidity to a pool */
async function runAddLiquidity(acc, opts, poolFetchData) {
  Blue(`\t * Running ADD-LIQUIDITY (pool "${opts.poolAddress}")`);

  const { amountIn: amountA, tokenIn, tokenOut } = opts;
  const { data, contract } = poolFetchData;
  const { pool } = data;
  const { poolAddress, tokenAId, tokenBId } = pool;
  const tokenIds = [tokenAId, tokenBId];
  if (parseAddress(tokenIn) === tokenBId) tokenIds.reverse();

  const label = "* Input args:";
  const args = {
    amountA,
    tokenIn: tokenIds[0],
    amountB: calculateAmountIn(amountA, tokenIn, pool),
    tokenOut: tokenIds[1],
  };
  Blue(`${label} ${JSON.stringify(args, null, 2)}`);

  //   Deposit
  Yellow(`Depositing to pool "${poolAddress}"`);
  const amounts = [args.amountA, args.amountB];
  const p = parseAddress;
  if (p(tokenIn) === p(pool.tokenBId)) amounts.reverse();

  const { succeeded, message } = await addLiquidity(acc, {
    amounts,
    pool,
    contract,
    optInToLPToken: true,
    onProgress: Yellow,
  });

  if (succeeded) {
    Blue("Deposit complete!");
    iout(message, "(no data)");
    return exitWithMsgs("'Add Liquidity' Test complete");
  }

  exitWithMsgs(message);
}

/** Pull Liquidity from a pool */
async function runWithdrawLiquidity(acc, opts, poolFetchData) {
  Blue(`\t * Running WITHDRAW-LIQUIDITY (pool "${opts.poolAddress}")`);
  const { amountIn: percentToWithdraw } = opts;
  const { data: poolFetchResult, contract } = poolFetchData;
  const { pool } = poolFetchResult;
  const { succeeded, message, data } = await withdrawLiquidity(acc, {
    percentToWithdraw,
    contract,
    n2nn: pool.n2nn,
    onProgress: Yellow,
    poolAddress: pool.poolAddress,
    poolTokenId: pool.poolTokenId,
  });

  if (!succeeded) return exitWithMsgs(message);

  Blue("Withdraw successful!");
  iout(message || "Withdraw successful", data || "(no data)");
  return exitWithMsgs("'Withdraw Liquidity' test complete");
}
