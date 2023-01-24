import {
  BASE_VERSION,
  createLiquidityExtractor,
  createLiquidityMigrator,
  fetchLiquidityPool,
  getBlockchain,
  getDefaultDecimals,
  getLegacyAnnouncers,
  getNetworkProvider,
  isNetworkToken,
  parseAddress,
  tokenBalance
} from "@reach-sh/humble-sdk";
import axios from "axios";
import {
  Blue,
  Green,
  Red,
  Yellow,
  answerOrDie,
  exitWithMsgs,
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
  const keepGoing = (await answerOrDie("['y' to continue]:")) === "y";
  if (!keepGoing) return exitWithMsgs("Exiting ...");
};

/** Create a Contract for migrating liquidity from a `v2` to a `v3` pool */
export async function createPoolMigrator(acc) {
  showTitle("Creating POOL LIQUIDITY MIGRATION CONTRACT");
  Yellow("========================================");
  Red("!! ⚠️ !! This will default a v2 - v3 pool!");
  Red("!! ⚠️ !! Please adapt 'runLiquidityMigratorTest.mjs' to handle v4+");
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

/** Select whether pool contains `network tokens` */
async function selectN2NN() {
  Yellow(`Does this pool contain any ${getBlockchain()} tokens?`);
  return (await answerOrDie("['y' or press ENTER for no]")) === "y";
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
  Yellow("Will you WITHDRAW or TRANSFER tokens from the OLD pool?");
  listOpts(["Withdraw old LP", "Transfer to new pool"]);
  const opts = ["withdraw", "transfer"];
  const ex = Number(await answerOrDie("[Number or ENTER to withdraw]:")) - 1;
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

  return {
    name: `${poolName} Liquidity Migration Contract`,
    oldlpToken: parseAddress(v2.poolTokenId),
    newlpToken: parseAddress(poolTokenId),
    tokA: isNetworkToken(tokenAId) ? null : parseAddress(tokenAId),
    tokB: parseAddress(tokenBId),
    oldPoolId: parseAddress(v2.poolAddress),
    newPoolId: parseAddress(v3PoolId),
    n2nn,
    tokens: data.tokens,
    newPool: result.data.pool,
    oldPool: v2
  };
}

/** Search for matching `V2` Liquidity Pools */
async function matchV2Pool(a, b, env) {
  console.log();
  Blue(`Fetch V2 ${env.toUpperCase()} SERVER Pool`);
  Yellow("Change source (v2) Pool Announcer target?");
  Yellow(`Enter 'y' if your source pool is NOT in ${env}`);
  const changeAnn =
    (await answerOrDie(`['y' to change or press ENTER to skip]`)) === "y";
  const e = changeAnn ? await selectEnvironment() : env;

  const ann = getLegacyAnnouncers("v2")[e].protocolId.toString();
  const prov = ["dev", "staging"].includes(e) ? "testnet" : "mainnet";
  const args = `token1: "${a}", token2: "${b}", announcerId: "${ann}"`;
  const BASE = "https://yhnyufyj90.execute-api.us-east-1.amazonaws.com/prod";
  const url = `${BASE}/humble-dev`;
  const query = `query {  searchPools(${args}, tradeable: true) { poolAddress, poolTokenId, mintedLiquidityTokens, tokenABalance, tokenBBalance }  }`;
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
  const [{ symbol: symbolA }, { symbol: symbolB }] = tokens;
  await warnOrDie({ prompt: `Transfer ${name} Liquidity`, opts });

  const transfer = async (a) => {
    await showExpectedAmts(a, opts.oldPool, tokens);

    const res = await createLiquidityMigrator(acc, {
      n2nn,
      tokA: opts.tokA,
      tokB: opts.tokB,
      oldLpAmount: a,
      oldLpToken: opts.oldlpToken,
      oldPoolId: opts.oldPoolId,
      newPoolId: opts.newPoolId,
      newLpToken: opts.newlpToken,
      onProgress: Yellow
    });

    if (res.succeeded) iout(res.message, res.data);
    else Red(res.message);

    Yellow("Transfer more to the same pool?");
    if ((await answerOrDie("['y' or press ENTER to skip]")) === "y") {
      await logLPBalance(acc, opts.oldlpToken, symbolA, symbolB);
      return transfer(await enterLPToExchange());
    }

    return res;
  };

  await logLPBalance(acc, opts.oldlpToken, symbolA, symbolB);
  return transfer(await enterLPToExchange());
}

/** Withdraw `V2` Liquidity from Pool */
async function doWithdraw(acc) {
  const env = await selectEnvironment();
  const opts = await generateContractOps(acc, env);
  const { name, n2nn, tokens } = opts;
  const [{ symbol: symbolA }, { symbol: symbolB }] = tokens;
  await warnOrDie({ prompt: `Withdraw ${name} Liquidity`, opts });

  const withdraw = async (a) => {
    await showExpectedAmts(a, opts.oldPool, tokens);

    const res = await createLiquidityExtractor(acc, {
      n2nn,
      tokA: opts.tokA,
      tokB: opts.tokB,
      oldLpAmount: a,
      oldLpToken: opts.oldlpToken,
      oldPoolId: opts.oldPoolId,
      onProgress: Yellow
    });

    if (res.succeeded) iout(res.message, res.data);
    else Red(res.message);

    Yellow("Withdraw more from the same pool?");
    if ((await answerOrDie("['y' or press ENTER to skip']")) === "y") {
      await logLPBalance(acc, opts.oldlpToken, symbolA, symbolB);
      return withdraw(await enterLPToExchange());
    }

    return res;
  };

  await logLPBalance(acc, opts.oldlpToken, symbolA, symbolB);
  return withdraw(await enterLPToExchange());
}

/** Show user's current balance of LP token `id` */
async function logLPBalance(acc, id, symbolA, symbolB) {
  console.log();
  const tokenDecimals = getDefaultDecimals();
  const lpBal = await tokenBalance(acc, { id, tokenDecimals });
  Blue(`Your LP Balance: ${lpBal} ${symbolA}/${symbolB}`);
}

/** Specify expected amounts to withdraw from old pool */
function showExpectedAmts(a, pool, tokens) {
  const nA = Number(a);
  const [{ symbol: symbolA }, { symbol: symbolB }] = tokens;
  const [xA, xB] = [
    convertLPToTokenValue(nA * 10 ** getDefaultDecimals(), pool, true),
    convertLPToTokenValue(nA * 10 ** getDefaultDecimals(), pool)
  ];
  console.log();
  const fx = (v) => v.toFixed(6);
  const pairName = `${fx(xA)} ${symbolA}, ${fx(xB)} ${symbolB}`;
  Blue(`Withdrawing ( ${pairName} ) from pool...`);
  console.log();
}

/** Specify how much LP tokens to exchange for funds (or migrate to new pool) */
async function enterLPToExchange() {
  Yellow("\t How much LP will you exchange?");
  return answerOrDie("[Enter (NON-ATOMIC/user-friendly) amount]:");
}

function convertLPToTokenValue(amt, pool, isTokA = false) {
  const {
    mintedLiquidityTokens: minted, // atomic units
    tokenABalance: balA, // non-atomic
    tokenBBalance: balB // non-atomic
  } = pool;
  Red(JSON.stringify({ balA, balB, minted, amt }));
  const userPoolShare = amt / minted;
  const conversion = Number(isTokA ? balA : balB) * userPoolShare;
  return isNaN(conversion) ? 0 : conversion;
}

// 146325643 : v3, ALGO-GAR        (lpToken: 146325680)    | *MIGRATE
