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
  fromArgs,
  getAccountFromArgs,
} from "./utils.mjs";

const tokensById = {}
const poolIds = new Set()

// Examples:
// $ node createTokenMetadata.mjs
// $ node createTokenMetadata.mjs env=local
// $ node createTokenMetadata.mjs env=mainnet
// $ node createTokenMetadata.mjs env=testnet

const arg = fromArgs(process.argv.slice(2), "env")
const env = ['local', 'mainnet', 'testnet'].includes(arg) ? arg : 'local'

const localOpts = { network: "TestNet" }  // dev.humbleswap.com
const mainetOpts = { network: "MainNet" }
const testnetOpts = { 
  network: "TestNet",
  customTriumvirateId: 93443561,
  customTriumvirateAddress: 'XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE'
} // testnet.humbleswap.com

const opts = {
  testnet: testnetOpts, 
  mainnet: mainetOpts, 
  local: localOpts
}[env]

initHumbleSDK(opts);
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

const makeOnPoolFetched = (acc) => async ({data, succeeded, poolAddress}) => {
  if (poolAddress) {
    poolIds.delete(poolAddress.toString())
  }
  if (succeeded) {
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
        `${env}-token-metadata.json`,
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
