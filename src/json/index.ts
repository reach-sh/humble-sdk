import { default as ALGO } from "./ALGO.json";
import { default as ETH } from "./ALGO.json";

const CHAIN_CONSTANTS = { ALGO, ETH };

type ChainDescription = {
  name: string;
  abbr: string;
  decimals: number;
  avgBlockDuration: number;
};

type ChainConstants = Record<string, ChainDescription> & typeof CHAIN_CONSTANTS;

export default CHAIN_CONSTANTS as ChainConstants;
