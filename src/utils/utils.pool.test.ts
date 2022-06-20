import { POOL_CREATION_ERR, TRANSACTION_CANCELLED_MSG } from "../constants";
import { createPoolFailed } from "./utils.pool";

describe("HumbleSDK | Pool Utils", () => {
  it("Returns an error `TransactionResult` message when given one", () => {
    const m = "Pool failure reason";
    const res = createPoolFailed({}, m);
    expect(res.message).toStrictEqual(m);
    expect(res.data).toStrictEqual({});
    expect(res.contract).not.toBeDefined();
    expect(res.poolAddress).toBe("");
    expect(res.succeeded).toStrictEqual(false);
  });

  it("Returns a default error `TransactionResult` message", () => {
    const data = {};
    const res = createPoolFailed(data);
    expect(res.message).toBe(data.toString());
    expect(res.data).toStrictEqual(data);
    expect(res.contract).not.toBeDefined();
    expect(res.poolAddress).toBe("");
    expect(res.succeeded).toStrictEqual(false);
  });

  it("Returns a modified error `TransactionResult` message", () => {
    const data = new Error("Operation cancelled");
    const res = createPoolFailed(data);
    expect(res.message).toStrictEqual(TRANSACTION_CANCELLED_MSG);
    expect(res.data).toStrictEqual(data);
    expect(res.contract).not.toBeDefined();
    expect(res.poolAddress).toBe("");
    expect(res.succeeded).toStrictEqual(false);
  });
});
