import { loadStdlib } from "@reach-sh/stdlib";
import { loadReach, NetworkProvider, SDKOpts } from "./reach-helpers";
import {
  checkInitialized,
  setHumbleAddr,
  setInitialized,
  setNetworkProvider,
  setPoolAnnouncer,
  setSlippage,
} from "./constants";

export function initHumbleSDK(opts: SDKOpts = {}) {
  if (checkInitialized()) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, { provider: network, providerEnv });
  setSDKOpts(opts);
}

/** 
 * @internal 
 * Set SDK options for operation 
 */
function setSDKOpts(opts: SDKOpts) {
  // Announcer for listing pools (default: HumbleSwap testnet announcer)
  setPoolAnnouncer(getAnnouncerForEnv(opts.network));
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  // User network (testnet/mainnet) preference
  const network = safeNetwork(opts.network);
  setNetworkProvider(network);
  setHumbleAddr(network);
  // Set 'initialized'
  setInitialized(true);
}

/** 
 * @internal 
 * Get Pool data source for Testnet/Mainnet */
function getAnnouncerForEnv(network: NetworkProvider = "TestNet") {
  const valid = safeNetwork(network);
  // if (valid === "TestNet") return 77857906; V1 Announcers
  // if (valid === "MainNet") return 662535515; V1 Announcers
  if (valid === "TestNet") return 84180240; // V2 Announcers
  // if (valid === "MainNet") return ???; // V2 Announcers

  throw new Error(`Unrecognized provider "${network}"`);
}

/** 
 * @internal 
 * Ensure `network` param from user is a recognized value */
function safeNetwork(val?: NetworkProvider): NetworkProvider {
  const valid: NetworkProvider[] = ["TestNet", "MainNet"];
  if (!val) return valid[0];
  const safe = valid.includes(val) ? val : "TestNet";
  return safe;
}

// CONSTANTS
export { getSlippage, setSlippage, getPoolAnnouncer } from "./constants";

// LIQUIDITY PROVIDER
export { addLiquidity, withdrawLiquidity } from "./api/liquidityProvider";

// DATA & DATA FETCHERS
export {
  subscribeToPoolStream,
  fetchPool,
  fetchToken,
} from "./participants/index";

// SWAP
export { performSwap } from "./api/index";
export {
  calculateAmountIn,
  calculatePriceImpact,
  calculateTokenSwap,
} from "./utils.swap";

// REACH HELPERS
export { createReachAPI } from "./reach-helpers";
