import * as T from "./types";
import { trimByteString, formatNumberShort } from "./utils/helpers";

type LoadStdlibFn = { (args: any): any };
export * from "./types";
export * from "./utils/helpers";
export const NETWORKS: T.NetworksMap = {
  ALGO: { name: "Algorand", abbr: "ALGO", decimals: 6 },
  ETH: { name: "Ethereum", abbr: "ETH", decimals: 18 },
};
/** `@reach-helper` `StdLib` instance */
const UNINSTANTIATED = `HumbleSDK is not instantiated!`;
let reach: T.ReachStdLib;

/** `@reach-helper` Global default reach object */
export function createReachAPI() {
  if (!reach) throw new Error(UNINSTANTIATED);
  return reach;
}

/** `@reach-helper` Format address for `networkAccount` instance */
export function formatAddress(acc: T.ReachAccount) {
  return createReachAPI().formatAddress(acc.getAddress());
}

/** `@reach-helper` Optionally-abbreviated currency formatter (e.g. `fn(1000)` -> `1000` || `1K` ). Expects `amt` to be in atomic unit for network */
export function formatCurrency(amt: any, decs?: number, abbr = false): string {
  const { formatWithDecimals } = createReachAPI();
  const decimals = parseNetworkDecimals(Number(decs));
  const reachFmt = formatWithDecimals(amt, decimals);
  return abbr ? formatNumberShort(reachFmt) : reachFmt;
}

/** `@reach-helper` Optionally opt-in in to assets */
export async function optInToAsset(acc: T.ReachAccount, tokenId: any) {
  if (await acc.tokenAccepted(tokenId)) return Promise.resolve(true);

  return acc
    .tokenAccept(tokenId)
    .then(() => true)
    .catch(() => false);
}

/**
 * `@reach-helper` Initialize the stdlib instance. Note: this will NOT configure
 * a wallet fallback: you can handle that later with other helper functions.
 */
export function loadReach(
  loadStdlibFn: LoadStdlibFn,
  opts: T.LoadReachOpts = {}
) {
  if (reach?.connector) return reach;

  const { provider = "TestNet", chain = "ALGO", providerEnv } = opts;
  const REACH_CONNECTOR_MODE = chain;

  // Instantiate Reach stdlib
  reach = loadStdlibFn({ REACH_CONNECTOR_MODE });
  reach.setProviderByEnv(loadProviderEnv(provider, providerEnv));
  return reach;
}

function loadProviderEnv(
  provider: T.NetworkProvider,
  overrides: Partial<T.AlgoEnvOverride> = {}
): T.AlgoEnvOverride {
  let domain = "-test.humbleswap.com";
  let token = process.env.INDEXER_TESTNET;

  if (provider === "MainNet") {
    domain = ".humble.sh";
    token = process.env.INDEXER_MAINNET;
  }

  const humbleServer = `https://algod${domain}`;
  const humbleIndexer = `https://api${domain}`;
  const env = {
    ALGO_SERVER: humbleServer,
    ALGO_PORT: "",
    ALGO_INDEXER_SERVER: humbleIndexer,
    ALGO_INDEXER_PORT: "",
    REACH_ISOLATED_NETWORK: "no",

    ...overrides,
  };

  if (env.ALGO_SERVER === humbleServer) env.ALGO_TOKEN = token;
  if (env.ALGO_INDEXER_TOKEN === humbleIndexer) env.ALGO_INDEXER_TOKEN = token;

  return env as T.AlgoEnvOverride;
}

/**
 * Parses a contract address for Algorand or other chains
 * @param {string|number} ctc string|number contract address
 * @returns string|number contract address
 */
export function parseAddress(ctc: any) {
  const { isBigNumber, bigNumberToNumber } = createReachAPI();
  const addr = isBigNumber(ctc) ? bigNumberToNumber(ctc) : ctc;
  if (reach.connector === "ALGO") return parseInt(addr);

  const pit = addr.toString().trim().replace(/\0.*$/g, "");
  return pit.startsWith("0x") ? pit : `0x${pit}`;
}

/** `@reach-helper` Convert `val` to atomic units for the current network */
export function parseCurrency(val: any, dec?: number) {
  const decimals = parseNetworkDecimals(Number(dec));
  return createReachAPI().parseCurrency(val, decimals);
}

/** `@reach-helper` Get token data and `acc`'s balance of token (if available) */
export async function tokenMetadata(
  token: any,
  acc: T.ReachAccount
): Promise<T.ReachToken> {
  const { balanceOf } = createReachAPI();
  const fetchBalance = () => withTimeout(balanceOf(acc, token));
  const fetchToken = () =>
    withTimeout(
      acc.tokenMetadata(token).then((md) => formatReachToken(token, 0, md)),
      null
    );
  const [metadata, bal] = await Promise.all([fetchToken(), fetchBalance()]);

  if (!metadata) throw new Error(`Token "${token}" not found`);

  return formatReachToken(token, bal, metadata);
}

/* INTERNAL */

// HELPER | cancel request if it takes too long
export async function withTimeout(
  request: Promise<any> | (() => Promise<any>),
  fallback = null,
  timeout = 3500
) {
  return new Promise(async (resolve) => {
    const call = typeof request === "function";
    const cancel = () => resolve(fallback);
    setTimeout(cancel, timeout);
    const d = call ? await request() : await request;

    resolve(d);
  });
}

/** `@reach-helper` Format token metadata from `tokenMetadata` API request */
function formatReachToken(tokenId: any, amount: any, data: any): T.ReachToken {
  const id = parseAddress(tokenId);
  const fallbackName = `Asset #${id}`;
  const symbol = data.symbol ? trimByteString(data.symbol) : `#${id}`;

  return {
    id: parseAddress(tokenId),
    name: trimByteString(data.name) || fallbackName,
    symbol,
    url: trimByteString(data.url),
    amount,
    supply: data.supply,
    decimals: data.decimals,
    verified: data.verified || false,
  };
}

function parseNetworkDecimals(decimals?: number) {
  const key = createReachAPI().connector as T.ChainSymbol;
  return isNaN(Number(decimals)) ? NETWORKS[key].decimals || 0 : decimals;
}
