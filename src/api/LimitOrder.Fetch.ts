import {
  getLimitOrderBackend,
  LimitOrderContract,
  LimitOrderTokens,
  LimitOrderType,
  LimitOrderView
} from "../build/backend";
import { fetchToken } from "../participants";
import {
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
    const fmtView = (v: LimitOrderView) => ({ ...v, contractId });
    const view = fromMaybe<LimitOrderView>(await ctc.views.opts(), fmtView);
    const errMessage = `Limit Order may have been filled or cancelled`;
    const result = view
      ? successResult("OK", contractId, ctc, view, "contractId")
      : errorResult(errMessage, contractId, null, ctc);

    // Optional: fetch tokens
    if (includeTokens && result.data) {
      const { tokenA, tokenB } = result.data;
      onProgress("Fetching Limit Order Tokens ...");
      const tokens = await fetchLimitOrderTokens(acc, { tokenA, tokenB });
      const unformatted = { ...result.data, tokens };
      result.data = formatLimitOrder(
        unformatted,
        unformatted.tokens.map((tk) => tk?.decimals) as [number, number]
      );
    }

    // Return result
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
    amtA: ok(decA) ? formatCurrency(v.amtA, decA) : v.amtA,
    amtB: ok(decB) ? formatCurrency(v.amtB, decB) : v.amtB,
    tokenA: parseAddress(v.tokenA).toString(),
    tokenB: parseAddress(v.tokenB).toString(),
    tokens: v.tokens as ReachTokenPair
  };
}
