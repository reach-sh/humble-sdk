import { createReachAPI } from "@reach-sh/humble-sdk";
import Enquirer from "enquirer";
import algosdk from "algosdk";
import { loadStdlib } from "@reach-sh/stdlib";
import { yesno } from "@reach-sh/stdlib/ask.mjs";

export const onProgress = (msg) => Yellow(`\t :: ${msg}`);
// 'reset color' string
const clear = `\x1b[0m`;
export const Bright = (s) => `\x1b[1m${s}${clear}`;
export const Dim = (s) => `\x1b[2m${s}${clear}`;
export const Underscore = (s) => `\x1b[4m${s}${clear}`;
export const Blink = (s) => `\x1b[5m${s}${clear}`;
export const Red = (s) => console.log(Bright(`\x1b[31m${s}${clear}`));
export const Green = (s) => console.log(Bright(`\x1b[32m${s}${clear}`));
export const Yellow = (s) => console.log(Bright(`\x1b[33m${s}${clear}`));
export const Blue = (s) => console.log(Bright(`\x1b[34m${s}${clear}`));
export const fmt = (x) => {
  const stdlib = createReachAPI();
  return stdlib.formatCurrency(x, stdlib.connector == "ALGO" ? 6 : 18);
};

/** Ensure user has funds */
export async function promptIsFunded(override = false) {
  if (override)
    return Red("Funds-check override active: go bravely into light");
  if ((await answerOrDie("Is this account funded?")) === "y") return;
  exitWithMsgs("A funded account is required for this action");
}

// Prompt cli user for a response, or exit
export async function answerOrDie(question, validator) {
  const validate = validator || ((x) => x);
  const promptOpts = (p) => ({
    type: "input",
    message: `${p} ("exit" to exit)\n`,
    name: "ans"
  });
  const query = async (p) => (await Enquirer.prompt([promptOpts(p)])).ans;
  let answer = undefined;
  do {
    try {
      answer = validate(await query(question));
    } catch (err) {
      console.log(err);
      question = `Invalid response: please retry > `;
    }
  } while (answer === undefined);

  return answer === "exit"
    ? exitWithMsgs("Application exit from prompt ...")
    : answer;
}

export async function createAlgoAccount(secret) {
  const reach = createReachAPI();
  const acct = await getAccountFromMnemonic(secret);
  const { networkAccount } = acct;
  const mnm = algosdk.secretKeyToMnemonic(networkAccount.sk);
  const BASE_FAUCET_URL = "https://bank.testnet.algorand.network/";
  Green(" 💰 Created account:\n");
  console.log(`💰 ${mnm}`);
  Green(" 💰 Fund the account here:\n");
  console.log(Bright(`💰 ${BASE_FAUCET_URL}?account=${networkAccount.addr}`));
  Green(" 💰 then return to continue\n");

  return [mnm, networkAccount.addr, acct];
}

export function exitWithMsgs(...msgs) {
  Red(...msgs);
  process.exit();
}

export function exitNoMnemonic() {
  const chain = createReachAPI().connector;
  Red(`🔑 Cannot reveal new mnemonic for ${chain}.\n`);
  Blue(`Please run the last command with a mnemonic:\n\n${cmd}`);
  Blue('make [ cmd ] KEY="your mnemonic here"');

  return exitWithMsgs("Exiting ...");
}

export function fromArgs(args, k) {
  Yellow(`\t * Extracting ${k} ... `);
  const key = `${k.replace(/=$/, "")}=`;
  const arg = args.find((a) => a.startsWith(key)) || key;
  return arg.replace(key, "");
}

export async function extractAccount(args) {
  Yellow("🔑 Getting Mnemonic ...");
  const key = args.find((a) => a.startsWith("KEY=")) || "KEY=";
  const mnemonic = key.replace("KEY=", "");
  if (!mnemonic) throw new Error("Account mnemonic was not found");

  console.log("\n🔑 Found Mnemonic!");
  return getAccountFromMnemonic(mnemonic);
}

export async function getAccountFromArgs(args) {
  const reach = createReachAPI();

  try {
    const acct = await extractAccount(args);
    if (reach.connector == "ETH") acct.setGasLimit(5000000);
    return acct;
  } catch (error) {
    Red("🔑 No Mnemonic found!");
    if (reach.connector !== "ALGO") return exitNoMnemonic();

    const [_m, _a, newAcc] = await createAlgoAccount();
    return newAcc;
  }
}

export async function getAccountFromMnemonic(secret) {
  const stdlib = createReachAPI();
  if (!secret) return await stdlib.createAccount();

  const isAlgo = stdlib.connector === "ALGO";
  return await (isAlgo
    ? stdlib.newAccountFromMnemonic(secret)
    : stdlib.newAccountFromSecret(secret));
}

/** HELPER | Log to console */
export function iout(msg, data) {
  Green(msg);
  console.log(JSON.stringify(data, null, 4));
}

/**
 * HELPER | recurse last function or halt terminal session
 * @param {object} opts
 * @param {string} opts.prompt
 * @param {Function} opts.do
 */
export async function rerunOrExit(opts) {
  console.log(); // line-break
  if ((await answerOrDie(opts.prompt)) === "y") return opts.do();
  return exitWithMsgs("Complete: exiting ... ");
}

export default {};
