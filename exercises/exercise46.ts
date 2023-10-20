export function isIsogram(word: string): boolean {

    const cleanedWord = word.replace(/[-\s]/g, "").toLowerCase();


    const seenLetters = new Set<string>();

    for (const letter of cleanedWord) {
        if (seenLetters.has(letter)) {
            return false;
        }
        seenLetters.add(letter);
    }

    return true;
}