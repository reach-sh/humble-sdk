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
import { runStakeToFarmTest } from "./runStakeToFarmTest.mjs";
import dotenv from "dotenv";
import { runPoolReport } from "./runPoolReportTest.mjs";
import { createFarmAnnouncer } from "./runCreateFarmAnnouncer.mjs";
import { runCheckPartnerFarmTest } from "./runCheckPartnerFarmTest.mjs";

dotenv.config({ path: "./.env" });

// init SDK
const TK = process.env.ALGONODE_TOKEN;
initHumbleSDK({
  network: "TestNet",
  providerEnv: { ALGO_TOKEN: TK, ALGO_INDEXER_TOKEN: TK },
  contractOverrides: {
    protocolId: 93443561,
    protocolAddress:
      "XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE",
    partnerFarmAnnouncerId: 100474119
  }
});

const reach = createReachAPI();
const CreateFarmAnnouncer = {
  title: "Create Farm Announcer (Requires funded account)",
  action: createFarmAnnouncer
};
const poolActions = [
  { title: "List Pools", action: runAnnouncerTest },
  { title: "Create a Liquidity Pool", action: runCreatePoolTest },
  { title: "Fetch a Liquidity Pool", action: runFetchPoolTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Pools CSV Report", action: runPoolReport }
];
const farmActions = [
  { title: "List Farms", action: runFarmAnnouncerTest },
  { title: "Fetch a Farm", action: runFetchFarmTest },
  { title: "Check Staking rewards", action: runCheckRewardsTest },
  { title: "Stake Funds in farm", action: runStakeToFarmTest },
  { title: "Check for Partner Farm", action: runCheckPartnerFarmTest },
  { title: "Create a Farm", action: runCreateFarmTest },
  { title: "Announce a Farm", action: runAnnounceFarmTest },
  CreateFarmAnnouncer
];
const tokenActions = [
  { title: "Fetch a Token", action: runFetchTokenTest },
  { title: "Swap tokens", action: runSwapTest }
];
const options = [...poolActions, ...farmActions, ...tokenActions];
const sections = [
  { title: "Liquidity Pools", action: () => selectAction(poolActions) },
  { title: "Farms", action: () => selectAction(farmActions) },
  { title: "Tokens (swap/fetch)", action: () => selectAction(tokenActions) },
  CreateFarmAnnouncer
];

let acc;

/** Main script */
async function main() {
  console.clear();

  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const args = process.argv.slice(2);
  acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);

  selectAction(sections);
}

/** Select and perform an action from a list */
async function selectAction(opts) {
  Yellow(`Select an option:\n`);
  opts.map(({ title }, i) => Blue(`${i + 1}. ${title}`));
  console.log();
  const sIndex = await answerOrDie("Enter number for selection:");
  const index = Number(sIndex) - 1;
  if (index >= opts.length || index < 0) {
    return exitWithMsgs("Exit: Invalid option selected");
  }

  const { action } = opts[index];
  return action(acc);
}

// Run main script
main();
