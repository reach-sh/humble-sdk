import {
  getLimitOrderBackend,
  getLimitOrderVariant,
  LimitOrderView
} from "../build/backend";
import { getAnnouncers, TXN_SIGN } from "../constants";
import {
  createReachAPI,
  formatAddress,
  parseAddress,
  parseCurrency,
  ReachAccount
} from "../reach-helpers";
import { ReachTxnOptsCore } from "../types";
import { noOp } from "../utils/utils.reach";
import { errorResult, isNetworkToken, successResult } from "../utils";

export type CreateLimitOrderOpts = {
  tokenA: string;
  tokenADecimals: number;
  tokenB: string;
  tokenBDecimals: number;
} & Pick<LimitOrderView, "amtA" | "amtB"> &
  Pick<ReachTxnOptsCore, "onComplete" | "onProgress">;

export async function createLimitOrder(
  acc: ReachAccount,
  opts: CreateLimitOrderOpts
) {
  const {
    onComplete = noOp,
    onProgress = noOp,
    tokenA,
    tokenB,
    tokenADecimals,
    tokenBDecimals
  } = opts;
  if ((!tokenA && !tokenB) || tokenA === tokenB) {
    return errorResult("Invalid token selection", null, null);
  }

  onProgress("Creating limit order ...");
  const variant = getLimitOrderVariant({ tokenA, tokenB });
  const ctc = acc.contract(getLimitOrderBackend(variant));
  const { setSigningMonitor } = createReachAPI();
  setSigningMonitor(() => onProgress(TXN_SIGN));

  const appId: string | null = await new Promise((resolve) =>
    ctc.participants
      .D({
        opts: {
          creator: formatAddress(acc),
          ctcAnnouncer: getAnnouncers().limitOrderAnnouncer,
          tokA: isNetworkToken(tokenA) ? null : tokenA,
          tokB: isNetworkToken(tokenB) ? null : tokenB,
          amtA: parseCurrency(opts.amtA, tokenADecimals),
          amtB: parseCurrency(opts.amtB, tokenBDecimals)
        },
        ready: async () => {
          const ctcInfoBig = await ctc.getInfo();
          onProgress("Got contract address");
          console.log("LO contract", ctcInfoBig);
          const ctcInfo = parseAddress(ctcInfoBig);
          resolve(ctcInfo?.toString());
        }
      })
      .catch((e: any) => {
        const err = `LimitOrder.Create error: ${JSON.stringify(e)}`;
        console.log(err, e);
        onProgress(err);
        resolve(null);
      })
  );
  const result =
    appId === null
      ? errorResult("Limit Order was not created", null, null, ctc)
      : successResult("OK", appId, ctc, { contractId: appId }, "contractId");

  setSigningMonitor(noOp);
  onComplete(result);
  return result;
}
