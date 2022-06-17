import { initHumbleSDK } from "../index";
import { PoolDetails } from "../types";
import {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  checkPoolWillOverflow,
} from "./utils.swap";

initHumbleSDK();

const tokenIds = { tokenAId: 456, tokenBId: 123 };
const tokenIdsB = { tokenAId: 222, tokenBId: 111 }
const swap = { ...tokenIds, amountA: 10, amountB: 0 };
const p1Ato3B: PoolDetails = {
  ...tokenIds,
  poolAddress: 1,
  tokenABalance: 1000,
  tokenADecimals: 3,
  tokenBBalance: 3000,
  tokenBDecimals: 3,
};

const p2A6toB1: PoolDetails = {
  ...tokenIdsB,
  poolAddress: 1,
  tokenABalance: 5051.454374,
  tokenADecimals: 6,
  tokenBBalance: 631556.4,
  tokenBDecimals: 1,
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
    expect(b).toBeGreaterThan(29);
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
    expect(b).toStrictEqual(0.996);
    expect(b).toBeLessThan(1);
  });

  it("Calculates the expected output for a A-to-B swap (with fees) between a 6 and 1 decimal token", () => {
    const modswap = {
      tokenAId: tokenIdsB.tokenBId,
      tokenBId: tokenIdsB.tokenAId,
      amountA: 3,
      amountB: 0,
    };
    const opts = { swap: modswap, pool: p2A6toB1 };
    const { amountA, amountB } = calculateTokenSwap(opts);
    const [a, b] = [Number(amountA), Number(amountB)];

    expect(a).toStrictEqual(modswap.amountA);
    expect(b).toStrictEqual(0.023923);
    expect(b).toBeLessThan(1);
  });
});

describe("HumbleSDK Swap Utils | Protect Pool Overflow", () => {
  // 1_844_000.000_000_000 * 1_000.000_000 // No error
  // 1_844_000.000_000_000 * 1_000_000_000.000_000 // No error
  // 1_845_000.000_000_000 * 1_000.000_000 // Error

  const M100 = 100_000_000;
  const checkInitialPool = (pool: PoolDetails) => {
    const [isOverloaded, max] = checkPoolWillOverflow(pool);
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
    const [isOverloaded, max] = checkPoolWillOverflow(pool);
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
    const [isOverloaded, max] = checkPoolWillOverflow(pool);
    expect(isOverloaded).toBe(false);
    expect(max).toBe(pool.tokenABalance);
  });

  it("Can handle balances of 1.844M * 1B", () => {
    const pool = { ...p1Ato3B };
    checkInitialPool(pool);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000_000_000;
    const [isOverloaded, max] = checkPoolWillOverflow(pool);

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
    const [isOverloaded, max] = checkPoolWillOverflow(pool);
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

    const [isOverloaded, max] = checkPoolWillOverflow(pool);
    expect(pool.tokenABalance).toBeGreaterThan(M100);
    expect(pool.tokenBBalance).toBeGreaterThan(M100);
    expect(isOverloaded).toBe(true);
    expect(max).toBe(1);
  });
});

describe("HumbleSDK Swap Utils | Spot swap test", () => {
  // Use this to spot-test a pool's conversion maths
  it("SWAP-ON-DEMAND", () => {
    const modPool = { ...p1Ato3B };
    modPool.tokenABalance = 200;
    modPool.tokenADecimals = 6;
    modPool.tokenBBalance = 1000;
    modPool.tokenBDecimals = 6;

    const modswap = { ...swap, amountA: 1, amountB: 0 };
    const opts = { swap: modswap, pool: modPool };
    const { amountA, amountB } = calculateTokenSwap(opts);
    const [a, b] = [Number(amountA), Number(amountB)];

    expect(a).toStrictEqual(modswap.amountA);
    expect(b).toBeGreaterThan(4.9);
    // Check difference between result and 4.9 is no greater than 0.05
    expect(b).toBeCloseTo(4.960273, 0.06027299999999958);
    expect(b).toBeLessThan(5);
  });
});
