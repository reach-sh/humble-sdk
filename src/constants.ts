import CHAIN_CONSTANTS from "./json";
import {
  ChainSymbol,
  NetworkProvider,
  safeNetwork,
  SDKOpts
} from "./reach-helpers";
import { PoolProtocolInfo } from "./types";
import { announcersCurrent } from "./constants.versioned";

// Strings
export * from "./constants.strings";
export * from "./constants.versioned";

// Fees
export const FLOAT = 0.0001;

/** @internal Get protocol fee info for all pools */
export function getFeeInfo(): PoolProtocolInfo {
  const LIQUIDITY_PROVIDER_FEE = 25;
  const HUMBLE_DAO_FEE = 5;
  const TOTAL_FEE = 30;

  return {
    lpFee: LIQUIDITY_PROVIDER_FEE,
    protoAddr: getProtocolAddr(),
    protoFee: HUMBLE_DAO_FEE,
    totFee: TOTAL_FEE,
    locked: false
  };
}

/** @internal account address (not App ID!) of Triumvirate contract */
let HUMBLE_ADDR: string;
/** @internal get 0x internal account address that funds Partner farms */
export function getProtocolFunder0x() {
  return "0x3d19db4979ad8ded592a7e78c81283d3a24b061cb3ac500fa81803db7c299753";
}

/** @internal get account address (not App ID!) of Triumvirate contract */
export function getProtocolAddr() {
  return HUMBLE_ADDR;
}

/** @internal Triumvirate contract app id */
let POOL_ANNOUNCER_ID: string | number | undefined;
/** @internal partner `farm` announcer contract app id */
let PARTNER_FARM_ANNOUNCER_ID: string | number | undefined;
/** @internal public `farm` announcer contract app id */
let PUBLIC_FARM_ANNOUNCER_ID: string | number | undefined;
/** @internal `limit order` announcer contract app id */
let LIMIT_ORDER_ANNOUNCER_ID: string | number | undefined;

/** Get all announcer contract IDs */
export function getAnnouncers() {
  return {
    poolAnnouncer: POOL_ANNOUNCER_ID,
    partnerFarmAnnouncer: PARTNER_FARM_ANNOUNCER_ID,
    publicFarmAnnouncer: PUBLIC_FARM_ANNOUNCER_ID,
    limitOrderAnnouncer: LIMIT_ORDER_ANNOUNCER_ID
  };
}

/** Get app id of Triumvirate contract. */
export function getPoolAnnouncer() {
  return POOL_ANNOUNCER_ID;
}

/** SDK user's slippage preference */
let SLIPPAGE = 0.5;
/**
 * Set user's slippage tolerance (in-memory only). Leave blank to reset to default of `0.5`% */
export function setSlippage(slippage = 0.5) {
  SLIPPAGE = slippage;
}

/** Get user's slippage tolerance (in-memory only) */
export function getSlippage() {
  return SLIPPAGE;
}

/** @internal */
let NETWORK_PROVIDER: string;
/** SDK user's provider preference (TestNet/MainNet) */
export function getNetworkProvider() {
  return NETWORK_PROVIDER || "TestNet";
}

/** @internal */
let BLOCKCHAIN: ChainSymbol | string;
/** SDK user's blockchain (consensus network) preference */
export function getBlockchain() {
  if (!BLOCKCHAIN) BLOCKCHAIN = "ALGO";
  return BLOCKCHAIN;
}
/** Default decimal places supported by user's blockchain preference */
export function getDefaultDecimals(ch = BLOCKCHAIN) {
  const chain = CHAIN_CONSTANTS[ch || "ALGO"];
  return chain.decimals;
}

/** @internal When 'true', SDK is ready for use */
let INITIALIZED = false;
/** Check if SDK is ready for use */
export function checkInitialized() {
  return INITIALIZED;
}

/** @internal Set SDK options for operation */
export function setSDKOpts(opts: SDKOpts) {
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  NETWORK_PROVIDER = safeNetwork(opts.network);
  HUMBLE_ADDR = ProtocolAddr(opts);
  POOL_ANNOUNCER_ID = TriumvirContractId(opts);
  if (!HUMBLE_ADDR || POOL_ANNOUNCER_ID === 0) {
    throw new Error(`Humble ${NETWORK_PROVIDER} Protocol contract not set`);
  }

  PARTNER_FARM_ANNOUNCER_ID = PartnerFarmAnnouncerId(opts);
  if (PARTNER_FARM_ANNOUNCER_ID === 0) {
    const e = `Humble ${NETWORK_PROVIDER} Partner Farm announcer not set`;
    throw new Error(e);
  }

  PUBLIC_FARM_ANNOUNCER_ID = PublicFarmAnnouncerId(opts);
  if (PUBLIC_FARM_ANNOUNCER_ID === 0) {
    const e = `Humble ${NETWORK_PROVIDER} Public Farm announcer not set`;
    throw new Error(e);
  }

  LIMIT_ORDER_ANNOUNCER_ID = LimitOrderAnnouncerId(opts);
  if (LIMIT_ORDER_ANNOUNCER_ID === 0) {
    const e = `Humble ${NETWORK_PROVIDER} Limit Orders announcer not set`;
    throw new Error(e);
  }

  // Set SDK as initialized
  INITIALIZED = true;
}

