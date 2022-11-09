/** @file Contract API Functions */

export { swapTokens } from "./Trader.Swap";
export { addLiquidity } from "./LiquidityProvider.Add";
export {
  withdrawLiquidity,
  RequiredWithdrawOpts,
  WithdrawOpts,
  WithdrawResult
} from "./LiquidityProvider.Withdraw";
export {
  subscribeToPoolStream,
  PoolSubscriptionOpts
} from "./subscribeToPoolStream";

// Staking/Farming
export * from "./Staker.API";
export {
  subscribeToFarmStream,
  isPartnerFarm,
  FarmSubscriptionOpts
} from "./subscribeToFarmStream";
export { announceFarm } from "./FarmStream.Announce";

// Limit Order
export {
  subscribeToLimitOrders,
  LOSubscriptionOpts
} from "./subscribeToLimitOrders";
export * from "./LimitOrder.Fetch";
export * from "./LimitOrder.Cancel";
