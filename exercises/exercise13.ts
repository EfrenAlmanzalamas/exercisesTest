export class Matrix {
    constructor(matrixStr: string) {
        this.rows = matrixStr
            .trim()
            .split('\n')
            .map(row => row.split(' ').map(Number));
        this.columns = this.getColumns();
    }

    public rows: number[][];
    public columns: number[][];

    getRows() {
        return this.rows;
    }

    getColumns() {
        return Array.from({length: this.rows[0].length}, (_, colIndex) =>
            this.rows.map((row: any[]) => row[colIndex])
        );
    }
}