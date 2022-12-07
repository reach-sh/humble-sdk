import {
  LiquidityMigratorOpts,
  transferOldLPN2NN,
  transferOldLPNN2NN
} from "../build/backend";
import { getDefaultDecimals, TXN_SIGN } from "../constants";
import {
  BigNumber,
  createReachAPI,
  formatCurrency,
  parseAddress,
  ReachAccount
} from "../reach-helpers";
import { Balances, ReachTxnOptsCore } from "../types";
import { errorResult, isNetworkToken, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";
import { fetchToken } from "./PoolAnnouncer";

export type MigratorOpts = LiquidityMigratorOpts.Migrate & {
  n2nn: LiquidityMigratorOpts.N2NN;
} & ReachTxnOptsCore;

export default createLiquidityMigrator;

/** Migrate Liquidity from an old to a new pool */
export async function createLiquidityMigrator(
  acc: ReachAccount,
  opts: MigratorOpts
) {
  const { onProgress = noOp, onComplete = noOp } = opts;
  const { parseCurrency, setSigningMonitor } = createReachAPI();
  const backend = opts.n2nn ? transferOldLPN2NN : transferOldLPNN2NN;
  const ctc = acc.contract(backend);
  let data = { lpTokens: "0", A: "0", B: "0" };

  onProgress("Fetching pool tokens ...");
  const [tokA, tokB] = await Promise.all([
    fetchToken(acc, opts.tokA),
    fetchToken(acc, opts.tokB)
  ]);

  if (!tokA || !tokB) {
    const err = "One or more pool tokens were not found";
    return errorResult(err, opts.oldPoolId, data, null, "contractId");
  }

  try {
    setSigningMonitor(() => onProgress(TXN_SIGN));
    onProgress("Creating contract ...");
    data = await new Promise<typeof data>((resolve) =>
      ctc.participants
        .Admin({
          opts: {
            tokA: isNetworkToken(opts.tokA) ? null : parseAddress(opts.tokA),
            tokB: parseAddress(opts.tokB),
            oldLPAmt: parseCurrency(opts.oldLpAmount),
            oldlpToken: parseAddress(opts.oldLpToken),
            oldPoolId: parseAddress(opts.oldPoolId),
            newlpToken: parseAddress(opts.newLpToken),
            newPoolId: parseAddress(opts.newPoolId)
          },
          done: (lpRecv: BigNumber, AB: Balances) =>
            resolve({
              lpTokens: formatCurrency(lpRecv, getDefaultDecimals()),
              A: formatCurrency(AB.A, tokA?.decimals),
              B: formatCurrency(AB.B, tokB?.decimals)
            })
        })
        .catch((e: any) => {
          throw e;
        })
    ).catch((e: any) => {
      throw e;
    });

    let msg = `${tokA.symbol}/${tokB.symbol} Pool`;
    msg = `${msg} Liquidity was migrated`;
    const result = successResult(msg, opts.newPoolId, ctc, data, "contractId");
    onComplete(result);
    setSigningMonitor(noOp);
    return result;
  } catch (error: any) {
    const label = "LiquidityMigrate.Transfer Error";
    const err = `${label}: ${JSON.stringify(error)}`;
    console.log(`${label}:`, error);
    setSigningMonitor(noOp);
    return errorResult(err, opts.newPoolId, data, ctc, "contractId");
  }
}
