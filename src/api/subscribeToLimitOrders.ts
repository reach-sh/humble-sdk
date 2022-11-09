import {
  getLimitOrderVariant,
  limitOrderAnnouncer,
  LimitOrderView
} from "../build/backend";
import { getAnnouncers } from "../constants";
import {
  formatAddress,
  parseAddress,
  ReachAccount,
  ReachEvent
} from "../reach-helpers";
import { noOp } from "../utils/utils.reach";
import { ReachTxnOpts, TransactionResult } from "../types";
import { fetchLimitOrder } from "./LimitOrder.Fetch";

export type LOSubscriptionOpts = {
  /** Exclude notifications prior to "now" when true */
  seekNow?: boolean;
  /** Exclude notifications prior to this block time */
  startFrom?: number;
  /** Called when limit order log is received */
  onOrderReceived(o: LimitOrderView): any;
  /** Called when limit order is fetched */
  onOrderFetched?: (
    o: TransactionResult<LimitOrderView | null | { error: any }>
  ) => any;
} & ReachTxnOpts;

export type LimitOrderEvent = ReachEvent<
  [
    creator: string,
    contractId: any,
    tokenAId: any,
    tokenBId: any,
    amtA: any,
    amtB: any
  ]
>;

export async function subscribeToLimitOrders(
  acc: ReachAccount,
  opts: LOSubscriptionOpts
) {
  const {
    onOrderReceived = noOp,
    onOrderFetched = noOp,
    onProgress = noOp
  } = opts;
  const { limitOrderAnnouncer: ctcId } = getAnnouncers();
  const ctc = acc.contract(limitOrderAnnouncer, ctcId);

  if (opts.seekNow) {
    onProgress("WARN: Listener will only report new pools");
    await ctc.events.LimitOrder.seekNow();
  } else if (opts.startFrom) ctc.events.LimitOrder.seek(opts.startFrom);

  return ctc.events.LimitOrder.monitor(({ what }: LimitOrderEvent) => {
    const [amtA, amtB, contractId, creator, tokenAId, tokenBId] = what;
    const fmt = {
      amtA,
      amtB,
      contractId: parseAddress(contractId),
      creator: formatAddress(creator),
      tokenA: parseAddress(tokenAId),
      tokenB: parseAddress(tokenBId)
    };

    onOrderReceived(fmt);

    if (!onOrderFetched) return;

    fetchLimitOrder(acc, {
      contractId,
      includeTokens: true,
      variant: getLimitOrderVariant({
        tokenA: fmt.tokenA,
        tokenB: fmt.tokenB
      })
    }).then(onOrderFetched);
  });
}
