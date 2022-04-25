import {
  ReachContract,
  ReachAccount,
  fromMaybe,
  createReachAPI,
  parseCurrency,
  parseAddress,
  noOp,
} from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { parseContractError } from "../utils";
import { TransactionResult, DepositTxnOpts, ReachTxnOpts } from "../types";

export type WithdrawOpts = ReachTxnOpts & {
  /** Percentage of liquidity to withdraw as a number. (e.g. 5 = `5%`) */
  percentToWithdraw: number;
  poolTokenId: string | number;
  n2nn: boolean;
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
): Promise<TransactionResult> {
  const {
    percentToWithdraw: pct,
    n2nn,
    poolTokenId,
    poolAddress,
    onComplete = noOp,
    onProgress = noOp,
  } = opts;
  const { bigNumberToNumber, bigNumberify, balanceOf } = createReachAPI();
  onProgress(`Checking user balance of LP Token "${poolAddress}"`);
  const userLiquidity = await balanceOf(acc, parseAddress(poolTokenId));
  const divisor = bigNumberify(100).div(bigNumberify(pct));
  const amount: any = userLiquidity.div(divisor);
  const backend = n2nn ? poolBackendN2NN : poolBackend;
  const ctc = (opts.contract ||
    acc.contract(backend, parseAddress(poolAddress))) as PoolCtc;

  try {
    onProgress(`Withdrawing ${pct}% of funds from pool "${poolAddress}"`);
    await ctc.a.Provider.withdraw(amount);
    const tokensView: any = await ctc.views.Info();

    onProgress("Fetching updated pool LP token balance");
    const mintedLPTokens = await tokensView.minted();
    const data = {
      poolLPTokens: fromMaybe(mintedLPTokens, bigNumberToNumber, 0),
    };
    const msg = "Funds withdrawn";
    const result = successResult(msg, null, ctc, data);

    onComplete(result);
    return result;
  } catch (e) {
    const msg = parseContractError("Funds withdrawn", e);
    return errorResult(msg, poolAddress, ctc, e);
  }
}

/**
 * Add liquidity to a Pool. Requires a reach `networkAccount` instance.
 * Takes optional `onProgress` and `onComplete` callbacks for handling UI notifications.
 * See `DepositOpts` type description for required optional request configuration.\
 * Required parameters:
 * @param opts.amounts Amounts to deposit [`a`, `b`]
 * @param opts.contract Optional pre-attached Reach contract instance
 * @param opts.n2nn Whether network-to-non-network pool
 * @param opts.optInToLPToken Whether to opt-in to pool liquidity token
 * @param opts.poolTokenId Pool Liquidity token ID (or token contract address)
 * @param opts.tokenADecimals Decimal places for `token A`. Defaults to `6`
 * @param opts.tokenBDecimals Decimal places for `token B`. Defaults to `6`
 */
export async function addLiquidity(
  acc: ReachAccount,
  opts: DepositTxnOpts
): Promise<TransactionResult> {
  const [valid, message] = protectArgs(opts);
  if (!valid) return errorResult(message, null, null);

  const {
    amounts,
    contract,
    pool,
    onProgress = noOp,
    onComplete = noOp,
    optInToLPToken = false,
  } = opts;
  const backend = pool.n2nn ? poolBackendN2NN : poolBackend;
  const ctc = contract || acc.contract(backend, pool.poolAddress);
  const { Provider } = ctc.apis;

  // (OPTIONAL) opt-in to LP token
  const { poolTokenId } = pool;
  if (optInToLPToken && poolTokenId) {
    onProgress("Opting into LP token (optional)");
    try {
      await acc.tokenAccept(poolTokenId.toString());
    } catch (e) {
      const msg = parseContractError(`Token opt-in failed.`, e);
      return errorResult(msg, pool.poolAddress, ctc, e);
    }
  }

  const { poolAddress, tokenADecimals = 6, tokenBDecimals = 6 } = pool;
  const done = (result: TransactionResult) => {
    onComplete(result);
    return result;
  };

  try {
    const [amountA, amountB] = amounts;
    const parsedAmtA = parseCurrency(amountA, tokenADecimals);
    const parsedAmtB = parseCurrency(amountB, tokenBDecimals);
    onProgress(`Depositing funds`);
    await Provider.deposit(
      parsedAmtA,
      parsedAmtB,
      getPreMintedAmt(parsedAmtA, parsedAmtB)
    );

    return done(successResult("Funds deposited", poolAddress, ctc, {}));
  } catch (e) {
    const msg = parseContractError(`Deposit failed.`, e);
    console.log(msg, JSON.stringify(opts, null, 2));
    return done(errorResult(msg, poolAddress, ctc, e));
  }
}

/**
 * @internal
 * Ensure user provided correct args for adding liquidity
 * @param opts Deposit options
 * @returns [`isValid: boolean`, `validationError?: string`]
 */
function protectArgs(opts: DepositTxnOpts): [boolean, string] {
  const { amounts, pool } = opts;
  let valid = true;
  let message = "";
  if (!pool) return [false, "No pool provided"];

  const { poolAddress } = pool;
  if (!poolAddress) return [false, "Invalid pool provided"];

  const [tokAAmt, tokBAmt] = amounts;
  const sum = Number(tokAAmt) + Number(tokBAmt) !== 0;
  if (!tokAAmt || !tokBAmt || Number.isNaN(sum) || !sum) {
    return [false, "Invalid amounts provided"];
  }

  return [valid, message];
}

/**
 * @internal
 * `INTERNAL HELPER` | Creates a `TransactionResult` object
 */
function errorResult(
  message: string,
  poolAddress: number | string | null = "",
  contract?: any | null,
  data?: any
): TransactionResult {
  return {
    succeeded: false,
    poolAddress: poolAddress || "",
    message,
    contract,
    data,
  };
}

/**
 * @internal
 * `INTERNAL HELPER` | Creates a `TransactionResult` object
 */
function successResult(
  message: string,
  poolAddress: number | string | null = "",
  contract: any,
  data?: any
): TransactionResult {
  return {
    succeeded: true,
    poolAddress: poolAddress || "",
    message,
    contract,
    data,
  };
}

/** `
 * @internal
 * INTERNAL HELPER` | Compute how many LP tokens have been pre-minted
 */
function getPreMintedAmt(parsedAmtA: any, parsedAmtB: any) {
  const value = parsedAmtA.mul(parsedAmtB);
  let acc = [value, value.div(2).add(1)];
  while (true) {
    const [z, x] = acc;
    if (x.lt(2)) return x;

    if (x.lt(z)) acc = [x, value.div(x).add(x).div(2)];
    else return x;
  }
}
