import { getBlockchain } from "../constants";
import { Duration } from "../types";
import { default as ALGO } from "./ALGO.json";
import { default as ETH } from "./ETH.json";

const CHAIN_CONSTANTS = { ALGO, ETH };

type ChainDescription = {
  /** Full name of chain */
  name: string;
  /** Chain symbol (ALGO/ETH) */
  abbr: string;
  /** Decimal places represented by currency atomic unit */
  decimals: number;
  /** Avg length of time to mint a single block (in milliseconds) */
  avgBlockDuration: number;
};

type ChainConstants = Record<string, ChainDescription> & typeof CHAIN_CONSTANTS;

export default CHAIN_CONSTANTS as ChainConstants;

/** Convert a duration of days and/or hours into its equivalent Block-length */
export function convertToBlocks(duration: Duration = { days: 0 }) {
  const { BLOCKS_PER_HR } = blockConstants();
  const { days = 0, hours = 0 } = duration;
  const daysToHours = Number(days) * 24;
  const totalHours = Number(hours) + daysToHours;
  return Math.ceil(totalHours * BLOCKS_PER_HR);
}

/** Block-length numerical constants for the selected blockchain */
export function blockConstants(network = getBlockchain()) {
  const { avgBlockDuration } =
    CHAIN_CONSTANTS[network as keyof typeof CHAIN_CONSTANTS];
  const BLOCK_LENGTH = avgBlockDuration / 1000;
  const BLOCKS_PER_HR = 3600 / BLOCK_LENGTH;
  const BLOCKS_PER_DAY = 86400 / BLOCK_LENGTH;

  return {
    /** Length of time to write a single block */
    BLOCK_LENGTH,
    /* Number of algo blocks written per day (86400 secs / 4.5) */
    BLOCKS_PER_DAY,
    /* Number of algo blocks written per day (800 blocks) */
    BLOCKS_PER_HR,
  };
}