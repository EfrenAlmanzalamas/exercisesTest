export function translate(rna_sequence: string): string[] {
    const codonTable: { [codon: string]: string } = {
        "AUG": "Methionine",
        "UUU": "Phenylalanine",
        "UUC": "Phenylalanine",
        "UUA": "Leucine",
        "UUG": "Leucine",
        "UCU": "Serine",
        "UCC": "Serine",
        "UCA": "Serine",
        "UCG": "Serine",
        "UAU": "Tyrosine",
        "UAC": "Tyrosine",
        "UGU": "Cysteine",
        "UGC": "Cysteine",
        "UGG": "Tryptophan",
        "UAA": "STOP",
        "UAG": "STOP",
        "UGA": "STOP",
    };

    const proteinSequence: string[] = [];

    for (let i = 0; i < rna_sequence.length; i += 3) {
        const codon = rna_sequence.slice(i, i + 3);
        const aminoAcid = codonTable[codon];

        if (aminoAcid === "STOP") {
            break;
        } else if (aminoAcid !== undefined) {
            proteinSequence.push(aminoAcid);
        }
    }

    return proteinSequence;
}