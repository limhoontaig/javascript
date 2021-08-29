function move(block, x, y) {
  block.x += x;
  block.y += y;
}

function rotate(block) {
  block.shape.forEach((row, y) => {
    for (let x = 0; x < y; x++) {
      const tempValue = block.shape[x][y];
      block.shape[x][y] = block.shape[y][x];
      block.shape[y][x] = tempValue;
    }
  });

  block.shape.forEach((row) => {
    row.reverse();
  })
}

function validate(block) {
  let isValid = true;

  block.shape.some((row, dy) => {
    row.some((valie, dx) => {
      if(value > 0) {
        if(block.x+dx < 0 || block.x+dx >= matrix[0].length ||
          block.y+dy < 0 || block.y+dy >= matrix.length) {
            isValid = false;
            return true;
          }
      }
    });
    if(!isValid) {
      return true;
    }
  });
  return isValid;
}