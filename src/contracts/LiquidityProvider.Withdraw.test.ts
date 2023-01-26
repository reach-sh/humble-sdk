import { getProtocolAddr } from "../constants";
import { createReachAPI, initHumbleSDK } from "../index";
import { PoolDetails } from "../types";
import { asMaybe } from "../utils/utils.reach";
import { withdrawLiquidity, WithdrawOpts } from "./LiquidityProvider.Withdraw";

const ReturnNum = 1200000000;
const tokenIds = { tokenAId: "0", tokenBId: "10458941" };
const p1Ato3B: PoolDetails = {
  ...tokenIds,
  poolAddress: "1",
  poolTokenId: "77889910",
  tokenABalance: "1000",
  tokenADecimals: 3,
  tokenBBalance: "3000",
  tokenBDecimals: 3
};
const Info = jest.fn().mockImplementation(() => {
  // Mock contract view info
  return asMaybe({
    tokA: tokenIds.tokenAId,
    tokB: tokenIds.tokenBId,
    poolBals: { A: p1Ato3B.tokenABalance, B: p1Ato3B.tokenBBalance },
    protoBals: { A: "0", B: "0" },
    protoInfo: { protoAddr: getProtocolAddr() },
    liquidityToken: p1Ato3B.poolTokenId,
    lptBals: { A: "0", B: "0" }
  });
});
const withdraw = jest.fn().mockImplementation(() => {
  // Mock withdrawal
  const reach = createReachAPI();
  const A = reach.bigNumberify(ReturnNum);
  const B = reach.bigNumberify(ReturnNum);
  return { A, B };
});

const MockContract = {
  apis: { Provider: { withdraw } },
  views: { Info }
};

const MockAccount: any = {
  contract: jest.fn().mockImplementation(() => MockContract),
  tokenAccept: jest.fn().mockImplementation(() => Promise.resolve(true))
};

initHumbleSDK();

describe.only("Liquidity Provider > Withdraw", () => {
  it("Requires valid options", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await withdrawLiquidity(MockAccount);
    expect(result).toBeDefined();
    expect(result.succeeded).toStrictEqual(false);
    expect(result.message).toStrictEqual("Options are required");
    expect(result.data.lpBalance).toStrictEqual(0);
  });

  it("Requires a Pool Address in options", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await withdrawLiquidity(MockAccount, {});
    expect(result).toBeDefined();
    expect(result.succeeded).toStrictEqual(false);
    expect(result.message).toStrictEqual("Pool address is required");
    expect(result.data.lpBalance).toStrictEqual(0);
  });

  it("Requires a valid withdrawal amount in options", async () => {
    expect.assertions(6);
    const missingAmtMessage = "Withdrawal % or LP token amount is required";
    const opts: Partial<WithdrawOpts> = { poolAddress: p1Ato3B.poolAddress };
    // @ts-expect-error
    let result = await withdrawLiquidity(MockAccount, opts);
    expect(result).toBeDefined();
    expect(result.succeeded).toStrictEqual(false);
    expect(result.message).toStrictEqual(missingAmtMessage);
    expect(result.data.lpBalance).toStrictEqual(0);

    const opts1 = { ...opts, percentToWithdraw: 10 };
    // @ts-expect-error
    result = await withdrawLiquidity(MockAccount, opts1);
    expect(result).toBeDefined();
    expect(result.message).not.toStrictEqual(missingAmtMessage);
  });

  it("Requires a Pool LP Token ID", async () => {
    expect.assertions(2);
    const errMessage = "Pool LP Token ID is required";
    const opts: Partial<WithdrawOpts> = {
      poolAddress: p1Ato3B.poolAddress,
      percentToWithdraw: 10
    };
    // @ts-expect-error
    let result = await withdrawLiquidity(MockAccount, opts);
    expect(result).toBeDefined();
    expect(result.message).toStrictEqual(errMessage);
  });
});
