export function calculatePrimeFactors(number: number): number[] {
    const primeFactors: number[] = [];

    let divisor = 2;

    while (number > 1) {
        if (number % divisor === 0) {
            primeFactors.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }
    }

    return primeFactors;
}
