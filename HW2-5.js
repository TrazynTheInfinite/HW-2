function setup() {
  createCanvas(200,200);
  background(0);
}

function draw() {
  strokeWeight(1);
  stroke(250);
  
  var y=0
  while(y<180){
    line(10,10+y,190,10+y);
    y=y+5;
  }
  var x=0
  while (x<180){
    line(10+x,10,10+x,190)
    x=x+5
  }
   line(10,190,195,190);
   line(190,10,190,190);
}

  
