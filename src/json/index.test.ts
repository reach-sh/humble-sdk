import Constants, { blockConstants, convertToBlocks } from "./index";

describe("Chain Constants", () => {
  it("Supports ETH and ALGO", () => {
    const { ALGO, ETH } = Constants;
    expect(ALGO).toBeDefined();
    expect(ALGO.abbr).toStrictEqual("ALGO");
    expect(ALGO.avgBlockDuration).toStrictEqual(3700);
    expect(ALGO.decimals).toStrictEqual(6);
    expect(ALGO.name).toStrictEqual("Algorand");

    expect(ETH).toBeDefined();
    expect(ETH.abbr).toStrictEqual("ETH");
    expect(ETH.decimals).toStrictEqual(18);
    expect(ETH.name).toStrictEqual("Ethereum");
  });

  it("Converts an interval to a blocklength", () => {
    const blockLengthSecs = Constants.ALGO.avgBlockDuration / 1000;
    const bloxPerHr = (60 * 60) / blockLengthSecs;
    const bloxPerDay = bloxPerHr * 24;
    let days = 0;
    let hours = 0;
    expect(convertToBlocks(days * 24)).toStrictEqual(0);
    expect(convertToBlocks(hours)).toStrictEqual(0);

    hours = 1;
    days = 1;
    const sum = bloxPerHr * hours + bloxPerDay * days;
    const c = Math.ceil;
    expect(convertToBlocks(hours)).toStrictEqual(c(bloxPerHr * hours));
    expect(convertToBlocks(days * 24)).toStrictEqual(c(bloxPerDay * days));
    expect(convertToBlocks(hours + days * 24)).toStrictEqual(c(sum));
  });
});

describe("Chain block-length constants", () => {
  it("Defaults to ALGO", () => {
    const ALGO = JSON.stringify(blockConstants("ALGO"));
    const defaultConsts = JSON.stringify(blockConstants());
    expect(ALGO).toStrictEqual(defaultConsts);
  });

  it("Has unique values for each chain constants", () => {
    const ALGO = blockConstants("ALGO");
    const ETH = blockConstants("ETH");
    const AlgoBlockLengthSecs = Constants.ALGO.avgBlockDuration / 1000;
    const EthBlockLengthSecs = Constants.ETH.avgBlockDuration / 1000;

    expect(ALGO.BLOCKS_PER_DAY).not.toEqual(ETH.BLOCKS_PER_DAY);
    expect(ALGO.BLOCKS_PER_HR).not.toEqual(ETH.BLOCKS_PER_HR);
    expect(ALGO.BLOCK_LENGTH).not.toEqual(ETH.BLOCK_LENGTH);

    expect(AlgoBlockLengthSecs).toStrictEqual(ALGO.BLOCK_LENGTH);
    expect(EthBlockLengthSecs).toStrictEqual(ETH.BLOCK_LENGTH);
  });
});
