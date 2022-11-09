import { runFetchTokenTest } from "../runFetchTokenTest.mjs";
import { runSwapTest } from "../runSwapTest.mjs";
import { createTokenMetadata } from "../createTokenMedata.mjs";
import {
  runCancelLimitOrder,
  runCreateLimitOrder,
  runFetchLimitOrder
} from "../runLimitOrderTest.mjs";
import { exitWithMsgs } from "../utils.mjs";
import { runLimitOrderStreamTest } from "../runLimitOrderStreamTest.mjs";

export const limitOrderActions = [
  { title: "List Limit Orders", action: runLimitOrderStreamTest },
  { title: "Fetch Limit Order", action: runFetchLimitOrder },
  { title: "Create Limit Order", action: runCreateLimitOrder },
  { title: "Cancel Limit Order", action: runCancelLimitOrder }
];

export default limitOrderActions;
