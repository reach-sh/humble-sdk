import {
  ReachAccount,
  fromMaybe,
  createReachAPI,
  parseAddress,
  noOp,
  formatCurrency,
  ReachContract,
} from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { parseContractError, errorResult, successResult } from "../utils";
import { TransactionResult, BigNumber, ReachTxnOpts } from "../types";
import { fetchPool } from "../participants/index";

/** Required options for withdrawing liquidity from a pool */
export type RequiredWithdrawOpts = ReachTxnOpts & {
  /** Pool liquidity token id */
  poolTokenId: string | number;
  /** When `true`, pool contains network token (e.g. `ALGO` or `ETH`) */
  n2nn: boolean;
};

/** All options for withdrawing liquidity from a pool */
export type WithdrawOpts = RequiredWithdrawOpts & {
  /** Amount of LP tokens to exchange for original stake (use this OR `percentToWithdraw`) */
  exchangeLPTokens?: number | BigNumber;
  /** Percentage of liquidity to withdraw (e.g. 5 = `5%`). Use this OR `lpTokensToWithdraw` */
  percentToWithdraw?: number;
};

/** Result of withdrawal transaction */
export type WithdrawResult = {
  lpBalance: number;
  received: { tokenA: any; tokenB: any };
  mintedLPTokens: string | number;
};

type PoolCtc = ReachContract<typeof poolBackendN2NN | typeof poolBackend>;

/**
 * Withdraw liquidity from a pool. Requires a reach `networkAccount` instance.
 * Takes optional `onProgress` and `onComplete` callbacks for handling UI notifications
 * DEV NOTE: Ensure your user has accepted both tokens before calling this function.
 * If it fails to execute, the error details will be in the result's `data` property.
 * @param acc Reach account instance
 * @param opts Withdrawal options
 * @param opts.percentToWithdraw liquidity percentage to withdraw. (e.g. 5 = `5%`)
 */

export async function withdrawLiquidity(
  acc: ReachAccount,
  opts: WithdrawOpts
): Promise<TransactionResult<Error | WithdrawResult>> {
  const {
    exchangeLPTokens: inputAmt,
    percentToWithdraw: pct,
    n2nn,
    poolTokenId,
    poolAddress: poolId,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const poolAddress = poolId?.toString();
  if ((!inputAmt && !pct) || !poolAddress) {
    const msg = "Invalid options supplied";
    return errorResult(msg, poolAddress, new Error(msg));
  }

  const { setSigningMonitor, balanceOf, bigNumberToNumber } = createReachAPI();
  onProgress(`Checking user balance of LP Token "${poolAddress}"`);
  const amount = inputAmt || (await amountFromPctInput(pct, acc, poolTokenId));
  const backend = n2nn ? poolBackendN2NN : poolBackend;
  const ctc = (opts.contract ||
    acc.contract(backend, parseAddress(poolAddress))) as PoolCtc;

  setSigningMonitor(() => onProgress("SIGNING_EVENT"));

  try {
    onProgress(`Withdrawing funds`);
    const poolNotFound = () => {
      const msg = "Pool not found";
      const err = new Error(msg);
      return errorResult(msg, poolAddress, err, ctc);
    };
    const [withdrawResult, { succeeded, data: poolResult }] = await Promise.all(
      [ctc.a.Provider.withdraw(amount), fetchPool(acc, poolAddress)]
    );
    if (!succeeded || !poolResult) return poolNotFound();

    onProgress("Fetching updated pool LP token balance");
    const [tokensView, lpBalance] = await Promise.all([
      fromMaybe(await ctc.views.Info()),
      balanceOf(acc, poolTokenId).then(bigNumberToNumber),
    ]);
    const { tokens } = poolResult;
    if (!tokensView) return poolNotFound();

    const data: WithdrawResult = {
      lpBalance,
      received: {
        tokenA: formatCurrency(withdrawResult.A, tokens[0].decimals),
        tokenB: formatCurrency(withdrawResult.B, tokens[1].decimals),
      },
      mintedLPTokens: formatCurrency(tokensView.lptBals.B, 0),
    };

    const result = successResult("Funds withdrawn", poolAddress, ctc, data);
    onComplete(result);
    return result;
  } catch (e: any) {
    console.error("HumbleSDK withdraw error", { e });
    const msg = parseContractError("Funds were not withdrawn", e);
    const err = new Error(`${msg} ${e?.toString()}`);
    return errorResult(msg, poolAddress, err, ctc);
  }
}

/** @internal Calculate amount of liquidity pool tokens to exchange for staked tokens */
async function amountFromPctInput(
  pctInput: any,
  acc: any,
  poolTokenId: any
): Promise<BigNumber> {
  const { bigNumberify, balanceOf } = createReachAPI();
  const userLiquidity = await balanceOf(acc, parseAddress(poolTokenId));
  const divisor = bigNumberify(100).div(bigNumberify(pctInput));
  return userLiquidity.div(divisor);
}
