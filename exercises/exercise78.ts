export function primes(n: number): number[] {
    if (n <= 1) {
        return [];
    }


    const isPrime: boolean[] = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;


    let p = 2;
    while (p * p <= n) {
        if (isPrime[p]) {

            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
        p++;
    }


    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}