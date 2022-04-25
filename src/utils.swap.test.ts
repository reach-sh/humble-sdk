import { initHumbleSDK } from ".";
import { PoolDetails } from "./types";
import {
  calculateOtherAmount,
  calculatePriceImpact,
  calculateTokenSwap,
  poolIsOverloaded,
} from "./utils.swap";

initHumbleSDK();

const poolIds = { tokenAId: 456, tokenBId: 123 };
const p1Ato3B: PoolDetails = {
  ...poolIds,
  poolAddress: 1,
  tokenABalance: 100,
  tokenADecimals: 3,
  tokenBBalance: 300,
  tokenBDecimals: 3,
};
const swap = { ...poolIds, amountA: 1, amountB: 0 };

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
    expect(impact).toBe("1");

    const rSwap = { ...swap, tokenAId: swap.tokenBId, tokenBId: swap.tokenAId };
    impact = calculatePriceImpact(1, { swap: rSwap, pool: p1Ato3B });
    expect(impact).toBe("0.33");

    impact = calculatePriceImpact(3, { swap: rSwap, pool: p1Ato3B });
    expect(impact).toBe("1");
  });

  it.skip("Calculates the expected output for a swap", () => {
    const s = { ...swap };
    s.amountA = 0;
    s.amountB = 1;
    const opts = { swap, pool: p1Ato3B };
    const { amountA, amountB } = calculateTokenSwap(opts);

    console.log({ amountA, amountB });
    expect(Number(amountB)).toBeGreaterThan(0);
  });
});

describe.skip("HumbleSDK Swap Utils | Protect Pool Overflow", () => {
  // 1_844_000.000_000_000 * 1_000.000_000 // No error
  // 1_844_000.000_000_000 * 1_000_000_000.000_000 // No error
  // 1_845_000.000_000_000 * 1_000.000_000 // Error

  it("Warns of overload at 1.845M * 1K", () => {
    const pool = { ...p1Ato3B };
    expect(poolIsOverloaded(pool)).toBe(false);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_845_000;
    pool.tokenBBalance = 1_000;
    expect(poolIsOverloaded(pool)).toBe(true);
  });

  it("Warns of overload at 1.844M * 1K", () => {
    const pool = { ...p1Ato3B };
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokenABalance).toStrictEqual(1000000);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });

  it("Warns of overload at 1.844M * 1B", () => {
    const pool = { ...p1Ato3B };
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokenABalance).toStrictEqual(1000000);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000_000_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });
});
