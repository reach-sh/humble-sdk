import {
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI
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
  answerOrDie
} from "./utils.mjs";
import { runFetchPoolTest } from "./runFetchPoolTest.mjs";
import { runFetchTokenTest } from "./runFetchTokenTest.mjs";
import { runAnnouncerTest } from "./runAnnouncerTest.mjs";
import { runFarmAnnouncerTest } from "./runFarmAnnouncerTest.mjs";
import { runSwapTest } from "./runSwapTest.mjs";
import { runLiquidity } from "./runLiquidity.mjs";
import { runCreatePoolTest } from "./runCreatePoolTest.mjs";
import { runCreateFarmTest } from "./runCreateFarmTest.mjs";
import { runFetchFarmTest } from "./runFetchFarmTest.mjs";
import { runCheckRewardsTest } from "./runCheckRewardsTest.mjs";
import { runAnnounceFarmTest } from "./runAnnounceFarmTest.mjs";

// init SDK
initHumbleSDK({
  network: "TestNet",
  customFarmAnnouncerAddress: 100474119,
  customAnnouncerId: 93443561,
  customAnnouncerAddress:
    "XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE"
});

const reach = createReachAPI();
const options = [
  { title: "List Pools", action: runAnnouncerTest },
  { title: "List Farms", action: runFarmAnnouncerTest },
  { title: "Fetch a Token", action: runFetchTokenTest },
  { title: "Swap tokens", action: runSwapTest },
  { title: "Create a Liquidity Pool", action: runCreatePoolTest },
  { title: "Fetch a Liquidity Pool", action: runFetchPoolTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Create a Farm", action: runCreateFarmTest },
  { title: "Fetch a Farm", action: runFetchFarmTest },
  { title: "Announce a Farm", action: runAnnounceFarmTest },
  { title: "Check Staking rewards", action: runCheckRewardsTest }
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
