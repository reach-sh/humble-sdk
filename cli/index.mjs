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
  answerOrDie,
  Red
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
import selectAction from "./selectAction.mjs";
import { sandbox } from "./runSandbox.mjs";

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
const RunSandbox = {
  title: "Run Sandbox",
  action: sandbox
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
  CreateFarmAnnouncer,
  RunSandbox
];

let acc;

/** Main script */
async function main() {
  console.clear();
  // Allow overrides
  Yellow("Override HumbleSDK options? [y/n]");
  Blue("Enter 'y' to override, or press Enter to skip");
  const shouldOverride = await answerOrDie("Override?: (press enter to skip)");
  if (shouldOverride === "y") await overrideSDKNetwork();

  // Start
  initHumbleSDK(humbleOpts);

  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const reach = createReachAPI();
  const args = process.argv.slice(2);
  acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);

  selectAction(sections, acc);
}

/** Override SDK from command line */
async function overrideSDKNetwork() {
  Yellow("Select a network (enter option number):");
  Blue("Press Enter to select default (testnet)");
  const changeNetwork = (k) => {
    humbleOpts.network = opts[k].value || "TestNet";
    if (k === 1) humbleOpts.contractOverrides = pubTestnet;
  };
  const opts = [
    { name: "TESTNET (local - default)", value: "TestNet" },
    { name: "TestNet (public)", value: "TestNet" },
    { name: "MainNet", value: "MainNet" }
  ];

  opts.map(({ name }, i) => Blue(`${i + 1}. ${name}`));
  const prompt = await answerOrDie("Enter number for selection:");
  const nPr = Number(prompt);
  if (nPr === 0) return doOverride(nPr);
  if (isNaN(nPr) || nPr > opts.length || nPr < 0) return doOverride(0);
  changeNetwork(nPr - 1);

  if ((await answerOrDie("Use AlgoExplorer?")) === "y") {
    const network = humbleOpts.network.toLowerCase();
    const $at = network === "mainnet" ? "" : `${network}.`;
    humbleOpts.providerEnv = {
      ALGO_INDEXER_SERVER: `https://algoindexer.${$at}algoexplorerapi.io/`,
      ALGO_SERVER: `https://node.${$at}algoexplorerapi.io/`
    };
  }
}

// Run main script
main();
