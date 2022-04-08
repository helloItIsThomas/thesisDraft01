
function shapeRotationMouseClick(){
  if(mouseIsPressed == true){
    genCount+=0.1;
  }
  translate(width/2,height/2);
  push();
  rotate(genCount);
  rect(0,0,200,200);
  pop();
}
