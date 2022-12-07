import { runFetchPoolTest } from "../runFetchPoolTest.mjs";
import { runPoolStreamTest } from "../runPoolStreamTest.mjs";
import { runLiquidity } from "../runLiquidity.mjs";
import { runCreatePoolTest } from "../runCreatePoolTest.mjs";
import { runPoolReport } from "../runPoolReportTest.mjs";
import { exitWithMsgs } from "../utils.mjs";
import { MigrateLiquidity } from "./adminActions.mjs";

const unimpl = (l) => exitWithMsgs(`unimplemented fn "${l}"`); // temp

export const poolActions = [
  { title: "List Pools", action: runPoolStreamTest },
  { title: "Create a Liquidity Pool", action: runCreatePoolTest },
  { title: "Fetch a Liquidity Pool", action: runFetchPoolTest },
  MigrateLiquidity,
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Pools CSV Report", action: runPoolReport }
];

export default poolActions;
