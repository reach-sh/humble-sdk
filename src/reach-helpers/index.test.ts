import { loadStdlib } from "@reach-sh/stdlib";
import {
  loadReach,
  parseCurrency,
  createReachAPI,
  formatCurrency,
} from "./index";

import { getExports } from "./../build/util.default";
import { getFeeInfo } from "../constants";
import { trimByteString } from "./utils/helpers";

type PoolData = {
  tokADecimals: number | undefined;
  tokBDecimals: number | undefined;
  tokABalance: any;
  tokBBalance: any;
};

loadReach(loadStdlib);
const reach = createReachAPI();

const poolIsOverloaded = (data?: PoolData) => {
  if (!data) return true;
  const { tokADecimals, tokBDecimals, tokABalance, tokBBalance } = data;
  let aToB: number;
  let bToA: number;

  try {
    const FEE_INFO = getFeeInfo();
    const { getAmtOutView } = getExports(reach);

    const minAmt = reach.bigNumberify(1);
    const balA = parseCurrency(tokABalance, tokADecimals);
    const balB = parseCurrency(tokBBalance, tokBDecimals);
    aToB = getAmtOutView(minAmt, balA, balB, FEE_INFO);
    bToA = getAmtOutView(minAmt, balB, balA, FEE_INFO);
    return false;
  } catch (e) {
    const err = e.message;
    const msg = trimByteString(JSON.parse(err).msg);
    console.log({ aToB, bToA, msg });
    return true;
  }
};

describe("Reach Helpers", () => {
  it("Converts values into decimal-sensitive atomic units", () => {
    const dec6 = parseCurrency(100); // default 6 decs
    const dec0 = parseCurrency(100, 0);
    const dec4 = parseCurrency(100, 4);
    const sub = parseCurrency(5);
    const fmt = (val: any, d = 6) =>
      formatCurrency(reach.sub(val, sub), Math.max(d, 6));

    expect(reach.eq(dec6, 100000000)).toBe(true);
    expect(reach.eq(dec0, 100)).toBe(true);
    expect(reach.eq(dec4, 1000000)).toBe(true);
    expect(reach.gt(dec0, sub)).toBe(false);

    // Test overflow capture
    expect(() => fmt(dec4)).toThrow("bigNumberify: -4000000 out of range ");
    expect(() => fmt(dec0)).toThrow("bigNumberify: -4999900 out of range ");
  });

  it("Preserves decimals between BigNumber calculations", () => {
    const decimals = 4;
    const bigN = parseCurrency(100, decimals);
    const big2 = parseCurrency(0.05, decimals);
    expect(reach.isBigNumber(bigN)).toBe(true);
    expect(reach.isBigNumber(big2)).toBe(true);

    const diff = bigN.sub(big2);
    const out = formatCurrency(diff, decimals);
    expect(out).toBe("99.95");
  });

  const resetPool = () => ({
    tokABalance: 1_000_000,
    tokADecimals: 6,
    tokBBalance: 1000,
    tokBDecimals: 6,
  });

  let pool: PoolData = resetPool();

  afterEach(() => {
    pool = resetPool();
  });

  it("Errors when 1.845M * 1K", () => {
    expect(poolIsOverloaded(pool)).toBe(false);

    pool.tokADecimals = 9;
    pool.tokABalance = 1_845_000;
    pool.tokBBalance = 1_000;
    expect(poolIsOverloaded(pool)).toBe(true);
  });

  it("is quiet when 1.844M * 1K", () => {
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokABalance).toStrictEqual(1000000);

    pool.tokADecimals = 9;
    pool.tokABalance = 1_844_000;
    pool.tokBBalance = 1_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });

  it("is quiet when 1.844M * 1B", () => {
    expect(poolIsOverloaded(pool)).toBe(false);
    expect(pool.tokABalance).toStrictEqual(1000000);

    pool.tokADecimals = 9;
    pool.tokABalance = 1_844_000;
    pool.tokBBalance = 1_000_000_000;
    expect(poolIsOverloaded(pool)).toBe(false);
  });
});
// 1_844_000.000_000_000 * 1_000.000_000 // No error
// 1_845_000.000_000_000 * 1_000.000_000 // Error

// 1_844_000.000_000_000 * 1_000_000_000.000_000 // No error
