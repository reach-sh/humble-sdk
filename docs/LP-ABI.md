[![logo][logo]](./index.md)
# HumbleSDK Liquidity Pool ABI 

- [HumbleSDK Liquidity Pool ABI](#humblesdk-liquidity-pool-abi)
  - [Background](#background)
  - [Introduction](#introduction)
    - [Liquidity Pool ABI JSON](#liquidity-pool-abi-json)
  - [Methods](#methods)
  - [The HumbleSwap Protocol contract](#the-humbleswap-protocol-contract)
  - [Get Pool Ids from the Protocol](#get-pool-ids-from-the-protocol)
    - [Registration Event Signature](#registration-event-signature)
- [All Sections](#all-sections)

---

## Background
The following documentation is provided for convenience, and assumes you will be using the algosdk (JS or python) directly. 

Please note that this is an unsupported way of accessing Humble's contracts: troubleshooting assistance will be limited. 

^[**Back to contents**](#humblesdk-liquidity-pool-abi)

---

## Introduction
Every HumbleSwap Liquidity Pool is its own smart contract. You can interact with a pool by calling its ABI, following Algorand's [general guidelines](https://developer.algorand.org/articles/contract-to-contract-calls-and-an-abi-come-to-algorand/?from_query=ABI%20): see the section titled **Application Binary Interface (ABI)**. 

> 💡**Fun fact:** HumbleSwap's **staking farms** are also individual smart contracts.


### Liquidity Pool ABI JSON
A Liquidity Pool's ABI looks like this:
```json
{
    "name": "Pool Name (e.g. ALGO/USDC)",
    "description": "Algo-USDC Pool",
    "networks": {
        "MainNet": 0000000000 // Pool Application ID goes here
    },
    "methods": [
        { 
            "name": "Provider_deposit",
            "args": [{ "type": "(uint64,uint64)", "description": "Token (A, B) amounts to deposit" }],
            "returns": [{ "type": "uint64", "description": "Amount of minted LP Tokens received" }]
        },
        {
            "name": "Provider_withdraw",
            "args": [{ "type": "uint64", "description": "Amount of LP Tokens to return to contract" }],
            "returns": [{ "type": "(uint64,uint64)", "description": "Amount (A, B) received" }]
        },
        {
            "name": "Trader_swapAForB",
            "description": "Swap Pool Token A for Token B. 'A' is always ALGO in ALGO<->OTHER pools.",
            "args": [
                { "type": "uint64", "description": "Max. Expected amount" }, 
                { "type": "uint64", "description": "Min. Expected amount"  }
            ],
            "returns": [{ "type": "(uint64,uint64)", "description": "Amounts (A, B) received" }]
        },
        {
            "name": "Trader_swapBForA",
            "description": "Swap Pool Token B for Token A. 'A' is always ALGO in ALGO<->OTHER pools.",
            "args": [
                { "type": "uint64", "description": "Max. Expected amount" }, 
                { "type": "uint64", "description": "Min. Expected amount"  }
            ],
            "returns": [{ "type": "(uint64,uint64)" , "description": "Amounts (A, B) received" }]
        },
    ]
}
```


The JSON above will need a (liquidity pool) application ID to get started. Getting pool ids directly from the blockchain requires a bit of context: see [here](#the-humbleswap-protocol-contract) for more.

^[**Back to contents**](#humblesdk-liquidity-pool-abi)

---

## Methods
- `Provider_deposit`: **add funds** to a liquidity pool. Returns the amount of **liquidity pool tokens** you received from the transaction
- `Provider_withdraw`: **withdraw funds** from a liquidity pool. Returns the token amounts received from the pool.
- `Trader_swapAForB`: Given a pool like `ALGO<->OTHER`, **swap** some `ALGO` for `OTHER`
- `Trader_swapBForA`: Given a pool like `ALGO<->OTHER`, **swap** some `OTHER` for `ALGO`

In `ALGO<->OTHER` pools, `Token A` is **always** ALGO. When getting pool data directly from the blockchain, it is possible to determine what tokens are in the pool, and in which order. Read on for quick context, or [jump ahead](#get-pool-ids-from-the-protocol) to the code.

^[**Back to contents**](#humblesdk-liquidity-pool-abi)

---

## The HumbleSwap Protocol contract

The **Humble Protocol** contract is a single source-of-truth for all liquidity pools created within the HumbleSwap ecosystem. As mentioned above, each liquidity pool is a **smart contract** created by a user. Whenever one is created, it calls this **Protocol** contract to "register" itself. The Protocol will log the ID of the pool, as well as the pool's `Token A` and `Token B` values. 

> 💡**Fun Fact:** The HumbleSDK gets its list of pools from this contract using `@reach-sh/stdlib`. Aside from getting pool IDs (see below), you don't need to interact with the **Protocol** contract. 



^[**Back to contents**](#humblesdk-liquidity-pool-abi)

---

## Get Pool Ids from the Protocol
Our Dan Burton created a [**gist**](https://gist.github.com/DanBurton/d11a6c8a99b33f28ea7fc83a82ccaef8) showing how you can get pool ids from the Humbleswap protocol contract. His example uses the JS `algosdk`, but can be extrapolated to work with the python sdk.

```javascript
import algosdk from 'algosdk';
import { sha512_256 } from 'js-sha512';
const indexer = new algosdk.Indexer('', 'https://mainnet-idx.algonode.cloud', '');

// The Reach declaration for this Event type is:
//    Register: [ Contract, MToken, Token ]

// Event signature prefix, see ARC 28
// https://github.com/reach-sh/ARCs/blob/arc-0028-events/ARCs/arc-0028.md
const sig = 'Register(uint64,(byte,byte[8]),uint64)';
const prefix_hex = sha512_256(sig).slice(0,8);

// We are ignoring next-token for simplicity in this example
// but you can use a loop/recursion to keep going until no 
// `next-token` is available
const appid = 771884869; // Mainnet Protocol contract
const logs_nested = await indexer.lookupApplicationLogs(appid).do();
const logs = logs_nested['log-data'].map((x) => x.logs).flat();

// Filter down to only the Register logs by looking for the matching prefix
const register_logs = logs.filter((l) =>
  prefix_hex === Buffer.from(l, 'base64').slice(0,4).toString('hex')
);

// interpret the next 8 bytes after the 4-byte prefix as the registered Contract (appid: uint64)
const pool_ids = register_logs.map((l) =>
  Number('0x' + Buffer.from(l, 'base64').slice(4,12).toString('hex'))
);

console.log(pool_ids); // [ 771891102, 773172535, ... ]
```

Implementation details will vary slightly with either the JS or Python Algosdk, but the general flow should be the same. You can view Algorand's [ABI documentation **here**](https://developer.algorand.org/docs/get-details/dapps/smart-contracts/ABI/).

### Registration Event Signature
Here's a full description of the event that is logged by the Protocol. First, its signature, which appears in the gist above:
```javascript
Register( uint64, (byte,byte[8]), uint64 )
```
- `uint64`: The first `uint64` arg decodes to the new pool's application ID
- `(byte, byte[8])`: this tuple is a `Maybe` value that resolves to the ID of the first token in the pool. 
  - For `ALGO-OTHER` pools, the value will be `["None", null]`
  - For `ANY-OTHER` pools, the value will be `["Some", tokenId]`\
Note that you will need to decode the value of `tokenId` similar to `pool_ids` in the xample above.
- `uint64`: The last `uint64` is the second token id in the new pool
  


^[**Back to contents**](#humblesdk-liquidity-pool-abi)

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