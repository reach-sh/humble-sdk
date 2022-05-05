import { ReachContract, ReachToken } from "./reach-helpers";

/** Address */
export type Address = string;

/** Big Number object from ethers.js */
export type BigNumber = any;

/**
 * Compute expected Swap output
 * @returns Tuple, first object is `swap result`, and second object is
 * `protocol fees` from swap
 */
export type ComputeSwapFn = {
  (
    aForB: boolean,
    normalIn: Balances,
    poolBalances: Balances,
    protocolInfo: PoolProtocolInfo
  ): Balances[];
};

export type TokenID = string | number;

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
export type TransactionResult<T> = {
  /** Whether the transaction succeeded or failed */
  succeeded: boolean;
  /** The pool address targeted for the txn */
  poolAddress?: string | number;
  /** Any useful data associated about the txn (or any error encountered) */
  data?: T;
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

export type TokenPair = {
  /** `Token A` id. Use '0' for network token  */
  tokenAId: string | number;
  /** `Token B` id */
  tokenBId: string | number;
};

/** Basic, high-level info about a `Liquidity Pool` */
export type PoolInfo = TokenPair & {
  /** Pool contract address (or Algorand application ID) */
  poolAddress: string | number;
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

export type SwapInfo = TokenPair & {
  amountA?: any;
  amountB?: any;
  tokenIn?: string | number;
};

/** High-level information about a pool */
export type FetchPoolData = {
  /** Pool data */
  pool: PoolDetails | null;
  /** Pool token data */
  tokens: [tokA: ReachToken, tokB: ReachToken];
  /** Whether pool has liquidity and is tradeable */
  tradeable: boolean;
};

export type FetchPoolTxnResult = TransactionResult<FetchPoolData>;

/**
 * @version v2
 * Reach `v.0.1.10x` + HUMBLE FARMING
 */

/** Contract rewards ([`networkAmt`, `nonNetworkAmt`]) */
export type StakingRewards = [any, any];

/** Notification object (Stake updated) */
export type StakeUpdate = {
  newUserStaked: BigNumber;
  newEveryoneStaked: BigNumber;
};

/** Notification object (Rewards updated) */
export type StakingRewardsUpdate = {
  /** Rewards issued to user ([`networkAmt`, `nonNetworkAmt`]) */
  userReceived: StakingRewards;
  /** Contract rewards balance ([`networkAmt`, `nonNetworkAmt`]) */
  totalRemaining: StakingRewards;
};

/** Options reused in the contract */
export type StakingDeployerOpts = {
  /** Rewards token (cannot be `network` token e.g. `ALGO`]) */
  nnRewardToken: TokenID;
  /** Token to stake for rewards */
  stakeToken: TokenID;
  /** Contract rewards ([`networkAmt`, `nonNetworkAmt`]) */
  rewardsPerBlock: StakingRewards;
  /** Length of rewards (blocks) */
  duration: number;
};

/** Deployer (creates the farming pool) */
export type StakingDeployer = {
  /** Initial contract options */
  opts: StakingDeployerOpts;
  /** Notify deployer that contract is live */
  readyForStakers(): any;
};

/** Staker (stakes tokens for rewards) */
export type StakerAPI = {
  /** Stake an amount for rewards */
  stake(amt: BigNumber): Promise<StakeUpdate>;
  /** Harvest rewards for stake */
  harvest(): StakingRewardsUpdate;
  /** Withdraw stake */
  withdraw(amt: BigNumber): Promise<StakeUpdate>;
};

export type Balances = { A: any; B: any };

/** Reach contract `Pool` view (v2) */
export type PoolContractView = {
  liquidityToken: TokenID;
  lptBals: Balances;
  poolBals: Balances;
  protoBals: Balances;
  protoInfo: PoolProtocolInfo;
  tokA: ["Some", TokenID] | ["None", null];
  tokB: TokenID;
};

/** Reach contract `Pool` Protocol info (v2) */
export type PoolProtocolInfo = {
  locked?: boolean;
  lpFee?: number;
  protoAddr: Address;
  protoFee: number;
  totFee: number;
};
