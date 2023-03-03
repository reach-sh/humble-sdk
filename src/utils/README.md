# src/utils

This module contains general helpers for the SDK. The helpers are mostly pure functions for formatting data, which can be tested with mock inputs.\
Files are grouped by responsibility (e.g. data type). 
All files are paired with a `{ filename }.test.ts` JEST file. Some async functions are not tested, since blockchain operations are not mocked. 


- [src/utils](#srcutils)
- [Files](#files)
  - [index.ts](#indexts)
  - [utils.pool.ts](#utilspoolts)
  - [utils.reach.ts](#utilsreachts)
  - [utils.staker.ts](#utilsstakerts)
  - [utils.swap.ts](#utilsswapts)



# Files
All files are listed below. Although there are a few examples of what each (should) contain, all files hold more than what each lists below.

## index.ts
This file holds general utilities: 
- Exponential notation formatter
- `isNetworkToken` (assert a value represents a network token)
- `successResult` (creates a `TransactionResult` for a successful response)
- `errorResult` (creates a `TransactionResult` for an error response)

---


## utils.pool.ts
Helpers for working with `LiquidityPool` objects. This module abstracts functions that are shared across Liquidity operations.\
Exports include: 
- `deployPool` (creates a new `LiquidityPool` smart contract)
- `convertLPToTokenValue` (convert an LP token amount into its `Token A` or `B` value)
- `formatAmountPair` formats atomic values in an object `{ A, B }` (used in multiple places)


---

## utils.reach.ts
Helpers for working with the `@reach-sh` standard library. This is where you will find reach-specific number (currency) formatting, as well as helpers for creating or unwrapping `Maybe` values. 



---


## utils.staker.ts
Helpers for working with `Farms` (a.k.a. "staking pools"). 

---


## utils.swap.ts
Abstractions for working with **swapping**. Including such great hits as:
- `calculateOtherAmount`
- `calculatePriceImpact`
- `calculateTokenSwap`
- `swapTokenAToB`
- `swapTokenBToA`