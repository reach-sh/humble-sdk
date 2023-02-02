/** @file Contract API Functions */

/*        */
/* Pools  */
/*        */
export * from "./LiquidityMigrator.Transfer";
export * from "./LiquidityMigrator.Withdraw";
export { addLiquidity, AddLiquidityResult } from "./LiquidityProvider.Add";
export {
  withdrawLiquidity,
  RequiredWithdrawOpts,
  WithdrawOpts,
  WithdrawResult
} from "./LiquidityProvider.Withdraw";
export * from "./PoolAdmin";
export { fetchLiquidityPool, fetchToken } from "./PoolAnnouncer";
export { swapTokens, SwapResult } from "./Trader.Swap";
export {
  calculateRewardsPerBlock,
  checkRewardsImbalance
} from "./calculateRewardsPerBlock";
export {
  subscribeToPoolStream,
  PoolSubscriptionOpts
} from "./subscribeToPoolStream";

/*                  */
/* Staking/Farming  */
/*                  */
export { announceFarm } from "./FarmStream.Announce";
export * from "./Staker.API";
export * from "./StakingAdmin";
export {
  subscribeToFarmStream,
  isPartnerFarm,
  FarmSubscriptionOpts
} from "./subscribeToFarmStream";

/*              */
/* Limit Order  */
/*              */
export * from "./LimitOrder";
export * from "./LimitOrder.Fetch";
export * from "./LimitOrder.Fill";
export * from "./LimitOrder.Cancel";
export {
  subscribeToLimitOrders,
  LOSubscriptionOpts
} from "./subscribeToLimitOrders";
