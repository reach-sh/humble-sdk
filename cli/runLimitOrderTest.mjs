import {
  fetchToken,
  getNetworkProvider,
  createLimitOrder
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
    onProgress: Yellow,
    onComplete: (v) => {
      iout(v.message, v.data);
      rerunOrExit({
        do: () => runCreateLimitOrder(acc),
        prompt: "Create another Limit order?"
      });
    }
  });
}

export async function runCancelLimitOrder(acc) {
  console.clear();
  Red(`Running CANCEL LIMIT-ORDER on ${getNetworkProvider()}`);
  console.log();

  Yellow("Enter contract id");
  const ctcId = await answerOrDie("Contract Id:");

  Yellow("Select Order Type"); // "network-to-token" | "token-to-token" | "token-to-network"
  const variantOpts = [
    { title: "Network to non-network", action: () => "network-to-token" },
    { title: "Non-network to non-network", action: () => "token-to-token" },
    { title: "Non-network to network", action: () => "token-to-network" }
  ];
  const variant = await selectAction(variantOpts, acc);
  exitWithMsgs(variant);
}

function validateLOToken(tok) {
  return ["null", "0"].includes(tok) ? null : tok;
}
