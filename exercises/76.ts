export class CustomSet {
  private elements: Set<unknown>;

  constructor(initial?: unknown[]) {
    this.elements = new Set(initial);
  }

  empty(): boolean {
    return this.elements.size === 0;
  }

  contains(element: unknown): boolean {
    return this.elements.has(element);
  }

  add(element: unknown): CustomSet {
    this.elements.add(element);
    return this;
  }

  subset(other: CustomSet): boolean {
    return [...this.elements].every((element) => other.contains(element));
  }

  disjoint(other: CustomSet): boolean {
    return ![...this.elements].some((element) => other.contains(element));
  }

  eql(other: CustomSet): boolean {
    if (this.size() !== other.size()) {
      return false;
    }
    return this.subset(other) && other.subset(this);
  }

  union(other: CustomSet): CustomSet {
    const newSet = new CustomSet([...this.elements]);
    for (const element of other.elements) {
      newSet.add(element);
    }
    return newSet;
  }

  intersection(other: CustomSet): CustomSet {
    const newSet = new CustomSet();
    for (const element of this.elements) {
      if (other.contains(element)) {
        newSet.add(element);
      }
    }
    return newSet;
  }

  difference(other: CustomSet): CustomSet {
    const newSet = new CustomSet([...this.elements]);
    for (const element of other.elements) {
      newSet.elements.delete(element);
    }
    return newSet;
  }

  size(): number {
    return this.elements.size;
  }
}