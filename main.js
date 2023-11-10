function validSolution(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set(board[i]);
      if (row.size !== 9 || row.has(0)) {
        return false;
      }
    }
    
    for (let i = 0; i < 9; i++) {
      let column = new Set();
      for (let j = 0; j < 9; j++) {
        column.add(board[j][i]);
      }
      if (column.size !== 9 || column.has(0)) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let block = new Set();
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            block.add(board[k][l]);
          }
        }
        if (block.size !== 9 || block.has(0)) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  
  console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])); // => true
  
  console.log( validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ])); // => false

  
console.log();  