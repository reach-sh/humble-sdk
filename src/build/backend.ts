// Requires JS file extension (instead of .mjs)
import * as PoolBackend from "./index.tok_tok.js";
import * as PoolBackendN2NN from "./index.net_tok.js";
import * as TriumvirateBackend from "./index.triumvirate.js";
import * as StakingBackend from "./staker.main.js";
import * as LibBackend from "./index.main.js";
import * as FarmAnnouncerBackend from "./farmAnnouncer.large.js";
import { ReachContract } from "../reach-helpers/types.js";
import { ComputeSwapFn, ComputeMintFn } from "../types";

export const poolBackend = PoolBackend;
export const poolBackendN2NN = PoolBackendN2NN;
export const announcerBackend = TriumvirateBackend;
export const stakingBackend = StakingBackend;
export const libBackend = LibBackend;
export const farmAnnouncerBackend = FarmAnnouncerBackend;

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
  return libBackend.getExports(stdlib).computeMint_;
}

/** Pool Contract */
export type PoolContract = ReachContract<
  typeof poolBackend | typeof poolBackendN2NN
>;

/** Staking Contract */
export type StakingContract = ReachContract<typeof stakingBackend>;

/** Staking Contract `APIs` */
export type StakingContractAPI = StakingContract["apis"];

/** Staking Contract `Views` */
export type StakingContractViews = StakingContract["views"];

/** Staking Contract Staker API */
export type StakerAPI = StakingContractAPI["Staker"];
