import { loadStdlib } from "@reach-sh/stdlib";
import { loadReach, NetworkProvider, SDKOpts } from "./reach-helpers";

// DATA & DATA FETCHERS
import {
  createLiquidityPool,
  createStakingPool,
  fetchPool,
  fetchToken,
  subscribeToPoolStream,
} from "./participants/index";

// SWAP
import {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
} from "./utils.swap";

// REACH HELPERS
import {
  createReachAPI,
  parseAddress,
  parseCurrency,
  formatAddress,
  formatCurrency,
} from "./reach-helpers";

// LIQUIDITY PROVIDER and SWAP
import { addLiquidity, withdrawLiquidity, performSwap } from "./api/index";

// CONSTANTS
import {
  checkInitialized,
  setInitialized,
  getPoolAnnouncer,
  setPoolAnnouncer,
  getSlippage,
  setSlippage,
  setNetworkProvider,
  setProtocolAddr,
} from "./constants";

export function initHumbleSDK(opts: SDKOpts = {}) {
  if (checkInitialized()) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, {
    provider: network,
    providerEnv,
    walletFallback: opts.walletFallback,
  });
  setSDKOpts(opts);
}

export {
  addLiquidity,
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  createLiquidityPool,
  createReachAPI,
  createStakingPool,
  fetchPool,
  fetchToken,
  formatAddress,
  formatCurrency,
  getPoolAnnouncer,
  getSlippage,
  parseAddress,
  parseCurrency,
  performSwap,
  setSlippage,
  subscribeToPoolStream,
  withdrawLiquidity,
};

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
  // if (valid === "MainNet") return ???

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Ensure `network` param from user is a recognized value */
function safeNetwork(val?: NetworkProvider): NetworkProvider {
  const valid: NetworkProvider[] = ["TestNet", "MainNet"];
  if (!val) return valid[0];
  const safe = valid.includes(val) ? val : "TestNet";
  return safe;
}
