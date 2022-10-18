[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Methods are listed below, along with usage examples where possible.\
[**Home Page**](./index.md)

---

## Shared Methods

The following are shared methods available in the SDK. Check [**all sections**](#all-sections) for content that was moved here.

- [Shared Methods](#shared-methods)
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
- [subscribeToFarmStream](#subscribetofarmstream)
  - [subscribeToFarmStream Example](#subscribetofarmstream-example)
  - [subscribeToFarmStream Parameters](#subscribetofarmstream-parameters)
  - [subscribeToFarmStream Returns](#subscribetofarmstream-returns)
- [fetchToken](#fetchtoken)
  - [fetchToken Example](#fetchtoken-example)
  - [fetchToken Parameters](#fetchtoken-parameters)
  - [fetchToken Returns](#fetchtoken-returns)
- [getSlippage](#getslippage)
  - [getSlippage Returns](#getslippage-returns)
- [setSlippage](#setslippage)
  - [setSlippage Example](#setslippage-example)
  - [setSlippage Parameters](#setslippage-parameters)
- [All Sections](#all-sections)

---

## initHumbleSDK

```typescript
function initHumbleSDK(opts?: SDKOpts): void;
```

Prepares the SDK for use. This must be called once before any other functions are used.

#### initHumbleSDK Example

```typescript
import { initHumbleSDK } from "@reach-sh/humble-sdk";

// Initialize HumbleSDK for Algo TestNet
initHumbleSDK();

// OR with a slippage tolerance of 5%
initHumbleSDK({ slippageTolerance: 5 });
```

#### initHumbleSDK Parameters

- `opts: SDKOpts`\
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
};
```

^[**Back to contents**](#shared-methods)

---

## createReachAPI

```typescript
function createReachAPI(): ReachStdlib;
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
function subscribeToPoolStream(
  acc: ReachAccount,
  opts?: PoolSubscriptionOpts
): any;
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
    // When this is "true", the stream will start listening from the current block.
    // Otherwise you get everything from when the Protocol contract was created.
    seekNow: false, // default is "false"

    // This gets called as soon as the pool id, and the ids of its tokens, are
    // received. The pool data hasn't been fetched yet and may still fail to do so.
    // Implementing this method is optional.
    onPoolReceived: (info) => {
        const [poolAddr, tokenAId, tokenBId] = info;
        console.log(poolAddr, tokenAId, tokenBId); // ...
     },

    // This gets called as soon as the pool (with its tokens') data has been
    // fetched. If the attempt failed, 'result.succeeded' will be false.
    onPoolFetched: (result: FetchPoolTxnResult) => {
        const { succeeded, poolAddress, data, message } = result;
        if (succeeded) // ...
     }
})
```

#### subscribeToPoolStream Parameters

- `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
- `opts?: PoolSubscriptionOpts`\
  Subscription options for the pool. Each method below is called for every pool item received.

```typescript
type PoolSubscriptionOpts = {
    // (Optional) Start listening from the current block when true
    seekNow?: boolean;

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

##### Additional notes
You can now provide EITHER `onPoolReceived` OR `onPoolFetched` (or both!) to the `subscribeToPoolStream` function. This allows you to optimize caching:
- `onPoolReceived` is called as soon as data is received from the blockchain. 
  - It gives you a **pool application id**, as well as pool token ids in the order they appear. 
  - At first, it will return a big stream of events. When it "catches up", it will fall quiet until new data is received. 
- `onPoolFetched` is only called **if you pass in the option**. 
  - This may be more data-intensive, because it doesn't do any caching
  - However, it will return full token data along with the pool info

See [here](#why-doesnt-the-sdk-cache-data) for more

#### subscribeToPoolStream Returns

- `FetchPoolTxnResult`\
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
};
```

^[**Back to contents**](#shared-methods)

---

## subscribeToFarmStream

```typescript
function subscribeToFarmStream(
  acc: ReachAccount,
  opts?: PoolSubscriptionOpts
): any;
```

Use this to receive a stream of `Farms` and their static details. This may be desirable if you want to list all available farms on HumbleSwap (TestNet/MainNet per your preference). It is the only way to list all farms in the DEx.\
This function requires a **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc). You can use a throwaway account (e.g. from **reach**'s [`createAccount`](https://docs.reach.sh/frontend/#js_createAccount) method) here, since the operation doesn't cost anything.

#### subscribeToFarmStream Example

```typescript
import { subscribeToFarmStream, createReachAPI } from "humble-sdk";

const stdlib = createReachAPI();
const acc = await stdlib.createAccount();

// Fetch existing streams and get notified when a new one is created
subscribeToFarmStream(acc, {
    // When this is "true", the stream will start listening from the current block.
    // Otherwise you get everything from when the Protocol contract was created.
    seekNow: false, // default is "false"

    // This gets called as soon as the farm data has been
    // fetched. If the attempt failed, 'result.succeeded' will be false.
    onFarmFetched: (data: TransactionResult<StaticFarmDataFormatted>) => {
        const { succeeded, poolAddress, data, message } = data;
        if (succeeded) // ...
    },

    // Set the format to true if you want to receive the formatted farm data.
    format: true,
})
```

#### subscribeToFarmStream Parameters

- `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
- `opts?: FarmSubscriptionOpts`\
  Subscription options for the pool. Each method below is called for every pool item received.

```typescript
type FarmSubscriptionOpts = {
  // (Optional) Start listening from the current block when true
  seekNow?:boolean;

  // called when farm contract data is received
  onFarmFetched(
    data: TransactionResult<StaticFarmDataUnformatted | StaticFarmDataFormatted>
  ): any;
  // boolean to determine whether the farm data from onFarmFetched
  // should be formatted or left unformatted
  format?: boolean;
} & ReachTxnOpts;
```

#### subscribeToFarmStream Returns

- `TransactionResult<StaticFarmDataUnformatted>`\

```typescript
export type TransactionResult<StaticFarmDataUnformatted> = {
  /** Whether the transaction succeeded or failed */
  succeeded: boolean;
  /** Any useful data associated about the txn (or any error encountered) */
  data: {
    // The contract ID for the farm
    ctcInfo: BigNumber;
    // The block at which the farm starts distributing rewards
    startBlock: BigNumber;
    // The block at which the farm stops distributing rewards
    endBlock: BigNumber;
    // The amount of ALGO (rewardsPerBlock[0]) and the reward
    // token (rewardsPerBlock[1]) distributed per block
    rewardsPerBlock: [BigNumber, BigNumber];
    // The ID of token A for the staked liquidity token
    pairTokenAId: Maybe<BigNumber>;
    // The symbol of token A for the staked liquidity token
    pairTokenASymbol: string;
    // The ID of token B for the staked liquidity token
    pairTokenBId: BigNumber;
    // The symbol of token B for the staked liquidity token
    pairTokenBSymbol: string;
    // The ID for the reward token
    rewardTokenId: BigNumber;
    // The decimals for the reward token
    rewardTokenDecimals: BigNumber;
    // The symbol for the reward token
    rewardTokenSymbol: string;
    // The ID for the staked token
    stakedTokenId: BigNumber;
    // The decimals for the staked token
    stakedTokenDecimals: BigNumber;
    // The symbol for the staked token
    stakedTokenSymbol: string;
    // The pool ID that corresponds to the staked liquidity token
    stakedTokenPoolId: BigNumber;
    // The total supply of the staked token
    stakedTokenTotalSupply: BigNumber;
  };
  /** Optional success or failure message */
  message: string;
  /** Contract instance used for the transaction. Can be reused in subsequent calls. */
  contract?: ReachContract<any>;
};
```

- `TransactionResult<StaticFarmDataFormatted>`\

```typescript
export type StaticFarmDataFormatted = {
  /** Whether the transaction succeeded or failed */
  succeeded: boolean;
  /** Any useful data associated about the txn (or any error encountered) */
  data: {
    // The contract ID for the farm
    ctcInfo: string;
    // The block at which the farm starts distributing rewards
    startBlock: number;
    // The block at which the farm stops distributing rewards
    endBlock: number;
    // The amount of ALGO and the reward token distributed per block
    rewardsPerBlock: FormattedRewardsPerBlock;
    // The ID of token A for the staked liquidity token
    pairTokenAId: string;
    // The symbol of token A for the staked liquidity token
    pairTokenASymbol: string;
    // The ID of token B for the staked liquidity token
    pairTokenBId: string;
    // The symbol of token B for the staked liquidity token
    pairTokenBSymbol: string;
    // The ID for the reward token
    rewardTokenId: string;
    // The decimals for the reward token
    rewardTokenDecimals: number;
    // The symbol for the reward token
    rewardTokenSymbol: string;
    // The ID for the staked token
    stakedTokenId: string;
    // The decimals for the staked token
    stakedTokenDecimals: number;
    // The symbol for the staked token
    stakedTokenSymbol: string;
    // The pool ID that corresponds to the staked liquidity token
    stakedTokenPoolId?: string;
    // The total supply of the staked token
    stakedTokenTotalSupply: string;
  };
  /** Optional success or failure message */
  message: string;
  /** Contract instance used for the transaction. Can be reused in subsequent calls. */
  contract?: ReachContract<any>;
};
```

- `FormattedRewardsPerBlock`\

```typescript
export type FormattedRewardsPerBlock = {
  // The amount of ALGO distributed per block
  asDefaultNetworkToken: string;
  // The amount of the reward token distributed per block
  asRewardToken: string;
};
```

^[**Back to contents**](#shared-methods)

---

## fetchToken

```typescript
function fetchToken(
  acc: ReachAccount,
  token: string | number | Maybe
): Promise<Token>;
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

- `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
- `token: string | number` Token ID

#### fetchToken Returns

- [`Token`](#token) **Token** data

^[**Back to contents**](#shared-methods)

---

## getSlippage

```typescript
function getSlippage(): number;
```

Gets your slippage config setting. This will be the value you (optionally) passed into `initHumbleSDK` at application start. This
setting is used by the SDK whenever you perform a swap, and helps protect you from unexpected price movements between the
submission of your transaction and its completion.\
Defaults to `0.5` if none is explicitly set.

#### getSlippage Returns

- `number` \*_Slippage setting_

^[**Back to contents**](#shared-methods)

---

## setSlippage

```typescript
function setSlippage(slippage: number = 0.5): void;
```

Configure your slippage settings _after_ initializing HumbleSDK. The number is treated as a percentage (i.e. `0.5` === `0.5%`).

#### setSlippage Example

```typescript
import { getSlippage, setSlippage, initHumbleSDK } from "@reach-sh/humble-sdk";

initHumbleSDK({ slippageTolerance: 10 });
console.log(getSlippage()); // 10

setSlippage(0.5);
console.log(getSlippage()); // 0.5
```

#### setSlippage Parameters

- `slippage: number` Slippage value. Defaults to `0.5`

^[**Back to contents**](#shared-methods)

---


## Why doesn't the SDK cache data?

> The HumbleSwap SDK was created with the intention of being platform-agnostic. Caching would either 
> introduce new
> 1. Dependencies for the SDK, or 
> 2. Complexities or restrictritions for end-users 
> 
> This is why the SDK prioritizes interoperability, so that end-users can tackle their own optimizations.
> 

### Optimized Pool Fetching

Try the following steps:

1. Use `onPoolReceived` to identify unique token and pool IDs
  - Write token ids to a `Set` for extreme uniqueness
  - You will also want to track every `pool + tokenAId + tokenBId` combo for (2(ii)) below
2. When the `announcer` stream is quiet for up to ~1.5 seconds, trigger your data-fetching:
  - Fetch all the unique **tokens** first, then
  - Fetch each pool: in the pool-fetch options,
    - set `includeTokens` to `false`, and
    - include the pool's tokens from the list you fetched above (order is important!)

This allows you to control the amount of requests made by the SDK, since it won't be re-fetching tokens as frequently.
 

^[**Back to contents**](#shared-methods)

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
