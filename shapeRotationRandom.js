
function shapeRotationRandom(){
  if((frameCount*0.1)%2 == 1){
    genCount += random(0,360);
  }
  translate(width/2,height/2);
  push();
  rotate(genCount);
  rect(0,0,200,200);
  pop();
}
