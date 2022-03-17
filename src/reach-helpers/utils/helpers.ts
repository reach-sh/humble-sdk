export const noOp = () => null;

export const isBrowser = new Function(
  "try { return this === window } catch(e) { return false; }"
);

// Generate a number abbreviation
function abbrevNumber(numOfGroups: number) {
  if (Number.isNaN(numOfGroups) || !numOfGroups) return "";
  const ab = ["K", "M", "B", "T", "Qa", "Qi", "Si", "Se", "O", "N", "D"];
  if (numOfGroups >= ab.length) return "!";
  return ab[numOfGroups - 1];
}

/**
 * Unwrap a `Maybe` value. When `mVal[0]` is `"Some"`, `mVal[1]` has a value
 */
export type Maybe = [val: "Some" | "None", v?: any | null];
export function fromMaybe(
  mVal: Maybe,
  format?: (v: any) => any,
  fallback?: any
): any | null {
  const fmt = format || ((v: any) => v);
  return mVal[0] === "Some" ? fmt(mVal[1]) : fallback || mVal[1];
}

/** Format currency in user locale (e.g. `fn(1000) -> 1,000) */
export function formatCurrencyLocale(val: number, locale?: any) {
  const intlFmt = Intl.NumberFormat(locale);
  return intlFmt.format(val);
}

/** Format arbitrarily large numbers or number strings. (e.g. `fn(1000)` -> `1K` ) */
export function formatNumberShort(val: string | number | bigint, round = 2) {
  if (isNaN(Number(val))) return "";

  const parts = val.toString().split(".");
  const ints = parts[0].length;
  if (!ints) return Number(val).toFixed(3);

  // Get number of vals before first 'comma'
  const abbrLength = ints % 3 || ints;
  const abbr = parts[0].substring(0, abbrLength) || parts[0];
  const rest = parts[0].substring(abbrLength);
  const restDecs = rest.substring(0, round);
  const grouper = new RegExp(/[0-9]{3}/g);
  const groups = [];
  const i = rest.matchAll(grouper);
  let n = i.next();
  if (!n.done) {
    do {
      groups.push(n.value[0]);
      n = i.next();
    } while (!n.done);
  }

  let decimals = trimDecimals(restDecs);
  if (abbrLength === ints) decimals = trimDecimals(parts[1] || restDecs);
  const out = `${abbr}${decimals}${abbrevNumber(groups.length)}`;

  return out;
}

/**
 * Strip `\u0000` characters from byte string
 * @param {stringn} str String with empty `\0000` characters to remove
 * @returns
 */
export function trimByteString(str: string = ""): string {
  return str.replace(/\0/g, "");
}

/**
 * Shortens string to `XXXX...XXXX`, with `XXX` padding determined by optional `pad` parameter
 */
export function truncateString(str: string, pad = 6): string {
  const { length } = str;
  const start = str.substring(0, pad);
  return `${start}...${str.substring(length - pad, length)}`;
}

function trimDecimals(val: string) {
  if (val.replace(/0*/, "") === "") return "";
  return `.${val.replace(/0$/, "")}`;
}
