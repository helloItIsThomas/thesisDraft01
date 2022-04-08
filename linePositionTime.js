
function linePositionTime(){
  stroke(color1);
  line(moveX+width/2, 0, moveX+width/2+200,0);
  if(frameCount > 100){
    if(moveX < 500){
      moveX+=4;
    }
  }
}
