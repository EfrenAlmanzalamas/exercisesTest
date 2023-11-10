export function valid(digitString: unknown): boolean {

    if (typeof digitString !== 'string') {
        throw new Error('Input must be a string');
    }


    const number = digitString.replace(/ /g, '');
    if (number.length <= 1) {
        return false;
    }


    if (!/^\d+$/.test(number)) {
        return false;
    }


    const digits = number.split('').map(Number);


    for (let i = digits.length - 2; i >= 0; i -= 2) {
        digits[i] *= 2;
        if (digits[i] > 9) {
            digits[i] -= 9;
        }
    }


    const total = digits.reduce((acc, digit) => acc + digit, 0);


    return total % 10 === 0;
}
