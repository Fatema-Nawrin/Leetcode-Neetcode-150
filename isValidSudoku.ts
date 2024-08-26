function isValidSudoku(board: string[][]): boolean {
  const rows = {};
  const columns = {};
  const squares = {};
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];
      if (num === '.') {
        continue;
      }
      const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!rows[r]) {
        rows[r] = new Set();
      }

      if (!columns[c]) {
        columns[c] = new Set();
      }

      if (!squares[grid]) {
        squares[grid] = new Set();
      }

      if (rows[r].has(num) || columns[c].has(num) || squares[grid].has(num)) {
        return false;
      }

      columns[c].add(num);
      rows[r].add(num);
      squares[grid].add(num);
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
