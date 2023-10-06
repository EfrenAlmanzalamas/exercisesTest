export function count(subtitle: string): Map<string, number> {
    subtitle = subtitle.toLowerCase();
    const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g;

    console.log({subtitle});
    subtitle = subtitle.replace(specialChars, '');
    console.log({subtitle});
    // .split(/\s+/);
    const words = subtitle.match(/\b[\w']+\b/g);
    console.log({words});


    const wordCounts = new Map<string, number>();

    if (words) {
        words.forEach(word => {
            wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        });
    }

    return wordCounts;
}