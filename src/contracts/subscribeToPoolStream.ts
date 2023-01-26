import { ReachAccount, parseAddress, Maybe } from "../reach-helpers";
import { fromMaybe, noOp } from "../utils/utils.reach";
import { announcerBackend } from "../build/backend";
import { getPoolAnnouncer } from "../constants";
import { fetchLiquidityPool, FetchPoolOpts } from "../contracts/PoolAnnouncer";
import { FetchPoolData, ReachTxnOpts, TransactionResult } from "types";

/** Options for subscribing to pools */
export type PoolSubscriptionOpts = {
  /** (Optional) called when contract data is received, but BEFORE pool is fetched */
  onPoolReceived?: (...args: any[]) => void;
  /** Called when the pool data has been fetched and formatted */
  onPoolFetched?: (data: TransactionResult<FetchPoolData>) => any;
  /** Optionally fetch token data */
  includeTokens?: boolean;
  /** Exclude notifications prior to this block time */
  startFrom?: number;
  /** Exclude notifications prior to "now" when true */
  seekNow?: boolean;
} & ReachTxnOpts;

/** @internal */
type PoolRegisterEvent = {
  /** Actual event data */
  what: [
    /** Pool address */
    poolAddr: string,
    /** Pool `Token A` (might be `null` if network token) */
    maybeTokA: Maybe<any>,
    /** Pool `Token B` */
    tokB: any
  ];
  /** Block time when event was received */
  when: any;
};

/** Passively attach `acc` to a Pool Listener to discover new pools */
export async function subscribeToPoolStream(
  acc: ReachAccount,
  opts: PoolSubscriptionOpts = { onPoolFetched: noOp }
) {
  const announcerInfo = getPoolAnnouncer();
  if (!announcerInfo) throw new Error("Announcer is not set");

  const ctc = acc.contract(announcerBackend, announcerInfo);
  const { onPoolReceived = noOp, onProgress = noOp, onPoolFetched } = opts;

  if (opts.seekNow) {
    onProgress("WARN: Listener will only report new pools");
    await ctc.events.Register.seekNow();
  } else if (opts.startFrom) ctc.events.Register.seek(opts.startFrom);

  // if the pool is using the network token, then we know the first token
  // from the response will be null when unwrapped
  return ctc.events.Register.monitor(({ what }: PoolRegisterEvent) => {
    const [poolAddr, maybeTokA, tokB] = what;
    const strParse = (v: any) => String(parseAddress(v));
    const fPoolAddr = strParse(poolAddr);
    const tokA: string = fromMaybe(maybeTokA, strParse, "0");
    const tokBId = strParse(tokB);
    // Patch: this token was deleted after someone created a pool with it.
    // Excluded since bad thing happen when fetching the pool
    if (tokBId.toString() === "842581764") return;
    onPoolReceived([fPoolAddr, tokA, tokBId]);

    if (!onPoolFetched) return;

    // Asynchronous fetch and check whether pool has liquidity
    const fetchOpts: FetchPoolOpts = {
      poolAddress: fPoolAddr,
      n2nn: tokA === "0",
      onComplete: opts.onComplete || noOp,
      onProgress: opts.onProgress || noOp,
      includeTokens: opts.includeTokens
    };

    fetchLiquidityPool(acc, fetchOpts).then(onPoolFetched);
  });
}
