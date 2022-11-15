import { loadStdlib } from "@reach-sh/stdlib";

export type APIFn<T> = {
  [fn in keyof T]: UnwrapAPI<T[fn]>;
};

export type BackendModule = Record<string, any>;

/** Reach StdLib instance */
export type BigNumber = any;

export type ChainSymbol = string & ("ETH" | "ALGO");

/** Reach Contract `API` Function(s) */
export type CtcFn = { (...args: any[]): any | Promise<any> };

/** Reach Contract `View` member */
export type CtcLabeledFunc<T extends any> =
  | CtcFnGroup<T>
  | { [fnName: string]: CtcFn };

/** Reach Contract Method (function) grouping */
export type CtcFnGroup<T> = {
  [k in keyof T]: CtcFn;
};

/** Reach Contract Method (function) grouping */
export type CtcFnSupergroup<T> = {
  [k in keyof T]: CtcFnGroup<T[k]>;
};

export type InteractFn<T extends BackendModule> = {
  [fn in keyof T]: (interact: any, ctcInfo?: string | number) => any;
};

/** `NetworkData` describes single network data-item (for e.g. Ethereum) */
export type NetworkData = {
  name: string;
  abbr: ChainSymbol;
  active?: boolean;
  decimals?: number;
};

export type NetworkProvider = (
  | "TestNet"
  | "BetaNet"
  | "MainNet"
  | "ALGO-devnet"
) &
  string;

export type NetworksMap = Record<ChainSymbol, NetworkData>;

export type TokenVerificationTier =
  | "verified"
  | "trusted"
  | "suspicious"
  | "unverified";

export type ReachToken = {
  id: string;
  name: string;
  amount?: string;
  decimals: number;
  supply: string;
  symbol: string | ChainSymbol;
  url: string;
  verified?: boolean | null;
  verificationTier?: TokenVerificationTier | null;
};

/** A reach-connected Network Account representation */
export type ReachAccount = { [x: string]: any } & {
  networkAccount: { addr?: string; address?: string; [x: string]: any };
  /** @deprecated - Use `reachAccount.contract(backend)` instead */
  attach<T extends BackendModule>(
    backend: T,
    contractInfo: any | Promise<any>
  ): ReachContract<T>;
  /** @deprecated - Use `reachAccount.contract(backend)` instead */
  deploy<T extends BackendModule>(backend: T | Promise<any>): ReachContract<T>;
  contract<T extends BackendModule>(
    backend: T,
    contractInfo?: any
  ): ReachContract<T>;
  getAddress(): string;
  setDebugLabel(label: string): ReachAccount;
  tokenAccept(tokenId: string | number): Promise<void>;
  tokenAccepted(tokenId: string | number): Promise<boolean>;
  tokenMetadata(tokenId: string | number): Promise<{ [x: string]: any }>;
  stdlib: ReachStdLib;
};

export type Maybe<T> = ["Some", T] | ["None", null];

/** Reach contract View representation */
type CtcViewGroup<T extends BackendModule> =
  | ReturnType<T["_getViews"]>["infos"];
export type ContractView<T extends BackendModule> = {
  [k in keyof CtcViewGroup<T>]: (
    ...a: any[]
  ) => Promise<
    Maybe<Unwrap<ReturnType<ReturnType<T["_getViews"]>["infos"][k]["decode"]>>>
  >;
};

type Unwrap<T> = T extends Promise<infer A> ? A : T;
type UnwrapAPI<T> = T extends (...a: any[]) => Promise<undefined>
  ? (...a: any[]) => Promise<any>
  : CtcFnGroup<T>;

/** Reach contract representation */
export type ReachContract<T extends BackendModule> = {
  /** Get contract address */
  getInfo(): Promise<any>;
  /** Get deployed contract address */
  getContractAddress(): Promise<string | number>;
  /** Reach Contract `API` member */
  a: APIFn<T["_APIs"]>;
  /** Reach Contract `API` member (error if api not found) */
  apis: APIFn<T["_APIs"]>;
  /** Reach Contract `API` member (always returns `Maybe` values) */
  safeApis: APIFn<T["_APIs"]>;
  /** Reach Contract `Participant` member */
  p: InteractFn<T["_Participants"]>;
  /** Reach Contract `Participant` member */
  participants: InteractFn<T["_Participants"]>;
  /** Reach Contract `View` member */
  v: ContractView<T>;
  /** Reach Contract `View` member */
  views: ContractView<T>;
  /** Reach Contract `Events` member */
  e: ReachEventStream<ReturnType<T["_getEvents"]>>;
  /** Reach Contract `Events` member */
  events: ReachEventStream<ReturnType<T["_getEvents"]>>;
  /** @deprecated Get contract `Views`. Use `ctc.views` or `ctc.v` */
  getViews(): CtcLabeledFunc<any>;
};

/** `ReachEvent` is an `Event` emitted from a contract `EventStream` */
export type ReachEvent<T extends any> = { when: any; what: T };

/** `ReachEvent` is an `Event` emitted from a contract `EventStream` */
export type ReachEventStream<T> = {
  [x: string]: {
    next(): Promise<ReachEvent<any>>;
    seek(t: BigNumber): void;
    seekNow(): Promise<void>;
    lastTime(): Promise<BigNumber>;
    monitor(handler: (e: ReachEvent<any>) => void): Promise<void>;
  } & { [k in keyof T]: any };
};

