import {
  addLiquidity,
  calculateOtherAmount,
  parseAddress
} from "@reach-sh/humble-sdk";
import {
  answerOrDie,
  iout,
  Blue,
  Green,
  Yellow,
  Red,
  rerunOrExit
} from "./utils.mjs";

/** Add Liquidity to a pool */
export async function runAddLiquidity(acc, opts, poolFetchData) {
  Blue(`\t * Running ADD-LIQUIDITY (pool "${opts.poolAddress}")`);

  const { amountA, tokenIn, tokenOut } = opts;
  const { data, contract } = poolFetchData;
  const { pool } = data;
  const { poolAddress, tokenAId, tokenBId } = pool;
  const tokenIds = [tokenAId, tokenBId];
  const label = "* Input args:";
  const amounts = [amountA];
  const tokenB = data.tokens.find(({ id }) => id === tokenBId);
  let amountB = 0;
  if (pool.tokenBBalance === "0") {
    amountB = await answerOrDie(`Enter deposit amount for ${tokenB.name}:`);
  } else {
    Blue(`${tokenB.name} amount will be calculated for you`);
    amountB = calculateOtherAmount(amountA, tokenIn, pool);
  }

  amounts.push(amountB);
  if (parseAddress(tokenIn) === tokenBId) {
    tokenIds.reverse();
    amounts.reverse();
  }

  const args = {
    amountA: amounts[0],
    tokenIn: tokenIds[0],
    amountB: amounts[1],
    tokenOut: tokenIds[1]
  };

  //   Deposit
  Blue(`\t Pool ${JSON.stringify(pool, null, 2)}`);
  Blue(`\t ${label} ${JSON.stringify(args, null, 2)}`);
  Yellow(`Depositing to pool "${poolAddress}"`);
  const {
    succeeded,
    message,
    data: addResult
  } = await addLiquidity(acc, {
    amounts,
    pool,
    contract,
    optInToLPToken: !(await acc.tokenAccepted(pool.poolTokenId)),
    onProgress: Yellow
  });

  if (succeeded) {
    Green("Deposit complete!");
    iout(message, addResult);
    Blue("'Add Liquidity' Test complete");
  } else Red(message);
}
