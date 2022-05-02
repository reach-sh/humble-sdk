import { ChainSymbol, createReachAPI, NETWORKS } from "./reach-helpers";
import {
  ASSURANCE_MSG,
  MIN_BALANCE_MSG,
  POPUP_BLOCKED_MSG,
  TRANSACTION_CANCELLED_MSG,
} from "./constants";
import { TransactionResult } from "./types";

/**
 * @internal
 * Format a value using exponential notation
 * @param val Value
 * @returns Formatted value `1e-N`
 */
export const exponentialFormat = (val: string) => {
  if ((val.split(".")[1] || "").length > 7) {
    return Number.parseFloat(val).toExponential(1);
  }
  return val;
};

/**
 * @internal
 * Assert that `tokenId` is a Network Token (e.g. ALGO, ETH)
 * @param tokenId Token id
 * @returns Boolean (true if token id represents network Token)
 */
export function isNetworkToken(tokenId: string | number) {
  return [0, "0", null].includes(tokenId);
}

/**
 * @internal
 * Create a Network `Token` representation for the current chain  */
export function makeNetworkToken() {
  const { connector } = createReachAPI();
  return {
    /** ID has to be a string here or db will treat it as value 'false' */
    id: "0",
    name: connector,
    symbol: connector,
    url: "",
    decimals: NETWORKS[connector as ChainSymbol].decimals as number,
    supply: "0",
  };
}

/**
 * @internal
 * Turn blockchain error messages into something more user-friendly */
export function parseContractError(failureMsg: string, e: any) {
  const error = e.toString();

  switch (true) {
    case error.includes("Can not open popup window"):
      return `${failureMsg} ${POPUP_BLOCKED_MSG}`;

    case error.includes("Operation cancelled"):
    case error.includes("The User has rejected the transaction request"):
      return `${TRANSACTION_CANCELLED_MSG}`;

    case error.includes("overspend") || error.includes("below min"):
      return `${failureMsg} ${ASSURANCE_MSG} ${MIN_BALANCE_MSG}`;

    default:
      return failureMsg;
  }
}

/**
 * @internal
 * HELPER | cancel request if it takes longer than `timeout` (default 3.5s)
 */
export async function withTimeout(
  request: Promise<any> | (() => Promise<any>),
  fallback = null,
  timeout = 3500
) {
  return new Promise(async (resolve) => {
    const call = typeof request === "function";
    const cancel = () => resolve(fallback);
    setTimeout(cancel, timeout);
    const d = call ? await request() : await request;

    resolve(d);
  });
}

/**
 * @internal
 * `INTERNAL HELPER` | Creates a `TransactionResult` object
 */
export function errorResult<T extends Error>(
  message: string,
  poolAddress: number | string | null = "",
  data: T,
  contract?: any | null
): TransactionResult<T> {
  return {
    succeeded: false,
    poolAddress: poolAddress || "",
    message,
    contract,
    data,
  };
}

/**
 * @internal
 * `INTERNAL HELPER` | Creates a `TransactionResult` object
 */
export function successResult<T>(
  message: string,
  poolAddress = "",
  contract: any,
  data?: T
): TransactionResult<T> {
  return {
    succeeded: true,
    poolAddress,
    message,
    contract,
    data,
  };
}
