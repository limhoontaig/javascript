(function () {
  main()
}) ();

function main () {
  window.addEventListener('keydown', keyHandler);
  resize();
  window.addEventListener('resize',resize);
  mainBlock = createNextBlock();
  nextBlock = createNextBlock();
  rebuild();
  // repeatMotion();
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
  // drawBoard(matrixMainBoard, ctxMainBoard);
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
      validRotate(mainBlock);
      // validRotate(mainBlock, matrixMainBoard);
      break;

    case KEY.DOWN:
      validMove(mainBlock, 0, 1);
      // validMove(mainBlock, matrixMainBoard, 0, 1);
      break;

    case KEY.LEFT:
      validMove(mainBlock, -1, 0);
      // validMove(mainBlock, matrixMainBoard, -1, 0);
      break;

    case KEY.RIGHT:
      validMove(mainBlock, 1, 0);
      // validMove(mainBlock, matrixMainBoard, 1, 0);
      break;

  }

  drawBlock(mainBlock, ctxMainBoard);
}

// function repeatMotion(timeStamp) {
//   const duration = timestamp - time;

//   if(duration > 1000) {
//     if(!validMove(mainBlock, matrixMainBoard, 0, 1)) {
//       stack(mainBlock, matrixMainBoard);
//       mainBlock = nextBlock;
//       nextBlock = createNextBlock();

//       matrixMainBoard[0].some((value, x) => {
//         if(value > 0) {
//           window.cancelAnimationFrame(requestAnimationId);
//           requestAnimationId = null;
//           return true;
//         }
//       });
//       if(requestAnimationId == null) {
//         return;
//       }
//     }
//     time = timeStamp;
//   }
//   rebuild()
//   requestAnimationId = window.requestAnimationFrame(repeatMotion);
// }
