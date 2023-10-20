export function parse(phrase: unknown): string {
    if (typeof phrase !== 'string') {
        throw new Error('Input must be a string');
    }


    const cleanedPhrase = phrase.replace(/[^a-zA-Z0-9\s-]/g, '');


    const words = cleanedPhrase.split(/[\s-]+/);


    const acronym = words.map(word => word[0].toUpperCase()).join('');

    return acronym;
}