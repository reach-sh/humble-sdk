import {
  getNetworkProvider,
  getLegacyAnnouncers,
  BASE_VERSION,
  getBlockchain,
  parseAddress,
  fetchLiquidityPool,
  isNetworkToken
} from "@reach-sh/humble-sdk";
import {
  poolMigratorN2NN,
  poolMigratorNN2NN
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

/** Create a Contract for migrating liquidity from a `v2` to a `v3` pool */
export async function createPoolMigrator(acc) {
  showTitle("Creating POOL LIQUIDITY MIGRATION CONTRACT");
  Red("!! ⚠️ !! This will default a v2 - v3 pool!");
  Red("!! ⚠️ !! Please adapt 'runCreatePoolMigratorTest.mjs' to handle v4+");
  Red("!! ⚠️ !! and remove this warning message");

  const env = await selectEnvironment();
  const versions = ["v2", "v3"];

  const network = getBlockchain();
  Yellow(`Will the target pool contain any ${network} tokens?`);
  const n2nn = (await answerOrDie("y or press 'Enter' to skip")) === "y";
  const backend = n2nn ? poolMigratorN2NN : poolMigratorNN2NN;

  const opts = await generateContractOps(acc, n2nn, env);
  Yellow("You are about to create the following Migration Contract");
  Blue(JSON.stringify(opts, null, 2));
  Red("Continue?");
  const keepGoing = (await answerOrDie("'y' to continue:")) === "y";

  if (!keepGoing) return exitWithMsgs("Exiting ...");

  //   const sOpts = Object.entries(opts);
  const gOpts = Object.assign({}, opts);
  delete gOpts.name;
  const ctc = acc.contract(backend);
  const contractId = await new Promise((resolve) =>
    ctc.p
      .Admin({
        opts: gOpts,
        done: (id) => resolve(parseAddress(id).toString())
      })
      .catch((e) => {
        Red(JSON.stringify(e, null, 2));
        resolve(null);
      })
  );

  if (contractId === null) {
    console.log();
    return rerunOrExit({
      do: () => createPoolMigrator(acc),
      prompt: `${opts.name} was NOT created; try again?`
    });
  }

  iout(`Created new ${opts.name}`, { name: opts.name, contractId });
  return rerunOrExit({
    do: () => createPoolMigrator(acc),
    prompt: "Create another Migration Contract?"
  });
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

/** Select target `v2` and `v3` pools to generate contract opts */
async function generateContractOps(acc, n2nn, env) {
  Yellow("Enter v3 Pool Id:");
  const v3PoolId = await answerOrDie("Pool Id:");
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
  return {
    name: `${poolName} Liquidity Migration Contract`,
    v2lpToken: parseAddress(v2.poolTokenId),
    v3lpToken: parseAddress(poolTokenId),
    tokA: isNetworkToken(tokenAId) ? null : parseAddress(tokenAId),
    tokB: parseAddress(tokenBId),
    v2PoolId: parseAddress(v2.poolAddress),
    v3PoolId: parseAddress(v3PoolId)
  };
}

/** Search for matching V2 Liquidity Pools */
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

// 146325643 : v3, ALGO-GAR        (lpToken: 146325680)    | *MIGRATE
