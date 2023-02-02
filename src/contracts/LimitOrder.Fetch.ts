import {
  getLimitOrderBackend,
  LimitOrderContract,
  LimitOrderTokens,
  LimitOrderType,
  LimitOrderView
} from "../build/backend";
import { fetchToken } from "../contracts/index";
import {
  formatAddress,
  formatCurrency,
  parseAddress,
  ReachAccount,
  ReachToken
} from "../reach-helpers";
import { ReachTokenPair, ReachTxnOptsCore, TransactionResult } from "../types";
import { errorResult, successResult } from "../utils";
import { fromMaybe, noOp } from "../utils/utils.reach";

export type FetchLimitOrderOpts = {
  /** Limit Order contract id */
  contractId: string;
  /** Token order (network/non-network to network/non-network) */
  variant: LimitOrderType;
  /** Fetch tokens & format response (increases network usage) */
  formatResult?: boolean;
  /** Include tokens in response (increases network usage) */
  includeTokens?: boolean;
  /** Decimals for `Token A`. Required if `includeTokens` is true */
  tokenADecimals?: number;
  /** Decimals for `Token B`. Required if `includeTokens` is true */
  tokenBDecimals?: number;
} & ReachTxnOptsCore;

export type LimitOrderResult = SDKLimitOrderView | { error: string } | null;

const safeTok = (id: any) => {
  const p = parseAddress(id);
  return p === null ? "0" : p;
};

/**
 * Fetch a Limit Order Contract
 * @param acc Reach Account to use
 * @param opts Options for fetching limit order
 */
export async function fetchLimitOrder(
  acc: ReachAccount,
  opts: FetchLimitOrderOpts
): Promise<TransactionResult<LimitOrderResult>> {
  const {
    contractId,
    contract,
    includeTokens = false,
    tokenADecimals,
    tokenBDecimals,
    variant,
    onComplete = noOp,
    onProgress = noOp
  } = opts;
  if (!variant) {
    const oneOf = `one of 'network-to-token', 'token-to-token', 'token-to-network'`;
    return errorResult(`Variant (${oneOf}) is required`, contractId, null);
  }

  const invalidDecs =
    isNaN(Number(tokenADecimals)) || isNaN(Number(tokenBDecimals));
  if (!includeTokens && invalidDecs) {
    const e = "Token decimals required when 'includeTokens' is true";
    return errorResult(e, contractId, null);
  }

  const bin = getLimitOrderBackend(variant);
  const ctc: LimitOrderContract = contract || acc.contract(bin, contractId);
  try {
    onProgress("Fetching Limit Order ...");
    const fmtView = (v: LimitOrderView) => ({
      ...v,
      contractId,
      creator: formatAddress(v.creator)
    });
    const view = fromMaybe<LimitOrderView>(await ctc.views.opts(), fmtView);
    const errMessage = `Limit Order may have been filled or cancelled`;

    if (!view) {
      const result = errorResult(errMessage, contractId, null, ctc);
      onComplete(result);
      return result;
    }

    // Optional: fetch tokens
    let data = formatLimitOrder(view, []);
    if (includeTokens) {
      const { tokA, tokB } = view;
      onProgress("Fetching Limit Order Tokens ...");
      const loTokens = await fetchLimitOrderTokens(acc, {
        tokenA: safeTok(tokA) || "0",
        tokenB: safeTok(tokB) || "0"
      });
      const tokenDecimals = loTokens.map((tk) => tk?.decimals);
      const toFormat = {...view, tokens: loTokens }
      data = formatLimitOrder(toFormat, tokenDecimals as [number, number]);
    } else {
      const { tokenADecimals, tokenBDecimals } = opts;
      data = formatLimitOrder(view, [tokenADecimals, tokenBDecimals]);
    }

    // Return result
    data.contractId = parseAddress(contractId).toString();

    const result = successResult("OK", contractId, ctc, data, "contractId");
    onComplete(result);
    return result;
  } catch (error: any) {
    let msg = "Limit Order not found";
    let e = error.toString();
    if (e.includes("Approval program does not match Reach backend")) {
      e = "Error: Contract bytecode mismatch";
      msg = "Invalid contract variant specified";
    }
    return errorResult(msg, contractId, { error: e }, ctc);
  }
}

/**
 * Fetch Tokens associated with a Limit Order Contract
 * @param acc Reach Account to use
 * @param tokens Options for fetching limit order
 */
export async function fetchLimitOrderTokens(
  acc: ReachAccount,
  tokens: LimitOrderTokens
): Promise<[ReachToken | null, ReachToken | null]> {
  return Promise.all([
    fetchToken(acc, tokens.tokenA),
    fetchToken(acc, tokens.tokenB)
  ]);
}

/** Formatted Limit Order Contract details */
export type SDKLimitOrderView = LimitOrderTokens & {
  /** amount A specified or requested in contract */
  amtA: string;
  /** amount B specified or requested in contract */
  amtB: string;
  /** Order application ID (available from stream) */
  contractId?: string;
  /** Order creator (available from stream) */
  creator?: string;
  /** Token metadata (if fetched) */
  tokens?: [ReachToken | null, ReachToken | null];
};

/** Create human-readable Limit order values  */
export function formatLimitOrder(
  v: LimitOrderView,
  [decA, decB]: [number?, number?]
): SDKLimitOrderView {
  const ok = (n?: number) => !isNaN(Number(n));

  return {
    creator: v.creator,
    amtA: ok(decA) ? formatCurrency(v.amtA, decA) : v.amtA,
    amtB: ok(decB) ? formatCurrency(v.amtB, decB) : v.amtB,
    tokenA: safeTok(v.tokA).toString(),
    tokenB: safeTok(v.tokB).toString(),
    tokens: Array.isArray(v.tokens) ? (v.tokens as ReachTokenPair) : undefined
  };
}
