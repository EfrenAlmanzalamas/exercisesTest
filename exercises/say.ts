export function sayInEnglish(num: number): string {
    if (num < 0 || num > 999999999999) {
        return "Number out of range";
    }

    if (num === 0) {
        return "zero";
    }

    function oneTo19(n: number): string {
        const words = [
            "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        ];
        return words[n - 1];
    }

    function tens(n: number): string {
        const words = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        return words[n - 2];
    }

    function convertLessThanThousand(n: number): string | undefined {
        if (n < 20) {
            return oneTo19(n);
        } else if (n < 100) {
            return tens(Math.floor(n / 10)) + (n % 10 > 0 ? `-${oneTo19(n % 10)}` : "");
        } else {
            return `${oneTo19(Math.floor(n / 100))} hundred${n % 100 > 0 ? ` and ${convertLessThanThousand(n % 100)}` : ""}`;
        }
    }

    function convertChunk(num: number, scaleWord: string): string {
        if (num === 0) {
            return "";
        } else if (num < 1000) {
            return `${convertLessThanThousand(num)} ${scaleWord || ""}`;
        } else {
            return `${convertLessThanThousand(Math.floor(num / 1000))} thousand${num % 1000 > 0 ? ` ${convertChunk(num % 1000, "")}` : ""}`;
        }
    }
}