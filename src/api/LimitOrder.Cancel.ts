import { getLimitOrderBackend, LimitOrderType } from "../build/backend";
import { CtcFn, ReachAccount } from "../reach-helpers";
import { ReachTxnOptsCore } from "../types";
import { errorResult, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";

/** Options for canceling a limit order */
export type LimitOrderCancelOpts = ReachTxnOptsCore & {
  /** Order contract id */
  contractId: string;
  /** Order variant (one of 'network-to-token', 'token-to-token', 'token-to-network') */
  variant: LimitOrderType;
};

/**
 * Cancel an active `Limit Order`
 * @param acc User account
 * @param opts Options for canceling limit order
 * @returns Transaction result
 */
export async function cancelLimitOrder(
  acc: ReachAccount,
  opts: LimitOrderCancelOpts
) {
  const {
    contractId,
    contract,
    onComplete = noOp,
    onProgress = noOp,
    variant
  } = opts;
  if (!contractId || !variant) {
    const e = "Contract ID and variant is required";
    return errorResult(e, contractId, null);
  }

  onProgress("Canceling Limit order ...");
  const bin = getLimitOrderBackend(variant);
  const ctc = contract || acc.contract(bin, contractId);
  const api = ctc.apis as { Cancel: CtcFn };

  try {
    await api.Cancel();
    const msg = "Order canceled";
    const res = successResult(msg, contractId, ctc, true, "contractId");

    onComplete(res);
    return res;
  } catch (error) {
    onProgress("Limit order Cancellation failed");
    const e = `Cancellation failed: the contract may have been filled or deleted`;
    return errorResult(e, contractId, false, ctc, "contractId");
  }
}
