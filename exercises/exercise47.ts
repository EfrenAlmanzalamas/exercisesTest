export const toRoman = (n: number): string => {
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const romansCodes = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];
    let romanNumeral = '';
    let i = 0;
    while (n > 0) {
        for (let _ = 0; _ < Math.floor(n / val[i]); _++) {
            romanNumeral += romansCodes[i];
            n -= val[i];
        }
        i++;
    }
    return romanNumeral;
};
