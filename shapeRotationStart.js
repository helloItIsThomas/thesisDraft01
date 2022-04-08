
function shapeRotationStart(){
  translate(width/2,height/2);
  genCount += 0.01;
  push();
  rotate(genCount);
  rect(0,0,200,200);
  pop();
}
