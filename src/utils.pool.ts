import { fetchToken } from "./participants";
import { isNetworkToken, parseContractError } from "./utils";
import { getPoolAnnouncer, POOL_CREATION_ERR } from "./constants";
import {
  ReachAccount,
  parseAddress,
  noOp,
  createReachAPI,
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
  const {
    tokenAId,
    tokenBId,
    lpTokenName,
    tokSymbol,
    onProgress = noOp,
  } = opts;
  try {
    const ctcAdmin = acc.contract(backend);
    createReachAPI().setSigningMonitor(() => onProgress("SIGNING_EVENT"));

    const [poolLPTokenId, tokA, tokB] = await Promise.all([
      new Promise((resolve) =>
        ctcAdmin.participants.Admin({
          tokA: tokenAId.toString(),
          tokB: tokenBId.toString(),
          ltName: lpTokenName,
          ltSymbol: tokSymbol,
          proto: getPoolAnnouncer(),
          signalPoolCreation: resolve,
        })
      ),
      fetchToken(acc, tokenAId),
      fetchToken(acc, tokenBId),
    ]);

    onProgress("Getting pool info");
    const poolAddress = parseAddress(await ctcAdmin.getInfo());
    const n2nn = isNetworkToken(tokenAId) || isNetworkToken(tokenBId);
    const data: PoolInfo = {
      poolAddress,
      tokenAId,
      tokenBId,
      tokenADecimals: tokA?.decimals,
      tokenBDecimals: tokB?.decimals,
      poolTokenId: parseAddress(poolLPTokenId),
      n2nn,
    };

    return { succeeded: true, poolAddress, contract: ctcAdmin, data };
  } catch (error: any) {
    return createPoolFailed(error);
  }
}

/**
 * @internal
 * HELPER | Create Pool failed */
export function createPoolFailed<T>(e: T, m = ""): TransactionResult<T> {
  const data = e;
  const response = { poolAddress: "", succeeded: false, data, message: m };
  if (!m) response.message = parseContractError(POOL_CREATION_ERR, e);

  return response;
}
