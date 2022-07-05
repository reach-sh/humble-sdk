import fs from 'fs'
import { 
  subscribeToPoolStream,
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI
} from "@reach-sh/humble-sdk";
import {
  Blue,
  Green,
  Yellow,
  getAccountFromArgs,
} from "./utils.mjs";

const tokensById = {}
const poolIds = new Set()

initHumbleSDK({ network: "TestNet" });
const reach = createReachAPI();

(async () => {
  console.clear()
  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const args = process.argv.slice(2);
  const acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);
  subscribeToPoolStream(acc, {
    includeTokens: true,
    onPoolReceived: (msg) => {
      const pAdd = msg[0]
      poolIds.add(pAdd.toString())
    },
    onPoolFetched,
  })
})()

async function onPoolFetched({ succeeded, data }) {
  const poolAddress = data.pool.poolAddress.toString()

  if (succeeded) {
    poolIds.delete(poolAddress)
    const [tokA, tokB] = data.tokens
    if (tokA.id) tokensById[tokA.id] = tokA
    if (tokB.id) tokensById[tokB.id] = tokB
  }

  if (poolIds.size <= 0) {
    // Convert and export
    const jsonData = JSON.stringify(tokensById)
    fs.writeFile(
        'tokenMetadata.json',
        jsonData,
        'utf-8',
        onEndScript
    )
  }
}

const onEndScript = () => {
  Green('Token metadata exported into build directory')
  process.exit()
}
