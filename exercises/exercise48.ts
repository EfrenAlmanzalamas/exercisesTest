export class Series {
    private inputString: string;

    constructor(series: string) {
        this.inputString = series;
    }

    slices(sliceLength: number): string[] {
        if (sliceLength > this.inputString.length) {
            throw new Error('Slice length cannot be greater than the input string length');
        }

        const substrings: string[] = [];
        for (let i = 0; i <= this.inputString.length - sliceLength; i++) {
            const substring = this.inputString.slice(i, i + sliceLength);
            substrings.push(substring);
        }

        return substrings;
    }
}
