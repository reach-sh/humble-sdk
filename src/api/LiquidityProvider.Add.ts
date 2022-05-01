import {
  ReachContract,
  ReachAccount,
  createReachAPI,
  parseCurrency,
  noOp,
} from "../reach-helpers";
import { poolBackend, poolBackendN2NN } from "../build/backend";
import { errorResult, parseContractError, successResult } from "../utils";
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
export async function addLiquidity(
  acc: ReachAccount,
  opts: DepositTxnOpts
): Promise<TransactionResult<any>> {
  const [valid, message] = protectArgs(opts);
  if (!valid) return errorResult(message, null, new Error(message));

  const {
    amounts,
    contract,
    pool,
    onProgress = noOp,
    onComplete = noOp,
    optInToLPToken = false,
  } = opts;
  const backend = pool.n2nn ? poolBackendN2NN : poolBackend;
  const ctc: ReachContract<typeof backend> =
    contract || acc.contract(backend, pool.poolAddress);
  const { Provider } = ctc.apis;

  // (OPTIONAL) opt-in to LP token
  const { poolTokenId } = pool;
  if (optInToLPToken && poolTokenId) {
    onProgress("Checking LP token opt-in");
    try {
      await acc.tokenAccept(poolTokenId.toString());
    } catch (e) {
      const msg = parseContractError(`Token opt-in failed.`, e);
      const err = e ? (e as Error) : new Error(msg);
      return errorResult(msg, pool.poolAddress, err, ctc);
    }
  }

  const { poolAddress, tokenADecimals = 6, tokenBDecimals = 6 } = pool;
  const done = (result: TransactionResult<any>) => {
    onComplete(result);
    return result;
  };

  try {
    onProgress(`Depositing funds`);
    const A = parseCurrency(amounts[0], tokenADecimals);
    const B = parseCurrency(amounts[1], tokenBDecimals);
    const lpTokens = await Provider.deposit({ A, B }, getPreMintedAmt(A, B));
    const data: AddLiquidityResult = {
      lpTokens: lpTokens && createReachAPI().bigNumberToNumber(lpTokens),
    };

    return done(successResult("Funds deposited", poolAddress, ctc, data));
  } catch (e) {
    console.log({ e });
    const parsedMsg = parseContractError(`Deposit failed`, e);
    const msg = `${parsedMsg}: ${JSON.stringify(e, null, 2)}`;
    const err = e ? (e as Error) : new Error(msg);
    onProgress(msg);
    return done(errorResult(msg, poolAddress, err, ctc));
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

/** `
 * @internal
 * INTERNAL HELPER` | Compute how many LP tokens have been pre-minted
 */
function getPreMintedAmt(parsedAmtA: any, parsedAmtB: any) {
  const product = parsedAmtA.mul(parsedAmtB);
  let acc = [product, product.div(2).add(1)];
  let ans = undefined;
  while (ans === undefined) {
    let [z, x] = acc;
    if (x.lt(2)) {
      ans = x;
    } else if (x.lt(z)) {
      acc = [x, product.div(x).add(x).div(2)];
    } else {
      ans = x;
    }
  }
  const giv = ans.mul(ans);
  if (giv.lt(product)) {
    return ans.add(1);
  } else {
    return ans;
  }
}
