import { loadStdlib } from "@reach-sh/stdlib";
import { loadReach, SDKOpts } from "./reach-helpers";
import { checkInitialized, setSDKOpts } from "./constants";

// CONSTANTS
export {
  HUMBLE_LP_TOKEN_SYMBOL,
  BASE_VERSION,
  checkInitialized,
  getAnnouncers,
  getBlockchain,
  getDefaultDecimals,
  getLegacyAnnouncers,
  getNetworkProvider,
  getPoolAnnouncer,
  getProtocolAddr,
  getProtocolFunder0x,
  getSlippage,
  setSlippage
} from "./constants";

export * from "./constants.versioned"

// CONTRACTS
export {
  LimitOrderType,
  LiquidityMigratorOpts,
  getLimitOrderVariant
} from "./build/backend";

// TYPES
export * from "./types";
export { convertToBlocks, blockConstants } from "./json";

// REACH HELPERS
export {
  createReachAPI,
  parseAddress,
  parseCurrency,
  formatAddress,
  formatCurrency,
  peraTokenMetadata,
  tokenBalance,
  tokenMetadata,
  // REACH TYPES
  APIFn,
  BackendModule,
  BigNumber,
  ChainSymbol,
  CtcFn,
  CtcLabeledFunc,
  CtcFnGroup,
  CtcFnSupergroup,
  InteractFn,
  NetworkData,
  NetworkProvider,
  NetworksMap,
  ReachToken,
  ReachAccount,
  Maybe,
  ContractView,
  ReachContract,
  ReachEvent,
  ReachEventStream,
  ReachStdLib,
  ReachEnvOpts,
  TokenBalanceOpts,
  TokenVerificationTier,
  LoadReachOpts,
  WalletFallbackOpts,
  AlgoEnvOverride,
  SDKOpts
} from "./reach-helpers";

// LIQUIDITY PROVIDER, SWAP, FARMING, LIMIT ORDERS, etc
export * from "./contracts/index";

// UTILS | GENERAL
export { isNetworkToken } from "./utils";

// UTILS | REACH
export {
  noOp,
  trimByteString,
  formatNumberShort,
  isMaybe,
  asMaybe,
  fromMaybe
} from "./utils/utils.reach";

// UTILS | SWAP
export {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  checkPoolWillOverflow
} from "./utils/utils.swap";

/**
 * Create `stdlib` instance for SDK. Options allow for selective environment
 * overrides. */
export function initHumbleSDK(opts: SDKOpts = {}) {
  if (checkInitialized()) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, {
    provider: network,
    providerEnv,
    walletFallback: opts.walletFallback
  });
  setSDKOpts(opts);
}
