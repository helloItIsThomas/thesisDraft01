
function imagePositionStart(){
  noStroke();
  if(moveX < 500){
    moveX+=4;
  }
  image(pImg1,moveX, height/2, 200,200);
}
