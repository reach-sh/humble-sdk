import { runAnnounceFarmTest } from "../runAnnounceFarmTest.mjs";
import {
  createFarmAnnouncer,
  harvestPoolFees
} from "../runCreateAnnouncer.mjs";
import {
  createLOAnnouncer,
  createTriumvirate
} from "../runCreateAnnouncer.mjs";
import { createPoolMigrator } from "../runLiquidityMigratorTest.mjs";

export const CreateFarmAnnouncer = {
  title: "Create Farm Announcer (requires funds)",
  action: createFarmAnnouncer
};

export const MigrateLiquidity = {
  title: "Migrate Pool Liquidity (v2 - v3: requires funds)",
  action: createPoolMigrator
};

export const AnnounceFarm = {
  title: "Announce a Farm",
  action: runAnnounceFarmTest
};

export const adminActions = [
  {
    title: "Create Triumvirate (requires funds)",
    action: createTriumvirate
  },
  {
    title: "Harvest Pool fees (requires funds)",
    action: harvestPoolFees
  },
  CreateFarmAnnouncer,
  {
    title: "Create Limit Order Announcer (requires funds)",
    action: createLOAnnouncer
  },
  MigrateLiquidity,
  AnnounceFarm
];

export default adminActions;
