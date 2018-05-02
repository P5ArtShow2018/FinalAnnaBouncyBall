var y = 0
var speed = 5
function setup() {
  createCanvas (windowWidth,windowHeight);
}

function draw() {
  background (8,0,153);
  fill (234,255,0);
  ellipse (200,y,50);
  fill (255);
  rect (120,360,10,40);
  fill (255);
  rect (270,360,10,40);
  fill (0);
  ellipse (200,360,175,50);
  
  if (y < 25) {
    speed = 5;
  }
  
  if (y > 320) {
    speed = -5;
  }
  y = y + speed;
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}