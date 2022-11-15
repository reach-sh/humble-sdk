[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Methods are listed below, along with usage examples where possible.\
[**Home Page**](./index.md)

---
# Liquidity Pools

Functions for managing liquidity pools (creating; adding/removing liquidity).\
Swapping is in a separate document.
- [Liquidity Pools](#liquidity-pools)
  - [createLiquidityPool](#createliquiditypool)
      - [Transaction Options](#transaction-options)
      - [createLiquidityPool Example](#createliquiditypool-example)
      - [createLiquidityPool Returns](#createliquiditypool-returns)
  - [calculateOtherAmount](#calculateotheramount)
      - [calculateOtherAmount Example](#calculateotheramount-example)
      - [calculateOtherAmount Parameters](#calculateotheramount-parameters)
      - [calculateOtherAmount Returns](#calculateotheramount-returns)
  - [calculatePairOpposite](#calculatepairopposite)
  - [addLiquidity](#addliquidity)
      - [addLiquidity Example](#addliquidity-example)
      - [addLiquidity Parameters](#addliquidity-parameters)
        - [DepositTxnOpts](#deposittxnopts)
      - [addLiquidity Returns](#addliquidity-returns)
  - [fetchLiquidityPool](#fetchliquiditypool)
      - [fetchLiquidityPool Example](#fetchliquiditypool-example)
      - [fetchLiquidityPool Parameters](#fetchliquiditypool-parameters)
      - [fetchLiquidityPool Returns](#fetchliquiditypool-returns)
  - [withdrawLiquidity](#withdrawliquidity)
      - [withdrawLiquidity Example](#withdrawliquidity-example)
      - [withdrawLiquidity Parameters](#withdrawliquidity-parameters)
      - [withdrawLiquidity Returns](#withdrawliquidity-returns)
- [All Sections](#all-sections)


---

## createLiquidityPool
```typescript
async function createLiquidityPool(
  acc: ReachAccount,
  opts: CreatePoolTxnOpts
): Promise<TransactionResult<PoolInfo>> 
```
Create a liquidity pool for a pair of tokens. 

#### Transaction Options
```typescript
type CreatePoolTxnOpts = {
  tokenIds: [string | number, string | number];
  tokenAmounts: [a: number, b: number];
} & ReachTxnOpts;
```

#### createLiquidityPool Example
```typescript
import { createLiquidityPool } from "@reach-sh/humble-sdk";

// Options for calling "createLiquidity"
const createOpts = {
    tokenAmounts: [100, 200] as [number, number],
    tokenIds: [112233, 446688] as [any, any],

    // progress bar updated
    onProgress(msg: string) {
      if (msg === 'SIGNING_EVENT') {
        // This is emitted when the connected account will be asked to sign a transaction.
        // You can ignore or use it to show a "Sign transaction in your wallet" message
      } else {
        // otherwise the message tells what the SDK is currently doing for this transaction
      }
    },
  }

const acc = /* connected account */;
const result = await createLiquidityPool(acc, createOpts)
const { data, succeeded, message } = result
if (!succeeded || !data?.poolTokenId) {
    // Pool creation failed; handle error
    // or check 'message' for an explanation
}

// If here, Pool creation and funding was successful
const { poolAddress, tokenAId, tokenBId, poolTokenId } = data;

// do something with 'data'
```

#### createLiquidityPool Returns
`PoolInfo` about the new pool.
```typescript
type PoolInfo = {
  /** `Token A` id. Use '0' for network token  */
  tokenAId: string | number;
  /** `Token B` id */
  tokenBId: string | number;
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
}
```

---


## calculateOtherAmount
```typescript
function calculateOtherAmount(amountIn: number, tokenIn: string | number, pool: PoolDetails): string;
```
Use to calculate the other half of a liquidity deposit amount based on the pool. This will be relevant only for [**adding liquidity**](#addliquidity).
> **💡** If you are adding liquidity (depositing) into `A/B` pool, but only know how much `B` token you want to deposit, use `calculateOtherAmount( ... )` to calculate how much `A` you will pay based on that (`B`) amount.

#### calculateOtherAmount Example
See [`addLiquidity`](#addliquidity) for example usage.

#### calculateOtherAmount Parameters
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

#### calculateOtherAmount Returns
Amount of opposite token that will be *required* for the deposit as a `string`.

^[**Back to contents**](#liquidity-pools)

---

## calculatePairOpposite
Renamed to [`calculateOtherAmount`](#calculateotheramount)

^[**Back to contents**](#liquidity-pools)

---

## addLiquidity
```typescript
function addLiquidity(acc: ReachAccount, opts: DepositTxnOpts): Promise<TransactionResult>
```
Adds liquidity to a `Pool`.

#### addLiquidity Example
See [`fetchLiquidityPool`](#fetchliquiditypool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
```typescript
import { addLiquidity } from "@reach-sh/humble-sdk";

const pool = /* pool source */
const { tokenAId } = pool;

// Order of inputs is important
const amountA = 100;
const amountB = calculateOtherAmount(amountA, tokenAId, pool);

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


^[**Back to contents**](#liquidity-pools)

--- 

## fetchLiquidityPool
```typescript
function fetchLiquidityPool(acc: ReachAccount, opts?: FetchPoolOpts): Promise<FetchPoolTxnResult>;
```
Fetch data about a single liquidity pool.

#### fetchLiquidityPool Example
```typescript
import { fetchLiquidityPool } from "@reach-sh/humble-sdk";

// Get a pool ID or reference to one (see 'subscribeToPoolStream')
// The following is only an example, and is not a real pool id
const acc = /* account source */;
const { succeeded, data } = await fetchLiquidityPool(acc, { 
    poolAddress: 1122334455,
    n2nn: true 
});

if (succeeded) {
    // See 'FetchPoolTxnResult' for everything in 'data'
    const { pool, tokens } = data; 
    console.log(pool); /* outputs ->
    {
        "poolAddress": "1122334455",
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

#### fetchLiquidityPool Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* `poolAddress: string | number` The application ID (or contract address) of the `Pool` you want to fetch.
* `opts?: FetchPoolOpts`
```typescript
type FetchPoolOpts = ReachTxnOpts & {
    n2nn: boolean;
    poolAddress: string | number
    includeTokens?: boolean
    tokens?: [Token, Token]
};
```
* `opts.n2nn`: When set to true, this means one of the pool tokens is a network token (e.g. "ALGO" or "ETH"). The correct value is required for fetching the pool data. 
* `opts.poolAddress`: Address of the pool you want to fetch
* `opts.includeTokens`: (optional) Whether to fetch pool tokens as well. If set to false, you MUST provide a pair of token objects to the function using the param below
* `opts.tokens`: (optional) Pool `Token`s. Required when `includeTokens` is `false`. 
  * The order is important! The SDK expects them in the order [`TokenA`, `TokenB`]

For additional options, see [`ReachTxnOpts`](./TYPES.md#reachtxnopts).

#### fetchLiquidityPool Returns
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
    message: string;
    // Contract instance used for the transaction. Can be reused in subsequent calls. 
    contract?: ReachContract<typeof poolBackend | typeof poolBackendN2NN>;
};
```

^[**Back to contents**](#liquidity-pools)

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
See [`fetchLiquidityPool`](#fetchliquiditypool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
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
    /** (optional) Percentage of liquidity to withdraw as a number. (e.g. 5 = `5%`) */
    percentToWithdraw: number;
    /** (optional) Atomic amount of LP Tokens to exchange. Use this OR `percentToWithdraw` */
    exchangeLPTokens: number
    /** LP token ID */
    poolTokenId: string | number;
    /** When "true", the pool contains a network token (e.g. ETH/ALGO) */
    n2nn: boolean;
}
```

#### withdrawLiquidity Returns
* `TransactionResult`\
  If successful, the `data` key will contain `{ poolLPTokens: number }` where `poolLPTokens` is the total number of minted LP Tokens in the pool.

^[**Back to contents**](#liquidity-pools)


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
