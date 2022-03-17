import { fetchAssetById, getProviderEnv, searchForTransactions, searchAssetsByName } from "./ALGO.indexer";
export declare const AlgoInterface: {
    fetchAccount: typeof getAccount;
    fetchAssetById: typeof fetchAssetById;
    searchAssetsByName: typeof searchAssetsByName;
    getProviderEnv: typeof getProviderEnv;
    loadAssets: typeof loadAssets;
    searchForTransactions: typeof searchForTransactions;
};
export default AlgoInterface;
/** Fetch account details (assets) */
declare function getAccount(address: string): Promise<any>;
/** Load account assets */
declare function loadAssets(addr: string): Promise<any>;
