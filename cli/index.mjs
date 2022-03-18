import {
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI,
} from "../lib/index.js";
import {
  Blue,
  Green,
  Yellow,
  fromArgs,
  getAccountFromArgs,
  iout,
  exitWithMsgs,
} from "./utils.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { runFetchPoolTest } from "./runFetchPoolTest.mjs";
import { runFetchTokenTest } from "./runFetchTokenTest.mjs";
import { runAnnouncerTest } from "./runAnnouncerTest.mjs";
import { runSwapTest } from "./runSwapTest.mjs";
import { runLiquidity } from "./runLiquidity.mjs";

// init SDK
initHumbleSDK({
  providerEnv: {
    ALGO_INDEXER_SERVER: "https://algoindexer.testnet.algoexplorerapi.io",
    ALGO_SERVER: "https://node.testnet.algoexplorerapi.io",
    ALGO_TOKEN: "".padEnd(64, "a"),
    ALGO_INDEXER_TOKEN: "".padEnd(64, "a"),
  },
});
const reach = createReachAPI();

(async () => {
  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Creating account ...`);
  const args = process.argv.slice(2);
  const acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}`);

  /* "Swap" requires a list of commands to be present */
  const swapArgs = getSwapArgs(args);
  const [poolAddress, n2nn] = [
    fromArgs(args, "POOL"),
    Boolean(fromArgs(args, "N2NN")),
  ];

  /* Check for LIQUIDITY (deposit/withdraw) flags in cli args */
  const [tokenIn, amountIn, tokenOut] = swapArgs;
  const liquidityArgs = [...swapArgs, fromArgs(args, "ACTION")];
  const tokenId = fromArgs(args, "TOKEN");

  switch (true) {
    case liquidityArgs.every(Boolean): {
      const action = liquidityArgs[liquidityArgs.length - 1];
      const lqOpts = { action, amountIn, poolAddress, tokenIn, tokenOut };
      return runLiquidity(acc, lqOpts);
    }

    /* Check for SWAP flags */
    case swapArgs.every(Boolean):
      return runSwapTest(acc, [...swapArgs, poolAddress]);

    /* Check for TOKEN flag in cli args */
    case Boolean(tokenId):
      return runFetchTokenTest(acc, tokenId);

    /* Check for POOL flag in cli args */
    case Boolean(poolAddress):
      return runFetchPoolTest(acc, [poolAddress, n2nn]);

    /* Default to listing pools */
    default:
      return runAnnouncerTest(acc);
  }
})();

/** Checks for SWAP flags */
function getSwapArgs(args) {
  return [
    fromArgs(args, "TOKA"),
    fromArgs(args, "AMTA"),
    fromArgs(args, "TOKB"),
  ];
}
