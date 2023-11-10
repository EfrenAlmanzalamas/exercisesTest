export function sayInEnglish(num: number): string {
    if (num < 0 || num > 999999999999) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
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

    function convertLessThanThousand(n: number): string {
        if (n < 20) {
            return oneTo19(n);
        } else if (n < 100) {
            return tens(Math.floor(n / 10)) + (n % 10 > 0 ? `-${oneTo19(n % 10)}` : "");
        } else {
            return `${oneTo19(Math.floor(n / 100))} hundred${n % 100 > 0 ? ` ${convertLessThanThousand(n % 100)}` : ""}`;
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

    const scaleWords = ["", "thousand", "million", "billion"];
    let result = "";
    let chunkIndex = 0;

    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            result = `${convertChunk(chunk, scaleWords[chunkIndex])} ${result}`;
        }
        num = Math.floor(num / 1000);
        chunkIndex++;
    }

    return result.trim();
}


