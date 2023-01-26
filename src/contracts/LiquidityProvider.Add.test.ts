import { createReachAPI, initHumbleSDK } from "../index";
import { DepositTxnOpts, PoolDetails } from "../types";
import { addLiquidity } from "./LiquidityProvider.Add";

const MintedLPTokens = 1200000000;
const deposit = jest
  .fn()
  .mockImplementation(() => createReachAPI().bigNumberify(MintedLPTokens));
const tokenIds = { tokenAId: "456", tokenBId: "123" };
const p1Ato3B: PoolDetails = {
  ...tokenIds,
  poolAddress: "1",
  poolTokenId: "77889910",
  tokenABalance: "1000",
  tokenADecimals: 3,
  tokenBBalance: "3000",
  tokenBDecimals: 3
};
const depositOpts: DepositTxnOpts = {
  amounts: [10, 20],
  pool: p1Ato3B,
  optInToLPToken: false
};

const MockContract = {
  apis: { Provider: { deposit } }
};

const MockAccount: any = {
  contract: jest.fn().mockImplementation(() => MockContract),
  tokenAccept: jest.fn().mockImplementation(() => Promise.resolve(true))
};

initHumbleSDK();

describe.only("Liquidity Provider > Add", () => {
  it("Requires an account", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await addLiquidity();
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("Account is required");
    expect(result.data.lpTokens).toBe(0);
  });

  it("Requires valid options", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await addLiquidity(MockAccount);
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("No options provided");
    expect(result.data.lpTokens).toBe(0);
  });

  it("Requires valid properties in options", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await addLiquidity(MockAccount, {});
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("No pool provided");
    expect(result.data.lpTokens).toBe(0);
  });

  it("Requires valid amounts in options", async () => {
    expect.assertions(4);
    // @ts-expect-error
    const result = await addLiquidity(MockAccount, { pool: p1Ato3B });
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("Invalid amounts provided");
    expect(result.data.lpTokens).toBe(0);
  });

  it("Exits if a token opt-in fails", async () => {
    expect.assertions(5);
    const opts = { ...depositOpts, optInToLPToken: true };
    const acc = { ...MockAccount, tokenAccept: jest.fn() };
    const spy = jest
      .spyOn(acc, "tokenAccept")
      .mockImplementation(() => Promise.reject("Token opt-in failed."));

    const result = await addLiquidity(acc, opts);
    expect(spy).toHaveBeenCalled();
    expect(result).toBeDefined();
    expect(result.succeeded).toBe(false);
    expect(result.message).toBe("Token opt-in failed.");
    expect(result.data.lpTokens).toBe(0);

    jest.clearAllMocks();
  });

  it("Opts-in to a token", async () => {
    expect.assertions(5);
    const opts = {
      ...depositOpts,
      pool: { ...depositOpts.pool, mintedLiquidityTokens: MintedLPTokens },
      optInToLPToken: true
    };
    const acc = { ...MockAccount, tokenAccept: jest.fn() };
    const spy = jest
      .spyOn(acc, "tokenAccept")
      .mockImplementation(() => Promise.resolve(true));

    const result = await addLiquidity(acc, opts);
    expect(spy).toHaveBeenCalled();
    expect(result).toBeDefined();
    expect(result.message).toBe("Funds deposited");
    expect(result.succeeded).toBe(true);
    expect(result.data.lpTokens).toBe(MintedLPTokens);
  });
});
