# HumbleSwap SDK Tests

<header>
  <img src="./../logo-white.svg" width="80" height="auto">
</header>

This directory contains a command-line utility for testing specific HumbleSwap SDK functionality. 

## Table of contents
- [HumbleSwap SDK Tests](#humbleswap-sdk-tests)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
  - [DEx Functionality Tests](#dex-functionality-tests)
    - [All Tests](#all-tests)
    - [List Pools](#list-pools)
    - [Fetch data about a Token](#fetch-data-about-a-token)
    - [Fetch data about a Liquidity Pool](#fetch-data-about-a-liquidity-pool)
    - [Add Liquidity](#add-liquidity)
      - [Add Liquidity Parameters](#add-liquidity-parameters)
    - [Swap Tokens](#swap-tokens)
      - [Swap Token Parameters](#swap-token-parameters)

## Usage
Before you begin, make sure you run `npm run build` in the top-level (`./humble-sdk`) directory. 
This will output a build file to a new `./lib` directory, which this current `./cli` depends on. 

Once that's done, install some dependencies in here:
```bash
$. npm i
```

Now you can see the full list of available actions with:
```bash
$. npm run test
```

See additional info below.

---


## DEx Functionality Tests
All tests run against **Algorand TestNet**. You can change this by passing a custom `providerEnv` property into 
the `initHumbleSDK` call in `./index.mjs`.

^[**Contents**](#table-of-contents)

### All Tests
  * [List Pools](#list-pools)
  * [Fetch a Token](#fetch-data-about-a-token)
  * [Fetch a Liquidity Pool](#fetch-data-about-a-liquidity-pool)
  * [Add Liquidity](#add-liquidity)
  * [Swap Tokens](#swap-tokens)

---

### List Pools
You will likely want to list pools first, so that you have values to pass into the other tests. To do so, run:
```bash
$. npm run test
```
This will spin up an account and subscribe to the SDK's pool stream. All values received will be printed on your terminal 
as it runs.
> **Note:** this test is configured with an auto-timeout. You can change the length of this timeout (as well as the maximum 
> number of pools fetched) in `./runAnnouncerTest.mjs`

^[**Tests**](#dex-functionality-tests)

---

### Fetch data about a Token
This test does not require a funded account. To fetch and display data for a single *Token*, run:
```bash
$. npm run test TOKEN=tokenId 
```
Replace `tokenId` with your token Id of choice.
> **Worth noting:** this technically tests something that the SDK depends upon, not the SDK itself. 

^[**Tests**](#dex-functionality-tests)

---

### Fetch data about a Liquidity Pool
This test does not require a funded account. To fetch and display data for a single *Liquidity Pool*, run:
```bash
$. npm run test POOL=poolId [ N2NN=1 ]
```
Replace `poolId` with the pool id of choice. If the pool contains `ALGO`, add the parameter `N2NN=1`.
> **Notes:** double-check your `N2NN` flag if you *know* the pool exists, but the pool fetch returns `null`.

^[**Tests**](#dex-functionality-tests)

---

### Add Liquidity
This test requires a funded account, as well as pool data. See [List Pools](#list-pools) or 
[Fetch Pool](#fetch-data-about-a-liquidity-pool) to print out pool data to your terminal.\
To add liquidity to a **Pool**, run: 
```bash
$. npm run test KEY="mnemonic phrase" POOL= AMTA= TOKA= TOKB= ACTION=
```
#### Add Liquidity Parameters
* `ACTION`: One of `add` or `withdraw`. Case-sensitive.
* `KEY`: Your mnemonic phrase. 
* `POOL`: Pool Id (application id for pool smart contract)
* `AMTA`: Amount you are paying in to token `A` of pool.\
  For example, this would mean you are paying this much `FOO` into a `FOO/BAZ` pool
* `TOKA`: Id of pool **Token A**. Must match `tokenAId` in the pool matching ID `POOL`.\
  For example, this would be the id of `FOO` in a `FOO/BAZ` pool
* `TOKB`: Id of pool **Token B**. Must match `tokenBId` in the pool matching ID `POOL`.\
  For example, this would be the id of `BAZ` in a `FOO/BAZ` pool

^[**Tests**](#dex-functionality-tests)

---

### Swap Tokens
This test requires a funded account, as well as pool data. See [List Pools](#list-pools) or 
[Fetch Pool](#fetch-data-about-a-liquidity-pool) to print out pool data to your terminal.\
To swap between two **Tokens** in a pool, run: 
```bash
$. npm run test KEY="mnemonic phrase" POOL= AMTA= TOKA= TOKB=
```
#### Swap Token Parameters
* `KEY`: Your mnemonic phrase. 
* `POOL`: Pool Id (application id for pool smart contract)
* `AMTA`: Amount you are paying in 
* `TOKA`: Id of **Token** you are paying in.\
  Must match either `tokenAId` or `tokenBId` in the pool matching ID `POOL`
* `TOKB`: Id of **Token** you expect to receive\
  Must match either `tokenAId` or `tokenBId` in the pool matching ID `POOL`

You can get the `POOL`, `AMTA`, `TOKA`, and `TOKB` parameters by fetching a pool.\
See [List Pools](#list-pools) or [Fetch Pool](#fetch-data-about-a-liquidity-pool) for more on that. 
