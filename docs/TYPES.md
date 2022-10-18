[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Types are listed below.\
[**Home Page**](./index.md)

---

## Type Definitions
- [Type Definitions](#type-definitions)
- [TokenID](#tokenid)
- [ReachAccount](#reachaccount)
- [PoolDetails](#pooldetails)
- [PoolInfo](#poolinfo)
- [ReachTxnOpts](#reachtxnopts)
- [SwapTxnOpts](#swaptxnopts)
- [SwapInfo](#swapinfo)
- [Token](#token)
- [TransactionResult](#transactionresult)

--- 

## TokenID 
A representation of a token ID. 
```typescript
type TokenID = string | number;
```
--- 

## ReachAccount 

A **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc). This object is created by the [**Reach standard library**](https://www.npmjs.com/package/@reach-sh/stdlib); the typedef below is only used as a reference. 

```typescript
interface ReachAccount {
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
}
```

--- 

## PoolDetails 
Enhanced pool information.
```typescript
type PoolDetails = PoolInfo & {
    // Balance of user pool LP tokens (amount of user Liquidity in the pool) 
    userLiquidity?: any;

    // LP Tokens minted for this pool 
    mintedLiquidityTokens?: any;

    // Balance of Pool `Token A` 
    tokenABalance?: string | number;

    // Fees accrued from `Token A` 
    tokenAFees?: string | number;

    // Balance of Pool `Token B` 
    tokenBBalance?: string | number;

    // Fees accrued from `Token B` 
    tokenBFees?: string | number;
}
```
^[**Back to contents**](#type-definitions)

---

## PoolInfo
SDK Functions always return this object (including for errors). Additional information from the function (or underlying transaction) will be found in the `data` property.
```typescript
type PoolInfo = {
    /** Pool contract address (or Algorand application ID) */
    poolAddress: string | number;

    // Pool's `Token A` id. Will be '0' for network token (e.g. ALGO or ETH)
    tokenAId: string | number;

    // Pool's `Token B` id
    tokenBId: string | number;

    // Number of decimal places for `Token A`. Defaults to `6`
    tokenADecimals?: number;

    // Number of decimal places for `Token B`. Defaults to `6`
    tokenBDecimals?: number;

    // When true, indicates this pool uses a network token (e.g. ALGO or ETH)
    n2nn?: boolean;

    // Liquidity Token ID
    poolTokenId?: string | number;
}
```
^[**Back to contents**](#type-definitions)

---

## ReachTxnOpts
Most transactions (or SDK functions) will accept the following additional properties, if you provide them (or have them available.\
For example, if you are performing multiple actions on the same pool, you can reuse the `contract` instance to slightly reduce the amount of network calls.\
You can also pass `console.log` as the value of `onProgress` to see the steps being taken by the SDK in certain transactions. 
```typescript
type ReachTxnOpts = {
    // (Optional) The pool address targeted for the txn 
    poolAddress?: string | number;

    // A pre-attached `ReachContract` object, if any, to speed up initialization 
    contract?: ReachContract<T>;

    // Optional function to call when withdrawal action is complete 
    onComplete?: (...args: any[]) => void;

    // Optional function to call as the transaction progresses
    // (e.g. for UI notifications) 
    onProgress?: (msg: string) => void;
}
```
^[**Back to contents**](#type-definitions)

---

## SwapTxnOpts
An object-type used in swap operations. For additional options, see [`ReachTxnOpts`](#reachtxnopts).
```typescript
type SwapTxnOpts = {
    // Info about the swap you will perform
    swap: SwapInfo;

    // Info about the pool you will swap in
    pool?: PoolDetails;
} & ReachTxnOpts;
```
^[**Back to contents**](#type-definitions)

---

## SwapInfo
An object-type used in swap operations. For additional options, see [`ReachTxnOpts`](#reachtxnopts).
```typescript
type SwapInfo = {
    // ID of token you will pay in
    tokenAId: string | number;

    // ID of token you want to receive
    tokenBId: string | number;

    // Amount of token you will pay in
    amountA?: any;

    // Amount of token you expect to receive
    amountB?: any;

    // ID of token being paid in. You may not need to supply this in all cases.
    tokenIn?: string | number;
}
```
^[**Back to contents**](#type-definitions)

---

## Token
**Token** metadata
```typescript
type Token = {
    id: string | number;
    name: string;
    symbol: string;
    url: string;
    supply: string;
    decimals: number;
}
```
^[**Back to contents**](#type-definitions)

---

## TransactionResult
SDK Functions always return this object (including for errors). Additional information from the function (or underlying transaction) will be found in the `data` property.
```typescript
type TransactionResult<T> = {
    // When true, the transaction succeeded. Quick way to check for an error.
    succeeded: boolean;

    // The pool address targeted for the txn, if any. Some functions (e.g. "fetchToken") don't require or return one.
    poolAddress?: string | number;

    // Any useful data associated about the txn (or any error encountered). The contents will depend on the function that returns it
    data: T;

    // Success or failure message 
    message: string;

    // Contract instance used for the transaction. You can reuse it in subsequent calls to reduce the amount of network requests made. 
    contract?: ReachContract<any>;
}
```

^[**Back to contents**](#type-definitions)

---

# All Sections

- [Shared methods](./METHODS.md)
- [Swapping](./SWAPPING.md)
- [Liquidity Pools](./LIQUIDITY-POOLS.md)
- [Liquidity Pool ABI](./LP-ABI.md)
- [Farming/Staking Pools](./FARMING.md)
- [Types](./TYPES.md)

[**Return Home**](./index.md)

---

[logo]: ./logo-white.svg


