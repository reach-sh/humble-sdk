/** @file Contract API Functions */

// Pools
export { swapTokens, SwapResult } from "./Trader.Swap";
export { addLiquidity, AddLiquidityResult } from "./LiquidityProvider.Add";
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

// Participants

export { fetchLiquidityPool, fetchToken } from "./PoolAnnouncer";
export * from "./PoolAdmin";
export * from "./StakingAdmin";
export * from "./LimitOrder";
export * from "./LiquidityMigrator.Transfer";
export * from "./LiquidityMigrator.Withdraw";
export {
  calculateRewardsPerBlock,
  checkRewardsImbalance
} from "./calculateRewardsPerBlock";
