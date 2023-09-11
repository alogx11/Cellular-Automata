const CELLSIZE = 4;
let rowWidth = 100;
let MAXGENERATIONS = 10;

let rule = [0, 0, 0, 1, 1, 1, 1, 0];
let generations;
let cells;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rowWidth = Math.floor(windowWidth / CELLSIZE);
  print(rowWidth);
  // rule = [0, 0, 0, 1, 1, 1, 1, 0];
  generations = 0;
  cells = new Array(rowWidth);
  cells.fill(0);
  cells[Math.floor(rowWidth / 2)] = 1;
  noStroke();
  /*
  while (generations < MAXGENERATIONS) {
    displayCells();
    computeNextGeneration();
  }
  */
}

function draw() {
  frameRate(10);
  displayCells();
  computeNextGeneration();
}

function displayCells() {
  for (let i = 0; i < cells.length; i++) {
    // alive cell, fill black
    if (cells[i] == 1) {
      fill(0);
      rect(0 + CELLSIZE * i, generations * CELLSIZE, CELLSIZE);
    } else {
      // dead cell, white
      fill(255);
      rect(0 + CELLSIZE * i, generations * CELLSIZE, CELLSIZE);
    }
  }
}

function computeNextGeneration() {
  let nextGenCells = new Array(rowWidth);
  nextGenCells.fill(0);
  for (let i = 0; i < nextGenCells.length; i++) {
    // off left edge, use right most as left bit
    if (i - 1 < 0) {
      nextGenCells[i] = applyRule(
        cells[cells.length - 1],
        cells[i],
        cells[i + 1]
      );
      // off right edge, use left most as right bit
    } else if (i + 1 == cells.length) {
      nextGenCells[i] = applyRule(cells[i - 1], cells[i], cells[0]);
      // in middle area
    } else {
      print(cells);
      nextGenCells[i] = applyRule(cells[i - 1], cells[i], cells[i + 1]);
    }
  }
  cells = nextGenCells;
  generations++;
}

function applyRule(a, b, c) {
  /*
  print("a: " + a + " b: " + b + " c: " + c);
  let index = a * Math.pow(2, 2) + b * Math.pow(2, 1) + c * Math.pow(2, 0);
  print("ind " + index);
  print(rule);
  print(rule[index]);
  */
  return (a == 1) ^ ((b == 1) | (c == 1)) ? 1 : 0;
  // return rule[index];
}
