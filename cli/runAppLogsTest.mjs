import algosdk from "algosdk";
import { sha512_256 } from "js-sha512";
import { answerOrDie, exitWithMsgs, iout } from "./utils.mjs";
const indexer = new algosdk.Indexer(
  "",
  "https://mainnet-idx.algonode.cloud",
  ""
);

// The Reach declaration for this Event type is:
//    Register: [ Contract, MToken, Token ]

// Event signature prefix, see ARC 28
// https://github.com/reach-sh/ARCs/blob/arc-0028-events/ARCs/arc-0028.md
// const sig = "Register(uint64,(byte,byte[8]),uint64)"; // POOL REGISTRATION
const sig = "Stake(address,uint64,(uint64,uint64))";
const prefix_hex = sha512_256(sig).slice(0, 8);

// We are ignoring next-token for simplicity in this example
// const appid = 771884869; // Mainnet Triumvirate
const appid = await answerOrDie("Enter App ID:");
const logs_nested = await indexer.lookupApplicationLogs(appid).do();
const logs = logs_nested["log-data"].map((x) => x.logs).flat(); // POOLS

// Filter down to only the Register logs by looking for the matching prefix
const register_logs = logs.filter(
  (l) => prefix_hex === Buffer.from(l, "base64").slice(0, 4).toString("hex")
);
console.log(
  register_logs.map((l) => Buffer.from(l, "base64").slice(0, 4).toString("hex"))
);
process.exit();

// interpret the next 8 bytes after the 4-byte prefix as the registered Contract (appid: uint64)
const registered_appids = register_logs.map((l) =>
  Number("0x" + Buffer.from(l, "base64").slice(4, 12).toString("hex"))
);

console.log(registered_appids);

// 856175380
