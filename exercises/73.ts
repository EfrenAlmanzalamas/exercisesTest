export class BinarySearchTree {
  #data: number;
  #left?: BinarySearchTree;
  #right?: BinarySearchTree;
  constructor(data: number) {
    this.#data = data;
  }
  public get data(): number {
    return this.#data;
  }
  public get right(): BinarySearchTree | undefined {
    return this.#right;
  }
  public get left(): BinarySearchTree | undefined {
    return this.#left;
  }
  public insert(item: number) {
    if (item <= this.#data) {
      if (this.#left) {
        this.#left.insert(item);
      } else {
        this.#left = new BinarySearchTree(item);
      }
    } else {
      if (this.#right) {
        this.#right.insert(item);
      } else {
        this.#right = new BinarySearchTree(item);
      }
    }
  }
  public each(callback: (data: number) => void) {
    if (this.#left) {
      this.#left.each(callback);
    }
    callback(this.#data);
    if (this.#right) {
      this.#right.each(callback);
    }
  }
}

