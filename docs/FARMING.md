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
  /** A string date is passed in as startBlock and is converted into the start block inside the createStakingPool process*/
  startBlock: string;
  /** A string date is passed in as endBlock and is converted into the end block inside the createStakingPool process*/
  endBlock: string;
  /** The account that will deposit ALGO into the farm */
  rewarder0?: Address;
};
```

#### createStakingPool Example
```typescript
import { createStakingPool } from "@reach-sh/humble-sdk";

const startTime = new Date()
const endTime = startTime
endTime.setDate(endTime.getDate() + 7)
// Options for calling "createStakingPool"
const createOpts = {
    rewardTokenId: 1111111,
    stakeTokenId: 1111111,
    totalRewardsPayout: [100, 200] as [number, number],
    startBlock: startTime.toString(),
    endBlock: endTime.toString(),
    rewarder0: 'GSL7AJYYYAVZOJVJWSU6KSZMEYU4K7ZFPX3XYTLDBCNWBX32NXCD2KTWVM',
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

#### createStakingPool Returns a
`CreateFarmTxnResult` with details about the new staking pool.
```typescript
type CreateFarmTxnResult = {
  /** App id of new staking pool */
  poolAddress?: string;
  /** User-deposited amounts in contract */
  amountsDeposited?: StakingRewards;
};
```

Documentation on staking, unstaking, and claim rewards functions are currently in progress; stay tuned.

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