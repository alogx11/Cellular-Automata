let dvdLogo;
// x, y position for dvd logo
let x, y;
// speed image moves
let xSpeed, ySpeed;
let speed;
// H value for hsb when tinting image
let imgTint;
// delay in ms for color change after colliding with edge
let tintDeley;

function preload() {
  dvdLogo = loadImage("./assets/dvd_logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // speed logo moves on screen
  speed = 5;
  xSpeed = speed;
  ySpeed = speed;
  tintDeley = 200;
  colorMode(HSB, 100);
  // generate random number for hue value of hsb
  changeTint();
  // creat random starting point for logo
  x = randomInt(windowWidth - dvdLogo.width);
  y = randomInt(windowHeight - dvdLogo.height);
}

function draw() {
  background(0);
  drawImage();
}

function drawImage() {
  // change to random color every time the logo collides with an edge
  if (x >= windowWidth - dvdLogo.width || x <= 0) {
    xSpeed *= -1;
    setTimeout(changeTint, tintDeley);
  }
  if (y >= windowHeight - dvdLogo.height || y <= 0) {
    ySpeed *= -1;
    setTimeout(changeTint, tintDeley);

  }
  // move logo
  x += xSpeed;
  y += ySpeed;

 
  image(dvdLogo, x, y);
}

function changeTint(){
  imgTint = randomInt(101);
  tint(imgTint, 100, 100);

}

/*
generate a random integer value between 0 and max
preconditions: max must be an int

param: max - value we want our int to be

return random int, if max is null or undefined return 0;

*/
function randomInt(max){
  // check if max is not null or undefined
  if(Object.is(max, null) || Object.is(max, undefined)){
    return 0;
    // check if max is an int
  } else if (!Number.isInteger(max)){
    return 0;
  }
  // we have a valid max int\
  return Math.floor(Math.random() * max);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // keep logo on screen
  // logo is hitting edge as window becomes smaller so count as collision
  if (x >= windowWidth - dvdLogo.width || x <= 0) {
    xSpeed *= -1;
    if(x <= 0){
      x = 0;
    } else {
    x = windowWidth - dvdLogo.width;
    }
    setTimeout(changeTint, tintDeley);
  }
  if (y >= windowHeight - dvdLogo.height || y <= 0) {
    ySpeed *= -1;
    if(y <= 0){
      y = 0;
    } else {
    y = windowHeight - dvdLogo.height;
    }
    
    setTimeout(changeTint, tintDeley);
  }
  
}


