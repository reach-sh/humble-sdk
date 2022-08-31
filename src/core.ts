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
  setFarmAnnouncer
} from "./constants";

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

/** @internal Set SDK options for operation */
function setSDKOpts(opts: SDKOpts) {
  let customAnnouncerId = opts.customTriumvirateId;
  let customAnnouncerAddress = opts.customTriumvirateAddress;
  let customFarmAnnouncerAddress = opts.customFarmAnnouncerAddress;

  // Announcer for listing farms
  setFarmAnnouncer(
    opts.network !== "MainNet" && customFarmAnnouncerAddress
      ? customFarmAnnouncerAddress
      : getFarmAnnouncerContract(opts.network)
  );
  // Announcer for listing pools (default: HumbleSwap testnet announcer)
  setPoolAnnouncer(
    opts.network !== "MainNet" && customAnnouncerId
      ? customAnnouncerId
      : getTriumvirContract(opts.network)
  );
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  // User network (testnet/mainnet) preference
  const network = safeNetwork(opts.network);
  setNetworkProvider(network);
  setProtocolAddr(network, customAnnouncerAddress);
  setInitialized(true);
}

/** @internal Get Pool data source for Testnet/Mainnet */
function getTriumvirContract(network: NetworkProvider = "TestNet") {
  const valid = safeNetwork(network);
  // V2 Triumvirate
  if (valid === "TestNet") return 92391728; // This is Develop triumvirate
  if (valid === "MainNet") return 771884869;

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Get Pool data source for Testnet/Mainnet */
function getFarmAnnouncerContract(network: NetworkProvider = "TestNet") {
  const valid = safeNetwork(network);
  // V2 Triumvirate
  if (valid === "TestNet") return 97832257;
  if (valid === "MainNet") return 830314595;

  throw new Error(`Unrecognized provider "${network}"`);
}

/** @internal Ensure `network` param from user is a recognized value */
function safeNetwork(val?: NetworkProvider): NetworkProvider {
  const valid: NetworkProvider[] = ["TestNet", "MainNet", "ALGO-devnet"];
  if (!val) return valid[0];
  const safe = valid.includes(val) ? val : "TestNet";
  return safe;
}
