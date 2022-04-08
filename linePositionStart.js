
function linePositionStart(){
  stroke(color1);
  if(moveX < 500){
    moveX+=4;
  }
  line(moveX, height/2, moveX+100,height/2);
}
