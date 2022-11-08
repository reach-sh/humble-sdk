import {
  getLimitOrderBackend,
  LimitOrderContract,
  LimitOrderVariant
} from "build/backend";
import { ReachAccount } from "reach-helpers";
import { ReachTxnOpts } from "types";
import { errorResult, successResult } from "utils";
import { fromMaybe, noOp } from "utils/utils.reach";

export type FetchLimitOrderOpts = {
  /** Limit Order contract id */
  contractId: string;
  /** Fetch tokens & format response (increases network usage) */
  formatResult?: boolean;
  /** Include tokens in response (increases network usage) */
  includeTokens?: boolean;
  /** Decimals for `Token A`. Required if `includeTokens` is true */
  tokenADecimals?: number;
  /** Decimals for `Token B`. Required if `includeTokens` is true */
  tokenBDecimals?: number;
  /** Token order (network/non-network to network/non-network) */
  variant?: LimitOrderVariant;
} & ReachTxnOpts;

/** Limit Order Token pair */
export type LimitOrderTokens =
  | { tokenA: any; tokenB: any }
  | { tokenA: null; tokenB: any }
  | { tokenA: any; tokenB: null };

/** Limit Order Contract details */
export type LimitOrderView = LimitOrderTokens & {
  /** amount A specified or requested in contract */
  amtA: any;
  /** amount B specified or requested in contract */
  amtB: any;
};

/**
 * Fetch a Limit Order Contract
 * @param acc Reach Account to use
 * @param opts Options for fetching limit order
 */
export async function fetchLimitOrder(
  acc: ReachAccount,
  opts: FetchLimitOrderOpts
) {
  const {
    contractId,
    contract,
    includeTokens = false,
    tokenADecimals,
    tokenBDecimals,
    variant = "network-to-token",
    onComplete = noOp,
    onProgress = noOp
  } = opts;
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
    const view = fromMaybe<LimitOrderView>(await ctc.views.opts());
    const result = view
      ? successResult("OK", contractId, ctc, view, "contractId")
      : errorResult("Limit Order not found", contractId, null, ctc);

    onComplete(result);
    return result;
  } catch (error: any) {
    return errorResult("Limit Order not found", contractId, error, ctc);
  }
}
