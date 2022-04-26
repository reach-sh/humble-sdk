# HumbleSDK v2.0.0

<header>
  <img src="./logo-white.svg" width="80" height="auto">
</header>

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).

- [HumbleSDK v2.0.0](#humblesdk-v200)
  - [Documentation](#documentation)
  - [v2 Changes](#v2-changes)
  - [Installing the SDK](#installing-the-sdk)
    - [Option 1. NPM (recommended)](#option-1-npm-recommended)
    - [Option 2. Cloning the repo directly](#option-2-cloning-the-repo-directly)
  - [Example Usage](#example-usage)
    - [Subscribing to a stream of **Liquidity Pool** data](#subscribing-to-a-stream-of-liquidity-pool-data)
    - [**Swapping** between a pair of tokens](#swapping-between-a-pair-of-tokens)
  - [Local Testing](#local-testing)

---
## Documentation
Documentation has moved [here](https://reach-sh.github.io/humble-sdk/).

--- 

## v2 Changes 
`v2` introduces a few changes and adds new functionality, including staking pools. Some functions may have been renamed: review changes in our [changelog](./CHANGELOG.md), and view our [documentation](https://reach-sh.github.io/humble-sdk/) for additional info.

--- 

## Installing the SDK
### Option 1. NPM (recommended)
The fastest way is to use `npm`:
```bash
$. npm i -s @reach-sh/humble-sdk
```

### Option 2. Cloning the repo directly
To get started without NPM, you can clone and build the SDK from the repository. 
```bash
# Clone the repository 
$. git clone https://github.com/reach-sh/humble-sdk.git

# Enter the directory with the repo (replace with path to your repository clone)
$. cd path/to/humble-sdk 

# and install dependencies (there aren't a lot)
$. npm install

# Build the SDK. Will output to a ./lib directory in the same folder as the 
# package.json file. This takes seconds and doesn't output anything to your terminal.
$. npm run build
``` 
You will know it is complete when your (terminal's) typing prompt reappears.\
Then, as a **FINAL STEP**, copy or move the new `lib/` directory into your project. This will allow you to access it like any other JS module:

```typescript
import { initHumbleSDK } from "path/to/lib";
```

---

## Example Usage

### Subscribing to a stream of **Liquidity Pool** data
```typescript
import { subscribeToPoolStream, createReachAPI } from "@reach-sh/humble-sdk";

const stdlib = createReachAPI();
const acc = await stdlib.createAccount();

// Fetch existing streams and get notified when a new one is created
subscribeToPoolStream(acc, {
    // Pool ID (and id of pool tokens) received from contract.
    // Pool data has NOT been fetched yet.
    onPoolReceived: (info) => { 
        const [poolAddr, tokenAId, tokenBId] = info;
        // ... do something with data
     },

    // Pool and Token data has been received from network. 
    onPoolFetched: (result: FetchPoolTxnResult) => { 
        const { succeeded, poolAddress, data, message } = result;
        if (succeeded) // ... do something with data
     }
})
```


### **Swapping** between a pair of tokens
> **Note:** Swapping does not use routing. Read the [docs](https://reach-sh.github.io/humble-sdk/) to learn how to fetch pools for DEx operations.
```typescript
import { calculateTokenSwap, performSwap } from "@reach-sh/humble-sdk";

const pool = /* pool source */

// Calculate expected swap output
const { tokenAId, tokenBId } = pool;
const amountA = 100;
const swap = calculateTokenSwap({ 
    pool, 
    swap: { amountA, tokenAId, tokenBId } 
});

// Perform swap
const swapOpts = { poolAddress: pool.poolAddress, swap, pool };
const { data, message, succeeded } = await performSwap(acc, swapOpts);
// if (succeeded) data == { amountIn: string; amountOut: string }
```

--- 

## Local Testing
The `humble-sdk` contains some helper scripts for running the SDK on a command line. See more [**here**](./cli/README.md)
