"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForTransactions = exports.searchAssetsByName = exports.getProviderEnv = exports.fetchAssetById = exports.fetchAccount = exports.useIndexerClient = void 0;
var algosdk_1 = require("algosdk");
/** @private Algorand Indexer instance (for querying the chain) */
var networks = ["TestNet", "BetaNet", "MainNet"];
var TK = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
var indexer;
var network = "TestNet";
var reachProviderEnv;
/**
 * @description Get Algo indexer client instance
 * @returns Algo Indexer client
 */
function useIndexerClient() {
    if (!indexer) {
        resetProvider();
        var ALGO_INDEXER_SERVER = getProviderEnv(network).ALGO_INDEXER_SERVER;
        var ixURL = new URL(ALGO_INDEXER_SERVER);
        indexer = new algosdk_1.Indexer(TK, ALGO_INDEXER_SERVER, ixURL.port);
    }
    return indexer;
}
exports.useIndexerClient = useIndexerClient;
/**
 * Lookup an Algorand account by its address
 * @param addr Account address
 * @returns Algorand account information
 */
function fetchAccount(addr) {
    return __awaiter(this, void 0, void 0, function () {
        var Indexer, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Indexer = useIndexerClient();
                    return [4 /*yield*/, Indexer.lookupAccountByID(addr)
                            .do()
                            .catch(fallbackAcct)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.account];
            }
        });
    });
}
exports.fetchAccount = fetchAccount;
/**
 * Get asset given its `id`
 * @param assetId Asset id
 * @returns Asset object
 */
function fetchAssetById(assetId, balance) {
    if (balance === void 0) { balance = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var Indexer_1, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    Indexer_1 = useIndexerClient();
                    return [4 /*yield*/, Indexer_1.lookupAssetByID(assetId).do()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, formatAssetMetadata(data === null || data === void 0 ? void 0 : data.asset, balance)];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, {}];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAssetById = fetchAssetById;
/** Generate a `providerEnv` for stdlib */
function getProviderEnv(net) {
    if (net === void 0) { net = "TestNet"; }
    var valid = networks.includes(net) ? net : networks[0];
    if (!reachProviderEnv)
        resetProvider(valid);
    return reachProviderEnv;
}
exports.getProviderEnv = getProviderEnv;
/**
 * Search for assets called `assetName`
 * @param name Name target
 * @returns List of assets roughly matching name
 */
function searchAssetsByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        var Indexer_2, assetInfo, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    Indexer_2 = useIndexerClient();
                    return [4 /*yield*/, Indexer_2.searchForAssets().name(name).do()];
                case 1:
                    assetInfo = _a.sent();
                    return [2 /*return*/, assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.assets];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.searchAssetsByName = searchAssetsByName;
/**
 * Search for transactions for `addr`
 * @param addr Account address
 * @param opts Additional search params
 * @param opts.amount Search txns that spent this amount
 * @param opts.minRound Minimum block round to search
 * @param opts.note Txn note
 * @returns Search results
 */
function searchForTransactions(addr, opts) {
    if (opts === void 0) { opts = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var Indexer_3, amount, minRound, note, searchQuery, enc, noteenc, searchResults, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    Indexer_3 = useIndexerClient();
                    amount = opts.amount, minRound = opts.minRound, note = opts.note;
                    searchQuery = Indexer_3.searchForTransactions().address(addr);
                    if (note) {
                        enc = new TextEncoder();
                        noteenc = enc.encode(note);
                        searchQuery = searchQuery.notePrefix(noteenc);
                    }
                    if (amount) {
                        searchQuery = searchQuery
                            .currencyGreaterThan(amount - 1)
                            .currencyLessThan(amount + 1);
                    }
                    if (minRound) {
                        searchQuery = searchQuery.minRound(Math.max(minRound, 0));
                    }
                    return [4 /*yield*/, searchQuery.do()];
                case 1:
                    searchResults = _a.sent();
                    return [2 /*return*/, searchResults];
                case 2:
                    error_3 = _a.sent();
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.searchForTransactions = searchForTransactions;
function fallbackAcct(e) {
    console.warn("Could not fetch ALGO account", e);
    var emptyAcct = { assets: [], "created-apps": [] };
    return { account: emptyAcct };
}
/**
 * Search for assets called `assetName`
 * @param assetName Name target
 * @returns List of assets roughly matching name
 */
function formatAssetMetadata(asset, amount) {
    if (asset === void 0) { asset = { params: {} }; }
    var id = asset.index, params = asset.params;
    return {
        id: id,
        amount: amount,
        decimals: params.decimals,
        name: params.name || "(".concat(id, ")"),
        symbol: params["unit-name"] || "#".concat(id),
        supply: params.total,
        url: params.url,
        verified: params.verified || false,
    };
}
/** Store initial provider settings */
function resetProvider(prov) {
    if (prov === void 0) { prov = "TestNet"; }
    var key = prov.toLowerCase();
    network = prov;
    reachProviderEnv = {
        ALGO_SERVER: "https://testnet.algoexplorerapi.io",
        // ALGO_SERVER: `https://node.${key}.algoexplorerapi.io`,
        ALGO_PORT: "",
        ALGO_TOKEN: TK,
        ALGO_INDEXER_SERVER: "https://algoindexer.".concat(key, ".algoexplorerapi.io"),
        ALGO_INDEXER_PORT: "",
        ALGO_INDEXER_TOKEN: TK,
        REACH_ISOLATED_NETWORK: "no",
    };
}
