# Changelog

## Legend
[✅] New feature or enhancement to existing
[🔃] Change to existing functionality


## 3.0.0-beta.0
* ✅ Upgrades to `v3` contracts
* ✅ Adds **scheduled swaps** (decentralized limit-orders)

## 2.0.0
* ✅ Upgrades to `v2` contracts
* ✅ Adds `createLiquidityPool`
* ✅ Adds `createStakingPool( acc, opts )` export
* ✅ Adds `fetchStakingPool( acc, opts )` export
* ✅ New utility exports `parseAddress`, `parseCurrency`, `formatAddress`, `formatCurrency`
* ✅ Adds `checkPoolWillOverflow` to check whether swap values might trigger a maths overflow. 
  * Returns a `boolean` as well as the largest value the pool can swap without overflowing 
  * Tests for values up to **10M** (or largest token balance in pool).
* 🔃 Now emits a `SIGNING_EVENT` message to the `onProgress` callback of some transactions. 
  * Message can be used to inform end-users when a connected wallet is expected to sign a transaction, or just filtered out. 
* 🔃 `initHumbleSDK( opts )` options now accept an optional `walletFallback` property
* 🔃 Renames `calculateAmountIn` to `calculateOtherAmount`
* 🔃 Renames `fetchPool` to `fetchLiquidityPool`
  * Only two arguments are now accepted (instead of three)
  * `poolAddress` is now expected in `opts`
* 🔃 Renames `performSwap` to `swapTokens`
  * `swapTokens` no longer requires a `poolAddress` in addition to `pool` data
* ⚙️ Adds more unit-tests