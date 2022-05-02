import { initHumbleSDK } from ".";
import { PoolDetails } from "./types";
import {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  poolIsOverloaded,
} from "./utils.swap";

initHumbleSDK();

const tokenIds = { tokenAId: 456, tokenBId: 123 };
const swap = { ...tokenIds, amountA: 10, amountB: 0 };
const p1Ato3B: PoolDetails = {
  ...tokenIds,
  poolAddress: 1,
  tokenABalance: 1000,
  tokenADecimals: 3,
  tokenBBalance: 3000,
  tokenBDecimals: 3,
};

describe("HumbleSDK Swap Utils", () => {
  it("Estimates token B input when user wants 1 A", () => {
    const input = calculateOtherAmount(1, p1Ato3B.tokenAId, p1Ato3B);
    expect(input).toBe("3");
  });

  it("Estimates token A input when user wants 3 B", () => {
    const input = calculateOtherAmount(3, p1Ato3B.tokenBId, p1Ato3B);
    expect(input).toBe("1");
  });

  it("Calculates the price impact of a swap", () => {
    let impact = calculatePriceImpact(0, { swap, pool: p1Ato3B });
    expect(impact).toBe("0");

    impact = calculatePriceImpact(1, { swap, pool: p1Ato3B });
    expect(impact).toBe("0.1");

    const rSwap = { ...swap, tokenAId: swap.tokenBId, tokenBId: swap.tokenAId };
    impact = calculatePriceImpact(1, { swap: rSwap, pool: p1Ato3B });
    expect(impact).toBe("0.03");

    impact = calculatePriceImpact(3, { swap: rSwap, pool: p1Ato3B });
    expect(impact).toBe("0.1");
  });

  it("Calculates the expected output for a A-to-B swap (with fees)", () => {
    const opts = { swap, pool: p1Ato3B };
    const { amountA, amountB } = calculateTokenSwap(opts);

    const [a, b] = [Number(amountA), Number(amountB)];
    expect(a).toStrictEqual(swap.amountA);
    expect(b).toBeLessThanOrEqual(30);
    expect(b).toBeGreaterThan(28);
  });

  it("Calculates the expected output for a B-to-A swap (with fees)", () => {
    const modswap = {
      tokenAId: tokenIds.tokenBId,
      tokenBId: tokenIds.tokenAId,
      amountA: 3,
      amountB: 0,
    };
    const opts = { swap: modswap, pool: p1Ato3B };
    const { amountA, amountB } = calculateTokenSwap(opts);
    const [a, b] = [Number(amountA), Number(amountB)];

    expect(a).toStrictEqual(modswap.amountA);
    expect(b).toBeGreaterThan(0.9);
    expect(b).toBeLessThanOrEqual(1);
  });

  it.skip("Calculates the expected output for a B-to-A swap (with fees)", () => {
    const pool = { ...p1Ato3B };
    pool.tokenABalance = 500;
    pool.tokenADecimals = 6;
    pool.tokenBBalance = 2000;
    pool.tokenBDecimals = 6;

    const modswap = { ...swap, amountA: 10, amountB: 0 };
    const opts = { swap: modswap, pool };
    const { amountA, amountB } = calculateTokenSwap(opts);
    const [a, b] = [Number(amountA), Number(amountB)];

    expect(a).toStrictEqual(modswap.amountA);
    expect(b).toBeGreaterThan(0.9);
    expect(b).toBeLessThanOrEqual(1);
  });
});

describe("HumbleSDK Swap Utils | Protect Pool Overflow", () => {
  // 1_844_000.000_000_000 * 1_000.000_000 // No error
  // 1_844_000.000_000_000 * 1_000_000_000.000_000 // No error
  // 1_845_000.000_000_000 * 1_000.000_000 // Error

  const M100 = 100_000_000;
  const checkInitialPool = (pool: PoolDetails) => {
    const [isOverloaded, max] = poolIsOverloaded(pool);
    expect(pool.tokenABalance).toStrictEqual(p1Ato3B.tokenABalance);
    expect(pool.tokenBBalance).toStrictEqual(p1Ato3B.tokenBBalance);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(pool.tokenABalance);
  };

  it("Can handle balances of 1.845M * 1K", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_845_000;
    pool.tokenBBalance = 1_000;
    const [isOverloaded, max] = poolIsOverloaded(pool);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(pool.tokenBBalance);
  });

  it("Can handle balances of > 1.844M * 1M", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenABalance = 1_000_000;
    expect(pool.tokenABalance).toStrictEqual(1_000_000);
    expect(pool.tokenBBalance).toStrictEqual(p1Ato3B.tokenBBalance);

    pool.tokenADecimals = 9;
    pool.tokenBBalance = 1_844_000;
    const [isOverloaded, max] = poolIsOverloaded(pool);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(pool.tokenABalance);
  });

  it("Can handle balances of 1.844M * 1B", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000_000_000;
    const [isOverloaded, max] = poolIsOverloaded(pool);

    expect(pool.tokenABalance).toBeLessThan(M100);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(pool.tokenABalance);
  });

  it("Can handle balances of 1B (10-dec) * 10B (9-dec)", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenADecimals = 10;
    pool.tokenBDecimals = 9;
    pool.tokenABalance = 1_000_000_000;
    pool.tokenBBalance = 10_000_000_000;
    const [isOverloaded, max] = poolIsOverloaded(pool);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(M100);
  });

  it("Warns of balances around 10B (10-dec) * 10B (9-dec)", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenADecimals = 10;
    pool.tokenBDecimals = 9;
    pool.tokenABalance = 10_000_000_000;
    pool.tokenBBalance = 10_000_000_000;

    const [isOverloaded, max] = poolIsOverloaded(pool);
    expect(pool.tokenABalance).toBeGreaterThan(M100);
    expect(pool.tokenBBalance).toBeGreaterThan(M100);
    expect(isOverloaded).toBe(true);
    expect(max).toBe(1);
  });
});
