import { loadStdlib } from "@reach-sh/stdlib";
import { loadReach, NetworkProvider, SDKOpts } from "./reach-helpers";

// CONSTANTS
import {
  checkInitialized,
  setInitialized,
  setPoolAnnouncer,
  setSlippage,
  setNetworkProvider,
  setProtocolAddr,
} from "./constants";

// MAIN EXPORTS
export { initHumbleSDK, setSlippage };

// DATA & DATA FETCHERS
export {
  createLiquidityPool,
  createStakingPool,
  fetchPool,
  fetchToken,
} from "./participants/index";

// SWAP UTILS
export {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  poolIsOverloaded,
} from "./utils.swap";

// REACH HELPERS
export {
  createReachAPI,
  parseAddress,
  parseCurrency,
  formatAddress,
  formatCurrency,
  noOp,
} from "./reach-helpers";

// LIQUIDITY PROVIDER and SWAP
export {
  addLiquidity,
  fetchFarm,
  withdrawLiquidity,
  swapTokens,
  subscribeToPoolStream,
} from "./api/index";

export * from "./types"

// CONSTANTS
export { getSlippage, getPoolAnnouncer } from "./constants";

/**
 * Create `stdlib` instance for SDK. Options allow for selective environment
 * overrides. */
function initHumbleSDK(opts: SDKOpts = {}) {
  if (checkInitialized()) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, {
    provider: network,
    providerEnv,
    walletFallback: opts.walletFallback,
  });
  setSDKOpts(opts);
}

/** @internal Set SDK options for operation */
function setSDKOpts(opts: SDKOpts) {
  // Announcer for listing pools (default: HumbleSwap testnet announcer)
  setPoolAnnouncer(getTriumvirContract(opts.network));
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  // User network (testnet/mainnet) preference
  const network = safeNetwork(opts.network);
  setNetworkProvider(network);
  setProtocolAddr(network);
  setInitialized(true);
}

/** @internal Get Pool data source for Testnet/Mainnet */
function getTriumvirContract(network: NetworkProvider = "TestNet") {
  const valid = safeNetwork(network);
  // V2 Triumvirate
  if (valid === "TestNet") return 86197132;
  // if (valid === "MainNet") return 86635789 // Next V2 contract

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Ensure `network` param from user is a recognized value */
function safeNetwork(val?: NetworkProvider): NetworkProvider {
  const valid: NetworkProvider[] = ["TestNet", "MainNet"];
  if (!val) return valid[0];
  const safe = valid.includes(val) ? val : "TestNet";
  return safe;
}
