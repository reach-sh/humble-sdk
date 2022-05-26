[![logo][logo]](./index.md)


A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).

---

## Installing the SDK
- [Installing the SDK](#installing-the-sdk)
  - [Option 1. NPM (recommended)](#option-1-npm-recommended)
  - [Option 2. Cloning the repo directly](#option-2-cloning-the-repo-directly)
- [Importing SDK Functions](#importing-sdk-functions)
- [Type definitions](#type-definitions)
- [SDK Contents](#sdk-contents)
- [All Sections](#all-sections)

---

### Option 1. NPM (recommended)
The fastest way is to use `npm`:
```bash
$. npm i -s @reach-sh/humble-sdk
```

### Option 2. Cloning the repo directly
To get started without NPM, you can clone and build the SDK from the repository. 


1. Clone the repository 
```bash
$. git clone # ...
```

2. Enter the directory with the repo (replace with path to your repository clone) and install dependencies (there aren't a lot)
```bash
$. cd path/to/humble-sdk && npm install
```

3. Build the SDK. Will output to a lib/ directory in the same folder as the package.json file. This takes seconds and doesn't output anything to your terminal\
   You will know 'build' is complete when your (terminal's) typing prompt reappears.
```bash
$. npm run build
```

4. As a **FINAL STEP**, copy or move the new `lib/` directory into your project and access it like any other JS module.

> **Very important:** If you follow this method, be sure to swap out `import ... from "@reach-sh/humble-sdk"` with the path to your `lib/` build output.

---

## Importing SDK Functions
You can import [SDK functions](#methods) individually or as a single blob.\
These examples are exactly the same: 
```typescript
import * as HumbleSDK from "@reach-sh/humble-sdk";

HumbleSDK.initHumbleSDK();
```
or
```typescript
import { initHumbleSDK } from "@reach-sh/humble-sdk";

initHumbleSDK();
```

--- 

## Type definitions
Shared/recurring typescript defs are [**here**](./TYPES.md)

--- 

## SDK Contents
This SDK contains:
* Reach-compiled **smart contracts** (`.mjs` files) used by the HumbleSWAP front-end to communicate with the blockchain
* `@reach-sh/stdlib@0.1.8-rc7`
* A Javascript API for interacting with the compiled smart contracts.

Some input parameters will require objects created by reach's Javascript standard library (`stdlib`). The SDK allows you to access its `stdlib` instance, so you may not need to install or instantiate reach yourself. You should ideally be familiar with reach, as well as reach concepts.


---

## All Sections
- [Shared methods](./METHODS.md)
- [Swapping](./SWAPPING.md)
- [Liquidity Pools](./LIQUIDITY-POOLS.md)
- [Farming/Staking Pools](./FARMING.md)
- [Types](./FARMING.md)

---


[logo]: ./logo-white.svg
