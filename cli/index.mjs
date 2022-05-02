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
  { title: "Create a Pool", action: runCreatePoolTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Swap tokens", action: runSwapTest },
  { title: "Fetch a Pool", action: runFetchPoolTest },
  { title: "Fetch a Token", action: runFetchTokenTest },
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
