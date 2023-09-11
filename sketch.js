const cellSize = 80;
let cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  displayCells();
}

function displayCells() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == 0) {
      fill(255);
    } else {
      fill(0);
    }
  }
}
