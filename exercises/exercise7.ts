export function toRna(nucleotides: string) {
    let result: string = '';

    for (const nucleotide of nucleotides) {
        if (nucleotide in TranscriptionMap) {
            result += TranscriptionMap[nucleotide];
        } else {
           throw new Error('Invalid input DNA.');
        }
    }
    return result;
}


export const TranscriptionMap: { [value: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
};
