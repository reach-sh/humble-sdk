[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Methods are listed below, along with usage examples where possible.\
[**Home Page**](./index.md)

---

# Swapping
Swapping utility functions.
- [Swapping](#swapping)
  - [calculatePriceImpact](#calculatepriceimpact)
      - [calculatePriceImpact Example](#calculatepriceimpact-example)
      - [calculatePriceImpact Parameters](#calculatepriceimpact-parameters)
      - [calculatePriceImpact Returns](#calculatepriceimpact-returns)
  - [calculateTokenSwap](#calculatetokenswap)
      - [calculateTokenSwap Example](#calculatetokenswap-example)
      - [calculateTokenSwap Parameters](#calculatetokenswap-parameters)
      - [calculateTokenSwap Returns](#calculatetokenswap-returns)
  - [performSwap](#performswap)
  - [swapTokens](#swaptokens)
      - [swapTokens Example: Swap](#swaptokens-example-swap)
      - [swapTokens Example: Price Impact](#swaptokens-example-price-impact)
      - [swapTokens Parameters](#swaptokens-parameters)
      - [swapTokens Returns](#swaptokens-returns)
- [All Sections](#all-sections)

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
See [Perform Swap](#swapTokens) for usage.

#### calculatePriceImpact Parameters
* `amtA: string | number` input amount (can represent amount for token `A` or `B`) 
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### calculatePriceImpact Returns
* `string` **Price impact** value as a string. Value is a percentage (so e.g. `5` === `5%`)

^[**Back to contents**](#swapping)

--- 

## calculateTokenSwap
```typescript
function calculateTokenSwap(opts: SwapTxnOpts): SwapInfo
```
Calculates how much you should expect from a swap, based on the amount put in and the state of the pool.

#### calculateTokenSwap Example
See [Perform Swap](#swapTokens) for usage.

#### calculateTokenSwap Parameters
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### calculateTokenSwap Returns
* `SwapInfo`\
An object with your input amount and expected outputs. You can use this object to perform a swap transaction. 

^[**Back to contents**](#swapping)

--- 

## performSwap
Renamed to [**Swap Tokens**](#swaptokens)

^[**Back to contents**](#swapping)

--- 

## swapTokens
```typescript
function swapTokens(acct: ReachAccount, opts: SwapTxnOpts): Promise<TransactionResult>
```
Swap one token in a Liquidity Pool for another.

#### swapTokens Example: Swap
See [`fetchLiquidityPool`](#fetchliquiditypool) or [`subscribeToPoolStream`](#subscribetopoolstream) for pool sources.
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
const { data, message, succeeded } = await swapTokens(acc, swapOpts);
// if (succeeded) data == { amountIn: string; amountOut: string }
```

#### swapTokens Example: Price Impact
(Optional) Calculate price impact to ensure the best price. Price impact is inversely proportional to expected swap output. In other words,
the higher the price impact, the smaller the swap output.
> 💡 **Why would I need this?**\
> Because, simply, `Higher impact === lower trade quality.`\
> A very high value returned by `calculatePriceImpact` might be because of low pool liquidity. The **HumbleSwap** UI flags trades that with a >5% trade impact.

This is only included for illustration. Price impact calculation is separate from swapping, and doesn't affect it unless you *make it* do so.
```typescript
const pool = /* pool source */
const { tokenAId, tokenBId } = pool;
const amountA = 100
const calcOpts = { pool, swap: { amountA, tokenAId, tokenBId } };
const impact = calculatePriceImpact(amountA, calcOpts);
console.log(impact); //  "3.04"
```

#### swapTokens Parameters
* `acc: ReachAccount`: **reach** [account abstraction](https://docs.reach.sh/frontend/#ref-frontends-js-acc)
* [`opts: SwapTxnOpts`](./TYPES.md#swaptxnopts)

#### swapTokens Returns
* `TransactionResult`\
  where `data` = `{ amountIn: string; amountOut: string }` when successful

^[**Back to contents**](#swapping)


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