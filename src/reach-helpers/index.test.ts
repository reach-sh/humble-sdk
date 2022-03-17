import { loadStdlib } from "@reach-sh/stdlib";
import {
  loadReach,
  parseCurrency,
  createReachAPI,
  formatCurrency,
} from "./index";

loadReach(loadStdlib);
const reach = createReachAPI();

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
});
