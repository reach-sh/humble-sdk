import { createReachAPI, HUMBLE_LP_TOKEN_SYMBOL } from "../index";
import { createStakingPool } from "./StakingAdmin";
import { StakingRewards } from "../types";

const MintedLPTokens = 1200000000;
const deposit = jest
  .fn()
  .mockImplementation(() => createReachAPI().bigNumberify(MintedLPTokens));

const MockContract = {
  apis: { Provider: { deposit } }
};

const MockAccount: any = {
  contract: jest.fn().mockImplementation(() => MockContract),
  tokenAccept: jest.fn().mockImplementation(() => Promise.resolve(true))
};

const startTime = new Date();
const endTime = startTime;
endTime.setDate(endTime.getDate() + 7);

const stakingOpts = {
  opts: {
    rewardTokenId: 10458941,
    stakeTokenId: 44110986,
    totalRewardsPayout: ["0", "10"] as StakingRewards,
    startBlock: startTime.toString(),
    endBlock: endTime.toString()
  }
};

describe.only("Create Staking Pool", () => {
  it(`Requires staking token to be a ${HUMBLE_LP_TOKEN_SYMBOL} token`, async () => {
    expect.assertions(3);
    const result = await createStakingPool(MockAccount, stakingOpts);
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("Staking token is not a Liquidity Pool token");
  });
});
