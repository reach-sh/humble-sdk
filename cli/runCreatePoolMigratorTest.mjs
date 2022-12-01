import {
  getNetworkProvider,
  getLegacyAnnouncers,
  BASE_VERSION,
  getBlockchain,
  parseAddress,
  fetchLiquidityPool,
  isNetworkToken,
  parseCurrency,
  getDefaultDecimals,
  formatCurrency
} from "@reach-sh/humble-sdk";
import {
  transferOldLPN2NN,
  transferOldLPNN2NN,
  withdrawOldLPN2NN,
  withdrawOldLPNN2NN
} from "@reach-sh/humble-sdk/lib/build/backend.js";
import axios from "axios";
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

/** List some numbered options for CLI user to select */
const listOpts = (list) => list.forEach((k, i) => Blue(`${i + 1}. ${k}`));

const defDecs = getDefaultDecimals(getBlockchain());

/** Warn before primary action */
const warnOrDie = async ({ prompt, opts }) => {
  Yellow(`| ⚠️ | ${prompt}`);
  Blue(JSON.stringify(opts, null, 2));
  console.log();
  Red("Continue?");
  const keepGoing = (await answerOrDie("'y' to continue:")) === "y";
  if (!keepGoing) return exitWithMsgs("Exiting ...");
};

/** Create a Contract for migrating liquidity from a `v2` to a `v3` pool */
export async function createPoolMigrator(acc) {
  showTitle("Creating POOL LIQUIDITY MIGRATION CONTRACT");
  Yellow("========================================");
  Red("!! ⚠️ !! This will default a v2 - v3 pool!");
  Red("!! ⚠️ !! Please adapt 'runCreatePoolMigratorTest.mjs' to handle v4+");
  Red("!! ⚠️ !! and remove this warning message");
  Yellow("========================================\n\n");

  const action = await selectMigrationType();
  if (action === "transfer") await doTransfer(acc);
  else await doWithdraw(acc);

  return rerunOrExit({
    do: () => createPoolMigrator(acc),
    prompt: "Create another Migration Contract?"
  });
}

async function selectN2NN() {
  Yellow(`Will the target pool contain any ${getBlockchain()} tokens?`);
  return (await answerOrDie("y [press 'Enter' for no]")) === "y";
}

/** Select `dev`, `staging`, or `mainnet` */
async function selectEnvironment() {
  Yellow("Select Environment:");
  const envs = Object.keys(getLegacyAnnouncers(BASE_VERSION));
  listOpts(envs);
  const ex = Number(await answerOrDie("Enter a number:")) - 1;
  const env = envs[ex];
  return isNaN(ex) || !env ? envs[0] : env;
}

/** Choose to `withdraw` or `transfer` liquidity */
async function selectMigrationType() {
  Yellow("Will you withdraw or transfer tokens?");
  listOpts(["Withdraw old LP", "Transfer to new pool"]);
  const opts = ["withdraw", "transfer"];
  const ex = Number(await answerOrDie("Enter number ['Enter' for 1]:")) - 1;
  return opts[ex] || "withdraw";
}

/** Select target `v2` and `v3` pools to generate contract opts */
async function generateContractOps(acc, env) {
  Yellow("Enter v3 Pool Id:");
  const v3PoolId = await answerOrDie("Pool Id:");
  const n2nn = await selectN2NN();
  const result = await fetchLiquidityPool(acc, {
    n2nn,
    poolAddress: v3PoolId,
    includeTokens: true,
    onProgress: Yellow
  });

  if (!result.succeeded) return exitWithMsgs(`Pool "${v3PoolId}" not found`);
  const { data } = result;
  iout(v3PoolId, data);

  const { tokenAId, tokenBId, poolTokenId } = data.pool;
  const [{ name: A }, { name: B }] = data.tokens;
  const matches = await matchV2Pool(tokenAId, tokenBId, env);
  const poolName = `${A}/${B}`;
  if (!matches.length) return exitWithMsgs(`No v2 ${poolName} pools found`);

  const v2 = matches[0];
  // Required Contract Options (except "name")
  return {
    name: `${poolName} Liquidity Migration Contract`,
    oldlpToken: parseAddress(v2.poolTokenId),
    newlpToken: parseAddress(poolTokenId),
    tokA: isNetworkToken(tokenAId) ? null : parseAddress(tokenAId),
    tokB: parseAddress(tokenBId),
    oldPoolId: parseAddress(v2.poolAddress),
    newPoolId: parseAddress(v3PoolId),
    n2nn,
    tokens: data.tokens
  };
}

