import { utils } from "ethers";
import { announceFarm, fetchFarmAndTokens } from "@reach-sh/humble-sdk";
import {
  calculateRewardsPerBlock,
  checkRewardsImbalance,
  createReachAPI,
  createStakingPool,
  fetchToken,
  parseAddress
} from "@reach-sh/humble-sdk";
import {
  answerOrDie,
  Blue,
  exitWithMsgs,
  fromArgs,
  Green,
  iout,
  Red,
  Yellow
} from "./utils.mjs";

/** Create a Staking pool for farming liquidity incentives */
export async function runCreateFarmTest(acc) {
  console.clear();
  Blue(`Running STAKING-POOL-CREATE`);
  const reach = createReachAPI();

  //   Starting Date
  Yellow("When should the farm start distributing rewards?");
  let prompt = "Enter a date like 5/26/22:";
  const startDate = await answerOrDie(prompt);

  //   Reward token
  Yellow("What REWARD token will users get?");
  prompt = "Enter REWARDS token ID (XXXXX...):";
  const rewardTokenId = parseAddress(await answerOrDie(prompt));
  const rewardsToken = await fetchToken(acc, rewardTokenId);

  //   Staking token
  Yellow(`What should users STAKE to get ${rewardsToken.symbol}?`);
  prompt = "Enter STAKING token ID (XXXXX...):";
  const stakeTokenId = parseAddress(await answerOrDie(prompt));
  const stakeToken = await fetchToken(acc, stakeTokenId);

  //   ALGO rewards per block
  Yellow(`How much TOTAL ${reach.connector} will you pay out?`);
  Yellow(`Enter TOTAL ${reach.connector} to earn in pool:`);
  prompt = "Enter rewards [or 0 if none]";
  const nrt = Number(await answerOrDie(prompt));

  //   Reward token rewards per block
  Yellow(`How much TOTAL ${rewardsToken.symbol} will you pay out?`);
  prompt = `Enter TOTAL ${rewardsToken.symbol} to earn in pool:`;
  const nnrt = Number(await answerOrDie(prompt));

  //   Ending date
  Yellow("When should the farm stop distributing rewards?");
  prompt = "Enter a date like 5/26/22:";
  const endDate = await answerOrDie(prompt);

  //   ALGO provider address
  Yellow(
    "Will a separate account be adding the ALGO rewards? If so, what is it's address? (this will default to your address if a different one isn't submitted)"
  );
  prompt = "Enter the address or leave blank to use ALGOs in your account:";
  const rewarder = await answerOrDie(prompt);

  Blue(`Cost: ${nrt} ${reach.connector} and ${nnrt} ${rewardsToken.symbol}`);
  const createPool = (await answerOrDie("Continue? (y/n)")) === "y";
  if (!createPool) exitWithMsgs("Exiting");

  const formData = {
    endDateTime: endDate,
    networkRewards: nrt,
    networkRewardsFunder: rewarder || reach.formatAddress(acc.getAddress()),
    rewardTokenDecimals: rewardsToken.decimals,
    rewardTokenId,
    stakeTokenId,
    startDateTime: startDate,
    totalReward: nnrt
  };

  const check = await checkRewardsImbalance(formData);
  if (check.imbalance) {
    const e = "Rewards imbalance! Cost is less than 95% of your budget!";
    Red(e);
    return iout("Calculated rewards", { ...check, expectedToPay: nnrt });
  }

  Blue(JSON.stringify(check, null, 2));

  const result = await createStakingPool(acc, {
    onComplete: Green,
    onProgress: Yellow,
    opts: {
      rewardTokenId: rewardTokenId,
      stakeTokenId: stakeTokenId,
      totalRewardsPayout: [nrt, nnrt],
      startBlock: startDate,
      endBlock: endDate,
      rewarder0: formData.networkRewardsFunder
    }
  });

  console.log({ result });
  if (!result.succeeded) exitWithMsgs(result.message);

  Green(`Deployed farm (app id: ${result.poolAddress})`);
  iout(result.message, result.data);
  process.exit();
}
