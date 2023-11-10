export function makeDiamond(character: string): string {
    if (character < 'A' || character > 'Z') {
        throw new Error('Invalid input. Please enter a letter from A to Z.');
    }

    const n = character.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    let result = '';

    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1);
        if (i === 0) {
            result += spaces + 'A' + spaces + '\n';
        } else {
            const middleSpaces = ' '.repeat(2 * i - 1);
            result += spaces + String.fromCharCode('A'.charCodeAt(0) + i) + middleSpaces + String.fromCharCode('A'.charCodeAt(0) + i) + spaces + '\n';
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        const spaces = ' '.repeat(n - i - 1);
        if (i === 0) {
            result += spaces + 'A' + spaces + '\n';
        } else {
            const middleSpaces = ' '.repeat(2 * i - 1);
            result += spaces + String.fromCharCode('A'.charCodeAt(0) + i) + middleSpaces + String.fromCharCode('A'.charCodeAt(0) + i) + spaces + '\n';
        }
    }

    return result;
}