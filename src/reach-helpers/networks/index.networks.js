"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedNetwork = exports.createConnectorAPI = exports.listSupportedNetworks = exports.NETWORKS = void 0;
var __1 = require("..");
var storage_1 = require("../storage");
var ALGO_1 = __importDefault(require("./ALGO"));
var CHAINS = {
    ALGO: makeAPI("ALGO", ALGO_1.default),
    ETH: makeAPI("ETH", {
        getProviderEnv: function () {
            return { ETH_NET: "ropsten" };
        },
    }),
};
exports.NETWORKS = {
    ALGO: { name: "Algorand", abbr: "ALGO", decimals: 6 },
    ETH: { name: "Ethereum", abbr: "ETH", decimals: 18 },
};
/** Get a UI-friendly list of supported Networks */
function listSupportedNetworks() {
    var activeNetwork = (0, storage_1.getBlockchain)();
    return Object.values(exports.NETWORKS).map(function (val) { return (__assign(__assign({}, val), { active: val.abbr === activeNetwork })); });
}
exports.listSupportedNetworks = listSupportedNetworks;
/**
 * Returns a `NetworkInterface` w/ additional chain-specific helpers.
 * Note: not all `network` options are accepted by all chains. Defaults
 * to "ALGO" + "TestNet" if no values are provided.
 */
function createConnectorAPI(chain, network) {
    var key = (chain || (0, storage_1.getBlockchain)());
    if (!CHAINS[key])
        return makeAPI(key);
    if (network)
        (0, __1.selectBlockchainNetwork)(network);
    return CHAINS[key];
}
exports.createConnectorAPI = createConnectorAPI;
function isSupportedNetwork(key) {
    return Boolean(CHAINS[key]);
}
exports.isSupportedNetwork = isSupportedNetwork;
/**
 * Create a default `ConnectorInterface` object that can be overridden
 * with chain-specific functions
 */
function makeAPI(chain, overrides) {
    if (overrides === void 0) { overrides = {}; }
    var emptyList = function () { return []; };
    var unImpl = function (m) { return console.log("Unsupported ".concat(chain, " call \"").concat(m, "\"")); };
    return __assign({ fetchAccount: function () { return unImpl("fetchAccount"); }, fetchAssetById: function () { return unImpl("fetchAssetById"); }, getProviderEnv: function () { return ({}); }, loadAssets: function () { return unImpl("loadAssets"); }, searchAssetsByName: emptyList, searchForTransactions: emptyList }, overrides);
}
