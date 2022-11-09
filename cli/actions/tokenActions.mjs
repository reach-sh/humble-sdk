import { runFetchTokenTest } from "../runFetchTokenTest.mjs";
import { runSwapTest } from "../runSwapTest.mjs";
import { createTokenMetadata } from "../createTokenMedata.mjs";

export const tokenActions = [
  { title: "Fetch a Token", action: runFetchTokenTest },
  { title: "Swap tokens", action: runSwapTest },
  { title: "Create JSON Metadata", action: createTokenMetadata }
];

export default tokenActions;
