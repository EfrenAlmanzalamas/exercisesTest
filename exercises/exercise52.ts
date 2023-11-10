export const largestProduct = (input: string, span: number): number => {
    if (span < 0) {
        throw new Error('Span must not be negative');
    }

    if (span === 0) {
        return 1;
    }

    if (span > input.length) {
        throw new Error('Span must be smaller than string length');
    }

    if (/[^0-9]/.test(input)) {
        throw new Error('Digits input must only contain digits');
    }

    if (input.length === 0) {
        return 1;
    }

    let largestProduct = 0;

    for (let i = 0; i <= input.length - span; i++) {
        const series = input.slice(i, i + span);
        const product = series.split('').reduce((acc, digit) => acc * parseInt(digit, 10), 1);
        largestProduct = Math.max(largestProduct, product);
    }

    return largestProduct;
};