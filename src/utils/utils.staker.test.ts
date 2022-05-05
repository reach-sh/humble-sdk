import { initHumbleSDK } from "../index";
import { createReachAPI } from "../reach-helpers";
import { StakeUpdate } from "../types";
import { formatStakeRewardsUpdate } from "./utils.staker";

initHumbleSDK();

describe("Utils | Staker", () => {
  it("Formats a stake-rewards response from the blockchain", () => {
    const { bigNumberify } = createReachAPI();
    const everyoneStaked = 1000;
    const userStaked = 100;
    const apiUpdate: StakeUpdate = {
      newEveryoneStaked: bigNumberify(everyoneStaked),
      newUserStaked: bigNumberify(userStaked),
    };
    const { newTotalStaked, amountStaked } =
      formatStakeRewardsUpdate(apiUpdate);

    expect(amountStaked).not.toBe(apiUpdate.newUserStaked);
    expect(amountStaked).not.toBe(userStaked);
    expect(amountStaked).not.toBe(userStaked.toString());
    expect(amountStaked).toBe("0.0001");

    expect(newTotalStaked).not.toBe(apiUpdate.newEveryoneStaked);
    expect(newTotalStaked).not.toBe(everyoneStaked);
    expect(newTotalStaked).not.toBe(everyoneStaked.toString());
    expect(newTotalStaked).toBe("0.001");

    // Format with decimals
    const api2 = formatStakeRewardsUpdate(apiUpdate, 0);
    expect(api2.amountStaked).not.toBe(apiUpdate.newUserStaked);
    expect(api2.amountStaked).not.toBe(userStaked);
    expect(api2.amountStaked).toBe(userStaked.toString());

    expect(api2.newTotalStaked).not.toBe(apiUpdate.newEveryoneStaked);
    expect(api2.newTotalStaked).not.toBe(everyoneStaked);
    expect(api2.newTotalStaked).toBe(everyoneStaked.toString());
  });
});
