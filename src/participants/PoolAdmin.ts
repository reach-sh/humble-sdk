import { noOp, tokenMetadata } from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { isNetworkToken } from "../utils";
import { PoolInfo, ReachTxnOpts, TransactionResult } from "../types";
import { createPoolFailed, deployPool } from "../utils.pool";
import { addLiquidity } from "../api/index";

type CreatePoolTxnOpts = {
  tokenIds: [string | number, string | number];
  tokenAmounts: [a: number, b: number];
} & ReachTxnOpts;

/** Create a Liquidity pool */
export async function createLiquidityPool(
  acc: any,
  opts: CreatePoolTxnOpts
): Promise<TransactionResult<PoolInfo | Error>> {
  // Validate params
  const { tokenAmounts, tokenIds } = opts;
  if (![tokenAmounts, tokenIds].every(({ length }) => length === 2)) {
    const f = ["tokenAmounts", "tokenIds"];
    const e = new Error(`Missing fields ${f.join(", ")}`);
    return createPoolFailed(e, "invalid transaction arguments");
  } else if (tokenAmounts.some((a) => !a)) {
    const e = new Error(`A deposit amount was zero`);
    return createPoolFailed(e, "invalid transaction arguments");
  }

  const { onComplete = noOp, onProgress = noOp } = opts;
  onProgress("Fetching token data ... ");
  const tokenSymbols: string[] = [];
  const tokenDecimals: number[] = [];
  const isN2nnPool = tokenIds.some(isNetworkToken);
  const tokens = await Promise.allSettled([
    tokenMetadata(tokenIds[0], acc),
    tokenMetadata(tokenIds[1], acc),
  ]);

  // Validate tokens
  tokens.forEach((tok) => {
    if (tok.status === "fulfilled") {
      tokenSymbols.push(tok.value.symbol);
      tokenDecimals.push(tok.value.decimals);
    }
  });

  if (tokens.length < 2) {
    const e = new Error(`Could not fetch data for one or more tokens`);
    return createPoolFailed(e, "invalid transaction arguments");
  }

  // If the network token is tokenB then it needs to be swapped out with
  // tokenA, because the contract only draws from tokenB when a non-
  // network pool is created.
  const ids = [...tokenIds];
  if (isNetworkToken(tokenIds[1])) {
    ids.reverse();
    tokenSymbols.reverse();
    tokenAmounts.reverse();
    tokenDecimals.reverse();
  }
  const [symbolA, symbolB] = tokenSymbols;
  const backend = isN2nnPool ? poolBackendN2NN : poolBackend;

  onProgress(`Creating pool`);
  const [tokenAId, tokenBId] = ids;
  const deployment = await deployPool(acc, backend, {
    tokenAId,
    tokenBId,
    tokSymbol: "HMBL2LT",
    lpTokenName: `HUMBLE LP - ${symbolA}/${symbolB}`,
  });
  if (!deployment.succeeded || !deployment.data) return deployment;

  onProgress("Funding pool...");
  const { data: poolData, contract } = deployment;
  const deposit = await addLiquidity(acc, {
    amounts: tokenAmounts,
    contract,
    pool: poolData,
    onComplete,
    onProgress,
    optInToLPToken: true,
  });
  if (!deposit.succeeded) return deposit;

  const result = {
    ...deposit,
    data: poolData,
    message: "Pool created",
  };
  onComplete(result);
  return result;
}
