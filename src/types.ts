import { ReachContract } from "./reach-helpers";

export type SwapTxnOpts = {
  swap: SwapInfo;
  pool?: PoolDetails;
} & ReachTxnOpts;

export type SDKToken = {
  id: string | number;
  name: string;
  symbol: string;
  url: string;
  supply: string;
  decimals: number;
};

/** Result from SDK function */
export type TransactionResult = {
  /** Whether the transaction succeeded or failed */
  succeeded: boolean;
  /** The pool address targeted for the txn */
  poolAddress?: string | number;
  /** Any useful data associated about the txn (or any error encountered) */
  data?: any;
  /** Optional success or failure message */
  message?: string;
  /** Contract instance used for the transaction. Can be reused in subsequent calls. */
  contract?: ReachContract<any>;
};

/** Options for interacting with a `Pool` contract */
export type ReachTxnOpts = {
  /** (Optional) The pool address targeted for the txn */
  poolAddress?: string | number;
  /** A pre-attached `ReachContract` object, if any, to speed up initialization */
  contract?: ReachContract<any>;
  /** Optional function to call when withdrawal action is complete */
  onComplete?: (...args: any[]) => void;
  /** Optional function to call as the transaction progresses (e.g. for UI notifications) */
  onProgress?: (msg: string) => void;
};

/** Options for interacting with a `Pool` contract */
export type PoolTxnOpts = ReachTxnOpts & {
  /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
  n2nn?: boolean;
};

export type ResourceIdentifier = string | number | Promise<string | number>;

/** Basic, high-level info about a `Liquidity Pool` */
export type PoolInfo = {
  /** Pool contract address (or Algorand application ID) */
  poolAddress: string | number;
  /**
   * Pool's `Token A` id (order is important!)\
   * Will be '0' for network-to-non-network (`n2nn`) pools
   */
  tokenAId: string | number;
  /** Pool's `Token B` id (order is important!) */
  tokenBId: string | number;
  /** Number of decimal places for `Token A`. Defaults to `6` */
  tokenADecimals?: number;
  /** Number of decimal places for `Token B`. Defaults to `6` */
  tokenBDecimals?: number;
  /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
  n2nn?: boolean;
  /** ID for pool liquidity token */
  poolTokenId?: ResourceIdentifier;
};

/** Enhanced `Pool` data */
export type PoolDetails = PoolInfo & {
  /** Balance of user pool LP tokens (amount of user Liquidity in the pool) */
  userLiquidity?: any;
  /** LP Tokens minted for this pool */
  mintedLiquidityTokens?: any;
  /** Balance of Pool `Token A` */
  tokenABalance?: string | number;
  /** Fees accrued from `Token A` */
  tokenAFees?: string | number;
  /** Balance of Pool `Token B` */
  tokenBBalance?: string | number;
  /** Fees accrued from `Token B` */
  tokenBFees?: string | number;
};

/** Options for making a deposit */
export type DepositTxnOpts = {
  /**
   * Deposit Amounts (for Pool tokens `A` and `B` respectively). Order is important, or
   * the transaction will likely fail.
   */
  amounts: [amountIn: number | string, amountOut: number | string];

  /** Data about target pool at time of txn */
  pool: PoolInfo;

  /**
   * Whether to opt user account into pool liquidity token. NOTE: If false and user hasn't
   * opted-in, the `deposit` transaction will fail. Make sure to check and provide the
   * right value here. Defaults to `false`
   */
  optInToLPToken?: boolean;
} & ReachTxnOpts;

export type SwapInfo = {
  amountA?: any;
  amountB?: any;
  tokenAId: string | number;
  tokenBId: string | number;
  tokenIn?: string | number;
};
