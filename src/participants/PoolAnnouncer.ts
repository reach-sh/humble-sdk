import {
  ReachAccount,
  fromMaybe,
  createReachAPI,
  parseAddress,
  Maybe,
  noOp,
  trimByteString,
  formatCurrency,
} from "../reach-helpers";
import { FetchPoolTxnResult, PoolDetails, ReachTxnOpts } from "../types";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { getFeeInfo, getHumbleAddr } from "../constants";
import { isNetworkToken, makeNetworkToken, withTimeout } from "../utils";

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
  const { n2nn = false, onComplete = noOp, onProgress = noOp } = opts;
  const reach = createReachAPI();
  // backend is determined on whether or not the pool uses the network token
  const theBackend = n2nn ? poolBackendN2NN : poolBackend;
  const ctcInfo = parseAddress(poolAddress);

  // Load pool data from view
  onProgress(`Fetching balances for pool "${ctcInfo}"`);
  const views: any = opts.contract || acc.contract(theBackend, ctcInfo).views;
  const aBal = await views.Tokens.aBal();
  const bBal = await views.Tokens.bBal();
  const liquidityToken = await views.Tokens.liquidityToken();
  const mintedLPBig = await views.Tokens.minted();

  onProgress(`Fetching protocol info for pool "${ctcInfo}"`);
  const i = await views.Tokens.protocolInfo();
  const pb = await views.Tokens.protocolBals();
  // if the pools humble address doesn't match the internal one, it isn't a humble pool
  const [protocolInfo, protocolBals] = [i, pb].map((mVal) => fromMaybe(mVal));
  const hasProtocolInfo = Boolean(protocolInfo && protocolBals);
  onProgress(`Checking against humble addr "${getHumbleAddr()}"`);
  if (
    !hasProtocolInfo ||
    !reach.addressEq(protocolInfo?.addr, getHumbleAddr())
  ) {
    const message = "invalid pool";
    return txnFailedResponse(message, ctcInfo, { tradeable: false });
  }

  onProgress(`Fetching tokens for pool "${ctcInfo}"`);
  const [tokenAId, tokenBId] = await Promise.all([
    views.Tokens.aTok(),
    views.Tokens.bTok(),
  ]);
  const [tokA, tokB] = await Promise.all([
    fetchToken(acc, tokenAId),
    fetchToken(acc, tokenBId),
  ]);

  // calculate the accrued protocol fees + lp fees (0.3%)
  onProgress(`Calculating fees ...`);
  const FEE_INFO = getFeeInfo();
  const totalFees = (protocolBal: number) =>
    reach
      .bigNumberify(FEE_INFO.totFee)
      .div(reach.bigNumberify(FEE_INFO.fee))
      .mul(protocolBal);

  // subtract fees from token balances
  const { balA, balB } = protocolBals;
  const tokenBalA = fromMaybe(aBal, (v) => reach.sub(v, balA), 0);
  const tokenBalB = fromMaybe(bBal, (v) => reach.sub(v, balB), 0);
  const pool: PoolDetails = {
    poolAddress: ctcInfo,
    poolTokenId: fromMaybe(liquidityToken, parseAddress),
    mintedLiquidityTokens: fromMaybe(mintedLPBig, reach.bigNumberToNumber, 0),
    n2nn,
    tokenABalance: formatCurrency(tokenBalA, tokA?.decimals),
    tokenAFees: formatCurrency(totalFees(balA), tokA?.decimals),
    tokenAId: tokA?.id,
    tokenADecimals: tokA?.decimals,
    tokenBBalance: formatCurrency(tokenBalB, tokB?.decimals),
    tokenBFees: formatCurrency(totalFees(balB), tokB?.decimals),
    tokenBId: tokB?.id,
    tokenBDecimals: tokB?.decimals,
  };

  const tradeable = reach.gt(tokenBalA, 0) && reach.gt(tokenBalB, 0);
  const result: FetchPoolTxnResult = {
    poolAddress: ctcInfo,
    succeeded: true,
    data: {
      pool,
      tradeable,
      tokens: [tokA, tokB] as [any, any],
    },
  };
  onComplete(result);
  return result;
}

/** Get info for a token (or `Maybe` Token) */
export async function fetchToken(
  acc: ReachAccount,
  token: string | number | Maybe
) {
  const id = Array.isArray(token) ? fromMaybe(token) : token;
  if (isNaN(id)) return null;
  if (id === null || isNetworkToken(id)) return makeNetworkToken();

  // Stdlib will infinitely retry on a failed request. We timeout the
  // request after 3.5 seconds and return null

  try {
    const data: any = await withTimeout(acc.tokenMetadata(id));
    const reach = createReachAPI();
    const decimals = reach.bigNumberToNumber(data.decimals);

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
