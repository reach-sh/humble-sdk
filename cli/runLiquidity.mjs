import {
  createReachAPI,
  fetchLiquidityPool,
  tokenBalance
} from "@reach-sh/humble-sdk";
import { runAddLiquidity } from "./runLiquidity.Add.mjs";
import { runWithdrawLiquidity } from "./runLiquidity.Withdraw.mjs";
import { createPoolMigrator } from "./runLiquidityMigratorTest.mjs";
import {
  answerOrDie,
  exitWithMsgs,
  Blue,
  Green,
  Yellow,
  fromArgs,
  Red,
  rerunOrExit
} from "./utils.mjs";

const isNetworkToken = (v) => [0, "0"].includes(v);
const actions = ["add", "withdraw", "migrate"];

/** Run Add/Withdraw Liquidity Tests */
export async function runLiquidity(acc) {
  console.clear();
  Blue("Running LIQUIDITY");
  const redo = () =>
    rerunOrExit({
      do: () => runLiquidity(acc),
      prompt: "Re-run Pool Liquidity suite?"
    });

  const poolResult = await fetchLPool(acc, process.argv.slice(2));
  if (!poolResult.succeeded) return exitWithMsgs(poolResult.message);

  const { tokens, pool } = poolResult.data;
  const [tokenIn, tokenOut] = tokens;
  const [tokenA, tokenB] = [tokenIn.symbol, tokenOut.symbol];
  const poolAddress = pool.poolAddress;
  const poolName = `${tokens[0].symbol}/${tokens[1].symbol}`;

  Green(poolResult.message || `Fetched ${poolName} pool`);
  // Get user action
  Yellow("Are you adding, withdrawing, or migrating?");
  actions.forEach((a, i) => Blue(`${i + 1}. ${a}`));
  const action = await answerOrDie(`Enter selection (number):`);
  const index = Number(action) - 1;

  if (index === 2) return createPoolMigrator(acc);

  // Add Liquidity options
  if (index === 0) {
    Yellow("Getting deposit amounts ...");
    const amtPrompt = `How much ${tokenA} will you deposit?`;
    const amountA = await answerOrDie(amtPrompt);
    const addOpts = {
      amountA,
      poolAddress,
      tokenIn: tokenIn.id,
      tokenOut: tokenOut.id
    };
    await runAddLiquidity(acc, addOpts, poolResult);
    return redo();
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
        : "Enter amount of LP Tokens you will return:";
    const p = await answerOrDie(withdrawPrompt);
    if (actionPrompt === "1") {
      withdrawOpts.percentToWithdraw = p.replace("%", "");
    } else withdrawOpts.exchangeLPTokens = p;

    await runWithdrawLiquidity(acc, withdrawOpts, poolResult);
    return redo();
  }

  // No action match
  const expected = actions.map((_, i) => i).join(", ");
  Red(`Invalid action "${action}": expected one of "${expected}"`);

  return redo();
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
    : (await answerOrDie(
        `Does pool ${poolAddress} contain ${net}? [ y/n ]`
      )) === "y";

  //  Fetch pool
  Yellow(`* Fetching pool "${poolAddress}"`);
  const fetchOpts = {
    includeTokens: true,
    poolAddress,
    n2nn,
    onProgress: Yellow
  };
  const poolResult = await fetchLiquidityPool(acc, fetchOpts);
  const { succeeded, message } = poolResult;
  if (!succeeded) return exitWithMsgs(JSON.stringify(message));
  return poolResult;
}
