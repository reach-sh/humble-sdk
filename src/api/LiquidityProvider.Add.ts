import { ReachAccount, createReachAPI, parseCurrency } from "../reach-helpers";
import { poolBackend, poolBackendN2NN, PoolContract } from "../build/backend";
import { errorResult, parseContractError, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";
import { TransactionResult, DepositTxnOpts } from "../types";

type AddLiquidityResult = { lpTokens?: number };

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
export async function addLiquidity(acc: ReachAccount, opts: DepositTxnOpts) {
  const data: AddLiquidityResult = { lpTokens: 0 };
  const [valid, message] = protectArgs(opts);

  if (!acc) return errorResult("Account is required", null, data, null);
  if (!valid) return errorResult(message, null, data, null);

  const {
    amounts,
    contract,
    pool,
    onProgress = noOp,
    onComplete = noOp,
    optInToLPToken = false,
  } = opts;
  const poolAddress = pool.poolAddress.toString();
  const backend = pool.n2nn ? poolBackendN2NN : poolBackend;
  const ctc: PoolContract = contract || acc.contract(backend, poolAddress);
  const { Provider } = ctc.apis;
  const done = (result: TransactionResult<AddLiquidityResult>) => {
    onComplete(result);
    return result;
  };

  // (OPTIONAL) opt-in to LP token
  const { poolTokenId } = pool;
  if (optInToLPToken && poolTokenId) {
    onProgress("Opting-in to LP token");
    try {
      await acc.tokenAccept(poolTokenId.toString());
    } catch (e) {
      const msg = parseContractError(`Token opt-in failed.`, e);
      return errorResult(msg, poolAddress, data, ctc);
    }
  }

  const { tokenADecimals = 6, tokenBDecimals = 6 } = pool;

  try {
    onProgress(`Depositing funds`);
    const A = parseCurrency(amounts[0], tokenADecimals);
    const B = parseCurrency(amounts[1], tokenBDecimals);
    const { bigNumberToNumber } = createReachAPI();
    const lpTokens = await Provider.deposit({ A, B });
    data.lpTokens = bigNumberToNumber(lpTokens);

    return done(successResult("Funds deposited", poolAddress, ctc, data));
  } catch (e) {
    const msg = parseContractError(`Deposit failed.`, e);
    console.log(msg, { e });
    onProgress(msg);
    return done(errorResult(msg, poolAddress, { lpTokens: 0 }, ctc));
  }
}

/**
 * @internal
 * Ensure user provided correct args for adding liquidity
 * @param opts Deposit options
 * @returns [`isValid: boolean`, `validationError?: string`]
 */
export function protectArgs(opts: DepositTxnOpts): [boolean, string] {
  if (!opts) return [false, "No options provided"];

  const { amounts, pool } = opts;
  let valid = true;
  let message = "";
  if (!pool) return [false, "No pool provided"];

  const { poolAddress } = pool;
  if (!poolAddress) return [false, "Invalid pool provided"];
  if (!Array.isArray(amounts)) return [false, "Invalid amounts provided"];

  const [tokAAmt, tokBAmt] = amounts;
  const sum = Number(tokAAmt) + Number(tokBAmt) !== 0;
  if (!tokAAmt || !tokBAmt || Number.isNaN(sum) || !sum) {
    return [false, "Invalid amounts provided"];
  }

  return [valid, message];
}
