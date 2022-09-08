import { safeNetwork, SDKOpts } from "./reach-helpers";
import { PoolProtocolInfo } from "./types";

// Application constants (or long-lived values)
export const UNINSTANTIATED = `HumbleSDK is not instantiated!`;
export const ASSURANCE_MSG = `Your funds were not moved.`;
export const MIN_BALANCE_MSG = `Transaction would drop account below minimum required balance.`;
export const POPUP_BLOCKED_MSG = `Your browser is blocking popups; please disable this blocker before retrying.`;
export const TRANSACTION_CANCELLED_MSG = `Transaction Cancelled.`;
export const TRANSACTION_DIDNT_LOAD = `Sorry, the transaction window didn't load due to some connection issues. Please try again.`;
export const POOL_CREATION_ERR = `Pool creation failed.`;
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

/** Get app id of Triumvirate contract. */
export function getPoolAnnouncer() {
  return POOL_ANNOUNCER_ID;
}

/** @internal farm announcer contract app id */
let PARTNER_FARM_ANNOUNCER_ID: string | number | undefined;
/** @internal farm announcer contract app id */
let PUBLIC_FARM_ANNOUNCER_ID: string | number | undefined;

/** Get Partner farm announcer */
export function getFarmAnnouncer() {
  return PARTNER_FARM_ANNOUNCER_ID;
}

/** Get public and Partner farm announcers */
export function getAnnouncers() {
  return {
    poolAnnouncer: POOL_ANNOUNCER_ID,
    partnerFarmAnnouncer: PARTNER_FARM_ANNOUNCER_ID,
    publicFarmAnnouncer: PUBLIC_FARM_ANNOUNCER_ID
  };
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
let BLOCKCHAIN: string;
/** SDK user's blockchain (consensus network) preference */
export function getBlockchain() {
  if (!BLOCKCHAIN) BLOCKCHAIN = "ALGO";
  return BLOCKCHAIN;
}

/** @internal When 'true', SDK is ready for use */
let INITIALIZED = false;
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
  PARTNER_FARM_ANNOUNCER_ID = PartnerFarmAnnouncerId(opts);
  PUBLIC_FARM_ANNOUNCER_ID = PublicFarmAnnouncerId(opts);
  // Set SDK as initialized
  INITIALIZED = true;
}

/** @internal Get Pool data source for Testnet/Mainnet */
function TriumvirContractId(opts: SDKOpts) {
  const { network = "TestNet", contractOverrides = {} } = opts;
  const { protocolId } = contractOverrides;
  if (protocolId) return protocolId;

  // V2 Triumvirate
  const valid = safeNetwork(network);
  if (valid === "TestNet") return 92391728; // This is Develop triumvirate
  if (valid === "MainNet") return 771884869;

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Get Public Farm data source for Testnet/Mainnet */
function PublicFarmAnnouncerId(opts: SDKOpts) {
  const { network = "TestNet", contractOverrides = {} } = opts;
  const { publicFarmAnnouncerId } = contractOverrides;
  if (publicFarmAnnouncerId) return publicFarmAnnouncerId;
  const valid = safeNetwork(network);
  if (valid === "TestNet") return 107539798; // Internal Dev Announcer
  if (valid === "MainNet") return 857348615; // Production Announcer

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Get Partner Farm data source for Testnet/Mainnet */
function PartnerFarmAnnouncerId(opts: SDKOpts) {
  const { network = "TestNet", contractOverrides = {} } = opts;
  const { partnerFarmAnnouncerId } = contractOverrides;
  if (partnerFarmAnnouncerId) return partnerFarmAnnouncerId;

  // V2 Triumvirate
  const valid = safeNetwork(network);
  if (valid === "TestNet") return 97832257;
  if (valid === "MainNet") return 830314595;

  throw new Error(`Unrecognized provider "${network}"`);
}

/**
 * @internal Get account address (not App ID!) of Triumvirate contract for current network */
function ProtocolAddr(opts: SDKOpts) {
  const ADDRESSES = {
    MainNet: "RKUC34RZOMK26ZOD4J2OFY3UILORX5AAMIX24L5MWAUUF6DVJVBJYQSABQ",
    None: "",
    TestNet: "YNKCECPOYM3ZLFOHKZTG466GYCAGXKWRWA4G5C6BFLXNDHBUAZ73XATU2U",
    get "ALGO-devnet"() {
      return ADDRESSES.TestNet;
    }
  };
  const { network: prov = "TestNet", contractOverrides = {} } = opts;
  const { protocolAddress } = contractOverrides;
  return (
    protocolAddress || // override
    ADDRESSES[prov as keyof typeof ADDRESSES] || // address for provider
    ADDRESSES.None // empty string (bad bad bad)
  );
}
