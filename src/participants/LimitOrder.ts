import {
  getLimitOrderBackend,
  getLimitOrderVariant,
  LimitOrderView
} from "../build/backend";
import { getAnnouncers } from "../constants";
import { parseAddress, parseCurrency, ReachAccount } from "../reach-helpers";
import { ReachTxnOpts } from "../types";
import { noOp } from "../utils/utils.reach";
import { errorResult, successResult } from "../utils";

export type CreateLimitOrderOpts = ReachTxnOpts &
  LimitOrderView & {
    tokenA: string;
    tokenADecimals: number;
    tokenB: string;
    tokenBDecimals: number;
  };

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
  const appId: string | null = await new Promise((resolve) =>
    ctc.participants
      .D({
        opts: {
          ctcAnnouncer: getAnnouncers().limitOrderAnnouncer,
          tokA: tokenA,
          tokB: tokenB,
          amtA: parseCurrency(opts.amtA, tokenADecimals),
          amtB: parseCurrency(opts.amtB, tokenBDecimals)
        },
        ready: async () => {
          const ctcInfo = parseAddress(await ctc.getInfo());
          resolve(ctcInfo.toString());
        }
      })
      .catch((e: any) => {
        console.log("LimitOrder.Create error", JSON.stringify(e));
        return null;
      })
  );
  const result =
    appId === null
      ? errorResult("Limit Order was not created", null, ctc)
      : successResult("OK", appId, ctc, { contractId: appId }, "contractId");

  onComplete(result);
  return result;
}
