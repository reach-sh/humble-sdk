import {
  getLimitOrderVariant,
  limitOrderAnnouncer as limitOrderAnnouncerBIN,
  LimitOrderView
} from "../build/backend";
import { getAnnouncers } from "../constants";
import {
  formatAddress,
  parseAddress,
  ReachAccount,
  ReachEvent
} from "../reach-helpers";
import { fromMaybe, noOp } from "../utils/utils.reach";
import { ReachTxnOpts, TransactionResult } from "../types";
import { fetchLimitOrder, SDKLimitOrderView } from "./LimitOrder.Fetch";

export type LOSubscriptionOpts = {
  /** Exclude notifications prior to "now" when true */
  seekNow?: boolean;
  /** Exclude notifications prior to this block time */
  startFrom?: number;
  /** Exclude contracts created by any of the specified addresses */
  excludeAddresses?: string[];
  /** Exclude contracts created by any of the specified addresses */
  includeAddresses?: string[];
  /** Report ALL contracts when true */
  includeAll?: boolean;
  /** Called when limit order log is received */
  onOrderReceived(o: SDKLimitOrderView): any;
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
  const { limitOrderAnnouncer: ctcId } = getAnnouncers();
  const ctc = acc.contract(limitOrderAnnouncerBIN, ctcId);
  const {
    onOrderReceived = noOp,
    onOrderFetched = noOp,
    onProgress = noOp,
    excludeAddresses = [],
    includeAddresses = []
  } = opts;
  const includeAll = opts.includeAll || !includeAddresses?.length;
  const filter = (a: string) => {
    if (includeAll) return false;
    return (
      excludeAddresses.includes(a) ||
      (includeAddresses.length && !includeAddresses.includes(a))
    );
  };

  // Change stream block origin
  if (opts.seekNow) {
    onProgress("WARN: Listener will only report new pools");
    await ctc.events.LimitOrder.seekNow();
  } else if (opts.startFrom) ctc.events.LimitOrder.seek(opts.startFrom);

  // Monitor stream
  return ctc.events.LimitOrder.monitor(({ what }: LimitOrderEvent) => {
    const [creator0x, contractId, tokenAId, tokenBId, amtA, amtB] = what;
    const creator = formatAddress(creator0x);
    if (filter(creator)) return; // optionally exclude or include addresses

    const toString = (id: string) => parseAddress(id).toString()
    const fmt = {
      amtA,
      amtB,
      contractId: parseAddress(contractId),
      creator,
      tokenA: fromMaybe(tokenAId, toString),
      tokenB: fromMaybe(tokenBId, toString)
    };
    onOrderReceived(fmt);

    // Fetch order details
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
