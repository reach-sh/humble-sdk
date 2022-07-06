import fs from 'fs'
import { 
  subscribeToPoolStream,
  initHumbleSDK,
  getPoolAnnouncer,
  createReachAPI,
  fetchToken,
} from "@reach-sh/humble-sdk";
import {
  Blue,
  Green,
  Yellow,
  getAccountFromArgs,
} from "./utils.mjs";

const tokensById = {}
const poolIds = new Set()


// If trying to access testnet.humbleswap.com, overwrite the triumvirate id and the address
// 'XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE', customTriumvirateId: 93443561 

// If Mainnet, just pass MainNet
// Default => TestNet for dev.humbleswap.com

initHumbleSDK({ network: "TestNet" });
const reach = createReachAPI();

(async () => {
  console.clear()
  Blue(`ANNOUNCER: ${getPoolAnnouncer()}`);
  Yellow(`Getting account ...`);
  const args = process.argv.slice(2);
  const acc = await getAccountFromArgs(args);
  Green(`Connected ${reach.formatAddress(acc)}\n`);
  const onPoolFetched = makeOnPoolFetched(acc)

  subscribeToPoolStream(acc, {
    includeTokens: true,
    onPoolReceived: (msg) => {
      const pAdd = msg[0]
      poolIds.add(pAdd.toString())
    },
    onPoolFetched,
  })
})()

const makeOnPoolFetched = (acc) => async ({data, succeeded}) => {
  const poolAddress = data.pool.poolAddress.toString()
  if (succeeded) {
    poolIds.delete(poolAddress)

    const poolTok = await fetchToken(acc, data.pool.poolTokenId)

    const [tokA, tokB] = data.tokens
    if (tokA.id) tokensById[tokA.id] = tokA
    if (tokB.id) tokensById[tokB.id] = tokB
    if (poolTok?.id) tokensById[poolTok.id] = poolTok
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
