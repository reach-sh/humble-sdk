import dotenv from "dotenv";
import { loadStdlib } from "@reach-sh/stdlib";
import { ChainSymbol, loadReach, SDKOpts } from "./reach-helpers";
import {
  checkInitialized,
  setHumbleAddr,
  setInitialized,
  setNetworkProvider,
  setPoolAnnouncer,
  setSlippage,
} from "./constants";

dotenv.config({ path: "./../.env" });

export function initHumbleSDK(opts: SDKOpts = {}) {
  if (checkInitialized()) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, { provider: network, providerEnv });
  setSDKOpts(opts);
}

/** INTERNAL Set SDK options for operation */
function setSDKOpts(opts: SDKOpts) {
  // Announcer for listing pools (default: HumbleSwap testnet announcer)
  setPoolAnnouncer(getAnnouncerForEnv(opts.network));
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  // User network (testnet/mainnet) preference
  const network = validateNetwork(opts.network || "");
  setNetworkProvider(network);
  setHumbleAddr(network);
  // Set 'initialized'
  setInitialized(true);
}

type Provider = "TestNet" | "MainNet";

/** Get Pool data source for Testnet/Mainnet */
function getAnnouncerForEnv(network: Provider = "TestNet") {
  const valid = validateNetwork(network);
  if (valid === "TestNet") return 77857906;
  if (valid === "MainNet") return 662535515;

  throw new Error(`Unrecognized provider "${network}"`);
}

/** Ensure `network` param from user is a recognized value */
function validateNetwork(val: string | ChainSymbol): Provider {
  const valid = ["TestNet", "MainNet"].includes(val) ? val : "TestNet";
  return valid as Provider;
}

// CONSTANTS
export { getSlippage, setSlippage, getPoolAnnouncer } from "./constants";

// LIQUIDITY PROVIDER
export { addLiquidity, withdrawLiquidity } from "./api/liquidityProvider";

// POOL + TOKEN DATA
export { subscribeToPoolStream } from "./participants/subscribeToPoolStream";
export { fetchPool, fetchToken } from "./participants/PoolAnnouncer";

// SWAP
export { performSwap } from "./api/trader";
export {
  calculatePairOpposite,
  calculatePriceImpact,
  calculateTokenSwap,
} from "./utils.swap";

// REACH HELPERS
export { createReachAPI } from "./reach-helpers";
