import { fetchToken } from "../participants";
import {
  errorResult,
  isNetworkToken,
  parseContractError,
  successResult
} from "./index";
import { noOp } from "./utils.reach";
import { getPoolAnnouncer, POOL_CREATION_ERR } from "../constants";
import {
  ReachAccount,
  parseAddress,
  createReachAPI,
  ReachContract,
  formatCurrency
} from "../reach-helpers";
import {
  ReachTxnOpts,
  PoolInfo,
  TokenPair,
  TransactionResult,
  PoolLiquidity
} from "../types";

type CreatePoolOpts = ReachTxnOpts &
  TokenPair & {
    lpTokenName: string;
    tokSymbol: string;
  };

/**
 * Convert an amount of LP Tokens to equivalent Token (`A or B`) amount
 * @param amt Formatted amount of LP tokens in atomic units
 * @param d.PoolLiquidity Pool Liquidity data
 * @param isTokA When true, calculate for pool's `Token A` value
 */
export function convertLPToTokenValue(
  amt: string,
  pool: PoolLiquidity,
  isTokA = false
) {
  const {
    mintedLiquidityTokens: minted,
    tokenABalance: A,
    tokenBBalance: B
  } = pool;
  const fmt = (v?: string) => Number(formatCurrency(v));
  const userShareOfPool = fmt(amt) / fmt(minted);
  const conversion = Number(isTokA ? A : B) * userShareOfPool;
  return isNaN(conversion) ? 0 : conversion;
}

/**
 * @internal
 * Deploy a Liquidity pool contract
 * @param acc User's reach account representation
 * @param backend Backend module (for `n2nn` or `nn2nn` pools)
 * @param opts Pool creation options
 * @returns Transaction result
 */
export async function deployPool(
  acc: ReachAccount,
  backend: any,
  opts: CreatePoolOpts
): Promise<TransactionResult<PoolInfo & PoolLiquidity>> {
  const { tokenAId, tokenBId, onProgress = noOp } = opts;
  const data: PoolInfo & PoolLiquidity = {
    poolAddress: "",
    tokenAId,
    tokenBId
  };

  try {
    const ctcAdmin = acc.contract(backend);
    createReachAPI().setSigningMonitor(() => onProgress("SIGNING_EVENT"));
    const [poolLPTokenIdProm, tokAProm, tokBProm] = await Promise.allSettled([
      runAdminParticipant(ctcAdmin, opts),
      fetchToken(acc, tokenAId),
      fetchToken(acc, tokenBId)
    ]);

    const resolved: any[] = [];
    const rejected: any[] = [];
    [poolLPTokenIdProm, tokAProm, tokBProm].forEach((prom) => {
      if (rejected.length > 0) return;

      if (prom.status === "fulfilled") resolved.push(prom.value);
      else rejected.push(prom.reason);
    });

    if (rejected.length > 0) return createPoolFailed(rejected[0]);

    onProgress("Getting new pool info");
    const [poolLPTokenId, tokA, tokB] = resolved;
    data.poolAddress = parseAddress(await ctcAdmin.getInfo()).toString();
    data.tokenADecimals = tokA?.decimals;
    data.tokenBDecimals = tokB?.decimals;
    data.poolTokenId = parseAddress(poolLPTokenId).toString();
    data.n2nn = isNetworkToken(tokenAId) || isNetworkToken(tokenBId);
    data.tokenABalance = "0";
    data.tokenBBalance = "0";
    data.mintedLiquidityTokens = "0";

    return successResult("OK", data.poolAddress as string, ctcAdmin, data);
  } catch (error: any) {
    const msg = parseContractError("Pool creation failed", error);
    return errorResult(msg, null, data);
  }
}

/** @internal HELPER | "Create Pool failed" response */
export function createPoolFailed<T>(e: T, m = ""): TransactionResult<T> {
  const data = e;
  const response = { poolAddress: "", succeeded: false, data, message: m };
  if (!m) response.message = parseContractError(POOL_CREATION_ERR, e);

  return response;
}

/** @internal Run `Admin` participant to create pool contract */
function runAdminParticipant(ctc: ReachContract<any>, opts: CreatePoolOpts) {
  const { tokenAId, tokenBId, lpTokenName: ltName, tokSymbol: ltSymbol } = opts;

  return new Promise((resolve, reject) =>
    ctc.participants
      .Admin({
        tokA: tokenAId.toString(),
        tokB: tokenBId.toString(),
        ltName,
        ltSymbol,
        proto: getPoolAnnouncer(),
        signalPoolCreation: resolve
      })
      .catch(reject)
  );
}
