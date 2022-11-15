import axios, { AxiosResponse } from "axios";
import { isNetworkToken, makeNetworkToken } from "../utils";
import {
  getBlockchain,
  getDefaultDecimals,
  getNetworkProvider,
  UNINSTANTIATED
} from "../constants";
import * as T from "./types";
import { formatNumberShort, noOp, trimByteString } from "../utils/utils.reach";
import { ReachTxnOptsCore } from "../types";

type LoadStdlibFn = { (...args: any[]): any };
export * from "./types";
export const NETWORKS: T.NetworksMap = {
  ALGO: { name: "Algorand", abbr: "ALGO", decimals: 6 },
  ETH: { name: "Ethereum", abbr: "ETH", decimals: 18 }
};
/**
 * @internal
 * @reach_helper `StdLib` instance */
let reach: T.ReachStdLib;

/** @reach_helper Global default reach object */
export function createReachAPI() {
  if (!reach) throw new Error(UNINSTANTIATED);
  return reach;
}

/** @reach_helper Format address for `networkAccount` instance */
export function formatAddress(acc: T.ReachAccount | string) {
  const { formatAddress: fmt } = createReachAPI();
  return typeof acc === "string" ? fmt(acc) : fmt(acc.getAddress());
}
/**
 * @reach_helper Optionally-abbreviated currency formatter (e.g.
 * `fn(1000)` -> `1000` || `1K` ). Expects `amt` to be in atomic unit for network */
export function formatCurrency(amt: any, decs?: number, abbr = false): string {
  const { formatWithDecimals } = createReachAPI();
  const decimals = parseNetworkDecimals(Number(decs));
  const reachFmt = formatWithDecimals(amt, decimals);
  return abbr ? formatNumberShort(reachFmt) : reachFmt;
}

/**
 * @internal
 * @reach_helper Initialize the stdlib instance. Note: this will NOT configure
 * a wallet fallback: you can handle that later with other helper functions.
 */
export function loadReach(
  loadStdlibFn: LoadStdlibFn,
  opts: T.LoadReachOpts = {}
) {
  if (reach?.connector) return reach;

  // Instantiate Reach stdlib
  const { provider = "TestNet", chain = "ALGO", providerEnv } = opts;
  if (/(-devnet|-live|-browser)/.test(provider || "TestNet")) {
    reach = loadStdlibFn({
      REACH_CONNECTOR_MODE: provider,
      REACH_NO_WARN: "Y"
    });
  } else {
    reach = loadStdlibFn({
      REACH_CONNECTOR_MODE: chain,
      REACH_NO_WARN: "Y"
    });

    if (opts.walletFallback) {
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: buildProviderEnv(provider, providerEnv),
          ...opts.walletFallback
        })
      );
    } else reach.setProviderByEnv(buildProviderEnv(provider, providerEnv));
  }

  return reach;
}

/**
 * @reach_helper
 * Parses a contract address for Algorand or other chains
 * @param {string|number} ctc string|number contract address
 * @returns string|number contract address
 */
export function parseAddress(ctc: any) {
  if (ctc === null) return "0";
  const { isBigNumber, bigNumberToNumber } = createReachAPI();
  const addr = isBigNumber(ctc) ? bigNumberToNumber(ctc) : ctc;
  if (reach.connector === "ALGO") return parseInt(addr);

  const pit = addr.toString().trim().replace(/\0.*$/g, "");
  return pit.startsWith("0x") ? pit : `0x${pit}`;
}

/** @reach_helper Convert `val` to atomic units for the current network */
export function parseCurrency(val: any, dec?: number) {
  const decimals = parseNetworkDecimals(Number(dec));
  return createReachAPI().parseCurrency(val, decimals);
}
/** @internal Ensure `network` param from user is a recognized value */
export function safeNetwork(val?: T.NetworkProvider): T.NetworkProvider {
  const valid: T.NetworkProvider[] = ["TestNet", "MainNet", "ALGO-devnet"];
  if (!val) return valid[0];
  const safe = valid.includes(val) ? val : "TestNet";
  return safe;
}

export type TokenBalanceOpts = {
  id: string | number;
  bigNumber?: boolean;
  tokenDecimals?: number;
};
/** Options for fetching LP token balances */
export type AtomicBalanceOpts = {
  optIn?: boolean;
} & Pick<ReachTxnOptsCore, "onProgress"> &
  Pick<TokenBalanceOpts, "id" | "tokenDecimals">;

