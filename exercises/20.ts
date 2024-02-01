function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
export class Rational {
  numerator: number;
  denominator: number;
  constructor(numerator: number, denominator = 1) {
    this.numerator = numerator;
    this.denominator = denominator;
    return this.reduce();
  }
  add(that: Rational) {
    return new Rational(
      this.numerator * that.denominator + that.numerator * this.denominator,
      this.denominator * that.denominator,
    );
  }
  sub(that: Rational) {
    return new Rational(
      this.numerator * that.denominator - that.numerator * this.denominator,
      this.denominator * that.denominator,
    );
  }
  mul(that: Rational) {
    return new Rational(
      this.numerator * that.numerator,
      this.denominator * that.denominator,
    );
  }
  div(that: Rational) {
    return new Rational(
      this.numerator * that.denominator,
      this.denominator * that.numerator,
    );
  }
  abs() {
    return new Rational(Math.abs(this.numerator), this.denominator);
  }
  exprational(that: number): Rational {
    const absThat = Math.abs(that);
    const numerator = this.numerator ** absThat;
    const denominator = this.denominator ** absThat;
    if (that >= 0) {
      return new Rational(numerator, denominator);
    } else {
      return new Rational(denominator, numerator);
    }
  }
  expreal(that: number): number {
    return that ** this.valueOf()
  }
  reduce() {
    const divisor = gcd(this.numerator, this.denominator);
    this.numerator /= divisor;
    this.denominator /= divisor;
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
    return this;
  }
  valueOf() {
    return this.numerator / this.denominator;
  }
}
