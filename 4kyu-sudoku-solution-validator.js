// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise.
// The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// eslint-disable-next-line
function validSolution(board) {

  var sortedVer = board.slice().sort();
  var block1 = [], block2 = [], block3 = [], block4 = [], block5 = [], block6 = [], block7 = [], block8 = [], block9 = [];

  for(let a = 0; a < board.length; a++) {
    // check for zeroes, return false
    if(board[a].includes(0)) return false;

    for(let b = 1; b < board[a].length - 1; b++) {
      // check for dupes horizontally, return false
      var sortedHor = board[a].slice().sort();
      if(sortedHor[b] === sortedHor[b + 1] || sortedHor[b] === sortedHor[b - 1]) return false;

      // check for dupes vertically, return false
      if(sortedVer[b][a] === sortedVer[b + 1][a] || sortedVer[b][a] === sortedVer[b - 1][a]) return false;

      // push values in to blocks
      if(a >= 0 && a <= 2 && (b - 1) >= 0 && (b - 1) <= 2) block1.push(board[a][b - 1]);
      if(a >= 3 && a <= 5 && (b - 1) >= 0 && (b - 1) <= 2) block2.push(board[a][b - 1]);
      if(a >= 6 && a <= 8 && (b - 1) >= 0 && (b - 1) <= 2) block3.push(board[a][b - 1]);
      if(a >= 0 && a <= 2 && (b - 1) >= 3 && (b - 1) <= 5) block4.push(board[a][b - 1]);
      if(a >= 3 && a <= 5 && (b - 1) >= 3 && (b - 1) <= 5) block5.push(board[a][b - 1]);
      if(a >= 6 && a <= 8 && (b - 1) >= 3 && (b - 1) <= 5) block6.push(board[a][b - 1]);
      if(a >= 0 && a <= 2 && (b - 1) >= 6 && (b - 1) <= 8) {
        block7.push(board[a][b - 1]);
        block7.push(board[a][b]);
        block7.push(board[a][b + 1]);
      }
      if(a >= 3 && a <= 5 && (b - 1) >= 6 && (b - 1) <= 8) {
        block8.push(board[a][b - 1]);
        block8.push(board[a][b]);
        block8.push(board[a][b + 1]);
      }
      if(a >= 6 && a <= 8 && (b - 1) >= 6 && (b - 1) <= 8) {
        block9.push(board[a][b - 1]);
        block9.push(board[a][b]);
        block9.push(board[a][b + 1]);
      }
    }
  }
  const blocks = [block1, block2, block3, block4, block5, block6, block7, block8, block9];
  // check that each block includes 1-9
  for(let i = 1; i < 10; i++) {
    if(!blocks[0].includes(i)) return false;
    if(!blocks[1].includes(i)) return false;
    if(!blocks[2].includes(i)) return false;
    if(!blocks[3].includes(i)) return false;
    if(!blocks[4].includes(i)) return false;
    if(!blocks[5].includes(i)) return false;
    if(!blocks[6].includes(i)) return false;
    if(!blocks[7].includes(i)) return false;
    if(!blocks[8].includes(i)) return false;
  }
  return true;
}