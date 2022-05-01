import {
  addLiquidity,
  calculateOtherAmount,
  createReachAPI,
  fetchPool,
  withdrawLiquidity,
} from "@reach-sh/humble-sdk";
import {
  answerOrDie,
  exitWithMsgs,
  iout,
  parseAddress,
  Blue,
  Green,
  Yellow,
  fromArgs,
  Red,
} from "./utils.mjs";

const isNetworkToken = (v) => [0, "0"].includes(v);
const actions = ["add", "withdraw"];

/** Run Add/Withdraw Liquidity Tests */
export async function runLiquidity(acc, opts) {
  Blue("Running LIQUIDITY");

  const poolResult = await fetchLPool(acc, process.argv.slice(2));
  if (!poolResult.succeeded) return exitWithMsgs(poolResult.message);

  const { tokens, pool } = poolResult.data;
  const [tokenIn, tokenOut] = tokens;
  const [tokenA, tokenB] = [tokenIn.symbol, tokenOut.symbol];
  const poolAddress = pool.poolAddress;
  const poolName = `${tokens[0].symbol}/${tokens[1].symbol}`;
  Green(poolResult.message || `Fetched ${poolName} pool`);

  // Get user action
  Yellow("Are you adding or withdrawing?");
  actions.forEach((a, i) => Blue(`${i + 1}. ${a}`));
  const action = await answerOrDie(`Enter selection (number):`);
  const index = Number(action) - 1;

  // Add Liquidity options
  if (index === 0) {
    Yellow("Getting deposit amounts ...");
    Blue(`${tokenB} amount will be calculated for you`);
    const amtPrompt = `How much ${tokenA} will you deposit?`;
    const amountA = await answerOrDie(amtPrompt);
    const addOpts = {
      amountA,
      poolAddress,
      tokenIn: tokenIn.id,
      tokenOut: tokenOut.id,
    };
    return runAddLiquidity(acc, addOpts, poolResult);
  }

  //  Withdraw Liquidity options
  if (index === 1) {
    Yellow("Withdraw a percent or exchange an amount of LP Tokens?");
    Blue("1. Enter percentage");
    Blue("2. Enter amount of LP tokens to exchange");
    const withdrawOpts = { poolAddress };
    const actionPrompt = await answerOrDie("Enter [ 1 ] or [ 2 ]");
    const withdrawPrompt =
      actionPrompt === "1"
        ? "Enter percentage of liquidity to withdraw:"
        : "Enter amount of liquidity tokens you will deposit:";
    const p = await answerOrDie(withdrawPrompt);
    if (actionPrompt === "1") {
      withdrawOpts.percentToWithdraw = p.replace("%", "");
    } else withdrawOpts.exchangeLPTokens = p;

    return runWithdrawLiquidity(acc, withdrawOpts, poolResult);
  }

  // No action match
  const expected = actions.map((_, i) => i).join(", ");
  const e = `Invalid action "${action}": expected one of "${expected}"`;
  return exitWithMsgs(e);
}

/** Add Liquidity to a pool */
async function runAddLiquidity(acc, opts, poolFetchData) {
  Blue(`\t * Running ADD-LIQUIDITY (pool "${opts.poolAddress}")`);

  const { amountA, tokenIn, tokenOut } = opts;
  const { data, contract } = poolFetchData;
  const { pool } = data;
  const { poolAddress, tokenAId, tokenBId } = pool;
  const tokenIds = [tokenAId, tokenBId];
  const label = "* Input args:";
  const amountB =
    pool.tokenBBalance === "0"
      ? await answerOrDie("Enter deposit amount for Token B:")
      : calculateOtherAmount(amountA, tokenIn, pool);

  const amounts = [amountA, amountB];
  if (parseAddress(tokenIn) === tokenBId) {
    tokenIds.reverse();
    amounts.reverse();
  }

  const args = {
    amountA: amounts[0],
    tokenIn: tokenIds[0],
    amountB: amounts[1],
    tokenOut: tokenIds[1],
  };

  //   Deposit
  Yellow(`Depositing to pool "${poolAddress}"`);
  Blue(`\t Pool ${JSON.stringify(pool, null, 2)}`);
  Blue(`\t ${label} ${JSON.stringify(args, null, 2)}`);
  const {
    succeeded,
    message,
    data: addResult,
  } = await addLiquidity(acc, {
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
    poolTokenId: pool.poolTokenId,
  });

  if (!succeeded) return exitWithMsgs(message);

  Blue("Withdraw successful!");
  iout(message || "Withdraw successful", data || "(no data)");
  return exitWithMsgs("'Withdraw Liquidity' test complete");
}

/** Fetch pool data */
async function fetchLPool(acc, args) {
  const reach = createReachAPI();
  const net = reach.connector;
  const poolAddress =
    fromArgs(args, "POOL") || (await answerOrDie("Enter pool address"));
  const n2nnArgs = fromArgs(args, "N2NN");
  const n2nn = n2nnArgs
    ? n2nnArgs === "1"
    : (await answerOrDie(`Does pool contain ${net}? [ y/n ]`)) === "y";

  //  Fetch pool
  Yellow(`* Fetching pool "${poolAddress}"`);
  const fetchOpts = { n2nn, onProgress: Yellow };
  const poolResult = await fetchPool(acc, poolAddress, fetchOpts);
  const { succeeded, message } = poolResult;
  if (!succeeded) return exitWithMsgs(JSON.stringify(message));
  return poolResult;
}
