// Requires JS file extension (instead of .mjs)
import * as PoolBackend from "./index.tok_tok.js";
import * as PoolBackendN2NN from "./index.net_tok.js";
import * as TriumvirateBackend from "./index.triumvirate.js";
import * as StakingBackend from "./staker.main.js";
import * as LibBackend from "./index.main.js";
import * as FarmAnnouncerBackend from "./farmAnnouncer.large.js";
import * as LimitOrderAnnouncer from "./limitOrder.announcer.js";
import * as LimitOrderN2NN from "./limitOrder.lo_net_tok.js";
import * as LimitOrderNN2NN from "./limitOrder.lo_tok_tok.js";
import * as LimitOrderNN2N from "./limitOrder.lo_tok_net.js";
import {
  BackendModule,
  ReachContract,
  ReachToken
} from "../reach-helpers/types";
import { ComputeSwapFn, ComputeMintFn } from "../types";
import { isNetworkToken } from "../utils/index";

export const poolBackend = PoolBackend;
export const poolBackendN2NN = PoolBackendN2NN;
export const announcerBackend = TriumvirateBackend;
export const stakingBackend = StakingBackend;
export const farmAnnouncerBackend = FarmAnnouncerBackend;
export const limitOrderAnnouncer = LimitOrderAnnouncer;
export const limitOrderN2NN = LimitOrderN2NN;
export const limitOrderNN2NN = LimitOrderNN2NN;
export const limitOrderNN2N = LimitOrderNN2N;

/**
 * Get a function for calculating the expected output of a swap.
 * @param stdlib Reach `stdlib` instance
 * @returns `computeSwap` function for calculating the expected output
 * of a swap
 */
export function getComputeSwap(stdlib: any): ComputeSwapFn {
  return poolBackend.getExports(stdlib).computeSwap_;
}

/**
 * Get a function for calculating the expected output of adding liquidity.
 * @param stdlib Reach `stdlib` instance
 * @returns `computeMint` function for calculating the expected added liquidity.
 */
export function getComputeMint(stdlib: any): ComputeMintFn {
  return LibBackend.getExports(stdlib).computeMint_;
}

/** Determine Limit Order type from token pair */
export function getLimitOrderVariant(t: LimitOrderTokens): LimitOrderType {
  switch (true) {
    case isNetworkToken(t.tokenA):
      return "network-to-token";
    case isNetworkToken(t.tokenB):
      return "token-to-network";
    default:
      return "token-to-token";
  }
}

/** Determine Limit Order binary from `LimitOrderType` */
export function getLimitOrderBackend(v: LimitOrderType): LimitOrderBackend {
  switch (v) {
    case "network-to-token":
      return limitOrderN2NN;
    case "token-to-network":
      return limitOrderNN2N;
    case "token-to-token":
    default:
      return limitOrderNN2NN;
  }
}

/** Triumvirate (HumbleSwap Protocol) Contract */
export type ProtocolContract = ReachContract<typeof TriumvirateBackend>;

/** Pool Contract */
export type PoolContract = ReachContract<
  typeof poolBackend | typeof poolBackendN2NN
>;

/** Scheduled Swap Contract */
export type LimitOrderBackend = BackendModule &
  (typeof LimitOrderN2NN | typeof LimitOrderNN2NN | typeof LimitOrderNN2N);
export type LimitOrderContract = ReachContract<LimitOrderBackend>;

/** Farm Announcer Contract */
export type FarmAnnouncerContract = ReachContract<typeof farmAnnouncerBackend>;

/** Staking Contract */
export type StakingContract = ReachContract<typeof stakingBackend>;

/** Staking Contract `Views` */
export type StakingContractViews = StakingContract["views"];

/** Staking Contract Staker API */
export type StakerAPI = StakingContract["apis"]["Staker"];

/** Limit Order Token pair */
export type LimitOrderTokens =
  | { tokenA: any; tokenB: any }
  | { tokenA: null; tokenB: any }
  | { tokenA: any; tokenB: null };

/** Limit Order Type */
export type LimitOrderType =
  | "network-to-token"
  | "token-to-token"
  | "token-to-network";

/** Limit Order Contract details */
export type LimitOrderView = LimitOrderTokens & {
  /** amount A specified or requested in contract */
  amtA: any;
  /** amount B specified or requested in contract */
  amtB: any;
  /** Token metadata (if fetched) */
  tokens?: [ReachToken | null, ReachToken | null];
};
