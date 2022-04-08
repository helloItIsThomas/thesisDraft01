let genCount = 0;

function shapePositionTime(){
  noStroke();
  if(frameCount > 100){
    if(frameCount < 200){
      genCount+=4;
    }
  }
  circle(genCount,height/2,windowWidth*0.25);
}
