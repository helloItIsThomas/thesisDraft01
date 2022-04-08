
function imageSizeStart(){
  translate(width/2,0);
  if(frameCount > 200){
    if(genCount < height){
      genCount+=10;
    }
  }
  image(pImg2, 0,0,genCount,genCount);
}
