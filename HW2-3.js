function setup() {
  createCanvas(200,200);
  background(255);
}

var x=0
function draw() {
  strokeWeight(1);
  stroke(51);
  
  while(x<200){
    line(10,x,190,x)
  }
function mouseMoved() {
  x= x + 5;
  if (x > 255) {
    x = 0;
  }
}