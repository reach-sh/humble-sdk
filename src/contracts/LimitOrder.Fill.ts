import { getLimitOrderBackend, LimitOrderType } from "../build/backend";
import {
  BigNumber,
  parseAddress,
  parseCurrency,
  ReachAccount
} from "../reach-helpers";
import { ReachTxnOptsCore } from "../types";
import { errorResult, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";
import { fetchLimitOrder } from "./LimitOrder.Fetch";

/** Options for canceling a limit order */
export type LimitOrderFillOpts = ReachTxnOptsCore & {
  /** Order contract id */
  contractId: string;
  /** Amount of token to sell */
  sellAmount: string;
  /** Minimum amount of other token to receive */
  minProfitB: string;
  /** `Sell` token decimals */
  sellTokenDecimals: number;
  /** `Buy` token decimals */
  buyTokenDecimals: number;
  /** Target Pool contract ID */
  poolId: string;
  /** Network-to-non-network pool (true when pool has ALGO) */
  n2nn?: boolean;
  /** Set to `true` if order of tokens matches pool */
  aForB?: boolean;
  /** Order variant (one of 'network-to-token', 'token-to-token', 'token-to-network') */
  variant: LimitOrderType;
};

/**
 * Fill an active `Limit Order` using a HumbleSwap pool
 * @param acc User account
 * @param opts Options for canceling limit order
 * @returns Transaction result
 */
export async function fillLimitOrder(
  acc: ReachAccount,
  opts: LimitOrderFillOpts
) {
  const {
    contractId,
    contract,
    onComplete = noOp,
    onProgress = noOp,
    poolId,
    sellTokenDecimals,
    buyTokenDecimals,
    variant
  } = opts;
  if (!contractId || !poolId || !variant) {
    const e = "Contract ID, Pool ID, and variant are required";
    return errorResult(e, contractId, null);
  }

  onProgress("Filling Limit order ...");
  const bin = getLimitOrderBackend(variant);
  const ctc = contract || acc.contract(bin, contractId);
  const api = ctc.apis as {
    SwapViaPool: {
      (
        poolCtc: any,
        aForB: boolean,
        giveA: BigNumber,
        minProfitB: BigNumber
      ): Promise<any>;
    };
  };

  // Fetch order
  const order = await fetchLimitOrder(acc, {
    contractId,
    variant,
    includeTokens: true
  });
  if (!order.succeeded || !order.data) {
    const err = "Limit order not found";
    onProgress(err);
    return onFulfillError(contractId, new Error(err), ctc);
  }

  // Fetch

  try {
    // Swap via contract
    const res = await api.SwapViaPool(
      parseAddress(poolId),
      opts.aForB || false,
      parseCurrency(opts.sellAmount, sellTokenDecimals),
      parseCurrency(opts.minProfitB || 0, buyTokenDecimals)
    );
    const msg = "Order filled";
    onProgress(JSON.stringify({ res }));
    const data = successResult(msg, contractId, ctc, res || true, "contractId");

    onComplete(data);
    return data;
  } catch (error: any) {
    const e = onFulfillError(contractId, error, ctc);
    onProgress("Limit order fulfillment failed");
    onComplete(e);
    return e;
  }
}

function onFulfillError(contractId: string, error: any, ctc: any = null) {
  const e = `Fulfillment failed due to either missing contract or unfavorable market`;
  console.log("LimitOrder.Fill.Error", error);
  return errorResult(e, contractId, false, ctc, "contractId");
}
