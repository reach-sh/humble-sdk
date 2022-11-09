import { runFetchPoolTest } from "../runFetchPoolTest.mjs";
import { runPoolStreamTest } from "../runPoolStreamTest.mjs";
import { runLiquidity } from "../runLiquidity.mjs";
import { runCreatePoolTest } from "../runCreatePoolTest.mjs";
import { runPoolReport } from "../runPoolReportTest.mjs";

export const poolActions = [
  { title: "List Pools", action: runPoolStreamTest },
  { title: "Create a Liquidity Pool", action: runCreatePoolTest },
  { title: "Fetch a Liquidity Pool", action: runFetchPoolTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Pools CSV Report", action: runPoolReport }
];

export default poolActions;
