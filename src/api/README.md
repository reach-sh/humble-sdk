# src/api

All modules for interacting with **smart contract API functions**. 

All SDK contracts are represented here. Items are grouped by contract file or type, although the directory is flat. 

---

## Table of Contents
- [src/api](#srcapi)
  - [Table of Contents](#table-of-contents)
  - [Liquidity Pools](#liquidity-pools)
    - [LiquidityProvider.add](#liquidityprovideradd)
    - [LiquidityProvider.withdraw](#liquidityproviderwithdraw)
    - [Trader.Swap](#traderswap)
  - [Farms](#farms)
    - [Staker.API](#stakerapi)
    - [Staker.Fetch](#stakerfetch)
    - [Staker.Harvest](#stakerharvest)
    - [Staker.Stake](#stakerstake)
    - [Staker.Unstake](#stakerunstake)
  - [Limit Order](#limit-order)
    - [LimitOrder.Cancel](#limitordercancel)
  - [Announcers](#announcers)
    - [FarmStream.Announce](#farmstreamannounce)
    - [subscribeToFarmStream](#subscribetofarmstream)
    - [subscribeToLimitOrders](#subscribetolimitorders)
    - [subscribeToPoolStream](#subscribetopoolstream)

---

## Liquidity Pools 
Items relating to the file `index.rsh`. 

### LiquidityProvider.add
Add liquidity to a **Pool**. 

### LiquidityProvider.withdraw
Withdraw liquidity from a **Pool**. 

### Trader.Swap
Perform a swap between two tokens

---

## Farms 
Items relating to the file `staker.rsh`

### Staker.API
Exports a couple of helpers: 
- `checkStakingBalance`: check amount that a user has staked in a farm
- `checkRewardsAvailableAt`: check amount of rewards available at specified block

### Staker.Fetch
Functions and helpers related to fetching a farm or its tokens.\
**Note:** A farm contract must be fully set-up before it can be fetched here. Partner farms must be funded; public farms should have proceeded past the fund-network-tokens stage.

### Staker.Harvest
Claim all rewards available to user

### Staker.Stake
Stake an amount in a contract for a share in the reward

### Staker.Unstake
Remove (un-stake) an amount from a contract. Reduces or eliminates user's entitlement to remaining farm rewards.

---

## Limit Order 
File `limitOrder.rsh`
### LimitOrder.Cancel
Cancel an active **Limit Order**. 

---

## Announcers
### FarmStream.Announce
Publish a farm (i.e. notify an `Announcer` contract, so the UI and server can find the new farm.). Also exports `estimateRewardsPerBlock`.\
The **Farm announcer** is found in `farmAnnouncers.rsh`. It can be compiled into one of three flavors, though we only use the `farmAnnouncer.large` variant. 

### subscribeToFarmStream
Passively attach to a *Farm* announcer to discover new farm.\
The **Farm announcer** is found in `farmAnnouncers.rsh`.

### subscribeToLimitOrders
Passively attach to a **Limit Orders** announcer to discover new farm\
The **Limit Orders announcer** is found in `limitOrder.rsh`, along with the rest of the Limit Order contract code.  

### subscribeToPoolStream
Passively attach to a **Liquidity Pools** announcer to discover new farm.\
The **Pool announcer** (triumvirate) is found in `index.rsh`. 

---

