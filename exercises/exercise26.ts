export class Squares {
    private _range: number[];

    constructor(count: number) {
        this._range = Array.from({ length: count }, (_, i) => i + 1);
    }

    get sumOfSquares(): number {
        return this._range.reduce((sum, num) => sum + num ** 2, 0);
    }

    get squareOfSum(): number {
        const sum = this._range.reduce((sum, num) => sum + num, 0);
        return sum ** 2;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}