import { initHumbleSDK } from "../index";
import * as Utils from "../utils";
import {
  ASSURANCE_MSG,
  MIN_BALANCE_MSG,
  POPUP_BLOCKED_MSG,
  TRANSACTION_CANCELLED_MSG,
} from "../constants";

describe("HumbleSDK General Utils", () => {
  it("Formats a number in exponential notation", () => {
    expect(Utils.exponentialFormat("")).toBe("");
    expect(Utils.exponentialFormat("1")).toBe("1");

    const c = 0.000001;
    const u = 0.00000001;
    const f = Utils.exponentialFormat(u.toString());
    const fc = Utils.exponentialFormat(c.toString());

    expect(f).toStrictEqual("1e-8");
    expect(fc).toStrictEqual("0.000001");
  });

  it("Asserts a network token matches Reach formats", () => {
    // @ts-expect-error
    expect(Utils.isNetworkToken(undefined)).toBe(false);
    expect(Utils.isNetworkToken(null)).toBe(true);
    expect(Utils.isNetworkToken(1234)).toBe(false);
    expect(Utils.isNetworkToken("")).toBe(false);
    expect(Utils.isNetworkToken("0")).toBe(true);
    expect(Utils.isNetworkToken(0)).toBe(true);
  });

  it("Generates a network token representation", () => {
    initHumbleSDK();
    const token = Utils.makeNetworkToken();
    expect(token.id).toStrictEqual("0");
    expect(token.name).toStrictEqual(token.symbol);
    expect(token.name).toStrictEqual("ALGO");
    expect(Utils.isNetworkToken(token.id)).toStrictEqual(true);
  });

  it("Auto-resolves a long-running async request", async () => {
    expect.assertions(2);

    // Create a promise that resolves in 500ms
    const long = async () =>
      new Promise((resolve) => {
        const resolved = () => resolve(true);
        setTimeout(resolved, 500);
      });

    // Create a promise that resolves in 100ms
    const short = () => Utils.withTimeout(long, "fallback", 100);

    // Test promises
    await expect(long()).resolves.toBe(true);
    await expect(short()).resolves.toBe("fallback");
  });

  it("Generates a friendly response from blockchain data", () => {
    const data = { i: true };
    const message = "Transaction completed";
    const poolAddress = "12345";
    const ctc = null;
    const resp = Utils.successResult(message, poolAddress, ctc, data);

    expect(resp.succeeded).toStrictEqual(true);
    expect(resp.contract).toStrictEqual(ctc);
    expect(resp.data).toStrictEqual(data);
    expect(resp.message).toStrictEqual(message);
    expect(resp.poolAddress).toStrictEqual(poolAddress);
  });

  it("Generates a friendly error response when a blockchain query fails", () => {
    const data = new Error("This is a txn error message");
    const message = "Transaction failed";
    const poolAddress = "12345";
    const ctc = null;
    const resp = Utils.errorResult(message, poolAddress, data, ctc);

    expect(resp.succeeded).toStrictEqual(false);
    expect(resp.contract).toStrictEqual(ctc);
    expect(resp.data).toStrictEqual(data);
    expect(resp.message).toStrictEqual(message);
    expect(resp.poolAddress).toStrictEqual(poolAddress);
  });

  it("Generates a friendly error string based on blockchain response", () => {
    const f = "Failed: ";
    const p = (v: string) => Utils.parseContractError(f, v);

    expect(
      p("Can not open popup window").includes(POPUP_BLOCKED_MSG)
    ).toStrictEqual(true);

    [
      "Operation cancelled",
      "The User has rejected the transaction request",
    ].forEach((m) => {
      expect(p(m).includes(ASSURANCE_MSG)).toStrictEqual(false);
      expect(p(m)).toStrictEqual(TRANSACTION_CANCELLED_MSG);
    });

    ["overspend error", "account below min"].forEach((m) => {
      expect(p(m).includes(ASSURANCE_MSG)).toStrictEqual(true);
      expect(p(m).includes(MIN_BALANCE_MSG)).toStrictEqual(true);
    });
  });
});
