[![logo][logo]](./index.md)

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).\
Methods are listed below, along with usage examples where possible.\
[**Home Page**](./index.md)

---
# Farming 
- [Farming](#farming)
  - [createStakingPool](#createstakingpool)
      - [Transaction Options](#transaction-options)
      - [createStakingPool Example](#createstakingpool-example)
      - [createStakingPool Returns](#createstakingpool-returns)
- [All Sections](#all-sections)

---
## createStakingPool
```typescript
async function createStakingPool(
  acc: ReachAccount,
  stakingOpts: CreateFarmTxnOpts
): Promise<TransactionResult<CreateFarmTxnResult>>
```
Create a **reward token farm**. Users can stake a token that you specify in order to receive the reward token.  

#### Transaction Options
```typescript
type CreateFarmTxnOpts = { opts: StakingDeployerOpts } & ReachTxnOpts;


type StakingDeployerOpts = {
  /** Rewards token (cannot be `network` token e.g. `ALGO`]) */
  rewardTokenId: TokenID;
  /** Token to stake for rewards */
  stakeTokenId: TokenID;
  /** Contract rewards ([`networkAmt`, `nonNetworkAmt`]) */
  totalRewardsPayout: StakingRewards;
  /** Block at which the farm will start distributing rewards */
  startBlock: number;
  /** Block at which the farm will stop distributing rewards */
  endBlock: number;
  /** The account that will deposit ALGO into the farm */
  rewarder0?: Address;
};
```

#### createStakingPool Example
```typescript
import { createStakingPool } from "@reach-sh/humble-sdk";

// Options for calling "createStakingPool"
const createOpts = {
    tokenAmounts: [100, 200] as [number, number],
    tokenIds: [112233, 446688] as [any, any],

    // progress bar updated
    onProgress(msg: string) {
      if (msg === 'SIGNING_EVENT') {
        // This is emitted when the connected account will be asked to sign a transaction.
        // You can ignore or use it to show a "Sign transaction in your wallet" message
      } else {
        // otherwise the message tells what the SDK is currently doing for this transaction
      }
    },
  }

const acc = /* connected account */;
const result = await createStakingPool(acc, createOpts)
const { data, succeeded, message } = result
if (!succeeded || !data?.poolTokenId) {
    // Pool creation failed; handle error
    // or check 'message' for an explanation
}

// If here, Pool creation and funding was successful
const { poolAddress, tokenAId, tokenBId, poolTokenId } = data;

// do something with 'data'
```

#### createStakingPool Returns
`PoolInfo` about the new pool.
```typescript
type PoolInfo = {
  /** `Token A` id. Use '0' for network token  */
  tokenAId: string | number;
  /** `Token B` id */
  tokenBId: string | number;
  /** Pool contract address (or Algorand application ID) */
  poolAddress: string | number;
  /** Number of decimal places for `Token A`. Defaults to `6` */
  tokenADecimals?: number;
  /** Number of decimal places for `Token B`. Defaults to `6` */
  tokenBDecimals?: number;
  /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
  n2nn?: boolean;
  /** ID for pool liquidity token */
  poolTokenId?: ResourceIdentifier;
}
```



---

# All Sections
- [Shared methods](./METHODS.md)
- [Swapping](./SWAPPING.md)
- [Liquidity Pools](./LIQUIDITY-POOLS.md)
- [Farming/Staking Pools](./FARMING.md)
- [Types](./FARMING.md)

[**Return Home**](./index.md)

---


[logo]: ./logo-white.svg