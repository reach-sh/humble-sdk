import { createReachAPI, initHumbleSDK } from "../index";
import {
  safeMintedLiquidityTokens,
  unsafeMintedLiquidityTokens,
} from "./PoolAnnouncer";

initHumbleSDK();

const mintedLiquidityTokens = "100000000000000000000000000000";

const Info = jest.fn().mockImplementation(() => {
  const bn = createReachAPI().bigNumberify;
  return {
    liquidityToken: bn(1),
    lptBals: {
      A: bn(0),
      B: bn(mintedLiquidityTokens),
    },
    poolBals: {
      A: bn(0),
      B: bn(0),
    },
    protoBals: {
      A: bn(0),
      B: bn(0),
    },
    protoInfo: {
      locked: false,
      lpFee: 2,
      protoAddr: "",
      protoFee: 3,
      totFee: 5,
    },
    tokA: bn(1),
    tokB: bn(2),
  };
});

describe.only("Fetch Liquidity Pool", () => {
  it("Converts minted liquidity to big int as string", async () => {
    expect(safeMintedLiquidityTokens(createReachAPI())(Info().lptBals)).toBe(
      mintedLiquidityTokens
    );
  });
});

describe.only("Fetch Liquidity Pool", () => {
  it("Unable to convert minted liquidity tokens to number", async () => {
    expect(() => {
      try {
        unsafeMintedLiquidityTokens(createReachAPI())(Info().lptBals);
      } catch (e) {
        throw new Error(e);
      }
    }).toThrow("NUMERIC_FAULT")
  });
});
