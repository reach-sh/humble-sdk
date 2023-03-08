# src/build

This module contains compiled contract artifacts. Here you will find the code for every smart contract type used by HumbleSwap. All items are sourced from the `duoswap-core` repository. Each `.js` file is the result of compiling a reach (`.rsh`) file. 

This is the most important part of the SDK, since everything else revolves around it. All `.mjs` files in this directory are replaced with new artifacts when HumbleSwap releases a new version.

> The reach files are not here, and the `.mjs` files produced from the compilation are renamed to `.js` files so that the SDK can be bundled and published. Any reference to `.mjs` files below is talking about the `.js` files in this directory. 


- [src/build](#srcbuild)
- [Files](#files)
  - [backend.ts](#backendts)
  - [Liquidity Pools](#liquidity-pools)
    - [index.main.js](#indexmainjs)
    - [index.net\_tok.js](#indexnet_tokjs)
    - [index.tok\_tok.js](#indextok_tokjs)
    - [index.triumvirate.js](#indextriumviratejs)
    - [liquidityMigrator.withdraw.net\_tok.js](#liquiditymigratorwithdrawnet_tokjs)
    - [liquidityMigrator.withdraw.tok\_tok.js](#liquiditymigratorwithdrawtok_tokjs)
  - [Farms](#farms)
    - [farmAnnouncer.large.js](#farmannouncerlargejs)
      - [Why farm-announcer-large?](#why-farm-announcer-large)
    - [staker.main.js](#stakermainjs)
  - [Limit Orders](#limit-orders)
    - [limitOrder.announcer.js](#limitorderannouncerjs)
    - [limitOrder.lo\_net\_tok.js](#limitorderlo_net_tokjs)
    - [limitOrder.lo\_tok\_net.js](#limitorderlo_tok_netjs)
    - [limitOrder.lo\_tok\_tok.js](#limitorderlo_tok_tokjs)


You may notice a pattern with the naming convention of the `.mjs` files. This is a side-effect of the reach compilation process. The names have three sections, with the third being the file extension (`.js`). The first two sections are: 
1. The file name
2. The `Reach.App` that was compiled *inside* the file

For example, the file `limitOrder.announcer.js` was compiled from an app (`const announcer = ...`) inside the file `limitOrder.rsh`. This should be helpful when creating or troubleshooting files. 

---

# Files

> **Note:** If you see `filename.default.js`, delete it and check the source `.rsh` file. 
> The `.default` section means that no Reach app was exported from the file. 

## backend.ts
This serves as an entrypoint into the module for the rest of the SDK. Any module, file, or function that needs access to a contract (or related) object will import it from this file. 

## Liquidity Pools

### index.main.js
Build output for `index.rsh`.\
The source for this holds multiple contracts, but this file mainly gives one mathematical export (`computeMint`) so that we can run the same swap calculations that are run on the blockchain. `computeMint` computes how many Liquidity Tokens will be minted following a deposit operation. 

---

### index.net_tok.js
Build output for `LiquidityPools` that contain a network token. 

This contract-type covers all the following actions:
- Creating a pool
- Adding or removing liquidity
- Swapping tokens

There are two variants of this contract, mainly because Algorand handles payment transactions with `ALGO` token a bit different. 

---

### index.tok_tok.js
Build output for `LiquidityPools` that DO NOT contain a network token. 

See the [`net_tok`](#indexnet_tokjs) variant for more information on this type of contract.

---

### index.triumvirate.js
Build output for the `Triumvirate` contract.

The **Triumvirate** (sometimes called the **Protocol Contract** or **Pool Announcer**) is a smart contract that serves two main purposes: 

1. Announces all newly-created **Liquidity Pools**
2. Acts as an internal DAO for controlling pools

As an **internal DAO**, The **Triumvirate** can
* freeze deposits to a pool, allowing only withdrawals
* change "protocol information" about each pool e.g. fees, or the address of the Triumvirate contract. 

It is the closest thing to a "central contract" in the HumbleSwap ecosystem, even though it only deals with `LiquidityPools`. Users DO NOT have to opt-in to (or generally work directly with) this contract.

---

### liquidityMigrator.withdraw.net_tok.js
Build output for `LiquidityMigrator` to migrate liquidity from a pool containing a network token (e.g. `ALGO`, `ETH`) 

---

### liquidityMigrator.withdraw.tok_tok.js
Build output for `LiquidityMigrator` to migrate liquidity from a pool that DOES NOT a network token 

---


## Farms

### farmAnnouncer.large.js
Build output for our `Farm Announcer` contract.\
#### Why farm-announcer-large?
The `duoswap-core` repo has three **farm announcer** versions: a `small`, `medium`, and `large`, each which publish increasing amounts of data about a newly-created `Farm`. The SDK uses only the `.large`, since it makes the most info available to the UI. 

---
### staker.main.js
Build output for `Farms`.

---

## Limit Orders

### limitOrder.announcer.js
Contract Announcer for `LimitOrders`.\
When a user creates a **Limit Order**, it contacts this contract, which makes a record of the event. The UI and other subscribers can connect to this contract and receive a stream of all logged creation events. 

It works precisely like other announcer contracts. 

---

### limitOrder.lo_net_tok.js
Build output for `LimitOrders` that want to *buy* a network token (e.g. `ALGO`, `ETH`) using any non-network token.

---

### limitOrder.lo_tok_net.js
Build output for `LimitOrders` that want to *sell* a network token (e.g. `ALGO`, `ETH`) and purchase a non-network token.

---

### limitOrder.lo_tok_tok.js
Build output for `LimitOrders` that want to purchase a non-network token with any other non-network token.
