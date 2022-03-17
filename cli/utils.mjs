import algosdk from "algosdk";
import { loadStdlib } from "@reach-sh/stdlib";
import { yesno } from "@reach-sh/stdlib/ask.mjs";

let reach;

export const onProgress = (msg) =>
  console.log(Bright(FgYellow(`\t :: ${msg}`)));

export function useReach() {
  if (!reach) {
    const connectorModeArg = process.argv.find((a) =>
      a.startsWith("REACH_CONNECTOR_MODE=")
    );
    const REACH_CONNECTOR_MODE = connectorModeArg
      ? connectorModeArg.replace("REACH_CONNECTOR_MODE=", "")
      : "ALGO";
    reach = loadStdlib({ REACH_CONNECTOR_MODE });
    reach.setProviderByName("TestNet");
  }

  return reach;
}

const ResetClr = `\x1b[0m`;
export const Bright = (s) => `\x1b[1m${s}${ResetClr}`;
export const Dim = (s) => `\x1b[2m${s}${ResetClr}`;
export const Underscore = (s) => `\x1b[4m${s}${ResetClr}`;
export const Blink = (s) => `\x1b[5m${s}${ResetClr}`;
export const FgRed = (s) => `\x1b[31m${s}${ResetClr}`;
export const FgGreen = (s) => `\x1b[32m${s}${ResetClr}`;
export const FgYellow = (s) => `\x1b[33m${s}${ResetClr}`;
export const FgBlue = (s) => `\x1b[34m${s}${ResetClr}`;
export const fmt = (x) => {
  const stdlib = useReach();
  return stdlib.formatCurrency(x, stdlib.connector == "ALGO" ? 6 : 18);
};

export async function createAlgoAccount(secret) {
  const reach = useReach();
  const acct = await getAccountFromMnemonic(secret);
  const { networkAccount } = acct;
  const mnm = algosdk.secretKeyToMnemonic(networkAccount.sk);
  const BASE_FAUCET_URL = "https://bank.testnet.algorand.network/";
  console.log(
    Bright(FgGreen("\t 💰 Created account:\n")),
    `\t 💰 ${mnm}\n\n`,
    Bright(FgGreen("\t 💰 Fund the account here:\n")),
    `\t 💰 ${BASE_FAUCET_URL}?account=${networkAccount.addr}\n\n`,
    Bright(FgGreen("\t 💰 then return to continue\n"))
  );

  return [mnm, networkAccount.addr, acct];
}

export function exitWithMsgs(...msgs) {
  console.log(Bright(FgRed(...msgs)));
  process.exit();
}

export function exitNoMnemonic(...msgs) {
  const chain = useReach().connector;
  const err = FgRed(`🔑 Cannot reveal new mnemonic for ${chain}.\n`);
  const cmd = Bright('make [ cmd ] KEY="your mnemonic here"');

  return exitWithMsgs(
    Bright(err),
    `Please run the last command with a mnemonic:\n\n${cmd}`
  );
}

export function fromArgs(args, k) {
  console.log(Bright(FgYellow(`\t * Extracting ${k} ... `)));
  const key = `${k.replace(/=$/, "")}=`;
  const arg = args.find((a) => a.startsWith(key)) || key;
  return arg.replace(key, "");
}

export async function extractAccount(args) {
  console.log(Bright(FgYellow("🔑 Getting Mnemonic ...")));
  const key = args.find((a) => a.startsWith("KEY=")) || "KEY=";
  const mnemonic = key.replace("KEY=", "");
  if (!mnemonic) throw new Error("Account mnemonic was not found");

  console.log("\n🔑 Found Mnemonic!");
  return getAccountFromMnemonic(mnemonic);
}

export async function getAccountFromArgs(args) {
  const reach = useReach();

  try {
    const acct = await extractAccount(args);
    if (reach.connector == "ETH") acct.setGasLimit(5000000);
    return acct;
  } catch (error) {
    console.log(Bright(FgRed("🔑 No Mnemonic found!")));
    if (reach.connector !== "ALGO") {
      const cmd = Bright(FgBlue('make [ cmd ] KEY="your mnemonic here"'));
      const exitMsg = `Please rerun with a mnemonic:\n\n\t${cmd}\n\n`;
      return exitWithMsgs(exitMsg);
    }

    const [_m, _a, newAcc] = await createAlgoAccount();
    return newAcc;
  }
}

export async function getAccountFromMnemonic(secret) {
  const stdlib = useReach();
  if (!secret) return await stdlib.createAccount();

  const isAlgo = stdlib.connector === "ALGO";
  return await (isAlgo
    ? stdlib.newAccountFromMnemonic(secret)
    : stdlib.newAccountFromSecret(secret));
}

/** HELPER | Log to console */
export function iout(msg, data) {
  console.log(Bright(FgGreen(msg)));
  console.log(JSON.stringify(data, null, 4));
}

export function parseAddress(addr) {
  let ctcInfo = parseInt(addr);
  if (useReach().connector !== "ALGO") {
    let pit = addr.toString().trim().replace(/\0.*$/g, "");
    ctcInfo = pit.startsWith("0x") ? pit : "0x" + pit;
  }
  return ctcInfo;
}

export function parseBoolOrExit(a) {
  if (typeof a === "boolean") return a;
  if (["y", "n"].includes(a)) return yesno(a);
  return exitWithMsgs(Bright(FgRed("Invalid answer: Exiting ... ")));
}

export function parseIntOrExit(a) {
  if (a && !isNaN(a)) return Number(a);
  return exitWithMsgs(Bright(FgRed("Invalid answer: Exiting ... ")));
}

export function parseOrExit(a) {
  if (a) return JSON.parse(a);
  return exitWithMsgs(Bright(FgRed("Invalid answer: Exiting ... ")));
}

export function promptIsFunded(acct) {
  const reach = useReach();
  return `
    ⛓ Chain: ${Bright(reach.connector)}
    💳 Account: ${Bright(reach.formatAddress(acct.getAddress()))}
    💰 ${Bright(FgYellow("Is the new account funded?"))}
    ("y" / "n" to exit):
    `;
}

export default {};
