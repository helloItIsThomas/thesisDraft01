
function imageRotationTime(){
  translate(width/2,0);
  if(frameCount > 200){
    genCount += 0.01;
  }
  rotate(genCount);
  image(pImg1, 0,0,200,200);
}
