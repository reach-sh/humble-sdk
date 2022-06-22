import { getSlippage, setSlippage } from "./constants";
import { createReachAPI, getPoolAnnouncer, initHumbleSDK } from "./index";

describe("HumbleSDK Default Export tests", () => {
  it("Throws an error if the SDK is not initialized", () => {
    expect(getPoolAnnouncer()).toBeUndefined();
    expect(() => createReachAPI()).toThrow("HumbleSDK is not instantiated!");
  });

  it("Stores slippage tolerance on initialization", () => {
    expect(getSlippage()).not.toBe(5);
    initHumbleSDK({ slippageTolerance: 5 });
    expect(getSlippage()).toStrictEqual(5);
  });

  it("Can change slippage tolerance after initialization", () => {
    expect(getSlippage()).toStrictEqual(5);

    setSlippage(10);
    expect(getSlippage()).toStrictEqual(10);

    setSlippage(0.5);
    expect(getSlippage()).toStrictEqual(0.5);
  });
});
