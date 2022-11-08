import {
  createReachAPI,
  fetchFarmAndTokens,
  fetchStakingPool,
  getNetworkProvider,
  stakeTokensToFarm
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  answerOrDie,
  Blue,
  exitWithMsgs,
  Green,
  iout,
  Yellow
} from "./utils.mjs";

//

export async function runStakeToFarmTest(acc) {
  Blue(`Running STAKE-TO-FARM :: ${getNetworkProvider()} Farm Announcer`);

  const farmId = await answerOrDie("Enter Farm Id:");
  const result = await fetchFarmAndTokens(acc, {
    poolAddress: farmId,
    formatResult: true,
    includeTokens: true,
    onProgress: Yellow
  });

  if (!result.succeeded) return exitWithMsgs(`Farm "${farmId}" not found`);

  //   Check opted-in to reward token
  const stdlib = createReachAPI();
  const fmt = stdlib.formatCurrency;
  const prs = stdlib.parseCurrency;
  const { rewardToken, stakeToken, farmView } = result.data;

  if (!(await acc.tokenAccepted(rewardToken.id))) {
    Yellow(`Opting in to reward token "${rewardToken.symbol}" ...`);
    await acc.tokenAccept(rewardToken.id);
  }

  //   Get stake amount
  Green(`\nOpted-in to reward token "${rewardToken.symbol}"\n`);
  Yellow("How much do you want to stake?");
  const amtEntry = await answerOrDie(
    "Enter amount (or 'min' for minimum stake)"
  );

  //   Confirm user stake token balance
  const amt = amtEntry === "min" ? 0.000001 : Number(amtEntry);
  const stakeAmt = prs(amt, stakeToken.decimals);
  const bal = await acc.balanceOf(stakeToken.id);
  if (stdlib.lt(bal, stakeAmt)) {
    return exitWithMsgs(`Stake amount exceeds your ${stakeToken.name} balance`);
  }

  Blue(`\nYou will stake ${amt} ${stakeToken.name}\n`);
  if (!(await answerOrDie("Continue? (y/n)", yesno))) {
    exitWithMsgs("Understandable; have a good day.");
  }

  //   iout(farmId, result.data.farmView);
  // Do the thing
  Yellow(`Staking ${amt} to Farm "${farmId}"`);
  const onComplete = (result) => {
    if (!result.succeeded) return exitWithMsgs(result.message);

    console.log();
    Green(`Staked ${amt} ${stakeToken.name} to farm "${farmId}"`);
    iout(farmId, result.data);
    exitWithMsgs("Done. Exiting ...");
  };

  await stakeTokensToFarm(acc, {
    poolAddress: farmId,
    amountToStake: amt,
    contract: result.contract,
    includeTokens: true,
    onProgress: Yellow,
    onComplete
  });
}
