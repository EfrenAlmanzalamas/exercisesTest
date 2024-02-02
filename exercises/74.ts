export class List<T> {
  public items: T[] = [];
  constructor(...items: T[]) {
    this.items = items;
  }
  compare(other: List<T>) {
    const sublist = this.items.length === 0 ||
      `,${other.items.join(',')},`.includes(`,${this.items.join(',')},`);
    const superlist = other.items.length === 0 ||
      `,${this.items.join(',')},`.includes(`,${other.items.join(',')},`);
    return ['unequal', 'superlist', 'sublist', 'equal'][+superlist + (+sublist << 1)]
  }
}
