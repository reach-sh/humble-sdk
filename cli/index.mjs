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
  console.clear();

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