/**
 * Get atomic (`BigNumber`) amount of `Token` held by user. Optionally
 * opts-in to token before checking balance */
export async function getAtomicBalance(
  acc: T.ReachAccount,
  opts: AtomicBalanceOpts
) {
  const { id, optIn = false, onProgress = noOp } = opts;
  const { bigNumberify } = createReachAPI();
  const done = (b: any, e = "") => ({ balance: b, error: e });
  // Opt in to an LP token, and retun assumed user-balance of 0
  if (optIn) {
    onProgress("Opting-in to LP token");
    try {
      await acc.tokenAccept(id);
      return done(bigNumberify(0));
    } catch (e: any) {
      onProgress(e);
      return done(bigNumberify(0), e);
    }
  }

  // Fetch user's token balance if they are opted-in
  onProgress("Checking LP token balance");
  const tokenDecimals = opts.tokenDecimals || getDefaultDecimals();
  const bal = await tokenBalance(acc, { id, tokenDecimals, bigNumber: true });
  return done(bal);
}

/** Get formatted token balance */
export async function tokenBalance(
  acc: T.ReachAccount,
  opts: TokenBalanceOpts
) {
  const { id, bigNumber = false, tokenDecimals } = opts;
  const reach = createReachAPI();
  const { bigNumberify } = reach;
  const address = reach.formatAddress(acc);
  if (["0", 0, null].includes(id))
    return getNetworkTokenBalance(address, bigNumber);

  const balURL = `${balanceBaseURL()}/accounts/${address}/assets/${id}`;
  const bal = await axios
    .get(balURL, getBaseURLHeaders())
    .then(axiosResponse)
    .catch(axiosError);
  if (!bal?.["asset-holding"]) return bigNumber ? bigNumberify(0) : "0";

  const { amount } = bal["asset-holding"];
  let decimals = tokenDecimals;
  if (decimals === undefined) {
    const assetURL = `${await indexerBaseURL()}/assets/${id}`;
    const { asset } = await axios
      .get(assetURL, getIndexerURLHeaders())
      .then(axiosResponse)
      .catch(axiosError);

    if (!asset?.params) return bigNumber ? bigNumberify(0) : "0";
    decimals = asset.params.decimals;
  }

  // Balances are always represented atomically
  return bigNumber ? bigNumberify(amount) : formatCurrency(amount, decimals);
}

/** (ALGORAND only) Get token data and `acc`'s balance of token (if available) */
export async function peraTokenMetadata(
  id: any,
  acc: T.ReachAccount,
  withBalance?: boolean
): Promise<T.ReachToken> {
  if (getBlockchain() !== "ALGO") return tokenMetadata(id, acc, withBalance);

  const provider = getNetworkProvider().toLowerCase();
  const balance = () => (withBalance ? tokenBalance(acc, { id }) : 0);
  const peraToken = async () => {
    const url = `https://${provider}.api.perawallet.app/v1/assets/${id}/`;
    return isNetworkToken(id) || id?._hex === "0x00"
      ? Promise.resolve(makeNetworkToken())
      : axios
          .get(url)
          .catch(() => Promise.resolve(null))
          .then((md) => (md?.data ? peraToReachToken(md?.data) : null));
  };
  const metadata = await peraToken();
  if (metadata === null)
    return Promise.reject(new Error(`Token "${id}" not found`));
  return withBalance
    ? peraToReachToken(metadata, await balance())
    : peraToReachToken(metadata, 0);
}

/** Get token data and `acc`'s balance of token (if available) */
export async function tokenMetadata(
  token: any,
  acc: T.ReachAccount,
  withBalance?: boolean
): Promise<T.ReachToken> {
  const { eq } = createReachAPI();
  const fetchBalance = () =>
    withBalance ? tokenBalance(acc, { id: token }) : 0;
  const fetchToken = () =>
    isNetworkToken(token) || eq(token, 0)
      ? makeNetworkToken()
      : acc
          .tokenMetadata(token)
          .catch(() => Promise.resolve(null))
          .then((md) => formatReachToken(token, 0, md));

  const [metadata, bal] = await Promise.allSettled([
    fetchToken(),
    fetchBalance()
  ]);

  if (metadata.status === "rejected" || metadata.value === null) {
    return Promise.reject(new Error(`Token "${token}" not found`));
  }

  const userBal = bal.status === "rejected" ? 0 : bal.value;
  return formatReachToken(token, userBal, metadata.value);
}

