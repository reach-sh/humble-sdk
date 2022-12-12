import {
  LiquidityMigratorOpts,
  withdrawOldLPN2NN,
  withdrawOldLPNN2NN
} from "../build/backend";
import { getDefaultDecimals, TXN_SIGN } from "../constants";
import {
  createReachAPI,
  formatCurrency,
  parseAddress,
  ReachAccount
} from "../reach-helpers";
import { Balances, ReachTxnOptsCore } from "../types";
import { errorResult, isNetworkToken, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";
import { fetchToken } from "./PoolAnnouncer";

export type ExtractorOpts = LiquidityMigratorOpts.Withdraw & {
  n2nn: LiquidityMigratorOpts.N2NN;
} & ReachTxnOptsCore;

export default createLiquidityExtractor;

/** @internal Helper */
const hardExit = (e: any) => {
  throw e;
};

/** Withdraw Liquidity from an old pool */
export async function createLiquidityExtractor(
  acc: ReachAccount,
  opts: ExtractorOpts
) {
  const { onProgress = noOp, onComplete = noOp, tokens } = opts;
  const { parseCurrency, setSigningMonitor } = createReachAPI();
  const backend = opts.n2nn ? withdrawOldLPN2NN : withdrawOldLPNN2NN;
  const ctc = acc.contract(backend);
  let data = { A: "0", B: "0" };

  onProgress("Fetching pool tokens ...");
  const [tokA, tokB] =
    tokens ||
    (await Promise.all([
      fetchToken(acc, opts.tokA),
      fetchToken(acc, opts.tokB)
    ]));

  if (!tokA || !tokB) {
    const err = "One or more pool tokens were not found";
    return errorResult(err, opts.oldPoolId, data, null);
  }

  try {
    const poolName = `${tokA.symbol}/${tokB.symbol}`;
    setSigningMonitor(() => onProgress(TXN_SIGN));
    onProgress(`Withdrawing old ${poolName} liquidity ...`);
    data = await new Promise<typeof data>((resolve) =>
      ctc.participants
        .Admin({
          opts: {
            tokA: isNetworkToken(opts.tokA) ? null : parseAddress(opts.tokA),
            tokB: parseAddress(opts.tokB),
            oldLPAmt: parseCurrency(opts.oldLpAmount, getDefaultDecimals()),
            oldlpToken: parseAddress(opts.oldLpToken),
            oldPoolId: parseAddress(opts.oldPoolId)
          },
          done: (AB: Balances) =>
            resolve({
              A: formatCurrency(AB.A, tokA?.decimals),
              B: formatCurrency(AB.B, tokB?.decimals)
            })
        })
        .catch(hardExit)
    ).catch(hardExit);

    let msg = `${tokA.symbol}/${tokB.symbol} Pool`;
    msg = `${msg} Liquidity was withdrawn`;
    const result = successResult(msg, opts.oldPoolId, ctc, data);
    onComplete(result);
    setSigningMonitor(noOp);
    return result;
  } catch (error: any) {
    const label = "LiquidityMigrate.Withdraw Error";
    const err = `${label}: ${JSON.stringify(error)}`;

    const result = errorResult(err, opts.oldPoolId, data, ctc);
    onComplete(result);
    setSigningMonitor(noOp);
    console.log(`${label}:`, error);
    return result;
  }
}
