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

const ALGO_BLOCKS_PER_DAY = 19200; // (86400 secs / 4.5)  blocks a day
const ALGO_BLOCKS_PER_HR = ALGO_BLOCKS_PER_DAY / 24; // 800 blocks a day

export async function runCreateStakingPoolTest(acc) {
  console.clear();
  Blue(`Running STAKING-POOL-CREATE`);
  const reach = createReachAPI();

  //   Duration
  Yellow("How long should the farm run?");
  let prompt = "Enter duration in days:";
  const numDays = Number(await answerOrDie(prompt));
  const duration = numDays * ALGO_BLOCKS_PER_DAY;

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

  Blue(`Cost: ${nrt} ${reach.connector} and ${nnrt} ${rewardsToken.symbol}`);
  const createPool = (await answerOrDie("Continue? (y/n)")) === "y";
  if (!createPool) exitWithMsgs("Exiting");

  const result = await createStakingPool(acc, {
    onProgress: Yellow,
    opts: {
      lengthInDays: numDays,
      rewardTokenId: rewardTokenId,
      totalRewardsPayout: [nrt, nnrt],
      stakeTokenId: stakeTokenId,
    },
  });

  console.log({ result });
  if (!result.succeeded) exitWithMsgs(result.message);

  Green(`Deployed farm (app id: ${result.poolAddress})`);
  iout(result.message, result.data);
  process.exit();
}
