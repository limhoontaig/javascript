const canvas = document.getElementById('board');
let ctx = canvas.getContext('2D');

// Calculate the canvas size using constant
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Change the block size using scale method
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

