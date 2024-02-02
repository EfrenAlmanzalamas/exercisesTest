class Matrix {
  mat: string[][];
  nrows: number;
  ncols: number;
  n: number;
  constructor(input: string[]) {
    this.mat = input.map((row) => [...row]);
    this.nrows = this.mat.length;
    this.ncols = Math.max(...this.mat.map((row) => row.length));
    this.n = Math.max(this.nrows, this.ncols);
  }
  align() {
    for (let i = this.nrows - 2; i >= 0; i--) {
      this.mat[i] = [...this.mat[i].join("").padEnd(this.mat[i + 1].length)];
    }
    const newMat = this.mat.map((row) => [
      ...row,
      ...Array(this.ncols - row.length).fill(""),
    ]);
    while (newMat.length < this.n) {
      newMat.push(Array(this.n).fill(""));
    }
    this.mat = newMat;
  }
  swap(
    mat: string[][],
    dstX: number,
    dstY: number,
    srcX: number,
    srcY: number,
  ) {
    const elem = mat[dstX][dstY];
    mat[dstX][dstY] = mat[srcX][srcY];
    mat[srcX][srcY] = elem;
  }
  transpose() {
    this.align();
    for (let i = 0; i < this.n; i++) {
      for (let j = i; j < this.n; j++) {
        this.swap(this.mat, i, j, j, i);
      }
    }
    return this;
  }
  build(): string[] {
    return this.mat
      .map((cols) => cols.slice(0, this.nrows).join(""))
      .filter((x) => x);
  }
}
export function transpose(input: string[]): string[] {
  const mat = new Matrix(input);
  return mat.transpose().build();
}
