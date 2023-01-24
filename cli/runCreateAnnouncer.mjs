import {
  createReachAPI,
  fetchLiquidityPool,
  getBlockchain,
  getNetworkProvider,
  parseAddress
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  announcerBackend,
  farmAnnouncerBackend,
  limitOrderAnnouncer
} from "../lib/build/backend.js";
import {
  Blue,
  Green,
  Red,
  Yellow,
  answerOrDie,
  exitWithMsgs,
  promptIsFunded,
  rerunOrExit,
  iout
} from "./utils.mjs";

const showTitle = (t) => {
  console.clear();
  Blue(`📄 ${t} on ${getNetworkProvider()}`);
};
const triumvirs = (net) =>
  net === "TestNet" ? testnetTriumvirs : mainnetTriumvirs;
const testnetTriumvirs = [
  "BJDDWO6U6XBVRRRDANSJIMBWH6H3DOQ2X4NPEAUJZDRPM4FDNNBM3L75D4", // "THE BIG JD"
  "2Z3B5LV5RD7EBUVQ2ZJRNSJJVWODVCITIW5AAV2DCDGE3JORY75G7IFZRA", // "IFZRA"
  "3MVC26UC633QBSP4W7R6PS2OAE7W4NLYR4ULJA7SPSZRNCGETXQE4YIM3Q" // "INTEREST BROTHER"
];
const mainnetTriumvirs = [
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // chris.algo
  "RV5VOEDJUNZQIL4XW6E4PVURVR7UCKEKIOP22ETVKJ3OSBYGPXCYMXMOJI", // jay.mccarthy
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" // andrew.kotulak
];

/** Create Partner or Public `Farm` announcer */
export async function createFarmAnnouncer(acc) {
  showTitle("Creating FARM ANNOUNCER");
  await promptIsFunded(true);
  await createAnnouncer(acc, farmAnnouncerBackend);
}

/** Create `LimitOrder` announcer */
export async function createLOAnnouncer(acc) {
  showTitle("Creating LIMIT-ORDER ANNOUNCER");
  await promptIsFunded(true);
  await createAnnouncer(acc, limitOrderAnnouncer, "D");
}

/** Create `Pool` announcer (Triumvirate) contract */
export async function createTriumvirate(acc) {
  if (!acc) throw new Error("No account supplied!");
  showTitle("Creating POOL ANNOUNCER (Triumvirate)");
  await promptIsFunded(true);

  const ctc = acc.contract(announcerBackend);
  const { appId, triumAddr } = await new Promise((resolve) =>
    ctc.participants
      .Admin({
        triumvirs: triumvirs(getNetworkProvider()),
        async ready() {
          const { formatAddress } = createReachAPI();
          const triumAddr = formatAddress(await ctc.getContractAddress());
          const appId = parseAddress(await ctc.getInfo());
          resolve({ triumAddr, appId });
        }
      })
      .catch(() => ({ triumAddr: null, appId: null }))
  );

  Green("===========================================================");
  Blue(`Created new Protocol Contract`);
  Green(`\t* Announcer: \x1b[34m${appId}\x1b[0m`);
  Green(`\t* Address:   \x1b[34m${triumAddr}\x1b[0m`);
  Green("===========================================================");

  return rerunOrExit({
    prompt: "Create another Triumvirate Contract?",
    do: () => createTriumvirate(acc)
  });
}

/**
 * FAULTY | Harvest pool fees
 * This does not reflect the behavior of the `triumvirate` contract.
 */
export async function harvestPoolFees(acc) {
  Red("The proper protocol for harvesting a pool is:");
  Red("- `triumvir` account creates a `Harvest` proposal");
  Red("- A second `triumvir` supports the proposal");
  Red("- Fees get harvested");
  // showTitle("HARVEST FEES");
  // Red("Triumvirate Pool Harvest");
  // Yellow("Enter Pool Id:");
  // const poolAddress = await answerOrDie("id");
  // if (!poolAddress) exitWithMsgs("Invalid Pool ID");

  // Yellow(`Does the pool contain ${getBlockchain()}`);
  // const n2nn = (await answerOrDie("y/n")) === "y";
  // const pool = await fetchLiquidityPool(acc, {
  //   n2nn,
  //   poolAddress,
  //   includeTokens: true
  // });

  // if (!pool.succeeded) exitWithMsgs(`Pool id ${poolAddress} not found`);

  // iout(pool.message, pool.data);
  // const { contract } = pool;
  // /** Change this to someone other than me! Works on testnet only anyway */
  // const recvr = "65R3LC43QDJXQAJFSVW7SMK4URMC4V2PPSEJ6MMFT5HX2MOMURXFFGYECI";
  // const pInfo = {
  //   lpFee: 25,
  //   /** Change this when the triumvirate is recompiled! */
  //   protoAddr: "E5SV5KGEMO7BM27TTCYTD3T2ZMYMNFYGMS7KUJSWSP5XOJHL27JONSKUUM",
  //   protoFee: 5,
  //   totFee: 30,
  //   locked: false
  // };
  // try {
  //   const result = await contract.apis.Protocol_harvest(recvr, pInfo);
  //   iout("Harvest complete", result);
  // } catch (error) {
  //   Red("Harvest failed");
  //   console.log(error);
  // }
}

/**
 * Create generic `Announcer` application. Core uses the same underlying
 * structure for HumbleSwap announcers, so the interface is the same.
 */
async function createAnnouncer(acc, bin, participant = "Deployer") {
  Yellow("Creating announcer ...");
  const ctc = acc.contract(bin);
  const Deployer = ctc.participants[participant];
  const ctcInfo = await new Promise((resolve) =>
    Deployer({ ready: () => resolve(ctc.getInfo()) }).catch(() => null)
  );

  if (ctcInfo === null) exitWithMsgs("Contract deployment failed");
  Green(`Announcer deployed at '${parseAddress(ctcInfo)}'`);
  console.log();

  rerunOrExit({
    prompt: "Create another announcer?",
    do: () => createAnnouncer(acc, bin, participant)
  });
}
