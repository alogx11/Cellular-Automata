const CELLSIZE = 80;
const ROWWIDTH = 600;
const MAXGENERATIONS = 3;

let rule = new Array(8);
let generations;
let cells;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rule = [0, 0, 0, 1, 1, 1, 1, 0];
  generations = 0;
  cells = new Array(ROWWIDTH);
  rule = [0, 0, 0, 1, 1, 1, 1, 0];
  // noStroke();
  rect(0 + CELLSIZE * i, 0 * CELLSIZE, CELLSIZE);
  while (generations < MAXGENERATIONS) {
    print("18");
    displayCells();
    // computeNextGeneration();
  }
}

function displayCells() {
  for (let i = 0; i < cells.length; i++) {
    // alive cell, fill black
    if (cells[i] == 0) {
      print("alive");
      fill(0);
      rect(0 + CELLSIZE * i, generations * CELLSIZE, CELLSIZE);
    } else {
      // dead cell, white
      print("ded");
      fill(255);
      rect(0 + CELLSIZE * i, generations * CELLSIZE, CELLSIZE);
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
  generations++;
}

function applyRule(a, b, c) {
  let index = a * Math.pow(2, 2) + b * Math.pow(2, 1) + c * Math.pow(2, 0);
  return rule[index];
}
