import axios from "axios";
import algosdk from "algosdk";
import selectAction from "./selectAction.mjs";
import {
  answerOrDie,
  Blue,
  exitWithMsgs,
  iout,
  Red,
  Yellow
} from "./utils.mjs";
import { createReachAPI } from "@reach-sh/humble-sdk";

const lpTokenIds = [
  "777628481",
  "779147012",
  "778032204",
  "779142878",
  "777747781",
  "805141097",
  "787300351",
  "777673834",
  "822571357",
  "780434458",
  "773172677",
  "790440985",
  "780420357",
  "779148648",
  "783216340",
  "779144639",
  "779141373",
  "779149943",
  "810058973",
  "829993892"
];

const url = `http://54.234.178.201:4000/graphql`; // mainnet
// const url = `http://44.201.82.83:4000/graphql`; //dev

/** Fetch Farms */
function fetchFarms() {
  const query = `
    query ListFarms {
        listActiveFarms(provider: mainnet) {
            contractId, stakedTokenId
        }
    }`;

  return (
    axios
      .post(url, { query })
      .then((res) => res.data)
      // .then(({ data }) => data.listFarms)
      .then(({ data }) => data.listActiveFarms)
      .catch(() => [])
  );
}

/** Fetch Pool by LP Token */
async function fetchPoolByLP(id, props = ["poolTokenId", "tokens { symbol }"]) {
  const tokId = id ? String(id) : await answerOrDie("Enter Token ID");
  const variables = { tokId };
  const query = `
    query PoolByLPToken($tokId: String!) {
        getPoolByLPToken(poolTokenId: $tokId){
          ${props.join(",")}
        }
    }`;

  return axios
    .post(url, { query, variables })
    .then((res) => res.data)
    .then(({ data }) => data.getPoolByLPToken)
    .catch(() => null);
}

async function mapFarmsToLPToken() {
  console.log("Fetching Farms");
  const _farms = await fetchFarms();
  const stakeTokens = new Set();
  const approvedLPFarms = _farms.filter(({ stakedTokenId }) => {
    const approved = lpTokenIds.includes(stakedTokenId);
    if (approved) stakeTokens.add(stakedTokenId);
    return approved;
  });

  console.log("Fetching Pools");
  const _pools = await Promise.all(
    [...stakeTokens].map((id) => fetchPoolByLP(id))
  );
  const namedPools = _pools.map(({ tokens, poolTokenId }) => {
    const name = `${tokens[0].symbol}/${tokens[1].symbol}`;
    const farm = approvedLPFarms.find(
      ({ stakedTokenId }) => stakedTokenId === poolTokenId
    );
    return { ...farm, name };
  });

  console.log(_farms.length, "og farms");
  console.log(stakeTokens.size, "unique stake tokens");
  console.log(approvedLPFarms.length, "approved farms");
  iout(`${_pools.length} pools fetched`, namedPools);

  Yellow("Run again?");
  return (await answerOrDie("(y/n)")) === "y" ? mapFarmsToLPToken() : sandbox();
}

async function cliPoolByLP() {
  const tokId = await answerOrDie("Enter Token ID");
  const pool = await fetchPoolByLP(tokId);
  if (pool === null) exitWithMsgs(`No pool found with LP Token ${tokId}`);
  iout("Pool Result", pool);

  Yellow("Fetch another Pool?");
  if ((await answerOrDie("Enter y/n")) === "y") return cliPoolByLP();
  return sandbox();
}

async function lookupAccountAtRound() {
  // 23777308
  Blue("ACCOUNT LOOKUP");
  Yellow("What is the address?");
  const addr = await answerOrDie("Address:");
  const { indexer } = await createReachAPI().getProvider();
  let lookup = indexer.lookupAccountAssets(addr);
  Yellow("Enter round:");
  const round = await answerOrDie("Block Number:");
  if (round) {
    Blue(`\n-> Lookup ${addr} at ${round}`);
    lookup = indexer.lookupAccountAssets(addr).round(round);
  }

  const q = await lookup.do().catch((e) => {
    if (e.message) Red(e.message);
    return null;
  });
  iout("Account", q);

  Yellow("Check another account?");
  return (await answerOrDie("(y/n)")) == "y"
    ? lookupAccountAtRound()
    : sandbox();
}

export function sandbox() {
  console.clear();
  Red(" === HUMBLE SDK SANDBOX === ");
  selectAction([
    { title: "Generate Farms-to-LP-Tokens map", action: mapFarmsToLPToken },
    { title: "Fetch Pool by LP Token", action: cliPoolByLP },
    { title: "Lookup Account at Round", action: lookupAccountAtRound }
  ]);
}

/*  

// APPROVED POOLS [ Governance Q4 2022 ]
-------------------------------------
-------- NAME -------|---ASSET ID----
-------------------------------------
  humble: ALGO-USDC 	    777628481
  humble: ALGO-COSG 	    779147012
  humble: ALGO-DEFLY 	    778032204
  humble: ALGO-goMINT 	  779142878
  humble: ALGO-VEST 	    777747781
  humble: ALGO-GALGO 	    805141097
  humble: ALGO-Planets 	  787300351
  humble: ALGO-WBLN 	    777673834
  humble: ALGO-XSOL 	    822571357
  humble: ALGO-XET 	      780434458
  humble: ALGO-chip 	    773172677
  humble: ALGO-GARD 	    790440985
  humble: ALGO-ADAO 	    780420357
  humble: ALGO-GEMS 	    779148648
  humble: ALGO-HDL 	      783216340
  humble: ALGO-ALCH 	    779144639
  humble: ALGO-STKE 	    779141373
  humble: ALGO-SMILE 	    779149943
  humble: ALGO-AOA 	      810058973
  humble: ALGO-BD 	      829993892
-------------------------------------
*/
