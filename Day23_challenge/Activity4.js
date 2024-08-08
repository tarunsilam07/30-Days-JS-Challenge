

// Task 4 N Queens

function solveNQueens(n) {
    const ans = [];
    const board = Array.from({ length: n }, () => ".".repeat(n));
    const leftRow = Array(n).fill(0);
    const lowerDiagonal = Array(2 * n - 1).fill(0);
    const upperDiagonal = Array(2 * n - 1).fill(0);

    function check(col) {
        if (col === n) {
            ans.push([...board]);
            return;
        }
        for (let row = 0; row < n; row++) {
            if (leftRow[row] === 0 && upperDiagonal[n - 1 + col - row] === 0 && lowerDiagonal[col + row] === 0) {
                // Place the queen
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                leftRow[row] = 1;
                upperDiagonal[n - 1 + col - row] = 1;
                lowerDiagonal[col + row] = 1;

                check(col + 1);

                // Backtrack and remove the queen
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
                leftRow[row] = 0;
                upperDiagonal[n - 1 + col - row] = 0;
                lowerDiagonal[col + row] = 0;
            }
        }
    }

    check(0);
    return ans;
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));
console.log(solveNQueens(7));
console.log(solveNQueens(2));




