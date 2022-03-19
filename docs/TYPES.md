[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Types are listed below.\
[**Home Page**](./index.md)

---

## Table of contents
- [Table of contents](#table-of-contents)
- [PoolDetails](#pooldetails)
- [PoolInfo](#poolinfo)
- [ReachTxnOpts](#reachtxnopts)
- [SwapTxnOpts](#swaptxnopts)
- [SwapInfo](#swapinfo)
- [Token](#token)
- [TransactionResult](#transactionresult)

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
^[**Back to contents**](#table-of-contents)

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
^[**Back to contents**](#table-of-contents)

---

## ReachTxnOpts
Most transactions (or SDK functions) will accept the following additional properties, if you provide them (or have them available; `contract`, for example, is returned from some functions in the SDK).
```typescript
type ReachTxnOpts = {
  // (Optional) The pool address targeted for the txn 
  poolAddress?: string | number;
  
  // A pre-attached `ReachContract` object, if any, to speed up initialization 
  contract?: ReachContract<any>;
  
  // Optional function to call when withdrawal action is complete 
  onComplete?: (...args: any[]) => void;

  // Optional function to call as the transaction progresses
  // (e.g. for UI notifications) 
  onProgress?: (msg: string) => void;
}
```
^[**Back to contents**](#table-of-contents)

---

## SwapTxnOpts
An object-type used in swap operations. For additional options, see [`ReachTxnOpts`](#reachtxnopts).
```typescript
type SwapTxnOpts = {
    swap: SwapInfo;
    pool?: PoolDetails;
} & ReachTxnOpts;
```
^[**Back to contents**](#table-of-contents)

---

## SwapInfo
An object-type used in swap operations. For additional options, see [`ReachTxnOpts`](#reachtxnopts).
```typescript
type type SwapInfo = {
    tokenAId: string | number;
    tokenBId: string | number;
    amountA?: any;
    amountB?: any;
    tokenIn?: string | number;
}
```
^[**Back to contents**](#table-of-contents)

---

## Token
**Token** data
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
^[**Back to contents**](#table-of-contents)

---

## TransactionResult
SDK Functions always return this object (including for errors). Additional information from the function (or underlying transaction) will be found in the `data` property.
```typescript
type TransactionResult = {
    // Whether the transaction succeeded or failed 
    succeeded: boolean;
    // The pool address targeted for the txn 
    poolAddress?: string | number;
    // Any useful data associated about the txn (or any error encountered) 
    data: any;
    // Optional success or failure message 
    message?: string;
    // Contract instance used for the transaction. Can be reused in subsequent calls. 
    contract?: ReachContract<any>;
}
```

^[**Back to contents**](#table-of-contents)

---

[**Return Home**](./index.md)

---

[logo]: ./logo-white.svg


