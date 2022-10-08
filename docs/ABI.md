[![logo][logo]](./index.md)
# HumbleSDK ABI 

Every HumbleSwap Liquidity Pool is its own smart contract. As such, it is possible to interact with a particular pool by calling its ABI, which looks like this: 
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
            "description": "Swap Pool Token A for Token B. 'A' is always ALGO in ALGO/OTHER pools.",
            "args": [
                { "type": "uint64", "description": "Max. Expected amount" }, 
                { "type": "uint64", "description": "Min. Expected amount"  }
            ],
            "returns": [{ "type": "(uint64,uint64)", "description": "Amounts (A, B) received" }]
        },
        {
            "name": "Trader_swapBForA",
            "description": "Swap Pool Token B for Token A. 'A' is always ALGO in ALGO/OTHER pools.",
            "args": [
                { "type": "uint64", "description": "Max. Expected amount" }, 
                { "type": "uint64", "description": "Min. Expected amount"  }
            ],
            "returns": [{ "type": "(uint64,uint64)" , "description": "Amounts (A, B) received" }]
        },
    ]
}
```



--

[logo]: ./logo-white.svg