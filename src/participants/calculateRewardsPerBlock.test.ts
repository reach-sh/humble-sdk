import { convertDateToBlocks } from "../json";
import {
  calculateRewardsPerBlock,
  isImbalanced
} from "./calculateRewardsPerBlock";

describe("StakingAdmin.CalculateRewardsPerBlock", () => {
  const DAY = 24 * 60 * 60 * 1000;
  const WEEK = DAY * 7;
  const MONTH = DAY * 30;
  const now = new Date();
  const tomorrow = new Date(now.getTime() + DAY);
  const nextWeek = new Date(now.getTime() + WEEK);
  const currentBlock = 0;
  const farmOpts = {
    startDateTime: tomorrow.toISOString(),
    endDateTime: nextWeek.toISOString(),
    networkRewards: "0",
    totalReward: "100000",
    rewardTokenDecimals: 6,
    rewardTokenId: "111222333",
    stakeTokenId: "333222111"
  };
  type Opts = typeof farmOpts;

  // Replicate the "duration" calculation here. This prevents test failure when
  // block-times change, but triggers them if the logic unexpectedly changes.
  const checkDuration = (start: string, end: string) => {
    const startBlock = convertDateToBlocks(new Date(start), currentBlock);
    const endBlock = convertDateToBlocks(new Date(end), currentBlock);
    return endBlock - startBlock;
  };

  const checkPrecision = (
    opts: Opts,
    rewards: ReturnType<typeof calculateRewardsPerBlock>
  ) => {
    // 1% diff comparison
    const p95 = Number(opts.totalReward) * 0.95;
    expect(rewards.totalRewards[1]).toBeGreaterThanOrEqual(p95);
  };

  const checkRewardsCalc = (
    opts: Opts,
    rewards: ReturnType<typeof calculateRewardsPerBlock>
  ) => {
    const comp = checkDuration(opts.startDateTime, opts.endDateTime);
    expect(rewards.startBlock).toBeGreaterThan(currentBlock);
    expect(rewards.endBlock).toBeGreaterThan(rewards.startBlock);
    expect(rewards.duration).toStrictEqual(comp);
    expect(comp).toStrictEqual(rewards.endBlock - rewards.startBlock);
    expect(rewards.totalRewards[0]).toStrictEqual(0);
  };

  it("Calculates rewards per block", () => {
    const rewards = calculateRewardsPerBlock(farmOpts, currentBlock);
    expect(rewards).toBeDefined();
    checkRewardsCalc(farmOpts, rewards);
    checkPrecision(farmOpts, rewards);
  });

  it("Returns a Rewards cost within 5% of user's budget for > 1-decimal tokens", () => {
    // Run calculation for a range of tokens [ 10-decimal to 1-decimal ]
    for (let i = 10; i > 1; i--) {
      const opts = { ...farmOpts };
      opts.rewardTokenDecimals = i;
      const rwd = calculateRewardsPerBlock(opts, currentBlock);
      checkRewardsCalc(opts, rwd);
      checkPrecision(farmOpts, rwd);
    }

    // Confirm failures for 1 and 0 decimal tokens
    const p95 = (r: string) => Number(r) * 0.95;
    let opts = { ...farmOpts, rewardTokenDecimals: 1 };
    let rwd = calculateRewardsPerBlock(opts, currentBlock);

    opts.rewardTokenDecimals = 0;
    rwd = calculateRewardsPerBlock(opts, currentBlock);
    checkRewardsCalc(opts, rwd);
    expect(rwd.totalRewards[1]).not.toBeGreaterThanOrEqual(
      p95(opts.totalReward)
    );
  });

  it("Warns when Rewards cost is less than 95% of budget", () => {
    // Control (no failure)
    const farmOpts1 = { ...farmOpts };
    const farmRewards = calculateRewardsPerBlock(farmOpts1, currentBlock);
    expect(
      isImbalanced(farmRewards.totalRewards[1], farmOpts.totalReward)
    ).toBe(false);

    // Zero-decimal token
    const opts = { ...farmOpts };
    opts.rewardTokenDecimals = 0;
    let optsReward = calculateRewardsPerBlock(opts, currentBlock);
    expect(isImbalanced(optsReward.totalRewards[1], opts.totalReward)).toBe(
      true
    );

    // 1-decimal token
    opts.rewardTokenDecimals = 1;
    opts.totalReward = "10000"
    optsReward = calculateRewardsPerBlock(opts, currentBlock);
    expect(isImbalanced(optsReward.totalRewards[1], opts.totalReward)).toBe(
      true
    );

    // 2-decimal token
    opts.rewardTokenDecimals = 2;
    optsReward = calculateRewardsPerBlock(opts, currentBlock);
    expect(isImbalanced(optsReward.totalRewards[1], opts.totalReward)).toBe(
      false
    );
  });
});
