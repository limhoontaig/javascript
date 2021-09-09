class board {
  grid;

  // 새 게임이 시작하면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
  }

  // 0으로 채워진 행열을 얻는다.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}