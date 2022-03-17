import algosdk from "algosdk";
import { loadStdlib } from "@reach-sh/stdlib";
import { yesno } from "@reach-sh/stdlib/ask.mjs";

let reach;

export const onProgress = (msg) => Yellow(`\t :: ${msg}`);

export function useReach() {
  if (!reach) {
    const connectorModeArg = fromArgs(process.argv, "REACH_CONNECTOR_MODE");
    const REACH_CONNECTOR_MODE = connectorModeArg || "ALGO";
    reach = loadStdlib({ REACH_CONNECTOR_MODE });
    reach.setProviderByName("TestNet");
  }

  return reach;
}
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
  const stdlib = useReach();
  return stdlib.formatCurrency(x, stdlib.connector == "ALGO" ? 6 : 18);
};

export async function createAlgoAccount(secret) {
  const reach = useReach();
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
  const chain = useReach().connector;
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
  const reach = useReach();

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
  const stdlib = useReach();
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

export function parseAddress(addr) {
  let ctcInfo = parseInt(addr);
  if (useReach().connector !== "ALGO") {
    let pit = addr.toString().trim().replace(/\0.*$/g, "");
    ctcInfo = pit.startsWith("0x") ? pit : "0x" + pit;
  }
  return ctcInfo;
}

export default {};
