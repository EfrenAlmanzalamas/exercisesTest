export function ofSize(size: number): number[][] {

    const matrix: number[][] = [];
    for (let i = 0; i < size; i++) {
        matrix.push(new Array(size).fill(0));
    }


    let row = 0;
    let col = 0;
    let direction = "right";


    for (let num = 1; num <= size * size; num++) {
        matrix[row][col] = num;

        if (direction === "right") {
            if (col + 1 < size && matrix[row][col + 1] === 0) {
                col++;
            } else {
                direction = "down";
                row++;
            }
        } else if (direction === "down") {
            if (row + 1 < size && matrix[row + 1][col] === 0) {
                row++;
            } else {
                direction = "left";
                col--;
            }
        } else if (direction === "left") {
            if (col - 1 >= 0 && matrix[row][col - 1] === 0) {
                col--;
            } else {
                direction = "up";
                row--;
            }
        } else if (direction === "up") {
            if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
                row--;
            } else {
                direction = "right";
                col++;
            }
        }
    }

    return matrix;
}
