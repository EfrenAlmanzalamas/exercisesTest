export function isValid(isbn: unknown): boolean {
    if (typeof isbn !== 'string') {
        return false;
    }


    const cleanedIsbn = isbn.replace(/-/g, '').trim();


    if (cleanedIsbn.length !== 10) {
        return false;
    }


    let total = 0;


    for (let i = 0; i < 10; i++) {

        if (i === 9 && cleanedIsbn[i] === 'X') {
            total += 10;
        }

        else if (/^\d$/.test(cleanedIsbn[i])) {
            total += parseInt(cleanedIsbn[i], 10) * (10 - i);
        } else {
            return false; // Invalid character in the ISBN
        }
    }


    return total % 11 === 0;
}