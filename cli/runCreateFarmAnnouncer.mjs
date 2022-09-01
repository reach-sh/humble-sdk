import { getNetworkProvider, parseAddress } from "@reach-sh/humble-sdk";
import * as FarmAnnouncerBackend from "@reach-sh/humble-sdk/lib/build/farmAnnouncer.large.js";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import { answerOrDie, Blue, exitWithMsgs, Green } from "./utils.mjs";

export async function createFarmAnnouncer(acc) {
  Blue("Creating FARM ANNOUNCER on " + getNetworkProvider());
  const ctc = acc.contract(FarmAnnouncerBackend);
  const ctcInfo = await new Promise((resolve) =>
    ctc.participants
      .Deployer({ ready: () => resolve(ctc.getInfo()) })
      .catch(() => null)
  );

  if (ctcInfo === null) exitWithMsgs("Contract deployment failed");
  Green(`Farm Announcer deployed at '${parseAddress(ctcInfo)}'`);
  console.log();

  if (await answerOrDie("Create another announcer?", yesno)) {
    return createFarmAnnouncer(acc);
  }

  exitWithMsgs("Complete: exiting ... ");
}
