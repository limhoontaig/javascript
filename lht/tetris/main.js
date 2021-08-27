import BLOCK_SET from './blocks.js';
// import BLOCK from './blocks.js'

const canvasMainBoard = document.querySelector('#main-board');
const ctxMainBoard = canvasMainBoard.getContext('2d');
const canvasNextBoard = document.querySelector('#next-board');
const ctxNextBoard = canvasNextBoard.getContext('2d');

const COLS_MAIN_BOARD = 10;
const ROWS_MAIN_BOARD = 20;
const COLS_NEXT_BOARD = 4;
const ROWS_NEXT_BOARD = 4;

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

function getRandomIndex(length) {
  return Math.floor(Math.random()*length);
}

function randomNextBlockMatrix() {
  // ... BLOCK_SET 배열 생략
  BLOCK_SET;
  return BLOCK_SET[getRandomIndex(BLOCK_SET.length)];
}

let mainBlock = null;
let nextBlock = null;

function createNextBlock() {
  const nextBlock = {
    x: 0,
    y: 0,
    shape: randomNextBlockMatrix()
  }
  return nextBlock
}

function rebuild() {
  resize();
  drawBlock(mainBlock, ctxMainBoard);
  drawBlock(nextBlock, ctxNextBoard);
}

function drawBlock(block, ctx) {
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

  block.shape.forEach((row,y) => {
    row.forEach((value,x) => {
      if(value > 0) {
        ctx.fillstyle = 'white';
        ctx.fillRect(x + block.x, y + createNextBlock.y, 1,1)
      }
    })
  })
}


function main () {
  resize();
  window.addEventListener('resize',resize);
  mainBlock = createNextBlock();
  nextBlock = createNextBlock();

}

(function () {
  main()
}) ();
