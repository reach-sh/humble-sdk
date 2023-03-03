import {
  ChainSymbol,
  createReachAPI,
  NETWORKS,
  ReachToken
} from "../reach-helpers";
import {
  ASSURANCE_MSG,
  MIN_BALANCE_MSG,
  POPUP_BLOCKED_MSG,
  TRANSACTION_CANCELLED_MSG,
  TRANSACTION_DIDNT_LOAD
} from "../constants";
import { TransactionResult } from "../types";

/**
 * Format a value using exponential notation
 * @param val Value
 * @returns Formatted value `1e-N`
 */
export function exponentialFormat(val: string) {
  if ((val.split(".")[1] || "").length > 7) {
    return Number.parseFloat(val).toExponential(1);
  }
  return val;
}

/**
 * Assert that `tokenId` is a Network Token (e.g. ALGO, ETH)
 * @param tokenId Token id
 * @returns Boolean (true if token id represents network Token)
 */
export function isNetworkToken(tokenId: string | number | null) {
  return [0, "0", null].includes(tokenId);
}

/**
 * @internal
 * Create a Network `Token` representation for the current chain  */
export function makeNetworkToken(): ReachToken {
  const { connector } = createReachAPI();
  return {
    /** ID has to be a string here or db will treat it as value 'false' */
    id: "0",
    name: connector,
    symbol: connector,
    url: "",
    decimals: NETWORKS[connector as ChainSymbol].decimals as number,
    supply: "0",
    verified: true,
    verificationTier: "trusted"
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

    case error.includes("Window not loaded"):
      return `${TRANSACTION_DIDNT_LOAD}`;

    case error.includes("overspend") || error.includes("below min"):
      return `${failureMsg} ${ASSURANCE_MSG} ${MIN_BALANCE_MSG}`;

    default:
      return `${error}`;
  }
}

/**
 * @internal
 * HELPER | cancel request if it takes longer than `timeout` (default 3.5s)
 */
export async function withTimeout(
  request: Promise<any> | (() => Promise<any>),
  fallback: any = null,
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
export function errorResult<T = any>(
  message: string,
  poolAddress: number | string | null = "",
  data: T,
  contract?: any | null,
  ctcLabel: "poolAddress" | "contractId" = "poolAddress"
): TransactionResult<T> {
  return {
    succeeded: false,
    [ctcLabel]: poolAddress || "",
    message,
    contract,
    data
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
  data: T,
  ctcLabel: "poolAddress" | "contractId" = "poolAddress"
): TransactionResult<T> {
  return {
    succeeded: true,
    [ctcLabel]: poolAddress,
    message,
    contract,
    data
  };
}
