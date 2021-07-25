let accountValues = {
  score: 0,
  level: 0,
  lines: 0
}

function updateAccount (key, value) {
  let element = document.getElementById(key);
  if (element) {
    element.textContent = value;
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  }
});

let requestId = null;
let time = null;

// initNext ();
showHighScores();

// function initNext() {
//   ctxNext.canvas.width = 4 * BLOCK_SIZE;
//   ctxNext.canvas.HEIGHT = 4 * BLOCK_SIZE;
//   ctxNext.scale = (BLOCK_SIZE, BLOCK_SIZE);
// }



'use strict';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
const NO_OF_HIGH_SCORES = 10;
const COLORS = [
  'none',
  'cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red'
];

// const SHAPES = [
//   [],
//   [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
//   [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
//   [[0, 0, 3], // 0,0 -> 2,0 ; 0,1 -> 1,0 ; 0,2 -> 0,0
//    [3, 3, 3], // 1,0 -> 2,1 ; 1,1 -> 1,1 ; 1,2 -> 0,1 
//    [0, 0, 0]],// 2,0 -> 2,2 ; 2,1 -> 1,2 ; 2,2 -> 0,2
//   [[4, 4], [4, 4]],
//   [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
//   [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
//   [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
// ];

// const KEY = {
//   ESC: 27,
//   SPACE: 32,
//   LEFT: 37,
//   UP: 38,
//   RIGHT: 39,
//   DOWN: 40,
//   P: 80,
//   Q: 81
// };

const POINTS = {
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800,
  SOFT_DROP: 1,
  HARD_DROP: 2,
};

const LEVEL = {
  0: 500,
  1: 720,
  2: 630,
  3: 550,
  4: 470,
  5: 380,
  6: 300,
  7: 220,
  8: 130,
  9: 100,
  10: 80,
  11: 80,
  12: 80,
  13: 70,
  14: 70,
  15: 70,
  16: 50,
  17: 50,
  18: 50,
  19: 30,
  20: 30,
  // 29+ is 20ms
};

// const ROTATION = {
//   LEFT: 'left',
//   RIGHT: 'right'
// };

[COLORS, SHAPES, KEY, POINTS, LEVEL, ROTATION].forEach(item => Object.freeze(item));
