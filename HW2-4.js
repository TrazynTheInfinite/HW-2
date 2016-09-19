function setup() {
  createCanvas(200,200);
  background(0);
}

function draw() {
  strokeWeight(1);
  stroke(51);
  
  var x=0;
  while (x<92){
    ellipse(8+x,8+x,10,10);
    x=x+12
  }
  var x=0;
  while (x<92){
    ellipse(200-x,8+x,10,10);
    x=x+12
  }
 ellipse(104,100,10,10);
 
  var x=0
  while (x<192){
   ellipse(8+x,8,10,10);
   x=x+12
 }
  var y=0
  while (y<82){
  ellipse(104,18+y,10,10);
  y=y+12
  }
  var y=0
  while (y<82){
    ellipse(92,19+y,10,10);
    ellipse(116,19+y,10,10);
    y=y+12
  }
  var y=0
  while (y<70){
    ellipse(80,19+y,10,10);
    ellipse(128,19+y,10,10);
    y=y+12
  }
  var y=0
  while (y<60){
    ellipse(68,19+y,10,10);
    ellipse(140,19+y,10,10);
    y=y+12
  }
  var y=0
  while (y<45){
    ellipse(56,19+y,10,10);
    ellipse(152,19+y,10,10);
    y=y+12
  }
  var y=0
  while (y<35){
    ellipse(44,19+y,10,10);
    ellipse(164,19+y,10,10);
    y=y+12
  }
  var y=0
  while (y<20){
    ellipse(32,19+y,10,10);
    ellipse(176,19+y,10,10);
    y=y+12
  }
}
