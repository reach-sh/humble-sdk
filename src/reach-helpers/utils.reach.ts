export const noOp = () => null;

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
export type Maybe<T> = [val: "Some" | "None", v?: T | null];
export function fromMaybe<T extends any>(
  mVal: Maybe<T>,
  format?: (v: any) => any,
  fallback?: any
): T | null {
  const fmt = format || ((v: any) => v);
  return mVal[0] === "Some" ? fmt(mVal[1]) : fallback || mVal[1];
}

/**
 * @internal
 * Format arbitrarily large numbers or number strings. (e.g. `fn(1000)` -> `1K` ) */
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
 * @internal
 * Strip `\u0000` characters from byte string
 * @param {stringn} str String with empty `\0000` characters to remove
 * @returns
 */
export function trimByteString(str: string = ""): string {
  return str.replace(/\0/g, "");
}

export function trailing0s(val: string) {
  return val.replace(/0*$/, "").replace(/\.$/, "");
}

function trimDecimals(val: string) {
  if (val.replace(/0*/, "") === "") return "";
  return `.${trailing0s(val)}`;
}
