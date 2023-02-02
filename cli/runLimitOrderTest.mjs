import {
  cancelLimitOrder,
  createLimitOrder,
  fetchLimitOrder,
  fetchLimitOrderTokens,
  fetchLiquidityPool,
  fetchToken,
  fillLimitOrder,
  getBlockchain,
  getLimitOrderVariant,
  getNetworkProvider,
  isNetworkToken
} from "@reach-sh/humble-sdk";
import selectAction from "./selectAction.mjs";
import {
  answerOrDie,
  Blue,
  exitWithMsgs,
  iout,
  Red,
  rerunOrExit,
  Yellow
} from "./utils.mjs";

/** Create a Limit Order */
export async function runCreateLimitOrder(acc) {
  console.clear();
  Blue(`Running CREATE LIMIT-ORDER on ${getNetworkProvider()}`);
  Yellow("What token are you selling?");
  const idA = await answerOrDie("Token A:");

  Yellow("Fetching Token A ...");
  const tokenA = await fetchToken(acc, idA);

  Yellow(`How much ${tokenA.symbol} will you sell?`);
  const amtA = await answerOrDie(`${tokenA.symbol} amount`);

  Yellow(`What are you buying with ${tokenA.symbol}?`);
  const idB = await answerOrDie("Token B:");

  Yellow("Fetching Token B ...");
  const tokenB = await fetchToken(acc, idB);

  Yellow(`How much ${tokenB.symbol} do you want?`);
  const amtB = await answerOrDie(`${tokenB.symbol} amount`);

  if (isNaN(amtA) || isNaN(amtB)) {
    exitWithMsgs("Invalid amount(s) specified");
  }

  Yellow(`Creating ${tokenA.symbol} -> ${tokenB.symbol} Limit Order ...`);
  const result = await createLimitOrder(acc, {
    amtA,
    amtB,
    tokenA: validateLOToken(idA),
    tokenADecimals: tokenA.decimals,
    tokenB: validateLOToken(idB),
    tokenBDecimals: tokenB.decimals,
    onProgress: Yellow
  });

  iout(result.message, result.data);
  return rerunOrExit({
    do: () => runCreateLimitOrder(acc),
    prompt: "Create another Limit order?"
  });
}

/** Cancel a Limit Order */
export async function runCancelLimitOrder(acc) {
  console.clear();
  Red(`Running CANCEL LIMIT-ORDER on ${getNetworkProvider()}`);
  console.log();

  Yellow("Enter contract id");
  const contractId = await answerOrDie("Contract Id:");

  Yellow("Select Order Type"); // "network-to-token" | "token-to-token" | "token-to-network"
  const NET = getBlockchain();
  const variantOpts = [
    { title: `${NET} to Token`, action: () => "network-to-token" },
    { title: `Token to Token`, action: () => "token-to-token" },
    { title: `Token to ${NET}`, action: () => "token-to-network" }
  ];
  const variant = await selectAction(variantOpts, acc);
  const result = await cancelLimitOrder(acc, {
    contractId,
    variant,
    onProgress: Yellow
  });

  if (result.succeeded) iout(result.message, result.data);
  else {
    Red(result.message);
    Red(JSON.stringify(result.data || {}));
  }
  rerunOrExit({
    do: () => runCancelLimitOrder(acc),
    prompt: "Cancel another Limit order?"
  });
}

/** Fill a Limit Order */
export async function runFillLimitOrder(acc) {
  console.clear();
  Blue(`Running FILL LIMIT-ORDER on ${getNetworkProvider()}`);
  console.log();

  Red("NOTE: Enter y when prompted to fetch Limit Order tokens!");
  console.log();
  const loResult = await localFetchLimitOrder(acc);
  const { tokenA, tokenB, amtA, error } = loResult.data;
  iout(loResult.message, error || loResult.data);
  if (error) return exitWithMsgs("Limit order fill failure");

  Yellow("Enter Pool Id:");
  const poolId = await answerOrDie("Pool Id:");
  const poolResult = await fetchLiquidityPool(acc, {
    n2nn: [tokenA, tokenB].some(isNetworkToken),
    poolAddress: poolId,
    includeTokens: true
  });
  if (!poolResult.data.tokens) return exitWithMsgs("Pool not found");
  const [A, B] = poolResult.data.tokens;
  const tokenIds = [A, B].map(({ id }) => id);
  const poolMatch = tokenIds.includes(tokenA) && tokenIds.includes(tokenB);
  if (!poolMatch) return exitWithMsgs("Pool does not match token pair");

  const res = await fillLimitOrder(acc, {
    contractId: loResult.contractId,
    poolId,
    n2nn: [tokenA, tokenB].some(isNetworkToken),
    sellAmount: amtA,
    sellTokenDecimals: A.decimals,
    minProfitB: "0",
    buyTokenDecimals: B.decimals,
    variant: getLimitOrderVariant({ tokenA, tokenB }),
    aForB: A.id === tokenA,
    onProgress: Yellow
  });
  iout(res.message, res.data);

  rerunOrExit({
    prompt: "Fill another Limit Order?",
    do: () => {
      console.clear();
      runFillLimitOrder(acc);
    }
  });
}

/** Fetch a Limit Order */
export async function runFetchLimitOrder(acc) {
  console.clear();
  Blue(`Running FETCH LIMIT-ORDER on ${getNetworkProvider()}`);
  console.log();

  const result = await localFetchLimitOrder(acc);
  if (result.succeeded) iout(result.message, result.data);
  else {
    Red(result.message);
    Red(JSON.stringify(result.data || {}));
  }

  rerunOrExit({
    do: () => runFetchLimitOrder(acc),
    prompt: "Fetch another Limit order?"
  });
}

/** Shared helper (fetch limit order) */
async function localFetchLimitOrder(acc) {
  Yellow("Enter Order contract id");
  const contractId = await answerOrDie("Contract Id:");

  Yellow("What type of Limit Order is this?"); // "network-to-token" | "token-to-token" | "token-to-network"
  const NET = getBlockchain();
  const variantOpts = [
    { title: `${NET} to Token`, action: () => "network-to-token" },
    { title: `Token to Token`, action: () => "token-to-token" },
    { title: `Token to ${NET}`, action: () => "token-to-network" }
  ];
  const variant = await selectAction(variantOpts, acc);
  const includeTokens = (await answerOrDie("Fetch Order tokens?")) === "y";
  let tokenADecimals;
  let tokenBDecimals;
  if (!includeTokens) {
    tokenADecimals = await answerOrDie("Enter Token A Decimals:");
    tokenBDecimals = await answerOrDie("Enter Token B Decimals:");
  }

  return fetchLimitOrder(acc, {
    contractId,
    includeTokens,
    tokenADecimals,
    tokenBDecimals,
    variant,
    onProgress: Yellow,
    formatResult: true
  });
}

function validateLOToken(tok) {
  return ["null", "0"].includes(tok) ? null : tok;
}

// LO: 155814273, POOL: 155813582
// LO: 156678620, POOL: 155813582
