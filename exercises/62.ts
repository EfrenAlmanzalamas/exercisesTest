type returnType = { row: number, column: number };
type Matrix = number[][];
class RowCols {
  public rows: number;
  public cols: number;
  constructor(private rowCols: Matrix) {
    this.rows = rowCols.length;
    this.cols = this.rows > 0 ? rowCols[0].length : 0;
  }
  isThisMatrix(): boolean {
    return this.rows < 1 ? false : this.cols < 1 ? false : true;
  }
  printlog(): void {
    console.log(this.rowCols);
  }
  getMinimumIncol(column: number, diffVal: number = 100000): number {
    let resultVal: number = -1;
    this.rowCols.forEach((rows, i) => {
      if (diffVal != Math.min(diffVal, rows[column])) {
        diffVal = Math.min(diffVal, rows[column])
        resultVal = i;
      }
    });
    return resultVal;
  }
  getMaximumInrow(row: number, diffVal: number = -1): number {
    let resultVal: number = -1;
    this.rowCols[row].forEach((col, i) => {
      if (diffVal != Math.max(diffVal, col)) {
        diffVal = Math.max(diffVal, col);
        resultVal = i;
      }
    });
    return resultVal;
  }
  isSaddle(row: number, col: number): boolean {
    let maximum: number = -1;
    const min = this.getMinimumIncol(col);
    const max = this.getMaximumInrow(row);
    return this.rowCols[min][col] === this.rowCols[row][max];
  }
}
export function saddlePoints(integers: Matrix): returnType[] {
  let result: returnType[] = [];
  const matrix = new RowCols(integers);
  if (matrix.isThisMatrix()) {
    for (let r = 0; r < matrix.rows; r++) {
      for (let c = 0; c < matrix.cols; c++) {
        if (matrix.isSaddle(r, c)) {
          result.push({ row: r + 1, column: c + 1 });
        }
      }
    }
  }
  return result;
}