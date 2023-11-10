export function annotate(field: string[]): string[] {
    if (field.length === 0 || field[0].length === 0) {
        return field;
    }

    const rows = field.length;
    const cols = field[0].length;
    const mineCounts: string[][] = new Array(rows).fill('').map(() => new Array(cols).fill(' '));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (field[i][j] === '*') {
                mineCounts[i][j] = '*';
            } else {
                let count = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols && field[i + x][j + y] === '*') {
                            count++;
                        }
                    }
                }
                if (count > 0) {
                    mineCounts[i][j] = count.toString();
                }
            }
        }
    }

    return mineCounts.map(row => row.join(''));
}
