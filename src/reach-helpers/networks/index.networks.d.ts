import { NetworkProvider } from "..";
import { NetworkData, ReachToken, ChainSymbol, NetworksMap } from "../types";
/** Interface for blockchain-specific helpers */
export declare type NetworkInterface = {
    /** Fetch account details from network */
    fetchAccount(acc: string | any): any | Promise<any>;
    /** Fetch an asset/token by its ID from the chain's block explorer */
    fetchAssetById(assetId: number): any;
    /** Returns a blockchain-specific configuration for `stdlib` */
    getProviderEnv(network?: ChainSymbol | string): void;
    /** Fetch account assets from network. Optionally takes a list of assets addresses */
    loadAssets(acc: string | any, assets?: string[]): any | Promise<ReachToken[]>;
    /** Search for an asset/token by its name. Returns a list of results */
    searchAssetsByName(assetName: string): any;
    /** Search for transactions for this `addr` */
    searchForTransactions(addr: string, opts?: any): any;
};
export declare const NETWORKS: NetworksMap;
/** Get a UI-friendly list of supported Networks */
export declare function listSupportedNetworks(): NetworkData[];
/**
 * Returns a `NetworkInterface` w/ additional chain-specific helpers.
 * Note: not all `network` options are accepted by all chains. Defaults
 * to "ALGO" + "TestNet" if no values are provided.
 */
export declare function createConnectorAPI(chain?: string & ChainSymbol, network?: NetworkProvider): NetworkInterface;
export declare function isSupportedNetwork(key: ChainSymbol): boolean;
