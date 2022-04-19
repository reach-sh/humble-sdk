import { createReachAPI, initHumbleSDK } from "./src";
import { poolBackend } from "./src/build/backend";
import { getHumbleAddr } from "./src/constants";
import { parseCurrency, /* trimByteString */ } from "./src/reach-helpers";
import { Balances, PoolProtocolInfo } from "./src/types";

type PoolData = {
  tokADecimals: number | undefined;
  tokBDecimals: number | undefined;
  tokABalance: any;
  tokBBalance: any;
};

initHumbleSDK();

/* loadReach(loadStdlib); */
const reach = createReachAPI();

/**
 * Compute expected Swap output
 * @returns Tuple, first object is `swap result`, and second object is
 * `protocol fees` from swap
 */
type ComputeSwapFn = {
  (
    aForB: boolean,
    normalIn: Balances,
    poolBalances: Balances,
    protocolInfo: PoolProtocolInfo
  ): Balances[];
};
const poolIsOverloaded = (data?: PoolData) => {
  if (!data) return true;
  const { tokADecimals, tokBDecimals, tokABalance, tokBBalance } = data;
  let aToB: any;
  let bToA: any;

  try {
    const computeSwap: ComputeSwapFn =
      poolBackend.getExports(reach).computeSwap_;

    const minAmt = reach.bigNumberify(1);
    const poolBals = {
      A: parseCurrency(tokABalance, tokADecimals),
      B: parseCurrency(tokBBalance, tokBDecimals),
    };
    // const FEE_INFO = getFeeInfo();
    // aToB = getAmtOutView(minAmt, balA, balB, FEE_INFO);
    // bToA = getAmtOutView(minAmt, balB, balA, FEE_INFO);
    const pi: PoolProtocolInfo = {
      lpFee: 25,
      protoAddr: getHumbleAddr(),
      protoFee: 5,
      totFee: 30,
    };
    aToB = computeSwap(true, { A: minAmt, B: 0 }, poolBals, pi);
    console.log({ aToB });
    bToA = computeSwap(false, { B: minAmt, A: 0 }, poolBals, pi);
    console.log({ bToA });
    return false;
  } catch (e: any) {
    console.log({ e });
    return true;
  }
};

poolIsOverloaded({
  tokABalance: 1_000_000,
  tokADecimals: 6,
  tokBBalance: 1000,
  tokBDecimals: 6,
});
