import {
  createReachAPI,
  createStakingPool,
  fetchToken,
  parseAddress,
} from "@reach-sh/humble-sdk";
import {
  answerOrDie,
  Blue,
  exitWithMsgs,
  Green,
  iout,
  Yellow,
} from "./utils.mjs";

/** Create a Staking pool for farming liquidity incentives */
export async function runCreateFarmTest(acc) {
  console.clear();
  Blue(`Running STAKING-POOL-CREATE`);
  const reach = createReachAPI();

  //   Duration
  Yellow("How long should the farm run?");
  let prompt = "Enter duration in days:";
  const days = Number(await answerOrDie(prompt));

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

  //   Start delay
  Yellow("Start delay: In how many days should the pool start rewarding users (if you are going to request a site list their farm in your UI it is best to set a minimum of a 3 business day delay)?");
  prompt = "Enter 'start delay' in days:";
  const startDelayDays = Number(await answerOrDie(prompt));

  //   Start delay
  Yellow("Will a separate account be adding the ALGO rewards? If so, what is it's address? (this will default to your address if a different one isn't submitted)");
  prompt = "Enter the address or leave blank:";
  const rewarder = await answerOrDie(prompt);
  console.log({rewarder})

  Blue(`Cost: ${nrt} ${reach.connector} and ${nnrt} ${rewardsToken.symbol}`);
  const createPool = (await answerOrDie("Continue? (y/n)")) === "y";
  if (!createPool) exitWithMsgs("Exiting");

  const result = await createStakingPool(acc, {
    onComplete: Green,
    onProgress: Yellow,
    opts: {
      stakingDuration: { days },
      rewardTokenId: rewardTokenId,
      totalRewardsPayout: [nrt, nnrt],
      stakeTokenId: stakeTokenId,
      graceDuration: { days: 4 },
      startDelay: { days: startDelayDays },
      rewarder0: rewarder === '' ? reach.formatAddress(acc.getAddress()) : rewarder,
    },
  });

  console.log({ result });
  if (!result.succeeded) exitWithMsgs(result.message);

  Green(`Deployed farm (app id: ${result.poolAddress})`);
  iout(result.message, result.data);
  process.exit();
}
