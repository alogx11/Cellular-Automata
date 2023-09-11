const CELLSIZE = 80;
const ROWWIDTH = 600;
let cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const MAXGENERATIONS = 3;
let rule = new Array(8);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rule = [0, 0, 0, 1, 1, 1, 1, 0, 0];
  noStroke();
  displayCells();
}

function displayCells() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == 0) {
      fill(255);
      rect(x, y, CELLSIZE);
    } else {
      fill(0);
    }
  }
}

function computeNextGeneration() {
  let size = cells.length;
  let nextGenCells = new Array(size);
  nextGenCells.fill(0);
  for (let i = 0; i < cells.length - 2; i++) {
    if (i - 1 < 0) {
      nextGenCells[i] = applyRule(
        cells[cells.length - 1],
        cells[i],
        cells[i + 1]
      );
    } else if (i + 1 == cells.length) {
      nextGenCells[i] = applyRule(cells[i - 1], cells[i], cells[0]);
    } else {
      nextGenCells[i] = applyRule(cells[i - 1], cells[i], cells[i + 1]);
    }
  }
  cells = nextGenCells;
}

function applyRule(a, b, c) {}
