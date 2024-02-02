export class Crypto {
  private input: string;

  constructor(input: string) {
    this.input = input;
  }
  get normalizedText() {
    return this.input
      .replace(/[\s\W]/g, '') // delete all whitespaces and punctuation;
      .toLowerCase();
  }
  get size() {
    const columnSize: number = Math.ceil(Math.sqrt(this.normalizedText.length));
    const rowSize: number = Math.ceil(this.normalizedText.length / columnSize);
    return {
      column: columnSize,
      row: rowSize
    }
  }
  get rectangle() {
    const result: string[] = [];
    for (let i = 0; i < this.size.row; i++) {
      const indexStart: number = i * this.size.column;
      const indexEnd: number = indexStart + this.size.column;
      let word: string = '';
      if (indexEnd > this.normalizedText.length) {
        result.push(this.normalizedText.substring(indexStart).padEnd(this.size.column));
      } else {
        result.push(this.normalizedText.substring(indexStart, indexEnd));
      }
    }
    return result;
  }
  get ciphertext() {
    const codedRectangle: string[] = [];
    for (let i = 0; i < this.size.column; i++) {
      const word: string = this.rectangle.reduce((chars, row) => chars += row[i], '');
      codedRectangle.push(word);
    }
    return codedRectangle.join(' ');
  }
}