export class ComplexNumber {
    constructor(private _real: number, private _imaginary: number) {
        if (Object.is(_imaginary, -0)) {
            this._imaginary = 0;
        }
    }

    public get real(): number {
        return this._real;
    }

    public get imag(): number {
        return this._imaginary;
    }

    public add(other: ComplexNumber): ComplexNumber {
        const realPart = this._real + other.real;
        const imagPart = this._imaginary + other.imag;
        return new ComplexNumber(realPart, imagPart);
    }

    public sub(other: ComplexNumber): ComplexNumber {
        const realPart = this._real - other.real;
        const imagPart = this._imaginary - other.imag;
        return new ComplexNumber(realPart, imagPart);
    }

    public mul(other: ComplexNumber): ComplexNumber {
        const realPart = this._real * other.real - this._imaginary * other.imag;
        const imagPart = this._imaginary * other.real + this._real * other.imag;
        return new ComplexNumber(realPart, imagPart);
    }

    public div(other: ComplexNumber): ComplexNumber {
        const denominator = other.real ** 2 + other.imag ** 2;
        const realPart = (this._real * other.real + this._imaginary * other.imag) / denominator;
        const imagPart = (this._imaginary * other.real - this._real * other.imag) / denominator;
        return new ComplexNumber(realPart, imagPart);
    }

    public get abs(): number {
        return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
    }

    public get conj(): ComplexNumber {
        return new ComplexNumber(this._real, -this._imaginary);
    }

    public get exp(): ComplexNumber {
        const realPart = Math.exp(this._real) * Math.cos(this._imaginary);
        const imagPart = Math.exp(this._real) * Math.sin(this._imaginary);
        return new ComplexNumber(realPart, imagPart);
    }
}