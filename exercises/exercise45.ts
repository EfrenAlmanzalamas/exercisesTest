export class Anagram {
    private target: string;

    constructor(target: string) {

        this.target = target.toLowerCase();
    }

    public matches(...potentials: string[]): string[] {
        const anagramSet: string[] = [];

        for (const candidate of potentials) {

            const normalizedCandidate = candidate.toLowerCase();


            if (this.isAnagram(this.target, normalizedCandidate) && this.target !== normalizedCandidate) {
                anagramSet.push(candidate);
            }
        }

        return anagramSet;
    }

    private isAnagram(word1: string, word2: string): boolean {

        return word1.split('').sort().join('') === word2.split('').sort().join('');
    }
}