/** @internal Format token metadata from `tokenMetadata` API request */
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
    verificationTier:
      data.verification_tier || data.verificationTier || "unverified"
  };
}

type PeraAssetPartial = {
  asset_id: number;
  fraction_decimals: 0;
  is_verified: true;
  logo: string;
  name: string;
  project_url: string;
  total_supply: number;
  total: string;
  unit_name: string;
  url: string;
  verification_tier: T.TokenVerificationTier;
};
/** @internal Format token metadata from `Pera Wallet` API request */
function peraToReachToken(
  raw: PeraAssetPartial | T.ReachToken,
  amt = 0
): T.ReachToken {
  const amount = amt.toString();
  if ((raw as T.ReachToken).verificationTier) {
    return { ...raw, amount } as T.ReachToken;
  }

  const data = raw as PeraAssetPartial;
  const id = data.asset_id.toString();
  const fallbackName = `Asset #${id}`;
  const symbol = data.unit_name || `#${id}`;

  return {
    id,
    name: data.name || fallbackName,
    symbol,
    amount,
    decimals: data.fraction_decimals,
    supply: data.total || data.total_supply.toString(),
    url: data.url || data.project_url || data.logo || "",
    verified: data.is_verified || false,
    verificationTier: data.verification_tier
  };
}
/** @internal  */
function parseNetworkDecimals(decimals?: number) {
  const key = createReachAPI().connector as T.ChainSymbol;
  return isNaN(Number(decimals)) ? NETWORKS[key].decimals || 0 : decimals;
}

/** @internal */
function buildProviderEnv(
  provider: T.NetworkProvider,
  overrides: Partial<T.AlgoEnvOverride> = {}
): T.AlgoEnvOverride {
  let domain = "algonode.cloud";
  const network = provider.toLowerCase();
  const server = `https://${network}-api.${domain}`;
  const indexer = `https://${network}-idx.${domain}`;
  const env: T.AlgoEnvOverride = {
    ALGO_SERVER: server,
    ALGO_PORT: "",
    ALGO_INDEXER_SERVER: indexer,
    ALGO_INDEXER_PORT: "",
    REACH_ISOLATED_NETWORK: "no",
    ...overrides
  };

  return env;
}

/** @internal */
function getBaseURLHeaders() {
  const net = getNetworkProvider();
  if (net === "ALGO-devnet")
    return {
      headers: {
        "X-Algo-API-Token":
          "c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705"
      }
    };
  return {};
}

/** @internal */
function getIndexerURLHeaders() {
  const net = getNetworkProvider();
  if (net === "ALGO-devnet")
    return {
      headers: {
        "X-Indexer-API-Token": "reach-devnet"
      }
    };
  return {};
}

/** @internal */
const axiosResponse = (res: AxiosResponse<any, any>) => res.data;
/** @internal */
const axiosError = () => null;

/** @internal */
async function getNetworkTokenBalance(address: string, bigNumber = false) {
  const URL = `${balanceBaseURL()}/accounts/${address}?exclude=all`;
  const result = await axios
    .get(URL, getBaseURLHeaders())
    .then(axiosResponse)
    .catch(() => ({ amount: 0 }));
  const { amount } = result;
  return bigNumber ? parseCurrency(amount, 0) : formatCurrency(amount, 6);
}

/** @internal Generate URL for fetching token balance  */
function balanceBaseURL() {
  const net = getNetworkProvider();
  if (net !== "TestNet" && net !== "MainNet") return "http://localhost:4180/v2";
  return trimURL(`https://${net.toLowerCase()}-api.algonode.cloud/v2/`);
}

/** @internal Generate Algo Indexer URL if available  */
async function indexerBaseURL() {
  const net = getNetworkProvider();
  if (net !== "TestNet" && net !== "MainNet") return "http://localhost:8980/v2";
  try {
    const reach = createReachAPI();
    const { indexer } = await reach.getProvider();
    if (!indexer) return "";

    const url = indexer.c?.bc?.bc?.baseURL?.href;
    return url ? `${trimURL(url)}/v2` : "";
  } catch {
    const network = getNetworkProvider();
    const prefix = network === "MainNet" ? "" : `.${network.toLowerCase()}`;
    return trimURL(`https://algoindexer${prefix}.algoexplorerapi.io/v2`);
  }
}

/** @internal */
function trimURL(url: string) {
  return url.replace(/\/$/, "");
}
