// Application constants (or long-lived values)
export const UNINSTANTIATED = `HumbleSDK is not instantiated!`;
export const ASSURANCE_MSG = `Your funds were not moved.`;
export const MIN_BALANCE_MSG = `Transaction would drop account below minimum required balance.`;
export const POPUP_BLOCKED_MSG = `Your browser is blocking popups; please disable this blocker before retrying.`;
export const TRANSACTION_CANCELLED_MSG = `Transaction Cancelled.`;
// Fees
export const FLOAT = 0.0001;

export function getFeeInfo() {
  const LIQUIDITY_PROVIDER_FEE = 25;
  const HUMBLE_DAO_FEE = 5;
  const TOTAL_FEE = 30;

  return {
    fee: HUMBLE_DAO_FEE,
    lpFee: LIQUIDITY_PROVIDER_FEE,
    totFee: TOTAL_FEE,
    addr: getHumbleAddr(),
  };
}

let HUMBLE_ADDR: string;
export function setHumbleAddr(prov: "TestNet" | "MainNet") {
  const a = [
    "35KJV5W6CW2TQKGDGQD5FGMSJGLYARPSKD6JB7ZX5SADTCHNFI3WUN44PI",
    "U57LB3YXAVYAER4BWQLNRQZHI2TJWXSDJGOUI5OYJWORUYEAL6SPZGOWZI",
  ];
  if (prov === "TestNet") HUMBLE_ADDR = a[0];
  if (prov === "MainNet") HUMBLE_ADDR = a[1];
}

export function getHumbleAddr() {
  return HUMBLE_ADDR;
}

let POOL_ANNOUNCER_ADDRESS: string | number | undefined;
/** Set address of Pool announcer contract */
export function setPoolAnnouncer(address: string | number) {
  POOL_ANNOUNCER_ADDRESS = address;
}

/** Get address of Pool announcer contract. */
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

/**
 * Get user's slippage tolerance (in-memory only) */
export function getSlippage() {
  return SLIPPAGE;
}

let NETWORK_PROVIDER: string;
/** SDK user's network preference */
export function getNetworkProvider() {
  return NETWORK_PROVIDER;
}

export function setNetworkProvider(provider: string) {
  NETWORK_PROVIDER = provider;
}

/** When 'true', SDK is ready for use */
let INITIALIZED = false;
export function checkInitialized() {
  return INITIALIZED;
}

export function setInitialized(init = false) {
  INITIALIZED = init;
}
