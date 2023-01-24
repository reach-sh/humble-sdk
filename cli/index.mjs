import {
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI,
  getLegacyAnnouncers,
  BASE_VERSION
} from "@reach-sh/humble-sdk";
import { loadStdlib } from "@reach-sh/stdlib";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import dotenv from "dotenv";
import {
  Blue,
  Green,
  Red,
  Yellow,
  answerOrDie,
  exitWithMsgs,
  fromArgs,
  getAccountFromArgs,
  iout
} from "./utils.mjs";
import selectAction from "./selectAction.mjs";
import { sandbox } from "./runSandbox.mjs";
import poolActions from "./actions/poolActions.mjs";
import farmActions from "./actions/farmActions.mjs";
import adminActions from "./actions/adminActions.mjs";
import tokActions from "./actions/tokenActions.mjs";
import LOActions from "./actions/limitOrderActions.mjs";

dotenv.config({ path: "./.env" });

const TK = process.env.ALGONODE_TOKEN;
const humbleOpts = {
  network: "TestNet",
  providerEnv: { ALGO_TOKEN: TK, ALGO_INDEXER_TOKEN: TK }
};
const { staging: pubTestnet } = getLegacyAnnouncers(BASE_VERSION);
const rf = (s) => `${s} ((requires funded account!))`;
const sections = [
  {
    title: rf("Admin: Contract stuff"),
    action: (acc) => selectAction(adminActions, acc)
  },
  { title: "Liquidity Pools", action: (acc) => selectAction(poolActions, acc) },
  { title: rf("Limit Orders"), action: (acc) => selectAction(LOActions, acc) },
  { title: "Farms", action: (acc) => selectAction(farmActions, acc) },
  { title: "Tokens (swap/fetch)", action: (a) => selectAction(tokActions, a) },
  { title: "Sandbox (runSandbox.mjs)", action: sandbox }
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
