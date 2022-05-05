import { fetchToken } from "./participants";
import {
  errorResult,
  isNetworkToken,
  parseContractError,
  successResult,
} from "./utils";
import { noOp } from "./utils.reach";
import { getPoolAnnouncer, POOL_CREATION_ERR } from "./constants";
import {
  ReachAccount,
  parseAddress,
  createReachAPI,
  ReachContract,
} from "./reach-helpers";
import { ReachTxnOpts, PoolInfo, TokenPair, TransactionResult } from "./types";

type CreatePoolOpts = ReachTxnOpts &
  TokenPair & {
    lpTokenName: string;
    tokSymbol: string;
  };

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
): Promise<TransactionResult<PoolInfo>> {
  const { tokenAId, tokenBId, onProgress = noOp } = opts;
  const data: PoolInfo = { poolAddress: "", tokenAId, tokenBId };

  try {
    const ctcAdmin = acc.contract(backend);
    createReachAPI().setSigningMonitor(() => onProgress("SIGNING_EVENT"));
    const [poolLPTokenIdProm, tokAProm, tokBProm] = await Promise.allSettled([
      runAdminParticipant(ctcAdmin, opts),
      fetchToken(acc, tokenAId),
      fetchToken(acc, tokenBId),
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
    data.poolTokenId = parseAddress(poolLPTokenId);
    data.n2nn = isNetworkToken(tokenAId) || isNetworkToken(tokenBId);

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
        signalPoolCreation: resolve,
      })
      .catch(reject)
  );
}
