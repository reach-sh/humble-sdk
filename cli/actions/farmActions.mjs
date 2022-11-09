import { runFarmStreamTest } from "../runFarmStreamTest.mjs";
import { runCreateFarmTest } from "../runCreateFarmTest.mjs";
import { runFetchFarmTest } from "../runFetchFarmTest.mjs";
import { runCheckRewardsTest } from "../runCheckRewardsTest.mjs";
import { runAnnounceFarmTest } from "../runAnnounceFarmTest.mjs";
import { runStakeToFarmTest } from "../runStakeToFarmTest.mjs";
import { runCheckPartnerFarmTest } from "../runCheckPartnerFarmTest.mjs";
import { AnnounceFarm, CreateFarmAnnouncer } from "./adminActions.mjs";

export const farmActions = [
  { title: "List Farms", action: runFarmStreamTest },
  { title: "Fetch a Farm", action: runFetchFarmTest },
  { title: "Check Staking rewards", action: runCheckRewardsTest },
  { title: "Stake Funds in farm", action: runStakeToFarmTest },
  { title: "Check for Partner Farm", action: runCheckPartnerFarmTest },
  { title: "Create a Farm", action: runCreateFarmTest },
  AnnounceFarm,
  CreateFarmAnnouncer
];

export default farmActions;
