function randomNextBlockMatrix() {
  
  const BLOCK_SET = [
    [
      [1,1],
      [1,1]
    ],
    [
      [0,2,0],
      [2,2,2],
      [0,0,0]
    ],
    [
      [0,3,3],
      [3,3,0],
      [0,0,0]
    ],
    [
      [4,4,0],
      [0,4,4],
      [0,0,0]
    ],
    [
      [5,0,0],
      [5,5,5],
      [0,0,0]
    ],
    [
      [0,0,6],
      [6,6,6],
      [0,0,0]
    ],
    [
      [0,0,0,0],
      [7,7,7,7],
      [0,0,0,0],
      [0,0,0,0]
    ]
  ]
  
  const BLOCK_SET_OPTION = [
    [
      [0,0],
      [0,0]
    ],
    [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ],
    [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
  ]
  
  const index = getRandomIndex(BLOCK_SET.length)
  let result = {
    block_set: BLOCK_SET[index]
  }

  return BLOCK_SET[getRandomIndex(BLOCK_SET.length)]

}  

function initMatrix(rows, cols) {
  let matrix = {
    board: [],
    options: []
  };
  for (let y = 0; y < rows; y++) {
    matrix.board.push(new Array(cols).fill(0));
    matrix.options.push(new Array(cols).fill({}));
  }
  return matrix;
}


function stack(block, matrix) {
  block.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if(value > 0) {
        matrix[y+block.y][x+block.x] = block.shape[y][x];
      }
    });
  });
}

