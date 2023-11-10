function isPrime(number: number): boolean {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

export function nth(n: number): number {
    if (n < 1) {
        throw new Error("Prime is not possible");
    }
    let count = 0;
    let candidate = 2;
    while (true) {
        if (isPrime(candidate)) {
            count++;
            if (count === n) {
                return candidate;
            }
        }
        candidate++;
    }
}