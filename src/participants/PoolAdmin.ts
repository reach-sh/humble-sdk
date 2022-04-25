import { noOp } from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { isNetworkToken } from "../utils";
import { ReachTxnOpts, SDKToken, TransactionResult } from "../types";
import { createPoolFailed, deployPool } from "../utils.pool";
import { addLiquidity } from "../api/index";

type CreatePoolTxnOpts = {
  tokens: SDKToken[];
  tokenAmounts: [a: number, b: number];
} & ReachTxnOpts;

/** @internal Create a pool */
export async function createPool(
  acc: any,
  opts: CreatePoolTxnOpts
): Promise<TransactionResult> {
  const { tokenAmounts, tokens, onComplete = noOp, onProgress = noOp } = opts;
  const tokenSymbols: string[] = [];
  const tokenIds: any = [];
  const tokenDecimals: number[] = [];
  tokens.forEach((tok) => {
    tokenSymbols.push(tok.symbol);
    tokenIds.push(tok.id);
    tokenDecimals.push(tok.decimals);
  });

  const isN2nnPool = tokenIds.some(isNetworkToken);
  const requiredFields = [tokenAmounts, tokenSymbols, tokenIds];
  const validArgs = requiredFields.every(({ length }) => length === 2);
  if (!validArgs) {
    const e = new Error(`Missing fields ${requiredFields.join(", ")}`);
    return createPoolFailed(e, "invalid transaction arguments");
  }

  // If the network token is tokenB then it needs to be swapped out with
  // tokenA, because the contract only draws from tokenB when a non-
  // network pool is created.
  if (isNetworkToken(tokenIds[1])) {
    tokenIds.reverse();
    tokenSymbols.reverse();
    tokenAmounts.reverse();
    tokenDecimals.reverse();
  }
  const [symbolA, symbolB] = tokenSymbols;
  const backend = isN2nnPool ? poolBackendN2NN : poolBackend;

  onProgress(`Creating pool`);
  const [tokenAId, tokenBId] = tokenIds;
  const deployment = await deployPool(acc, backend, {
    tokenAId,
    tokenBId,
    tokSymbol: "HMBL2LT",
    lpTokenName: `HUMBLE LP - ${symbolA}/${symbolB}`,
  });
  if (!deployment.succeeded) return deployment;

  onProgress("Funding pool...");
  const { data: poolData, contract } = deployment;
  const deposit = await addLiquidity(acc, {
    amounts: tokenAmounts,
    contract,
    pool: poolData.pool,
    onComplete,
    onProgress,
    optInToLPToken: true,
  });
  if (!deposit.succeeded) return deposit;

  const result = {
    ...deposit,
    message: "Pool created",
  };
  onComplete(result);
  return result;
}
