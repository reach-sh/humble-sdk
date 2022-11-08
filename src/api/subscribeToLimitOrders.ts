import { limitOrderAnnouncer } from "build/backend";
import { getAnnouncers } from "../constants";
import { ReachAccount, ReachEvent } from "reach-helpers";
import { noOp } from "utils/utils.reach";
import { ReachTxnOpts, TransactionResult } from "types";
import { fetchLimitOrder } from "./LimitOrder.Fetch";

export type LimitOrder = {
  amtA: any;
  amtB: any;
  contractId: any;
  creator: string;
  poolTokenAId: any;
  poolTokenBId: any;
};

export type LOSubscriptionOpts = {
  /** Exclude notifications prior to "now" when true */
  seekNow?: boolean;
  /** Exclude notifications prior to this block time */
  startFrom?: number;
  /** Called when limit order log is received */
  onOrderReceived(o: LimitOrder): any;
  /** Called when limit order is fetched */
  onOrderFetched?: (o: TransactionResult<LimitOrder | null>) => any;
} & ReachTxnOpts;

export type LimitOrderEvent = ReachEvent<
  [
    creator: string,
    contractId: any,
    poolTokenAId: any,
    poolTokenBId: any,
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
    const [amtA, amtB, contractId, creator, poolTokenAId, poolTokenBId] = what;

    onOrderReceived({
      amtA,
      amtB,
      contractId,
      creator,
      poolTokenAId,
      poolTokenBId
    });

    if (onOrderFetched) {
      const fetchLimitOrderOpts = { contractId, includeTokens: true };
      fetchLimitOrder(acc, fetchLimitOrderOpts).then(onOrderFetched);
    }
  });
}