/** StdLib Helper Interface */
export type ReachStdLib = {
  connector: string;
  hasRandom: { random: () => BigNumber };
  hasConsoleLogger: { log: (...a: any) => void };
  balanceOf: (acc: ReachAccount, token?: number | string) => Promise<BigNumber>;
  transfer: (
    from: ReachAccount,
    to: ReachAccount,
    val?: BigNumber,
    token?: number | string
  ) => Promise<unknown>;
  connectAccount: (networkAccount: any) => Promise<ReachAccount>;
  newAccountFromSecret: (secret: string) => Promise<ReachAccount>;
  newAccountFromMnemonic: (phrase: string) => Promise<ReachAccount>;
  getDefaultAccount: () => Promise<ReachAccount>;
  createAccount: () => Promise<ReachAccount>;
  getFaucet: () => Promise<ReachAccount>;
  canFundFromFaucet: () => Promise<boolean>;
  fundFromFaucet: (acc: ReachAccount, balance: BigNumber) => Promise<void>;
  newTestAccount: (balance: BigNumber) => Promise<ReachAccount>;
  newTestAccounts: (
    num: number,
    balance: BigNumber
  ) => Promise<Array<ReachAccount>>;
  getNetworkTime: () => Promise<BigNumber>;
  waitUntilTime: (time: BigNumber) => Promise<BigNumber>;
  wait: (delta: BigNumber) => Promise<BigNumber>;
  getNetworkSecs: () => Promise<BigNumber>;
  waitUntilSecs: (secs: BigNumber) => Promise<BigNumber>;
  verifyContract: (ctcInfo: any, backend: BackendModule) => Promise<any>;
  /** @description the display name of the standard unit of currency for the network */
  standardUnit: string;
  /** @description the display name of the atomic (smallest) unit of currency for the network */
  atomicUnit: string;
  minimumBalance: BigNumber;
  formatCurrency: (amt: BigNumber, decimals: number) => string;
  formatAddress: (acc: ReachAccount | string) => string;
  unsafeGetMnemonic: (acc: ReachAccount) => string;
  launchToken: (
    acc: ReachAccount,
    name: string,
    sym: string,
    opts?: any
  ) => any;
  formatWithDecimals: (atomicUnits: number, tokenDecimals?: number) => string;
  parseCurrency: (amt: any, decimals?: number) => any;
  /**
   * @version 0.1.8-rc-6
   * - Allows for the installation of a custom hook to observe signing requests. */
  setSigningMonitor(
    h: (evt: any, pre: Promise<any>, post: Promise<any>) => void
  ): void;
  /**
   * @version 0.1.8-rc-6
   * - Make http requests at least `ms` milliseconds apart. Not supported on all networks */
  setMinMillisBetweenRequests(ms: number): void;
  customHttpEventHandler(h: (e: any) => Promise<void>): void;
  // bigNumberToNumber: (amt: any) => number;
} & { [x: string]: any } & ReturnType<typeof loadStdlib>;

/** Options passed into `loadStdlib` */
export type ReachEnvOpts = {
  /** Provider Environment override (for using a custom provider with reach stdlib) */
  providerEnv?: AlgoEnvOverride;
  /** Wallet fallback (optional) */
  walletFallback?: WalletFallbackOpts;
};

/** Options passed into `loadStdlib` */
export type LoadReachOpts = {
  chain?: ChainSymbol;
  provider?: NetworkProvider;
} & ReachEnvOpts;

/** Algorand wallet fallback options */
export type WalletFallbackOpts = {
  MyAlgoConnect?: any;
  WalletConnect?: any;
};

/** Algorand node override options */
export type AlgoEnvOverride = {
  ALGO_INDEXER_PORT?: string;
  ALGO_INDEXER_SERVER?: string;
  ALGO_INDEXER_TOKEN?: string;
  ALGO_PORT?: string;
  ALGO_SERVER?: string;
  ALGO_TOKEN?: string;
  REACH_ISOLATED_NETWORK?: string;
};

/** Custom Announcers for the SDK */
export type SDKContractOverrides = {
  /** The id of a custom triumvirate to replace the default */
  protocolId?: string;
  /** The address of a custom triumvirate to replace the default */
  protocolAddress?: string;
  /** Application ID of a custom Partner Farm announcer */
  partnerFarmAnnouncerId?: string;
  /** Application ID of a custom Public Farm announcer */
  publicFarmAnnouncerId?: string;
  /** Application ID of Limit Order announcer */
  limitOrderAnnouncerId?: string;
};

/** Configuration options for the SDK */
export type SDKOpts = {
  /** (Optional) Network Provider (`TestNet` or `MainNet`). Defaults to `TestNet` */
  network?: NetworkProvider;
  /** Slippage Tolerance: defaults to 0.5% */
  slippageTolerance?: number;
  /** Custom Announcers for the SDK */
  contractOverrides?: SDKContractOverrides;
  // The id and address of a custom triumvirate to use instead of the default (only works on testnet)
  /* customTriumvirateId?: string;
  customTriumvirateAddress?: string;
  customFarmAnnouncerAddress?: string; */
} & ReachEnvOpts;