/** Search for matching `V2` Liquidity Pools */
async function matchV2Pool(a, b, env) {
  console.log();
  Blue(`Fetch V2 ${env.toUpperCase()} SERVER Pool`);
  Yellow("Change v2 Pool Announcer target?");
  const changeAnn =
    (await answerOrDie(`y or 'Enter' for ${env} announcer`)) === "y";
  const e = changeAnn ? await selectEnvironment() : env;

  const ann = getLegacyAnnouncers("v2")[e].protocolId.toString();
  const prov = ["dev", "staging"].includes(e) ? "testnet" : "mainnet";
  const args = `token1: "${a}", token2: "${b}", announcerId: "${ann}"`;
  const BASE = "https://yhnyufyj90.execute-api.us-east-1.amazonaws.com/prod";
  const url = `${BASE}/humble-dev`;
  const query = `query {  searchPools(${args}, tradeable: true) { poolAddress, poolTokenId }  }`;
  const matches = await axios
    .post(url, { query })
    .then((res) => res.data)
    .then(({ data }) => data.searchPools || [])
    .catch((e) => {
      Yellow(`Fetch error: ${JSON.stringify(e)}`);
      return [];
    });

  const m = matches.length === 1 ? "match" : "matches";
  const msg = `Found ${matches.length || "no"} v2 Pool ${m}`;
  matches.length ? Green(msg) : Red(msg);

  return matches;
}

/** Transfer `V2` Liquidity to a `V3` Pool */
async function doTransfer(acc) {
  const env = await selectEnvironment();
  const opts = await generateContractOps(acc, env);
  const { name, n2nn, tokens } = opts;
  await warnOrDie({ prompt: `Transfer ${name} Liquidity`, opts });

  const backend = n2nn ? transferOldLPN2NN : transferOldLPNN2NN;
  const ctc = acc.contract(backend);
  const transfer = async (a) => {
    console.log();
    Yellow(`Withdrawing ${a} LP ...`);

    const oldLPAmt = parseCurrency(a, defDecs);
    const res = await new Promise((resolve) =>
      ctc.p.Admin({
        opts: {
          oldLPAmt,
          oldlpToken: opts.oldlpToken,
          oldPoolId: opts.oldPoolId,
          newlpToken: opts.newlpToken,
          newPoolId: opts.newPoolId,
          tokA: opts.tokA,
          tokB: opts.tokB
        },
        done: (lpRecv, AB) =>
          resolve({
            lpTokens: formatCurrency(lpRecv, defDecs),
            A: formatCurrency(AB.A, tokens[0].decimals),
            B: formatCurrency(AB.B, tokens[1].decimals)
          })
      })
    ).catch((e) => {
      Red("Transfer.Deploy.Error");
      Red(JSON.stringify(e));
      return { lpTokens: "0", A: "0", B: "0" };
    });
    if (res.A !== "0") Green(JSON.stringify(res));

    Yellow("Transfer more to the same pool?");
    if ((await answerOrDie("y ['Enter' to skip']")) === "y") {
      return transfer(await enterLPToExchange());
    }

    return res;
  };

  return transfer(await enterLPToExchange());
}

/** Withdraw `V2` Liquidity from Pool */
async function doWithdraw(acc) {
  const env = await selectEnvironment();
  const opts = await generateContractOps(acc, env);
  const { name, n2nn, tokens } = opts;
  await warnOrDie({ prompt: `Withdraw ${name} Liquidity`, opts });

  const backend = n2nn ? withdrawOldLPN2NN : withdrawOldLPNN2NN;
  const ctc = acc.contract(backend);
  const withdraw = async (a) => {
    console.log();
    Yellow(`Withdrawing ${a} LP ...`);

    const oldLPAmt = parseCurrency(a, defDecs);
    const res = await new Promise((resolve) =>
      ctc.p.Admin({
        opts: {
          oldLPAmt,
          oldlpToken: opts.oldlpToken,
          oldPoolId: opts.oldPoolId,
          tokA: opts.tokA,
          tokB: opts.tokB
        },
        done: (AB) =>
          resolve({
            A: formatCurrency(AB.A, tokens[0].decimals),
            B: formatCurrency(AB.B, tokens[1].decimals)
          })
      })
    ).catch((e) => {
      Red("Withdraw.Deploy.Error");
      Red(JSON.stringify(e));
      return { A: "0", B: "0" };
    });
    if (res.A !== "0") Green(JSON.stringify(res));

    Yellow("Withdraw more from the same pool?");
    if ((await answerOrDie("y ['Enter' to skip']")) === "y") {
      return withdraw(await enterLPToExchange());
    }

    return res;
  };

  return withdraw(await enterLPToExchange());
}

async function enterLPToExchange() {
  Yellow("\t How much LP will you exchange?");
  return answerOrDie("Enter amount:");
}

// 146325643 : v3, ALGO-GAR        (lpToken: 146325680)    | *MIGRATE
