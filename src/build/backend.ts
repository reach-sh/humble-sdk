// Requires JS file extension (instead of .mjs)
import * as PoolBackend from "./index.tok_tok.js";
import * as PoolBackendN2NN from "./index.net_tok.js";
import * as TriumvirateBackend from "./index.triumvirate.js";
import * as StakingBackend from "./staker.main.js";
import { ReachContract } from "../reach-helpers/types.js";
import { ComputeSwapFn } from "../types";

export const poolBackend = PoolBackend;
export const poolBackendN2NN = PoolBackendN2NN;
export const announcerBackend = TriumvirateBackend;
export const stakingBackend = StakingBackend;

/**
 * Get a function for calculating the expected output of a swap.
 * @param stdlib Reach `stdlib` instance
 * @returns `computeSwap` function for calculating the expected output
 * of a swap
 */
export function getComputeSwap(stdlib: any): ComputeSwapFn {
  return poolBackend.getExports(stdlib).computeSwap_;
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
