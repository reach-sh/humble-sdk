/**
 * @file VERSIONED CONSTANTS
 *
 * IMPORTANT! Check/update the values in this file with every release
 */

import { default as ANNOUNCERS } from "./json/ANNOUNCERS.json";

type AppVersion = keyof typeof ANNOUNCERS;

/** Current major version (semver) of the SDK */
export const BASE_VERSION: AppVersion = "v3";

/** LP Token symbol for every HumbleSwap pool. Bump when sdk + contract version changes */
export const HUMBLE_LP_TOKEN_SYMBOL = "HMBL3LT";

/** Get versioned announcer contract ids. */
export function getLegacyAnnouncers(v = BASE_VERSION) {
  return ANNOUNCERS[v];
}
