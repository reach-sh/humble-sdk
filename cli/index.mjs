import {
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI,
} from "@reach-sh/humble-sdk";
import { loadStdlib } from "@reach-sh/stdlib";
import {
  Blue,
  Green,
  Yellow,
  fromArgs,
  getAccountFromArgs,
  iout,
  exitWithMsgs,
  answerOrDie,
} from "./utils.mjs";
import { runFetchPoolTest } from "./runFetchPoolTest.mjs";
import { runFetchTokenTest } from "./runFetchTokenTest.mjs";
import { runAnnouncerTest } from "./runAnnouncerTest.mjs";
import { runSwapTest } from "./runSwapTest.mjs";
import { runLiquidity } from "./runLiquidity.mjs";
import { runCreatePoolTest } from "./runCreatePoolTest.mjs";

// init SDK
initHumbleSDK({ network: "TestNet" });

const reach = createReachAPI();
const options = [
  { title: "List Pools", action: runAnnouncerTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Create a Pool", action: runCreatePoolTest },
  { title: "Fetch a Pool", action: runFetchPoolTest },
  { title: "Fetch a Token", action: runFetchTokenTest },
  { title: "Swap tokens", action: runSwapTest },
];

(async () => {
  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const args = process.argv.slice(2);
  const acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);

  Yellow(`Select an option:\n`);
  options.map(({ title }, i) => Blue(`${i + 1}. ${title}`));
  console.log();
  const sIndex = await answerOrDie("Enter number for selection:");
  const index = Number(sIndex) - 1;
  if (index >= options.length || index < 0) {
    return exitWithMsgs("Exit: Invalid option selected");
  }

  const { action } = options[index];
  return action(acc);

  // /* "Swap" requires a list of commands to be present */
  // const swapArgs = await getSwapArgs(args);
  // const [poolAddress, n2nn] = [
  //   fromArgs(args, "POOL"),
  //   Boolean(fromArgs(args, "N2NN")),
  // ];

  // /* Check for LIQUIDITY (deposit/withdraw) flags in cli args */
  // const [tokenIn, amountIn, tokenOut] = swapArgs;
  // const liquidityArgs = [...swapArgs, fromArgs(args, "ACTION")];
  // const tokenId = fromArgs(args, "TOKEN");

  // switch (true) {
  //   case liquidityArgs.every(Boolean): {
  //     const action = liquidityArgs[liquidityArgs.length - 1];
  //     const lqOpts = { action, amountIn, poolAddress, tokenIn, tokenOut };
  //     return runLiquidity(acc, lqOpts);
  //   }

  //   /* Check for POOL flag in cli args */
  //   case Boolean(poolAddress):
  //     return poolAddress === "1"
  //       ? runCreatePoolTest(acc, n2nn)
  //       : runFetchPoolTest(acc, [poolAddress, n2nn]);

  //   /* Default to listing pools */
  //   default:
  //     return runAnnouncerTest(acc);
  // }
})();

/** Checks for SWAP flags */
async function getSwapArgs(args) {
  const isSwap = await answerOrDie("Are you swapping tokens? (y/n)");
  if (isSwap === "y") {
    const tokA = fromArgs(args, "TOKA") || (await answerOrDie("Enter token A"));
    const amtA =
      fromArgs(args, "AMTA") || (await answerOrDie("Enter amount A"));
    const tokB = fromArgs(args, "TOKB") || (await answerOrDie("Enter token B"));
    return [tokA, amtA, tokB];
  }

  return [];
}
