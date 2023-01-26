import { createReachAPI, tokenMetadata } from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { errorResult, isNetworkToken, parseContractError } from "../utils";
import { noOp } from "../utils/utils.reach";
import { PoolInfo, ReachTxnOpts, TransactionResult } from "../types";
import { deployPool } from "../utils/utils.pool";
import { addLiquidity } from "../contracts/index";
import { HUMBLE_LP_TOKEN_SYMBOL } from "../constants";

export type CreatePoolTxnOpts = {
  tokenIds: [string, string];
  tokenAmounts: [a: number, b: number];
} & ReachTxnOpts;

export { convertLPToTokenValue } from "../utils/utils.pool";

/** Create a Liquidity pool */
export async function createLiquidityPool(
  acc: any,
  opts: CreatePoolTxnOpts
): Promise<TransactionResult<PoolInfo>> {
  // Validate params
  const { tokenAmounts, tokenIds, onComplete = noOp, onProgress = noOp } = opts;
  const data = { tokenAId: "", tokenBId: "", poolAddress: "" };
  if (![tokenAmounts, tokenIds].every(({ length }) => length === 2)) {
    const f = ["tokenAmounts", "tokenIds"];
    const d = `Missing fields ${f.join(", ")}`;
    return errorResult(d, null, data, null);
  }

  if (tokenAmounts.some((a) => !a)) {
    const d = `A deposit amount was zero`;
    return errorResult(d, null, data, null);
  }

  onProgress("Fetching token data ... ");
  const { eq } = createReachAPI();
  const checkIsNetwork = (id: any) => eq(id, 0) || isNetworkToken(id);
  const tokenSymbols: string[] = [];
  const tokenDecimals: number[] = [];
  const isN2nnPool = tokenIds.some(checkIsNetwork);
  const tokens = await Promise.allSettled([
    tokenMetadata(tokenIds[0], acc),
    tokenMetadata(tokenIds[1], acc)
  ]);

  // Validate tokens
  tokens.forEach((tok) => {
    if (tok.status === "fulfilled") {
      tokenSymbols.push(tok.value.symbol);
      tokenDecimals.push(tok.value.decimals);
    }
  });

  if (tokens.length < 2) {
    const d = `Could not fetch data for one or more tokens`;
    return errorResult(d, null, data, null);
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

  // Keep a ref to pool address in case creation succeeds, but an error happens
  // before we can return to the user
  let poolAddress: any;

  onProgress(`Creating pool`);
  try {
    const deployment = await deployPool(acc, backend, {
      tokenAId: ids[0].toString(),
      tokenBId: ids[1].toString(),
      tokSymbol: HUMBLE_LP_TOKEN_SYMBOL,
      lpTokenName: `HUMBLE LP - ${symbolA}/${symbolB}`,
      onProgress
    });
    if (!deployment.succeeded || !deployment.data) return deployment;

    onProgress("Funding pool");
    const { data: poolData, contract } = deployment;
    const deposit = await addLiquidity(acc, {
      amounts: tokenAmounts,
      contract,
      pool: poolData,
      onProgress,
      optInToLPToken: true,
      initialDeposit: true
    });

    if (deposit.succeeded) {
      poolAddress = poolData.poolAddress;
      const result = { ...deposit, data: poolData, message: "Pool created" };
      onComplete(result);
      return result;
    }

    return deposit as TransactionResult<any>;
  } catch (error: any) {
    const msg = parseContractError("Pool creation failed", error);
    return errorResult(msg, poolAddress, data);
  }
}
