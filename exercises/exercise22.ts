export class SimpleCipher {
    private key: string;

    constructor(key?: string) {
        if (key) {
            if (!this.isValidKey(key)) {
                throw new Error("Invalid key. Key must contain only lowercase letters.");
            }
            this.key = key;
        } else {
            this.key = this.generateRandomKey();
        }
    }

    private isValidKey(key: string): boolean {
        return /^[a-z]+$/.test(key);
    }

    private generateRandomKey(): string {
        const keyLength = 100;
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomKey = '';
        for (let i = 0; i < keyLength; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            randomKey += alphabet[randomIndex];
        }
        return randomKey;
    }

    encode(plainText: string): string {
        let cipherText = '';
        for (let i = 0; i < plainText.length; i++) {
            const plainChar = plainText[i];
            const keyChar = this.key[i % this.key.length];
            const shift = keyChar.charCodeAt(0) - 'a'.charCodeAt(0);
            const encodedChar = this.shiftChar(plainChar, shift);
            cipherText += encodedChar;
        }
        return cipherText;
    }

    decode(cipherText: string): string {
        let plainText = '';
        for (let i = 0; i < cipherText.length; i++) {
            const cipherChar = cipherText[i];
            const keyChar = this.key[i % this.key.length];
            const shift = keyChar.charCodeAt(0) - 'a'.charCodeAt(0);
            const decodedChar = this.shiftChar(cipherChar, -shift);
            plainText += decodedChar;
        }
        return plainText;
    }

    private shiftChar(char: string, shift: number): string {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const charCode = char.charCodeAt(0);
        if (alphabet.includes(char)) {
            const shiftedCharCode = ((charCode - 'a'.charCodeAt(0) + shift + 26) % 26) + 'a'.charCodeAt(0);
            return String.fromCharCode(shiftedCharCode);
        }
        return char;
    }
}