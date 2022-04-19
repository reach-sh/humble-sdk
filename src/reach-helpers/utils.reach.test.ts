import * as H from "./utils.reach";

describe("Reach Helpers | Utils", () => {
  it("Unwraps a `Maybe` value", () => {
    const some: H.Maybe = ["Some", 1];
    const none: H.Maybe = ["None", null];
    expect(H.fromMaybe(some)).toStrictEqual(1);
    expect(H.fromMaybe(none)).toStrictEqual(null);
  });

  it("Applies conditional formatting when unwrapping a `Maybe`", () => {
    const some: H.Maybe = ["Some", 1000];
    expect(H.fromMaybe(some)).toStrictEqual(1000);
    expect(H.fromMaybe(some, H.formatNumberShort)).toStrictEqual("1K");
  });

  it("Returns a fallback when a `Maybe` value is undefined", () => {
    const some: H.Maybe = ["Some", 1000];
    const none: H.Maybe = ["None", null];
    const fmt = (v: any) => v;
    expect(H.fromMaybe(some, fmt, "apple")).toStrictEqual(1000);
    expect(H.fromMaybe(none, fmt, "apple")).toStrictEqual("apple");
  });

  it("Abbreviates numbers", () => {
    const k = 1000;
    const k1 = 1111;
    const m = k * 1000;
    const b = m * 1000;

    expect(H.formatNumberShort(1)).toStrictEqual("1");
    expect(H.formatNumberShort(1.1)).toStrictEqual("1.1");

    // Check decimals
    expect(H.formatNumberShort(k)).toStrictEqual("1K");
    expect(H.formatNumberShort(k1, 1)).toStrictEqual("1.1K");
    expect(H.formatNumberShort(k1, 2)).toStrictEqual("1.11K");
    expect(H.formatNumberShort(k1, 3)).toStrictEqual("1.111K");

    // Assert no decimals when only trailing zeros
    expect(H.formatNumberShort(m)).toStrictEqual("1M");
    expect(H.formatNumberShort(m, 2)).toStrictEqual("1M");

    expect(H.formatNumberShort(b)).toStrictEqual("1B");
    expect(H.formatNumberShort(b, 2)).toStrictEqual("1B");
  });

  it("Trims empty bytes", () => {
    const ctrl = "a";
    const byteStr = ctrl.padEnd(64, "\0"); // \0 = empty byte character

    expect(ctrl).not.toStrictEqual(byteStr);
    expect(H.trimByteString(ctrl)).toStrictEqual(ctrl);
    expect(H.trimByteString(byteStr)).toStrictEqual(ctrl);
  });
});
