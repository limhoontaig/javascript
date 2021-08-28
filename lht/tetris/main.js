(function () {
  main()
}) ();

function main () {
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
