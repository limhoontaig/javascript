(function () {
  main()
}) ();

function main () {
  window.addEventListener('keydown', keyHandler);
  resize();
  window.addEventListener('resize',resize);
  mainBlock = createNextBlock();
  nextBlock = createNextBlock();
  rebuild()
}

function resize () {
  const WINDOW_INNERWIDTH = (window.innerWidth > 660)?660:window.innerWidth;
  const MAIN_CONTENTS_WIDTH = Math.floor(WINDOW_INNERWIDTH*0.6)
  const BLOCK_SIZE = Math.floor(MAIN_CONTENTS_WIDTH/COLS_MAIN_BOARD);

  ctxMainBoard.canvas.width = BLOCK_SIZE*COLS_MAIN_BOARD;
  ctxMainBoard.canvas.height = BLOCK_SIZE*ROWS_MAIN_BOARD;
  ctxMainBoard.scale(BLOCK_SIZE,BLOCK_SIZE);

  ctxNextBoard.canvas.width = BLOCK_SIZE*COLS_NEXT_BOARD;
  ctxNextBoard.canvas.height = BLOCK_SIZE*ROWS_NEXT_BOARD;
  ctxNextBoard.scale(BLOCK_SIZE,BLOCK_SIZE);

  const FONT_RATIO = WINDOW_INNERWIDTH/350;
  document.querySelector('#side-contents').style.fontSize = FONT_RATIO+'rem';
}

function createNextBlock() {
  const nextBlock = {
    x: 0,
    y: 0,
    shape: randomNextBlockMatrix()
  }
  return nextBlock;
}

function rebuild() {
  resize();
  drawBlock(mainBlock, ctxMainBoard);
  drawBlock(nextBlock, ctxNextBoard);
}

function keyHandler(event) {
  const inputKey = event.keyCode;

  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  }

  switch (inputKey) {
    case KEY.UP:
      rotate(mainBlock);
      break;
  
    case KEY.DOWN:
      move(mainBlock, 0, 1);
      break;
  
    case KEY.LEFT:
      move(mainBlock, -1, 0);
      break;
  
    case KEY.RIGHT:
      move(mainBlock, 1, 0);
      break;
  
  }

  drawBlock(mainBlock, ctxMainBoard);
}