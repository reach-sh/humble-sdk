import {
  ReachAccount,
  createReachAPI,
  parseAddress,
  formatCurrency,
  tokenBalance,
  TokenBalanceOpts,
  parseCurrency
} from "../reach-helpers";
import { PoolContract } from "../build/backend";
import { parseContractError, errorResult, successResult } from "../utils";
import { TransactionResult, ReachTxnOpts, ReachTokenPair } from "../types";
import { convertLPToTokenValue, fetchLiquidityPool } from "../contracts/index";
import { fromMaybe, noOp } from "../utils/utils.reach";
import { getDefaultDecimals, TXN_SIGN } from "../constants";
import { formatAmountPair } from "../utils/utils.pool";

/** Required options for withdrawing liquidity from a pool */
export type RequiredWithdrawOpts = ReachTxnOpts & {
  /** Pool liquidity token id */
  poolTokenId: string | number;
  /** When `true`, pool contains network token (e.g. `ALGO` or `ETH`) */
  n2nn?: boolean;
};

/** All options for withdrawing liquidity from a pool */
export type WithdrawOpts = RequiredWithdrawOpts & {
  /** Atomic amount of LP tokens to exchange for original stake (use this OR `percentToWithdraw`) */
  exchangeLPTokens?: number;
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
  mintedLPTokens: 0
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
  let ctc = opts?.contract as PoolContract;
  const data = { ...NODATA, received: { ...NODATA.received } };
  const [valid, reason] = validateArgs(acc, opts);
  if (!valid) return errorResult(reason, null, data);

  const {
    poolAddress: poolId,
    exchangeLPTokens: lpAmt, // MUST BE atomic
    percentToWithdraw: lpPct
  } = opts;
  const poolAddress = parseAddress(poolId).toString();
  const {
    n2nn = false,
    poolTokenId,
    onComplete = noOp,
    onProgress = noOp
  } = opts;

  onProgress(`Fetching Pool metadata`);
  const fpOpts = {
    poolAddress,
    n2nn,
    contract: ctc,
    includeTokens: true
  };
  const { data: poolRes, contract: pc } = await fetchLiquidityPool(acc, fpOpts);
  if (!poolRes.pool || !Array.isArray(poolRes.tokens)) {
    return errorResult("Pool not found", poolAddress, data, ctc);
  }

  if (pc) ctc = pc as PoolContract;
  const stdlib = createReachAPI();
  const { setSigningMonitor, bigNumberToNumber, bigNumberify } = stdlib;
  setSigningMonitor(() => onProgress(TXN_SIGN));

  try {
    const tokens = poolRes.tokens as ReachTokenPair;
    const src = lpAmt || (await amountFromPctInput(lpPct, acc, poolTokenId));
    const expectA = convertLPToTokenValue(`${src}`, poolRes.pool, true);
    const expectB = convertLPToTokenValue(`${src}`, poolRes.pool);
    onProgress(`Exchanging ${src} LP Tokens to contract`);
    const msgA = `${expectA} ${tokens[0].symbol}`;
    const msgB = `${expectB} ${tokens[1].symbol}`;
    onProgress(`Withdrawing (${msgA}, ${msgB}) ...`);

    const apiResult = await ctc.apis.Provider.withdraw(bigNumberify(src), {
      A: parseCurrency(expectA, tokens[0].decimals),
      B: parseCurrency(expectB, tokens[1].decimals)
    });
    const fmted = formatAmountPair(apiResult, tokens);
    data.received = { tokenA: fmted.A, tokenB: fmted.B };

    onProgress("Withdrawal complete! Fetching updated LP token balance");
    const balOpts: TokenBalanceOpts = {
      id: poolTokenId,
      bigNumber: true,
      tokenDecimals: 6
    };
    const [tokensView, lpBalance] = await Promise.all([
      fromMaybe(await ctc.views.Info()),
      tokenBalance(acc, balOpts).then(bigNumberToNumber)
    ]);

    if (lpBalance) data.lpBalance = Number(lpBalance);
    if (tokensView) {
      data.mintedLPTokens = formatCurrency(tokensView?.lptBals.B, 0);
    }

    const result = successResult("Funds withdrawn", poolAddress, ctc, data);
    onComplete(result);
    setSigningMonitor(noOp); // clear signing monitor listener
    return result;
  } catch (e: any) {
    setSigningMonitor(noOp); // clear signing monitor listener
    const msg = parseContractError("Funds were not withdrawn.", e);
    const err = `HumbleSDK withdraw error: ${JSON.stringify(e)}`;
    onProgress(err);
    console.log(err);
    return errorResult(msg, poolAddress, data, ctc);
  }
}

/** @internal Calculate percentage of liquidity pool tokens to exchange for staked tokens. */
async function amountFromPctInput(pctInput: any, acc: any, poolTokenId: any) {
  const { bigNumberify, bigNumberToNumber } = createReachAPI();
  const userLiquidity = await tokenBalance(acc, {
    id: parseAddress(poolTokenId),
    bigNumber: true,
    tokenDecimals: getDefaultDecimals()
  });
  const divisor = bigNumberify(100).div(bigNumberify(pctInput));
  return bigNumberToNumber(userLiquidity.div(divisor));
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
