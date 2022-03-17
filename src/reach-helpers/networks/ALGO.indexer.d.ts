import { Indexer } from "algosdk";
import { ReachToken, NetworkProvider } from "../types";
declare type TxnSearchOpts = {
    amount?: number;
    minRound?: number;
    note?: string;
};
declare type AlgoProviderEnv = {
    ALGO_INDEXER_PORT?: string;
    ALGO_INDEXER_SERVER: string;
    ALGO_INDEXER_TOKEN?: string;
    ALGO_NODE_WRITE_ONLY?: string;
    ALGO_PORT?: string;
    ALGO_SERVER: string;
    ALGO_TOKEN?: string;
    REACH_ISOLATED_NETWORK?: string;
};
/**
 * @description Get Algo indexer client instance
 * @returns Algo Indexer client
 */
export declare function useIndexerClient(): Indexer;
/**
 * Lookup an Algorand account by its address
 * @param addr Account address
 * @returns Algorand account information
 */
export declare function fetchAccount(addr: string): Promise<any>;
/**
 * Get asset given its `id`
 * @param assetId Asset id
 * @returns Asset object
 */
export declare function fetchAssetById(assetId: number, balance?: number): Promise<ReachToken>;
/** Generate a `providerEnv` for stdlib */
export declare function getProviderEnv(net?: NetworkProvider): AlgoProviderEnv;
/**
 * Search for assets called `assetName`
 * @param name Name target
 * @returns List of assets roughly matching name
 */
export declare function searchAssetsByName(name: string): Promise<any[]>;
/**
 * Search for transactions for `addr`
 * @param addr Account address
 * @param opts Additional search params
 * @param opts.amount Search txns that spent this amount
 * @param opts.minRound Minimum block round to search
 * @param opts.note Txn note
 * @returns Search results
 */
export declare function searchForTransactions(addr: string, opts?: TxnSearchOpts): Promise<any>;
export {};
