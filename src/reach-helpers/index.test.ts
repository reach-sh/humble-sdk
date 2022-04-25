import { parseCurrency, formatCurrency } from "./index";
import { initHumbleSDK, createReachAPI } from "../index";

initHumbleSDK();

/* loadReach(loadStdlib); */
const reach = createReachAPI();

describe("Reach Helpers", () => {
  it("Converts values into atomic units", () => {
    const dec6 = parseCurrency(100); // default 6 decs
    const dec4 = parseCurrency(100, 4);

    expect(reach.eq(dec6, 100000000)).toBe(true);
    expect(reach.eq(dec4, 1000000)).toBe(true);
  });

  it("Overflows when operating on converted units", () => {
    const sub = (v: any, d = 6) => formatCurrency(reach.sub(v, x), d);
    const zeroDec = parseCurrency(100, 0);
    const x = parseCurrency(5); // defaults to 6 decimals

    expect(reach.eq(zeroDec, 100)).toBe(true);
    // check atomic 100 < 5000000
    expect(reach.gt(zeroDec, x)).toBe(false);
    // check that 100 - 5000000 triggers overflow error
    expect(() => sub(zeroDec)).toThrow("bigNumberify: -4999900 out of range ");
  });

  it("Preserves decimals between BigNumber calculations", () => {
    const decimals = 4;
    const bigN = parseCurrency(100, decimals);
    const big2 = parseCurrency(0.05, decimals);
    expect(reach.isBigNumber(bigN)).toBe(true);
    expect(reach.isBigNumber(big2)).toBe(true);

    const diff = bigN.sub(big2);
    const diff2 = reach.sub(bigN, big2);
    const f = (d: any) => formatCurrency(d, decimals);
    expect(f(diff2)).toStrictEqual(f(diff));
    expect(f(diff)).toBe("99.95");
  });
});
