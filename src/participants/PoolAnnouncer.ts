import {
  ReachAccount,
  createReachAPI,
  parseAddress,
  Maybe,
  formatCurrency,
  formatAddress,
  ReachToken,
  peraTokenMetadata
} from "../reach-helpers";
import {
  FetchPoolData,
  PoolDetails,
  PoolFetchOpts,
  TokenID,
  TransactionResult
} from "../types";
import { poolBackend, poolBackendN2NN, PoolContract } from "../build/backend";
import { getFeeInfo, getProtocolAddr } from "../constants";
import {
  errorResult,
  isNetworkToken,
  makeNetworkToken,
  successResult
} from "../utils";
import { fromMaybe, noOp } from "../utils/utils.reach";

export type FetchPoolOpts = PoolFetchOpts & {
  /** when true, is a network-to-non-network pool */
  n2nn: boolean;
  /** (Optional) `TokenA` and `TokenB`: required if `opts.includeTokens` is `false` */
  tokens?: [ReachToken, ReachToken];
};
/** ALIAS | Fetch data about a pool */
export const fetchPool = fetchLiquidityPool;

/**
 * Fetch data about a pool
 * @param acc Reach Account instance
 * @param opts Additional options for fetching the pool
 * @param opts.poolAddress Pool contract address.
 * @param opts.n2nn Whether pool uses a network token (e.g. `ALGO`). Defaults to `false`. The correct value is required or the pool fetch will fail.
 */
export async function fetchLiquidityPool(
  acc: ReachAccount,
  opts: FetchPoolOpts
): Promise<TransactionResult<FetchPoolData>> {
  const reach = createReachAPI();
  const big = reach.bigNumberify;
  const {
    poolAddress = "",
    n2nn = false,
    onComplete = noOp,
    onProgress = noOp,
    includeTokens,
    tokens = []
  } = opts || { n2nn: false };
  // backend is determined on whether or not the pool uses the network token
  const backend = () => (n2nn ? poolBackendN2NN : poolBackend);
  const fail = (msg: string) => {
    const e: FetchPoolData = { tradeable: false, pool: null };
    const result = errorResult(msg, poolAddress, e, null);
    onComplete(result);
    return result;
  };

  // Load pool data from view
  if (!poolAddress) return fail("Pool address is required");
  if (!includeTokens && tokens.length === 0) {
    return fail("Token data is required when 'includeTokens' is false");
  }

  const ctcInfo = parseAddress(poolAddress);
  onProgress(`Fetching data for pool "${ctcInfo}"`);
  const ctc: PoolContract = opts.contract || acc.contract(backend(), ctcInfo);
  const view = fromMaybe(await ctc.views.Info());
  if (!view) return fail("invalid pool (no view data)");

  const {
    tokA: tokenAId,
    tokB: tokenBId,
    poolBals,
    protoBals,
    protoInfo,
    liquidityToken,
    lptBals
  } = view;

  // Pool's humble address must match the internal one
  onProgress(`Checking protocol info for pool "${ctcInfo}"`);
  const protoAddr = formatAddress(protoInfo?.protoAddr);
  const valid = Boolean(protoInfo) && protoAddr === getProtocolAddr();
  if (!valid) return fail("invalid pool (protocol mismatch)");

  onProgress(`Fetching tokens for pool "${ctcInfo}"`);
  const [tokA, tokB] = includeTokens
    ? await Promise.all([fetchToken(acc, tokenAId), fetchToken(acc, tokenBId)])
    : tokens;

  if (!tokA || !tokB) {
    return fail("invalid pool (one or more tokens were not found)");
  }

  // calculate the accrued protocol fees + lp fees (0.3%)
  onProgress(`Calculating fees ...`);
  const FEE_INFO = getFeeInfo();
  const totalFees = (protocolBal: number) =>
    big(FEE_INFO.totFee).div(big(FEE_INFO.protoFee)).mul(protocolBal);

  // subtract fees from token balances
  const { A: aBal, B: bBal } = poolBals;
  const { A: pABal, B: pBBal } = protoBals;
  const pool: PoolDetails = {
    poolAddress: ctcInfo.toString(),
    poolTokenId: parseAddress(liquidityToken).toString(),
    mintedLiquidityTokens: lptBals.B.toString(),
    n2nn,
    tokenABalance: formatCurrency(aBal, tokA?.decimals),
    tokenAFees: formatCurrency(totalFees(pABal), tokA?.decimals),
    tokenAId: tokA?.id.toString(),
    tokenADecimals: tokA?.decimals,
    tokenBBalance: formatCurrency(bBal, tokB?.decimals),
    tokenBFees: formatCurrency(totalFees(pBBal), tokB?.decimals),
    tokenBId: tokB?.id.toString(),
    tokenBDecimals: tokB?.decimals
  };

  const tradeable: boolean = reach.gt(aBal, 0) && reach.gt(bBal, 0);
  const data: FetchPoolData = {
    pool,
    tradeable,
    tokens: [tokA, tokB] as FetchPoolData["tokens"]
  };
  const result = successResult("OK", ctcInfo, ctc, data);
  onComplete(result);
  return result;
}

/**
 * Get info about a token (or `Maybe` Token)
 * @param acc Reach Account instance
 * @param token Token ID
 */
export async function fetchToken(
  acc: ReachAccount,
  token: TokenID | Maybe<TokenID>
): Promise<ReachToken | null> {
  const id = fromMaybe(token);
  if (id === null || isNetworkToken(id)) return makeNetworkToken();
  return peraTokenMetadata(id, acc);
}
