
function imageRotationRandom(){
  translate(width/2,0);
  if((frameCount*0.1)%2 == 1){
    genCount +=random(0,360);
  }
  rotate(genCount);
  image(pImg1, 0,0,200,200);
}
