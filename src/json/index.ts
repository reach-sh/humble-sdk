import { getBlockchain } from "../constants";
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

/** Convert a duration of hours into its equivalent Block-length */
export function convertToBlocks(duration: number) {
  const { BLOCKS_PER_HR } = blockConstants();
  const hours = duration;
  const totalHours = Number(hours);
  return Math.ceil(totalHours * BLOCKS_PER_HR);
}

/** Convert a JS date object into its approximate Blocktime */
export function convertDateToBlocks(date: Date, currentBlock: number) {
  // does not convert the dates to UTC
  // This is because it's only using the dates to get the number of hours between two dates
  // Whether the dates are in UTC or in a timezone that number of hours will be the same
  const currentDate = new Date();
  const hoursFromCurrentDate =
    (date.getTime() - currentDate.getTime()) / (60 * 60 * 1000);
  const blocksTillInputDate = convertToBlocks(hoursFromCurrentDate);
  const inputDateAsBlocks = currentBlock + blocksTillInputDate;
  return inputDateAsBlocks;
}

/** Block-length numerical constants for the selected blockchain */
export function blockConstants(network = getBlockchain()) {
  const { avgBlockDuration } =
    CHAIN_CONSTANTS[network as keyof typeof CHAIN_CONSTANTS];
  const BLOCK_LENGTH = avgBlockDuration / 1000;
  const BLOCKS_PER_HR = (60 * 60) / BLOCK_LENGTH;
  const BLOCKS_PER_DAY = (60 * 60 * 24) / BLOCK_LENGTH;

  return {
    /** Length of time to write a single block */
    BLOCK_LENGTH,
    /* Number of algo blocks written per day */
    BLOCKS_PER_DAY,
    /* Number of algo blocks written per hour */
    BLOCKS_PER_HR
  };
}
