export function nucleotideCounts(dnaSequence: string): { [key: string]: number } | Error {
    const nucleotideCounts: { [key: string]: number } = {
        'A': 0,
        'C': 0,
        'G': 0,
        'T': 0,
    };

    for (const nucleotide of dnaSequence) {
        if (!['A', 'C', 'G', 'T'].includes(nucleotide)) {
            throw new Error('Invalid nucleotide in strand');
        }
        nucleotideCounts[nucleotide]++;
    }

    return nucleotideCounts;
}