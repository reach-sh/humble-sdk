# HumbleSDK | Methods

<header>
  <img src="./logo-white.svg" width="80" height="auto">
</header>

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Methods are listed below, along with usage examples where possible.

## Table of contents
The following methods are exported from the SDK:
- [HumbleSDK | Methods](#humblesdk--methods)
  - [Table of contents](#table-of-contents)
  - [initHumbleSDK](#inithumblesdk)
      - [initHumbleSDK Example](#inithumblesdk-example)
      - [initHumbleSDK Parameters](#inithumblesdk-parameters)
  - [createReachAPI](#createreachapi)
      - [createReachAPI Example](#createreachapi-example)
      - [createReachAPI Returns](#createreachapi-returns)
  - [subscribeToPoolStream](#subscribetopoolstream)
      - [subscribeToPoolStream Example](#subscribetopoolstream-example)
      - [subscribeToPoolStream Parameters](#subscribetopoolstream-parameters)
      - [subscribeToPoolStream Returns](#subscribetopoolstream-returns)
  - [addLiquidity](#addliquidity)
      - [addLiquidity Example](#addliquidity-example)
      - [addLiquidity Parameters](#addliquidity-parameters)
        - [DepositTxnOpts](#deposittxnopts)
      - [addLiquidity Returns](#addliquidity-returns)
  - [fetchPool](#fetchpool)
      - [fetchPool Example](#fetchpool-example)
      - [fetchPool Parameters](#fetchpool-parameters)
      - [fetchPool Returns](#fetchpool-returns)
  - [fetchToken](#fetchtoken)
      - [fetchToken Example](#fetchtoken-example)
      - [fetchToken Parameters](#fetchtoken-parameters)
      - [fetchToken Returns](#fetchtoken-returns)
  - [calculatePairOpposite](#calculatepairopposite)
      - [calculatePairOpposite Example](#calculatepairopposite-example)
      - [calculatePairOpposite Parameters](#calculatepairopposite-parameters)
      - [calculatePairOpposite Returns](#calculatepairopposite-returns)
  - [calculatePriceImpact](#calculatepriceimpact)
      - [calculatePriceImpact Example](#calculatepriceimpact-example)
      - [calculatePriceImpact Parameters](#calculatepriceimpact-parameters)
      - [calculatePriceImpact Returns](#calculatepriceimpact-returns)
  - [calculateTokenSwap](#calculatetokenswap)
      - [calculateTokenSwap Example](#calculatetokenswap-example)
      - [calculateTokenSwap Parameters](#calculatetokenswap-parameters)
      - [calculateTokenSwap Returns](#calculatetokenswap-returns)
  - [performSwap](#performswap)
      - [performSwap Example: Swap](#performswap-example-swap)
      - [performSwap Example: Price Impact](#performswap-example-price-impact)
      - [performSwap Parameters](#performswap-parameters)
      - [performSwap Returns](#performswap-returns)
  - [getSlippage](#getslippage)
      - [getSlippage Returns](#getslippage-returns)
  - [setSlippage](#setslippage)
      - [setSlippage Example](#setslippage-example)
      - [setSlippage Parameters](#setslippage-parameters)
  - [withdrawLiquidity](#withdrawliquidity)
      - [withdrawLiquidity Example](#withdrawliquidity-example)
      - [withdrawLiquidity Parameters](#withdrawliquidity-parameters)
      - [withdrawLiquidity Returns](#withdrawliquidity-returns)


--- 

## initHumbleSDK
```typescript
function initHumbleSDK(opts?: SDKOpts): void;
```
Prepares the SDK for use. This must be called once before any other functions are used. 

#### initHumbleSDK Example
```typescript
import { initHumbleSDK } from 'humble-sdk';

// Initialize HumbleSDK for Algo TestNet
initHumbleSDK();

// OR with a slippage tolerance of 5%
initHumbleSDK({ slippageTolerance: 5 });
```

#### initHumbleSDK Parameters
* `opts: SDKOpts`\
Optional parameters for `SDKOpts` include:
```typescript
type SDKOpts = {
  // (Optional) Network Provider (`TestNet` or `MainNet`). Defaults to `TestNet` 
  network?: "TestNet" | "MainNet";
  
  // Slippage Tolerance: defaults to 0.5% 
  slippageTolerance?: number;
  
  // (Optional) Node override settings (for using a custom provider with reach stdlib) 
  providerEnv?: {
    ALGO_INDEXER_SERVER: string;
    ALGO_INDEXER_TOKEN: string;
    ALGO_SERVER: string;
    ALGO_TOKEN: string;
    ALGO_INDEXER_PORT?: string;
    ALGO_PORT?: string;
    REACH_ISOLATED_NETWORK?: string;
  };
}
```

^[**Back to contents**](#table-of-contents)

--- 

## createReachAPI
```typescript
function createReachAPI(): ReachStdlib
```
Returns the `stdlib` instance used by the SDK. View reach documentation [**here**](https://docs.reach.sh/frontend/#ref-frontends-js).

#### createReachAPI Example
```typescript
const stdlib = createReachAPI();

// Create an account on the network
const acc = await stdlib.createAccount();
```

#### createReachAPI Returns
Configured `stdlib` instance.

---

## subscribeToPoolStream
```typescript
function subscribeToPoolStream(acc: ReachAccount, opts?: PoolSubscriptionOpts): any;
```
Use this to receive a stream of liquidity `Pools` (and their tokens). This may be desirable if you want to list all available pools on HumbleSwap (TestNet/MainNet per your preference). It is the only way to list all pools in the DEx.\
This function requires a **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc). You can use a throwaway account (e.g. from **reach**'s [`createAccount`](https://docs.reach.sh/frontend/#js_createAccount) method) here, since the operation doesn't cost anything. 

#### subscribeToPoolStream Example
```typescript
import { subscribeToPoolStream, createReachAPI } from "humble-sdk";

const stdlib = createReachAPI();
const acc = await stdlib.createAccount();

// Fetch existing streams and get notified when a new one is created
subscribeToPoolStream(acc, {
    onPoolReceived: (info) => { 
        const [poolAddr, tokenAId, tokenBId] = info;
        console.log(poolAddr, tokenAId, tokenBId); // ... 
     },

    onPoolFetched: (result: FetchPoolTxnResult) => { 
        const { succeeded, poolAddress, data, message } = result;
        if (succeeded) // ... 
     }
})
```

#### subscribeToPoolStream Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `opts?: PoolSubscriptionOpts`\
Subscription options for the pool. Each method below is called for every pool item received. 
```typescript
type PoolSubscriptionOpts = {
    // (Optional) called with an array of items when pool contract data is 
    // received, but BEFORE the pool data is fetched. 
    onPoolReceived?: ([
        poolAddress: string, 
        tokenAId: string, 
        tokenBId: string
    ]) => void;
    // Called when data for a pool has been fetched and formatted
    onPoolFetched(data: FetchPoolTxnResult): any;
}
```

#### subscribeToPoolStream Returns
* `FetchPoolTxnResult`\
  `Pool` data retreived from the contract. See [`Token`](./TYPES.md#token) for token properties.
```typescript
type FetchPoolTxnResult = {
  // Whether the transaction succeeded or failed
  succeeded: boolean;
  // The pool address targeted for the txn
  poolAddress?: string | number;
  // Any useful data associated about the txn (or any error encountered)
  data: {
    // Pool data
    pool: PoolDetails | null;
    // Pool tokens
    tokens: [tokA: Token, tokB: Token];
    // Whether pool has liquidity and is tradeable
    tradeable: boolean;
  };
  // Optional success or failure message
  message?: string;
  // Contract instance used for the transaction. Can be reused in subsequent calls.
  contract?: ReachContract<typeof poolBackend | typeof poolBackendN2NN>;
}
```

^[**Back to contents**](#table-of-contents)

--- 

## addLiquidity
```typescript
function addLiquidity(acc: ReachAccount, opts: DepositTxnOpts): Promise<TransactionResult>
```
Adds liquidity to a `Pool`.

#### addLiquidity Example
See [`fetchPool`](#fetchpool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
```typescript
import { addLiquidity } from "humble-sdk";

const pool = /* pool source */
const { tokenAId } = pool;

// Order of inputs is important
const amountA = 100;
const amountB = calculatePairOpposite(amountA, tokenAId, pool);

// Create options for adding liquidity
const opts = {
    pool,
    amounts: [amountA, amountB],
    optInToLPToken: true,
};

// Put it all together. If successful, `data` will contain the new total 
// of LP tokens in the pool
const { succeeded, message, data } = await addLiquidity(acc, opts);
```

#### addLiquidity Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `opts?: DepositTxnOpts` Additional options (see below).\
For additional options, see [`ReachTxnOpts`](./TYPES.md#reachtxnopts).
##### DepositTxnOpts
```typescript
type DepositTxnOpts = {
  // Deposit Amounts (for Pool tokens `A` and `B` respectively). Order of
  // amounts is important, or the transaction may fail.
  amounts: [amountA: number | string, amountB: number | string];

  // Data about target pool to deposit
  pool: PoolInfo;

  // When true, will opt user account into pool liquidity token. If false and
  // user hasn't opted-in, the transaction may fail. Defaults to `false`.
  optInToLPToken?: boolean;
} & ReachTxnOpts
```

#### addLiquidity Returns
* [`TransactionResult`](./TYPES.md#transactionresult)\
  where `TransactionResult.data` contains minted pool LP tokens after deposit. 


^[**Back to contents**](#table-of-contents)

--- 

## fetchPool
```typescript
function fetchPool(acc: ReachAccount, poolAddress: string | number, opts?: FetchPoolOpts): Promise<FetchPoolTxnResult>;
```
Fetch data about a single liquidity pool.

#### fetchPool Example
```typescript
import { fetchPool } from "humble-sdk";

// Get a pool ID or reference to one (see 'subscribeToPoolStream')
// The following is only an example, and is not a real pool id
const poolId = 1122334455;
const { succeeded, data } = await fetchPool(poolId, { n2nn: true });
if (succeeded) {
    // See 'FetchPoolTxnResult' for everything in 'data'
    const { pool, tokens } = data; 
    console.log(pool); /* outputs ->
    {
        "poolAddress": 1122334455,
        "poolTokenId": 76797026,
        "mintedLiquidityTokens": 11858542,
        "n2nn": true,
        "tokenABalance": "1221314151617.88889",
        "tokenAFees": "0",
        "tokenAId": "0",
        "tokenADecimals": 6,
        "tokenBBalance": "1211314151617.3897",
        "tokenBFees": "0",
        "tokenBId": 10458941,
        "tokenBDecimals": 6
    }
     */
}
```

#### fetchPool Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `poolAddress: string | number` The application ID (or contract address) of the `Pool` you want to fetch.
* `opts?: FetchPoolOpts`\
For additional options, see [`ReachTxnOpts`](./TYPES.md#reachtxnopts).
```typescript
type FetchPoolOpts = ReachTxnOpts & {
    // When set to true, this means one of the pool tokens is a network token (e.g. "ALGO" 
    // or "ETH"). The correct value is required for fetching the pool data. 
    n2nn: boolean;
};
```

#### fetchPool Returns
For pool data properties, see [`PoolDetails`](./TYPES.md#pooldetails)
```typescript
type FetchPoolTxnResult = {
    // Whether the transaction succeeded or failed 
    succeeded: boolean;
    // The pool address targeted for the txn 
    poolAddress?: string | number;
    // Any useful data associated about the txn (or any error encountered) 
    data: {
        /** Pool data */
        pool: PoolDetails | null;
        /** Pool token data */
        tokens: [tokA: any, tokB: any];
        /** Whether pool has liquidity and is tradeable */
        tradeable: boolean;
    };
    // Optional success or failure message 
    message?: string;
    // Contract instance used for the transaction. Can be reused in subsequent calls. 
    contract?: ReachContract<typeof poolBackend | typeof poolBackendN2NN>;
};
```

^[**Back to contents**](#table-of-contents)

--- 

## fetchToken
```typescript
function fetchToken(acc: ReachAccount, token: string | number | Maybe): Promise<Token>
```
Fetch data about a single token

#### fetchToken Example
```typescript
// can also be ["Some", 123123] or "123123"
const tokenId = 123123; 

console.log(await fetchToken(acc, tokenId)); /* -> {
    id: 123123;
    name: "Some Token name";
    symbol: "SOMETOKN";
    url: "https://not-a-real.token/or-website";
    supply: "10000000000";
    decimals: 4;
} */
```

#### fetchToken Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `token: string | number` Token ID

#### fetchToken Returns
* [`Token`](#token) **Token** data

^[**Back to contents**](#table-of-contents)

---

## calculatePairOpposite
```typescript
function calculatePairOpposite(amountIn: number, tokenIn: string | number, pool: PoolDetails): string;
```
Use to calculate the other half of a liquidity deposit amount based on the pool. This will be relevant only for [**adding liquidity**](#addliquidity).
> **💡** If you are adding liquidity (depositing) into `A/B` pool, but only know how much `B` token you want to deposit, use `calculatePairOpposite( ... )` to calculate how much `A` you will pay based on that (`B`) amount.

#### calculatePairOpposite Example
See [`addLiquidity`](#addliquidity) for example usage.

#### calculatePairOpposite Parameters
All input params are required.
* `amountIn: number` User's input amount
* `tokenIn: string | number` The token associated with the input amount
* `pool: PoolDetails` The Liquidity pool target
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

#### calculatePairOpposite Returns
Amount of opposite token that will be *required* for the deposit as a `string`.

^[**Back to contents**](#table-of-contents)

---

## calculatePriceImpact
```typescript
function calculatePriceImpact(amtA: string | number, opts: SwapTxnOpts): string | 0;
```
Compares the size of expected swap output to the size of an "ideal" output.\
**Price impact** computes 
* the output if the pool was (hypothetically) "perfectly balanced"
* the expected output of a swap with the pool's current state

and compares the two.\
So e.g. if `calculatePriceImpact(x, { ... })` returns `20`, it means that trade
will result in 20% less value than if the pool was balanced by (e.g.) more liquidity.

#### calculatePriceImpact Example
See [Perform Swap](#performswap) for usage.

#### calculatePriceImpact Parameters
* `amtA: string | number` input amount (can represent amount for token `A` or `B`) 
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### calculatePriceImpact Returns
* `string` **Price impact** value as a string. Value is a percentage (so e.g. `5` === `5%`)

^[**Back to contents**](#table-of-contents)

--- 

## calculateTokenSwap
```typescript
function calculateTokenSwap(opts: SwapTxnOpts): SwapInfo
```
Calculates how much you should expect from a swap, based on the amount put in and the state of the pool.

#### calculateTokenSwap Example
See [Perform Swap](#performswap) for usage.

#### calculateTokenSwap Parameters
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### calculateTokenSwap Returns
* `SwapInfo`\
An object with your input amount and expected outputs. You can use this object to perform a swap transaction. 

^[**Back to contents**](#table-of-contents)

--- 

## performSwap
```typescript
function performSwap(acct: ReachAccount, opts: SwapTxnOpts): Promise<TransactionResult>
```
Swap one token in a Liquidity Pool for another.

#### performSwap Example: Swap
See [`fetchPool`](#fetchpool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
```typescript
const pool = /* pool source */

// Calculate expected swap output
const { tokenAId, tokenBId } = pool;
const amountA = 100
const swap = calculateTokenSwap({ 
    pool, 
    swap: { amountA, tokenAId, tokenBId } 
});

// Perform swap
const swapOpts = { poolAddress: pool.poolAddress, swap, pool };
const { data, message, succeeded } = await performSwap(acc, swapOpts);
// if (succeeded) data == { amountIn: string; amountOut: string }
```

#### performSwap Example: Price Impact
(Optional) Calculate price impact to ensure the best price. Price impact is inversely proportional to expected swap output:
the higher the price impact, the smaller the swap output.\
This calculation doesn't affect the swap operation and is only included for illustration.
```typescript
const pool = /* pool source */
const { tokenAId, tokenBId } = pool;
const amountA = 100
const calcOpts = { pool, swap: { amountA, tokenAId, tokenBId } };
const impact = calculatePriceImpact(amountA, calcOpts);
console.log(impact); //  "3.04"
```

#### performSwap Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### performSwap Returns
* `TransactionResult`\
  where `data` = `{ amountIn: string; amountOut: string }` when successful

^[**Back to contents**](#table-of-contents)

--- 

## getSlippage
```typescript
function getSlippage(): number
```
Gets your slippage config setting. This will be the value you (optionally) passed into `initHumbleSDK` at application start. This 
setting is used by the SDK whenever you perform a swap, and helps protect you from unexpected price movements between the
submission of your transaction and its completion.\
Defaults to `0.5` if none is explicitly set.

#### getSlippage Returns
* `number` **Slippage setting*

^[**Back to contents**](#table-of-contents)

--- 

## setSlippage
```typescript
function setSlippage(slippage: number = 0.5): void
```
Configure your slippage settings *after* initializing HumbleSDK. 

#### setSlippage Example
```typescript
import { getSlippage, setSlippage, initHumbleSDK } from "humble-sdk";

initHumbleSDK({ slippageTolerance: 10 });
console.log(getSlippage()); // 10

setSlippage(0.5);
console.log(getSlippage()); // 0.5
```

#### setSlippage Parameters
* `slippage: number` Slippage value. Defaults to `0.5`

^[**Back to contents**](#table-of-contents)

--- 

## withdrawLiquidity
```typescript
export async function withdrawLiquidity(
  acc: ReachAccount,
  opts: WithdrawOpts
): Promise<TransactionResult>
```
Withdraw a percentage of the user's liquidity from a Pool.

#### withdrawLiquidity Example
See [`fetchPool`](#fetchpool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
```typescript
const percentToWithdraw = 15; // Withdraw 15% of liquidity
const pool = /* pool source */;
const { succeeded, message, data } = await withdrawLiquidity(acc, {
    percentToWithdraw,
    n2nn: pool.n2nn,
    poolAddress: pool.poolAddress,
    poolTokenId: pool.poolTokenId,
});

```

#### withdrawLiquidity Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `opts: WithdrawOpts`: Withdrawal parameters.\
For additional options, see [`ReachTxnOpts`](./TYPES.md#reachtxnopts).
```typescript
type WithdrawOpts = ReachTxnOpts & {
    /** Percentage of liquidity to withdraw as a number. (e.g. 5 = `5%`) */
    percentToWithdraw: number;
    poolTokenId: string | number;
    n2nn: boolean;
}
```

#### withdrawLiquidity Returns
* `TransactionResult`\
  If successful, the `data` key will contain `{ poolLPTokens: number }` where `poolLPTokens` is the total number of minted LP Tokens in the pool.

^[**Back to contents**](#table-of-contents)

--- 

[**Return Home**](./README.md)

---