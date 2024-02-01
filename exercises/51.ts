export function encode(integers: number[]): number[] {
  const result: number[] = [];
  for (let int of integers.reverse()) {
    const l = result.length;
    do {
      result.push((int & MASK) + FULL);
      int >>>= 7;
    } while (int)
    result[l] -= FULL;
  }
  return result.reverse();
}
export function decode(bytes: number[]): number[] {
  if (bytes[bytes.length - 1] & FULL) throw new Error("Incomplete sequence");
  const result: number[] = [];
  let int = 0;
  for (let b of bytes) {
    int = (int * FULL) + (b & MASK);
    if (int >= 2 ** 32) throw new Error("Invalid sequence");
    if ((b & FULL) === 0) {
      result.push(int);
      int = 0;
    }
  }
  return result;
}
const FULL = 2 ** 7;
const MASK = FULL - 1;