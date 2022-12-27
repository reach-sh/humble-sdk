import { Maybe, ReachContract, BigNumber, ReachToken } from "./reach-helpers";

/** Address */
export type Address = string;

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

export type ComputeMintFn = {
  (
    addBalances: Balances,
    poolBalances: Balances,
    lptBalances: Balances
  ): BigNumber;
};

export type TokenID = string | number | null;

export type SwapTxnOpts = {
  swap: SwapInfo;
  exact?: boolean;
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
  /** The application id for the txn. Use `poolAddress` with pool/farm data */
  contractId?: string | number;
  /** Any useful data associated about the txn (or any error encountered) */
  data: T;
  /** Optional success or failure message */
  message: string;
  /** Contract instance used for the transaction. Can be reused in subsequent calls. */
  contract?: ReachContract<any>;
};

/** Options for interacting with most SDK functions */
export type ReachTxnOptsCore = {
  /** A pre-attached `ReachContract` object, if any, to speed up initialization */
  contract?: ReachContract<any>;
  /** Optional function to call when withdrawal action is complete */
  onComplete?: (...args: any[]) => void;
  /** Optional function to call as the transaction progresses (e.g. for UI notifications) */
  onProgress?: (msg: string) => void;
};

/** Options for interacting with a `Pool` contract */
export type ReachTxnOpts = {
  /** (Optional) The pool address targeted for the txn */
  poolAddress?: string | number;
} & ReachTxnOptsCore;

/** Options for interacting with a `Pool` contract */
export type PoolFetchOpts = ReachTxnOpts & {
  poolAddress: string | number;
  /** If true, fetch token metadata for pool */
  includeTokens?: boolean;
};

/** Options for interacting with a `Pool` contract */
export type PoolTxnOpts = ReachTxnOpts & {
  /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
  n2nn?: boolean;
};

export type ResourceIdentifier = string | Promise<string>;

export type TokenPair = {
  /** `Token A` id. Use '0' for network token  */
  tokenAId: string;
  /** `Token B` id */
  tokenBId: string;
};

/** Basic, high-level info about a `Liquidity Pool` */
export type PoolInfo = TokenPair & {
  /** Pool contract address (or Algorand application ID) */
  poolAddress: string;
  /** Number of decimal places for `Token A`. Defaults to `6` */
  tokenADecimals?: number;
  /** Number of decimal places for `Token B`. Defaults to `6` */
  tokenBDecimals?: number;
  /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
  n2nn?: boolean;
  /** ID for pool liquidity token */
  poolTokenId?: string;
};

/** `Pool` Liquidity information */
export type PoolLiquidity = {
  /** Balance of user pool LP tokens (amount of user Liquidity in the pool) */
  userLiquidity?: any;
  /** LP Tokens minted for this pool */
  mintedLiquidityTokens?: any;
  /** Balance of Pool `Token A` */
  tokenABalance?: string;
  /** Fees accrued from `Token A` */
  tokenAFees?: string;
  /** Balance of Pool `Token B` */
  tokenBBalance?: string;
  /** Fees accrued from `Token B` */
  tokenBFees?: string;
};

/** Enhanced `Pool` data */
export type PoolDetails = PoolInfo & PoolLiquidity;

/** Options for making a deposit */
export type DepositTxnOpts = {
  /**
   * Deposit Amounts (for Pool tokens `A` and `B` respectively). Order is important, or
   * the transaction will likely fail.
   */
  amounts: [amountIn: number | string, amountOut: number | string];

  /** Data about target pool at time of txn */
  pool: PoolInfo & PoolLiquidity;

  /**
   * Whether to opt user account into pool liquidity token. NOTE: If false and user hasn't
   * opted-in, the `deposit` transaction will fail. Make sure to check and provide the
   * right value here. Defaults to `false`
   */
  optInToLPToken?: boolean;

  /**
   * @internal Affects calculation of expected LP amounts. Used internally: DO NOT USE, or
   * otherwise may result in partial liquidit loss, or frequent transaction failures
   */
  initialDeposit?: boolean;
} & ReachTxnOpts;

export type SwapInfo = TokenPair & {
  amountA?: any;
  amountB?: any;
  tokenIn?: string | number;
};

/** A pair of `Token` objects */
export type ReachTokenPair = [tokA: ReachToken, tokB: ReachToken];

/** High-level information about a pool */
export type FetchPoolData = {
  /** Pool data */
  pool: PoolDetails | null;
  /** Pool token data */
  tokens?: ReachTokenPair;
  /** Whether pool has liquidity and is tradeable */
  tradeable: boolean;
};

export type FormattedRewardsPerBlock = {
  asDefaultNetworkToken: string;
  asRewardToken: string;
};

export type StaticFarmDataShared = {
  pairTokenASymbol: string;
  pairTokenBSymbol: string;
  rewardTokenSymbol: string;
  stakedTokenSymbol: string;
  rewardTokenDecimals: number;
  stakedTokenDecimals: number;
};

export type StaticFarmDataUnformatted = StaticFarmDataShared & {
  ctcInfo: BigNumber;
  startBlock: BigNumber;
  endBlock: BigNumber;
  rewardTokenId: BigNumber;
  stakedTokenId: BigNumber;
  pairTokenAId: Maybe<BigNumber>;
  pairTokenBId: BigNumber;
  stakedTokenPoolId: BigNumber;
  stakedTokenTotalSupply: BigNumber;
  rewardTokenDecimals: BigNumber;
  stakedTokenDecimals: BigNumber;
};

export type StaticFarmDataFormatted = {
  ctcInfo: string;
  startBlock: number;
  endBlock: number;
  rewardTokenId: string;
  rewardsPerBlock: FormattedRewardsPerBlock;
  stakedTokenId: string;
  pairTokenAId: string;
  pairTokenBId: string;
  stakedTokenPoolId?: string;
  stakedTokenTotalSupply: string;
  isPartnerFarm?: boolean;
} & StaticFarmDataShared;

/**
 * @version v2
 * Reach `v.0.1.10x` + HUMBLE FARMING
 */

/** Staking Rewards ([`network token rewards`, `rewards token rewards`]) */
export type StakingRewards = [BigNumber, BigNumber];
export type SDKStakingRewards = [string, string];

/** Notification object (Stake updated) */
export type StakeUpdate = {
  /** New total amount staked by user */
  newUserStaked: BigNumber;
  /** New total amount staked in contract */
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
  rewardTokenId: TokenID;
  /** Token to stake for rewards */
  stakeTokenId: TokenID;
  /** Contract rewards ([`networkAmt`, `nonNetworkAmt`]) */
  totalRewardsPayout: StakingRewards;
  /** Block at which the farm will start distributing rewards */
  startBlock: string;
  /** Block at which the farm will stop distributing rewards */
  endBlock: string;
  /** The account that will deposit ALGO into the farm */
  rewarder0?: Address;
} & ReachTxnOpts;

/** Staker (stakes tokens for rewards) */
export type StakerAPI = {
  /** Stake an amount for rewards */
  stake(amt: BigNumber): Promise<StakeUpdate>;
  /** Harvest rewards for stake */
  harvest(): Promise<StakingRewardsUpdate>;
  /** Withdraw stake */
  withdraw(amt: BigNumber): Promise<StakeUpdate>;
};

export type RewardsPair = [any, any];

export type Balances = { A: any; B: any };

/** Reach contract `Pool` view (v2) */
export type PoolContractView = {
  liquidityToken: TokenID;
  lptBals: Balances;
  poolBals: Balances;
  protoBals: Balances;
  protoInfo: PoolProtocolInfo;
  tokA: Maybe<TokenID>;
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
