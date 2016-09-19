function setup() {
  createCanvas(200,200);
  background(0);
}

function draw() {
  var x=0;
  while (x<192){
    ellipse(8+x,8+x,10,10);
    x=x+12
  }
}