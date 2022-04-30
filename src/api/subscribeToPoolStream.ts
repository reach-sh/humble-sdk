import {
  ReachAccount,
  fromMaybe,
  parseAddress,
  Maybe,
  noOp,
} from "../reach-helpers";
import { announcerBackend } from "../build/backend";
import { getPoolAnnouncer } from "../constants";
import { fetchPool } from "../participants/PoolAnnouncer";
import { FetchPoolTxnResult } from "types";

type PoolSubscriptionOpts = {
  /** (Optional) called when contract data is received, but BEFORE pool is fetched */
  onPoolReceived?: (...args: any[]) => void;
  /** Called when the pool data has been fetched and formatted */
  onPoolFetched(data: FetchPoolTxnResult): any;
};

type PoolRegisterEvent = {
  what: [
    /** Pool address */
    poolAddr: string,
    /** Pool `Token A` (might be `null` if network token) */
    maybeTokA: Maybe<any>,
    /** Pool `Token B` */
    tokB: any
  ];
  when: any;
};

/** Passively attach `acc` to a Pool Listener to discover new pools */
export function subscribeToPoolStream(
  acc: ReachAccount,
  opts: PoolSubscriptionOpts = { onPoolFetched: noOp }
) {
  const announcerInfo = getPoolAnnouncer();
  if (!announcerInfo) throw new Error("Announcer is not set");

  const ctc = acc.contract(announcerBackend, announcerInfo);
  const { onPoolReceived = noOp, onPoolFetched } = opts;

  // if the pool is using the network token, then we know the first token
  // from the response will be null when unwrapped
  return ctc.events.Register.monitor(({ what }: PoolRegisterEvent) => {
    const [poolAddr, maybeTokA, tokB] = what;
    const fPoolAddr = parseAddress(poolAddr);
    const tokA = fromMaybe(maybeTokA, parseAddress, "0");
    onPoolReceived([fPoolAddr, tokA, parseAddress(tokB)]);

    // Asynchronous fetch and check whether pool has liquidity
    const fetchOpts = { ...opts, n2nn: tokA === "0" };
    fetchPool(acc, fPoolAddr, fetchOpts).then(onPoolFetched);
  });
}
