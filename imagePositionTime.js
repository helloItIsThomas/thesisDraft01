
function imagePositionTime(){
  noStroke();
  image(pImg1,moveX+width/2, 0, 200,200);
  if(frameCount > 100){
    if(moveX < 500){
      moveX+=4;
    }
  }
}
