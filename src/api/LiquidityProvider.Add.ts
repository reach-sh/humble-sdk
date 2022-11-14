import {
  ReachAccount,
  createReachAPI,
  parseCurrency,
  formatCurrency,
  tokenBalance
} from "../reach-helpers";
import {
  getComputeMint,
  poolBackend,
  poolBackendN2NN,
  PoolContract
} from "../build/backend";
import { errorResult, parseContractError, successResult } from "../utils";
import { noOp } from "../utils/utils.reach";
import { TransactionResult, DepositTxnOpts, ReachTxnOptsCore } from "../types";

export type AddLiquidityResult = { lpTokens?: number };

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

  const { pool, onProgress = noOp, onComplete = noOp } = opts;
  const poolAddress = pool.poolAddress.toString();
  const backend = pool.n2nn ? poolBackendN2NN : poolBackend;
  const ctc: PoolContract = opts.contract || acc.contract(backend, poolAddress);
  const { Provider } = ctc.apis;
  const done = (result: TransactionResult<AddLiquidityResult>) => {
    onComplete(result);
    return result;
  };

  // Validate pool data
  const {
    poolTokenId,
    tokenADecimals = 6,
    tokenBDecimals = 6,
    mintedLiquidityTokens,
    tokenBBalance,
    tokenABalance
  } = pool;
  if (!poolTokenId) {
    return errorResult("Pool token id is required", null, data, null);
  } else if (!opts.initialDeposit && (!tokenABalance || !tokenBBalance)) {
    const msg = `Pool balances required for expected LP output`;
    return errorResult(msg, poolAddress, data, ctc);
  }

  // (OPTIONAL) opt-in to LP token
  const { balance: lpHeld, error } = await getUnformattedLPHeld(acc, {
    optInToLPToken: opts.optInToLPToken || false,
    lpTokenId: poolTokenId?.toString(),
    onProgress
  });
  if (error.length) return errorResult(error, null, data, null);
  else onProgress(`User has ${formatCurrency(lpHeld)} LP tokens`);

  try {
    const [amtA, amtB] = opts.amounts;
    const A = parseCurrency(amtA, tokenADecimals);
    const B = parseCurrency(amtB, tokenBDecimals);
    const stdlib = createReachAPI();
    const { bigNumberToNumber } = stdlib;
    const computeMint = getComputeMint(stdlib);
    const userDeposit = { A, B };
    const poolBals = {
      A: parseCurrency(tokenABalance || "0", tokenADecimals),
      B: parseCurrency(tokenBBalance || "0", tokenBDecimals)
    };
    const lpBals = { A: lpHeld, B: parseCurrency(mintedLiquidityTokens, 6) };
    const expects = computeMint(userDeposit, poolBals, lpBals);
    const fLPBals = formatAmounts(lpBals, [6, 6]);
    onProgress(`LP Balances: ${JSON.stringify(fLPBals)}`);
    onProgress(`${formatCurrency(expects)} LP Tokens expected`);
    onProgress(`Depositing funds`);

    const lpTokens = await Provider.deposit(userDeposit, expects);
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
 * @internal Ensure user provided correct args for adding liquidity
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

/** @internal Return a pair of human-readable currency amounts  */
function formatAmounts(d: { A?: any; B?: any } = {}, decs: number[]) {
  const { A, B } = d;
  const falsy = (v: any) => [undefined, null].includes(v);
  if (falsy(d) || falsy(A) || falsy(B)) return { A: "0", B: "0" };

  return {
    A: formatCurrency(A, decs[0]),
    B: formatCurrency(B, decs[1])
  };
}

/** Options for fetching LP token balances */
type LPBalanceOpts = {
  optInToLPToken?: boolean;
  lpTokenId: string;
} & Pick<ReachTxnOptsCore, "onProgress">;

/** @internal Get `BigNumber` amount of `LP Tokens` held by user */
async function getUnformattedLPHeld(acc: ReachAccount, opts: LPBalanceOpts) {
  const { lpTokenId, optInToLPToken = false, onProgress = noOp } = opts;
  const { bigNumberify } = createReachAPI();
  const done = (b: any, e = "") => ({ balance: b, error: e });

  if (!optInToLPToken) {
    onProgress("Checking LP token balance");
    const bal = await tokenBalance(acc, {
      id: lpTokenId,
      bigNumber: true,
      tokenDecimals: 6
    });
    return done(bal);
  }

  onProgress("Opting-in to LP token");
  try {
    await acc.tokenAccept(lpTokenId);
    return done(bigNumberify(0));
  } catch (e: any) {
    onProgress(e);
    return done(bigNumberify(0), e);
  }
}
