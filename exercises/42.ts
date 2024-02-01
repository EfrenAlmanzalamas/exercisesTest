type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}
class Triplet {
  private integers: [number, number, number] = [0, 0, 0];
  constructor({ ...objectVal }: Options) {
    const begin = objectVal.minFactor ?? 1;
    for (let a = begin; a < objectVal.sum; a++) {
      for (let b = a + 1; b < objectVal.sum; b++) {
        const c = objectVal.sum - a - b;
        this.integers = [a, b, c];
        const maxValid = objectVal.maxFactor ?? objectVal.sum;
        if (this.isValid && c < maxValid) {
          return;
        }
      }
    }
  }
  toArray(): [number, number, number] {
    return this.integers;
  }
  get isValid(): boolean {
    const [a, b, c] = this.integers;
    return (a * a + b * b === c * c);
  }
}
export function triplets({ ...objectVal }: Options): Triplet[] {
  const results: Triplet[] = [];
  let triplObj = new Triplet(objectVal);
  while (triplObj.isValid) {
    results.push(triplObj);
    triplObj = new Triplet({ sum: objectVal.sum, minFactor: triplObj.toArray()[0] + 1, maxFactor: objectVal.maxFactor });
  }
  return results;
}
