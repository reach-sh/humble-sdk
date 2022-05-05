import * as H from "./utils.reach";

describe("Reach Helpers | Utils", () => {
  const v1 = 1;
  const v2 = null;

  it("Wraps a `Maybe` value", () => {
    const some = H.asMaybe(v1);
    const none = H.asMaybe(v2);
    const nonedefined = H.asMaybe(undefined);

    expect(some[0]).toStrictEqual("Some");
    expect(some[1]).toStrictEqual(v1);

    expect(none[0]).toStrictEqual("None");
    expect(none[1]).toStrictEqual(v2);

    expect(nonedefined[0]).toStrictEqual("None");
    expect(nonedefined[1]).toStrictEqual(null);
  });

  it("Unwraps a `Maybe` value", () => {
    const some = H.asMaybe(v1);
    const none = H.asMaybe(v2);
    expect(H.fromMaybe(some)).toStrictEqual(v1);
    expect(H.fromMaybe(none)).toStrictEqual(v2);
  });

  it("Applies conditional formatting when unwrapping a `Maybe`", () => {
    const some = H.asMaybe(1000);
    expect(H.fromMaybe(some)).toStrictEqual(1000);
    expect(H.fromMaybe(some, H.formatNumberShort)).toStrictEqual("1K");
  });

  it("Returns a fallback when a `Maybe` value is undefined", () => {
    const some = H.asMaybe(1000);
    const none = H.asMaybe(null);
    const fmt = (v: any) => v;
    expect(H.fromMaybe(some, fmt, "apple")).toStrictEqual(1000);
    expect(H.fromMaybe(none, fmt, "apple")).toStrictEqual("apple");
  });

  it("Trims trailing zeros", () => {
    expect(H.trailing0s("1000")).toStrictEqual("1");
    expect(H.trailing0s("1000.0000")).toStrictEqual("1000");
    expect(H.trailing0s("1000.100")).toStrictEqual("1000.1");
    expect(H.trailing0s("1000.1001")).toStrictEqual("1000.1001");
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
    const control = "a";
    // \0 = empty byte character
    const byteStr = control.padEnd(64, "\0");

    expect(control).not.toStrictEqual(byteStr);
    expect(H.trimByteString(control)).toStrictEqual(control);
    expect(H.trimByteString(byteStr)).toStrictEqual(control);
  });
});
