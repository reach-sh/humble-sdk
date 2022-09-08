import {
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI
} from "@reach-sh/humble-sdk";
import { loadStdlib } from "@reach-sh/stdlib";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import dotenv from "dotenv";
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
import { runPoolReport } from "./runPoolReportTest.mjs";
import { createFarmAnnouncer } from "./runCreateFarmAnnouncer.mjs";
import { runCheckPartnerFarmTest } from "./runCheckPartnerFarmTest.mjs";
import { createTokenMetadata } from "./createTokenMedata.mjs";

dotenv.config({ path: "./.env" });

const TK = process.env.ALGONODE_TOKEN;
const humbleOpts = {
  network: "TestNet",
  providerEnv: { ALGO_TOKEN: TK, ALGO_INDEXER_TOKEN: TK }
};
const pubTestnet = {
  protocolId: 93443561,
  protocolAddress: "XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE",
  partnerFarmAnnouncerId: 100474119
};

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
  { title: "Swap tokens", action: runSwapTest },
  { title: "Create JSON Metadata", action: createTokenMetadata }
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
  // Allow overrides
  Yellow("Override HumbleSDK options? (Defaults to local testnet) [y/n]");
  const shouldOverride = await answerOrDie("Enter y/n or press enter to skip");
  if (shouldOverride === "y") await overrideSDKNetwork();

  // Start
  initHumbleSDK(humbleOpts);

  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const reach = createReachAPI();
  const args = process.argv.slice(2);
  acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);

  selectAction(sections);
}

/** Override SDK from command line */
async function overrideSDKNetwork() {
  Yellow("Select a network (enter option number):");
  const opts = [
    { name: "TestNet (local)", value: "TestNet" },
    { name: "TestNet (public)", value: "TestNet" },
    { name: "MainNet", value: "MainNet" }
  ];
  const prompt = await answerOrDie(
    opts.map((o, i) => `${i + 1}. ${o.name}`).join("\n")
  );
  const key = Number(prompt) - 1;
  if (isNaN(key) || key >= opts.length) {
    return exitWithMsgs("Invalid network selection. Exiting ...");
  }

  humbleOpts.network = opts[key].value || "TestNet";
  if (key === 1) humbleOpts.contractOverrides = pubTestnet;
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
