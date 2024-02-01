type oldFormat = { [key: string]: string[] };
type newFormat = { [key: string]: number };
export function transform(old: oldFormat): newFormat {
  let n: newFormat = {};
  for (const el of Object.keys(old)) {
    for (const val of old[el]) {
      n[val.toLowerCase()] = Number(el);
    }
  }
  return n;
}
