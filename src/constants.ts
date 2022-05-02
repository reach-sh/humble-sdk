import { NetworkProvider } from "./reach-helpers";
import { PoolProtocolInfo } from "./types";

// Application constants (or long-lived values)
export const UNINSTANTIATED = `HumbleSDK is not instantiated!`;
export const ASSURANCE_MSG = `Your funds were not moved.`;
export const MIN_BALANCE_MSG = `Transaction would drop account below minimum required balance.`;
export const POPUP_BLOCKED_MSG = `Your browser is blocking popups; please disable this blocker before retrying.`;
export const TRANSACTION_CANCELLED_MSG = `Transaction Cancelled.`;
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
    locked: false,
  };
}

/** @internal account address (not App ID!) of Triumvirate contract */
let HUMBLE_ADDR: string;
/** 
 * @internal Set account address (not App ID!) of Triumvirate contract for current network */
export function setProtocolAddr(prov: NetworkProvider) {
  const a = [
    "RMPV36J33LQKK34XKJCRKMC2YQ235MLFKKMCCFEPTWYU75TZR563UV66OI",
    "???",
  ];
  if (prov === "TestNet") HUMBLE_ADDR = a[0];
  if (prov === "MainNet") HUMBLE_ADDR = a[1];
}
/** @internal get account address (not App ID!) of Triumvirate contract */
export function getProtocolAddr() {
  return HUMBLE_ADDR;
}

/** @internal Triumvirate contract app id */
let POOL_ANNOUNCER_ADDRESS: string | number | undefined;
/** @internal Set app id of Triumvirate contract */
export function setPoolAnnouncer(address: string | number) {
  POOL_ANNOUNCER_ADDRESS = address;
}

/** Get app id of Triumvirate contract. */
export function getPoolAnnouncer() {
  return POOL_ANNOUNCER_ADDRESS;
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
  return NETWORK_PROVIDER;
}
/** @internal */
export function setNetworkProvider(provider: string) {
  NETWORK_PROVIDER = provider;
}

/** @internal */
let BLOCKCHAIN: string;
/** SDK user's blockchain (consensus network) preference */
export function getBlockchain() {
  return BLOCKCHAIN;
}
/** @internal */
export function setBlockchain(provider: string) {
  BLOCKCHAIN = provider;
}

/** @internal When 'true', SDK is ready for use */
let INITIALIZED = false;
export function checkInitialized() {
  return INITIALIZED;
}
/** @internal */
export function setInitialized(init = false) {
  INITIALIZED = init;
}
