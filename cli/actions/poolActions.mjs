import { runFetchPoolTest } from "../runFetchPoolTest.mjs";
import { runAnnouncerTest } from "../runAnnouncerTest.mjs";
import { runLiquidity } from "../runLiquidity.mjs";
import { runCreatePoolTest } from "../runCreatePoolTest.mjs";
import { runPoolReport } from "../runPoolReportTest.mjs";

export const poolActions = [
  { title: "List Pools", action: runAnnouncerTest },
  { title: "Create a Liquidity Pool", action: runCreatePoolTest },
  { title: "Fetch a Liquidity Pool", action: runFetchPoolTest },
  { title: "Add/remove Liquidity", action: runLiquidity },
  { title: "Pools CSV Report", action: runPoolReport }
];

export default poolActions;
