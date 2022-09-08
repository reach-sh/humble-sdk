import fs from "fs";
import {
  subscribeToPoolStream,
  initHumbleSDK,
  getPoolAnnouncer,
  getNetworkProvider,
  createReachAPI,
  fetchToken,
  peraTokenMetadata
} from "@reach-sh/humble-sdk";
import { Blue, Green, Yellow, fromArgs, getAccountFromArgs } from "./utils.mjs";

const tokensById = {};
const poolIds = new Set();
const tokenIds = new Set();
let env;

// Examples:
// $ node createTokenMetadata.mjs
// $ node createTokenMetadata.mjs env=local
// $ node createTokenMetadata.mjs env=mainnet
// $ node createTokenMetadata.mjs env=testnet

export function createTokenMetadata(acc) {
  const reach = createReachAPI();
  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Green(`Connected ${reach.formatAddress(acc)}\n`);

  env = getNetworkProvider().toLowerCase();
  if (env === "testnet" && getPoolAnnouncer() !== 93443561) env = "local";
  Yellow(`Subscribing to "${env}" pool stream ...`);

  subscribeToPoolStream(acc, {
    includeTokens: true,
    onPoolReceived: ([pAdd, a, b]) => {
      poolIds.add(pAdd.toString());
      tokenIds.add(a);
      tokenIds.add(b);
    },
    onPoolFetched: makeOnPoolFetched(acc)
  });
}

const makeOnPoolFetched =
  (acc) =>
  async ({ data, succeeded, poolAddress }) => {
    if (poolAddress) {
      poolIds.delete(poolAddress.toString());
    }
    if (succeeded) {
      const poolTok = await peraTokenMetadata(data.pool.poolTokenId, acc);

      const [tokA, tokB] = data.tokens;
      if (tokA.id) tokensById[tokA.id] = tokA;
      if (tokB.id) tokensById[tokB.id] = tokB;
      if (poolTok?.id) tokensById[poolTok.id] = poolTok;
    }

    if (poolIds.size <= 0) {
      // Convert and export
      const jsonData = JSON.stringify(tokensById);
      fs.writeFile(
        `${env}-token-metadata.json`,
        jsonData,
        "utf-8",
        onEndScript
      );
    }
  };

const onEndScript = () => {
  Green("Token metadata exported into build directory");
  process.exit();
};
