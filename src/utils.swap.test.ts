import { initHumbleSDK } from ".";
import { getSlippage, setSlippage } from "./constants";
import { PoolDetails } from "./types";
import {
  calculateAmountIn,
  calculatePriceImpact,
  calculateTokenSwap,
  poolIsOverloaded,
} from "./utils.swap";

initHumbleSDK();

const swap = { tokenAId: 123, tokenBId: 456, amountA: 1 };
const pool1A3B: PoolDetails = {
  poolAddress: 1,
  tokenAId: 456,
  tokenBId: 123,
  tokenABalance: 100,
  tokenADecimals: 6,
  tokenBBalance: 300,
  tokenBDecimals: 6,
};

describe("HumbleSDK Swap Utils", () => {
  it("Calculates the expected input for a swap", () => {
    let input = calculateAmountIn(1, pool1A3B.tokenAId, pool1A3B);
    expect(input).toBe("3");
    input = calculateAmountIn(3, pool1A3B.tokenBId, pool1A3B);
    expect(input).toBe("1");
  });

  it("Calculates the expected output from a swap", () => {
    const impact = calculatePriceImpact(1, { swap, pool: pool1A3B });
    expect(impact).toBe("0.33");
  });
});

describe.skip("HumbleSDK Swap Utils | Protect Pool Overflow", () => {

    // 1_844_000.000_000_000 * 1_000.000_000 // No error
    // 1_844_000.000_000_000 * 1_000_000_000.000_000 // No error
    // 1_845_000.000_000_000 * 1_000.000_000 // Error
  
    it("Warns of overload at 1.845M * 1K", () => {
      const pool = { ...pool1A3B };
      expect(poolIsOverloaded(pool)).toBe(false);
  
      pool.tokenADecimals = 9;
      pool.tokenABalance = 1_845_000;
      pool.tokenBBalance = 1_000;
      expect(poolIsOverloaded(pool)).toBe(true);
    });

  it("Warns of overload at 1.844M * 1K", () => {
    const pool = { ...pool1A3B };
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokenABalance).toStrictEqual(1000000);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });

  it("Warns of overload at 1.844M * 1B", () => {
    const pool = { ...pool1A3B };
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokenABalance).toStrictEqual(1000000);

    pool.tokenADecimals = 9;
    pool.tokenABalance = 1_844_000;
    pool.tokenBBalance = 1_000_000_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });
});
