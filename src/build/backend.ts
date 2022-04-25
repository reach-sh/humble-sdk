import { ComputeSwapFn } from "types.js";
// Requires JS file extension (instead of .mjs)
import * as PoolBackend from "./index.tok_tok.js";
import * as PoolBackendN2NN from "./index.net_tok.js";
import * as TriumvirateBackend from "./index.triumvirate.js";
import * as FarmBackend from "./staker.main.js";

export const poolBackend = PoolBackend;
export const poolBackendN2NN = PoolBackendN2NN;
export const announcerBackend = TriumvirateBackend;
export const farmBackend = FarmBackend;

/**
 * Get a function for calculating the expected output of a swap.
 * @param stdlib Reach `stdlib` instance
 * @returns `computeSwap` function for calculating the expected output
 * of a swap
 */
export function getComputeSwap(stdlib: any): ComputeSwapFn {
  return poolBackend.getExports(stdlib).computeSwap_;
}