/** @internal Get Humble Farm funder address */
export function ProtocolFarmFunderAddr() {
  return `HUM5WSLZVWG62WJKPZ4MQEUD2OREWBQ4WOWFAD5IDAB5W7BJS5JSWCSIBI`;
}

/** @internal Get Pool Announcer (triumvirate) for Testnet/Mainnet */
function TriumvirContractId(opts: SDKOpts) {
  const { protocolId } = opts.contractOverrides || {};
  if (protocolId) return protocolId;

  const { dev, mainnet } = announcersCurrent();
  return allocateProviderApps(opts.network, [
    dev.protocolId, // V3 Testnet Triumvirate
    mainnet.protocolId // V3 Mainnet Triumvirate
  ]);
}

/** @internal Get Limit Order data source for Testnet/Mainnet */
function LimitOrderAnnouncerId(opts: SDKOpts) {
  const { limitOrderAnnouncerId } = opts.contractOverrides || {};
  if (limitOrderAnnouncerId) return limitOrderAnnouncerId;

  const { dev, mainnet } = announcersCurrent();
  return allocateProviderApps(opts.network, [
    dev.limitOrderAnnouncer, // V3 Testnet LO Announcer  (new)
    mainnet.limitOrderAnnouncer // V3 Mainnet LO Announcer  (new)
  ]);
}

/** @internal Get Partner Farm data source for Testnet/Mainnet */
function PartnerFarmAnnouncerId(opts: SDKOpts) {
  const { partnerFarmAnnouncerId } = opts.contractOverrides || {};
  if (partnerFarmAnnouncerId) return partnerFarmAnnouncerId;

  const { dev, mainnet } = announcersCurrent();
  return allocateProviderApps(opts.network, [
    dev.partnerFarmAnnouncerId, // V3 Testnet Partner Farms Announcer
    mainnet.partnerFarmAnnouncerId // V3 Mainnet Partner Farms Announcer
  ]);
}

/** @internal Get Public Farm data source for Testnet/Mainnet */
function PublicFarmAnnouncerId(opts: SDKOpts) {
  const { publicFarmAnnouncerId } = opts.contractOverrides || {};
  if (publicFarmAnnouncerId) return publicFarmAnnouncerId;

  const { dev, mainnet } = announcersCurrent();
  return allocateProviderApps(opts.network, [
    dev.publicFarmAnnouncer, // V3 Testnet Public Farms Announcer
    mainnet.publicFarmAnnouncer // V3 Mainnet Public Farms Announcer
  ]);
}

/** @internal A pair of [`Testnet`, `MainNet`] App Ids */
type AppIds = [testnetAppId: number, mainnetAppId: number];

/** @internal Get account address (not App ID!) of Triumvirate contract for current network */
function allocateProviderApps(net?: NetworkProvider, opts: AppIds = [0, 0]) {
  switch (safeNetwork(net)) {
    case "TestNet": // Testnet application id
      return opts[0];
    case "MainNet": // Mainnet application id
      return opts[1];
    default: // failure
      return 0;
  }
}

/** @internal Get account address (not App ID!) of Triumvirate contract for current network */
function ProtocolAddr(opts: SDKOpts) {
  const currentversion = announcersCurrent();
  const ADDRESSES = {
    MainNet: currentversion.mainnet.protocolAddress,
    None: "",
    TestNet: currentversion.dev.protocolAddress,
    get "ALGO-devnet"() {
      return ADDRESSES.TestNet;
    }
  };
  const { network: prov = "TestNet", contractOverrides = {} } = opts;
  const { protocolAddress } = contractOverrides;
  const addr =
    protocolAddress || // override
    ADDRESSES[prov as keyof typeof ADDRESSES] || // address for provider
    ADDRESSES.None; // empty string (bad bad bad)

  if (!addr || addr === ADDRESSES.None) {
    throw new Error(`${prov} protocol address not found`);
  }

  return addr;
}
