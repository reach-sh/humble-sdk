import { noOp, ReachAccount, parseAddress } from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { addLiquidity } from "../api/liquidityProvider";
import { isNetworkToken, parseContractError } from "../utils";
import { PoolInfo, ReachTxnOpts, SDKToken, TransactionResult } from "../types";
import { getHumbleAddr } from "../constants";
import { fetchToken } from "./PoolAnnouncer";

type InteractOpts = {
  tokenA: string;
  tokenB: string;
  lpTokenName: string;
  tokSymbol: string;
  onPoolCreated(poolTokenId: any): any;
};

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
  if (!validArgs)
    return {
      poolAddress: "",
      succeeded: false,
      message: "invalid transaction arguments",
      data: requiredFields,
    };

  // If the network token is tokenB then it needs to be swapped out with tokenA.
  // This is because the contract only draws from tokenB when a non-network pool is created.
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
  const buildPoolResult = await buildPool(acc, backend, {
    tokenAId,
    tokenBId,
    tokSymbol: "HMBL2LT",
    lpTokenName: `HUMBLE LP - ${symbolA}/${symbolB}`,
  });
  if (!buildPoolResult.succeeded) return buildPoolResult;

  onProgress("Funding pool...");
  const { data: buildPoolData, contract } = buildPoolResult;
  const fundPoolResult = await fundPool(acc, {
    amounts: tokenAmounts,
    contract,
    pool: buildPoolData.pool,
    onComplete,
    onProgress,
  });
  if (!fundPoolResult.succeeded) return fundPoolResult;

  const result = {
    ...fundPoolResult,
    message: "Pool created",
  };
  onComplete(result);
  return result;
}

type PoolBackend = typeof poolBackend | typeof poolBackendN2NN;
type CreatePoolOpts = {
  tokenAId: string | number;
  tokenBId: string | number;
  lpTokenName: string;
  tokSymbol: string;
} & ReachTxnOpts;

async function buildPool(
  acc: ReachAccount,
  backend: PoolBackend,
  opts: CreatePoolOpts
): Promise<TransactionResult> {
  const { tokenAId, tokenBId, lpTokenName, tokSymbol } = opts;
  try {
    const ctcAdmin = acc.contract<PoolBackend>(backend);
    const [poolLPTokenId, tokA, tokB] = await Promise.all([
      new Promise((resolve) =>
        ctcAdmin.participants.Admin(
          PoolAdminInteract({
            tokenA: tokenAId.toString(),
            tokenB: tokenBId.toString(),
            lpTokenName,
            tokSymbol,
            onPoolCreated: (lpTokenId) => resolve(lpTokenId),
          })
        )
      ),
      fetchToken(acc, tokenAId),
      fetchToken(acc, tokenBId),
    ]);

    const poolAddress = await ctcAdmin.getInfo();
    const data: PoolInfo = {
      poolAddress,
      tokenAId,
      tokenBId,
      tokenADecimals: tokA?.decimals,
      tokenBDecimals: tokB?.decimals,
      poolTokenId: parseAddress(poolLPTokenId),
      n2nn: isNetworkToken(tokenAId) || isNetworkToken(tokenBId),
    };

    return { succeeded: true, poolAddress, contract: ctcAdmin, data };
  } catch (error: any) {
    return createPoolFailed(error);
  }
}

/**
 * @internal HELPER | Create Pool failed */
function createPoolFailed(e: Error): TransactionResult {
  const data = e;
  let message = parseContractError(`Pool creation failed.`, e);
  if (e.toString().includes("max created apps per acct is 10")) {
    message = `This account has created the max amount (10) apps. Please use an account that has created less than 10 apps.`;
  }

  return { poolAddress: "", succeeded: false, data, message };
}

type FundPoolOpts = {
  amounts: [a: number, b: number];
  pool: PoolInfo;
} & ReachTxnOpts;

async function fundPool(
  acc: ReachAccount,
  opts: FundPoolOpts
): Promise<TransactionResult> {
  const { amounts, contract, pool } = opts;
  const { poolAddress } = pool;
  const [tokAAmt, tokBAmt] = amounts;

  if (Number(tokAAmt) + Number(tokBAmt) !== 0) {
    const result = await addLiquidity(acc, {
      amounts,
      contract,
      poolAddress,
      pool,
      onComplete: opts.onComplete,
      onProgress: opts.onProgress,
    });
    return result;
  }

  return {
    poolAddress,
    succeeded: false,
    message: "Invalid transaction amounts",
    data: amounts,
  };
}

/**
 * Create a Pool Admin `Interact` object
 * @param opts Data for constructing `Interact` object
 * @returns `Interact` object for use with connecting to contract
 */
function PoolAdminInteract(opts: InteractOpts) {
  const { tokenA, tokenB, lpTokenName, tokSymbol, onPoolCreated } = opts;
  return {
    tokA: tokenA,
    tokB: tokenB,
    ltName: lpTokenName,
    ltSymbol: tokSymbol,
    protoAddr: getHumbleAddr(),
    signalPoolCreation: onPoolCreated,
  };
}
