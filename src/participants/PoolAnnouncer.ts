import {
  ReachAccount,
  createReachAPI,
  parseAddress,
  Maybe,
  formatCurrency,
} from "../reach-helpers";
import {
  FetchPoolData,
  FetchPoolTxnResult,
  PoolDetails,
  ReachTxnOpts,
  TokenID,
} from "../types";
import { poolBackend, poolBackendN2NN, PoolContract } from "../build/backend";
import { getFeeInfo, getProtocolAddr } from "../constants";
import { isNetworkToken, makeNetworkToken, successResult, withTimeout } from "../utils";
import { fromMaybe, isMaybe, noOp, trimByteString } from "../utils/utils.reach";

export type FetchPoolOpts = ReachTxnOpts & {
  /** when true, is a network-to-non-network pool */
  n2nn: boolean;
};

/**
 * Fetch data about a pool
 * @param acc Reach Account instance
 * @param poolAddress Pool application ID (Algorand) or contract address (other)
 * @param opts Additional options for fetching the pool
 * @param opts.tokens Pool token IDs
 * @param opts.n2nn Whether pool uses a network token (e.g. `ALGO`). Defaults to `false`. The correct value is required or the pool fetch will fail.
 */
export async function fetchPool(
  acc: ReachAccount,
  poolAddress: string | number,
  opts: FetchPoolOpts = { n2nn: false }
): Promise<FetchPoolTxnResult> {
  const reach = createReachAPI();
  const { n2nn = false, onComplete = noOp, onProgress = noOp } = opts;
  // backend is determined on whether or not the pool uses the network token
  const theBackend = n2nn ? poolBackendN2NN : poolBackend;
  const ctcInfo = parseAddress(poolAddress);

  // Load pool data from view
  onProgress(`Fetching data for pool "${ctcInfo}"`);
  const ctc: PoolContract = opts.contract || acc.contract(theBackend, ctcInfo);
  const view = fromMaybe(await ctc.views.Info());
  if (!view) {
    const message = "invalid pool (no view data)";
    return txnFailedResponse(message, ctcInfo, { tradeable: false });
  }

  const {
    tokA: tokenAId,
    tokB: tokenBId,
    poolBals,
    protoBals: protocolBals,
    protoInfo: protocolInfo,
    liquidityToken,
    lptBals,
  } = view;
  onProgress(`Checking protocol info for pool "${ctcInfo}"`);
  // if the pools humble address doesn't match the internal one, it isn't a humble pool
  const hasProtocolInfo = Boolean(protocolInfo && protocolBals);
  if (
    !hasProtocolInfo ||
    !reach.addressEq(protocolInfo?.protoAddr, getProtocolAddr())
  ) {
    const message = "invalid pool (protocol mismatch)";
    return txnFailedResponse(message, ctcInfo, { tradeable: false });
  }

  onProgress(`Fetching tokens for pool "${ctcInfo}"`);
  const [tokA, tokB] = await Promise.all([
    fetchToken(acc, tokenAId),
    fetchToken(acc, tokenBId),
  ]);

  if (tokA === null || tokB === null) {
    const message = "invalid pool (one or more tokens were not found)";
    return txnFailedResponse(message, ctcInfo, { tradeable: false });
  }

  // calculate the accrued protocol fees + lp fees (0.3%)
  onProgress(`Calculating fees ...`);
  const FEE_INFO = getFeeInfo();
  const totalFees = (protocolBal: number) =>
    reach
      .bigNumberify(FEE_INFO.totFee)
      .div(reach.bigNumberify(FEE_INFO.protoFee))
      .mul(protocolBal);

  // subtract fees from token balances
  const { A: aBal, B: bBal } = poolBals;
  const { A: protoA, B: protoB } = protocolBals;
  const A = aBal; // reach.ge(aBal, protoA) ? reach.sub(aBal, protoA) : "0";
  const B = bBal; // reach.ge(bBal, protoB) ? reach.sub(bBal, protoB) : "0";
  const pool: PoolDetails = {
    poolAddress: ctcInfo,
    poolTokenId: parseAddress(liquidityToken),
    mintedLiquidityTokens: reach.bigNumberToNumber(lptBals.B),
    n2nn,
    tokenABalance: formatCurrency(A, tokA?.decimals),
    tokenAFees: formatCurrency(totalFees(protoA), tokA?.decimals),
    tokenAId: tokA?.id,
    tokenADecimals: tokA?.decimals,
    tokenBBalance: formatCurrency(B, tokB?.decimals),
    tokenBFees: formatCurrency(totalFees(protoB), tokB?.decimals),
    tokenBId: tokB?.id,
    tokenBDecimals: tokB?.decimals,
  };

  const tradeable = reach.gt(A, 0) && reach.gt(B, 0);
  const tokens: FetchPoolData["tokens"] = [tokA, tokB];
  const data = { pool, tradeable, tokens }
  const result = successResult("OK", ctcInfo, ctc, data)
  onComplete(result);
  return result;
}

/** Get info for a token (or `Maybe` Token) */
export async function fetchToken(
  acc: ReachAccount,
  token: TokenID | Maybe<TokenID>
) {
  const { bigNumberToNumber, eq } = createReachAPI();
  const id = isMaybe(token) ? fromMaybe(token) : (token as TokenID);
  const networkToken = id === null || eq(id, 0) || isNetworkToken(id);
  if (networkToken) return makeNetworkToken();

  try {
    const data: any = await withTimeout(acc.tokenMetadata(id));
    const decimals = bigNumberToNumber(data.decimals);

    return {
      id: parseAddress(id),
      name: trimByteString(data.name),
      symbol: trimByteString(data.symbol),
      url: trimByteString(data.url),
      supply: formatCurrency(data.supply, decimals, true),
      decimals,
    };
  } catch {
    return null;
  }
}

function txnFailedResponse(
  msg: string,
  poolAddress: any,
  data: any = {}
): FetchPoolTxnResult {
  return {
    poolAddress,
    succeeded: false,
    message: msg,
    data: { ...data, pool: null },
  };
}
