import { runAnnounceFarmTest } from "../runAnnounceFarmTest.mjs";
import { createFarmAnnouncer } from "../runCreateAnnouncer.mjs";
import {
  createLOAnnouncer,
  createTriumvirate
} from "../runCreateAnnouncer.mjs";

export const CreateFarmAnnouncer = {
  title: "Create Farm Announcer (requires funds)",
  action: createFarmAnnouncer
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
  CreateFarmAnnouncer,
  {
    title: "Create Limit Order Announcer (requires funds)",
    action: createLOAnnouncer
  },
  AnnounceFarm
];

export default adminActions;
