import {
  ReachAccount,
  createReachAPI,
  parseAddress,
  formatCurrency,
  BigNumber,
  tokenBalance,
} from "../reach-helpers";
import { PoolContract } from "../build/backend";
import { parseContractError, errorResult, successResult } from "../utils";
import { TransactionResult, ReachTxnOpts, ReachTokenPair } from "../types";
import { fetchLiquidityPool } from "../participants/index";
import { fromMaybe, noOp } from "../utils/utils.reach";

/** Required options for withdrawing liquidity from a pool */
export type RequiredWithdrawOpts = ReachTxnOpts & {
  /** Pool liquidity token id */
  poolTokenId: string | number;
  /** When `true`, pool contains network token (e.g. `ALGO` or `ETH`) */
  n2nn?: boolean;
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

/** @internal Default data response */
const NODATA: WithdrawResult = {
  lpBalance: 0,
  received: { tokenA: null, tokenB: null },
  mintedLPTokens: 0,
};

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
): Promise<TransactionResult<WithdrawResult>> {
  const data = { ...NODATA, received: { ...NODATA.received } };
  const [valid, reason] = validateArgs(acc, opts);
  if (!valid) return errorResult(reason, null, data);

  const {
    poolAddress: poolId,
    exchangeLPTokens: inputAmt,
    percentToWithdraw: pct,
  } = opts;
  const poolAddress = parseAddress(poolId).toString();
  const {
    n2nn = false,
    poolTokenId,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;

  onProgress(`Fetching Pool metadata`);
  const lpopts = { poolAddress, n2nn, contract: opts.contract };
  const lpool = await fetchLiquidityPool(acc, lpopts);
  if (!lpool.succeeded || !Array.isArray(lpool.data.tokens)) {
    return errorResult("Pool not found", poolAddress, data, lpool.contract);
  }

  const { data: poolResult, contract } = lpool;
  const ctc = contract as PoolContract;
  const { setSigningMonitor, bigNumberToNumber } = createReachAPI();
  setSigningMonitor(() => onProgress("SIGNING_EVENT"));

  try {
    onProgress(`Withdrawing funds`);
    const amt = inputAmt || (await amountFromPctInput(pct, acc, poolTokenId));
    const withdrawResult = await ctc.apis.Provider.withdraw(amt);
    const tokens = poolResult.tokens as ReachTokenPair;
    data.received = {
      tokenA: formatCurrency(withdrawResult.A, tokens[0].decimals),
      tokenB: formatCurrency(withdrawResult.B, tokens[1].decimals),
    };

    onProgress("Fetching updated pool LP token balance");
    const [tokensView, lpBalance] = await Promise.all([
      fromMaybe(await ctc.views.Info()),
      tokenBalance(acc, poolTokenId, true).then(bigNumberToNumber),
    ]);

    if (lpBalance) data.lpBalance = Number(lpBalance);
    if (tokensView) {
      data.mintedLPTokens = formatCurrency(tokensView?.lptBals.B, 0);
    }

    const result = successResult("Funds withdrawn", poolAddress, ctc, data);
    onComplete(result);
    return result;
  } catch (e: any) {
    console.error("HumbleSDK withdraw error", { e });
    const msg = parseContractError("Funds were not withdrawn", e);
    return errorResult(msg, poolAddress, data, ctc);
  }
}

/**
 * @internal
 * Calculate amount of liquidity pool tokens to exchange for staked tokens.
 * Used when a user enters a percentage amount (e.g. `5` = `withdraw 5% of liquidity`)
 */
async function amountFromPctInput(
  pctInput: any,
  acc: any,
  poolTokenId: any
): Promise<BigNumber> {
  const { bigNumberify } = createReachAPI();
  const userLiquidity = await tokenBalance(acc, parseAddress(poolTokenId), true);
  const divisor = bigNumberify(100).div(bigNumberify(pctInput));
  return userLiquidity.div(divisor);
}

/** @internal Ensure correct arguments are supplied */
function validateArgs(
  acc?: ReachAccount,
  opts?: WithdrawOpts
): [boolean, string] {
  if (!acc) return [false, "Account is required"];
  if (!opts) return [false, "Options are required"];
  if (!opts.poolAddress) return [false, "Pool address is required"];
  const { exchangeLPTokens, percentToWithdraw, poolTokenId } = opts;
  if (!exchangeLPTokens && !percentToWithdraw) {
    return [false, "Withdrawal % or LP token amount is required"];
  }
  if (!poolTokenId) return [false, "Pool LP Token ID is required"];

  return [true, ""];
}
