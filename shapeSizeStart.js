
function shapeSizeStart(){
  if(frameCount > 5){
    if(genCount < height/2){
      genCount+=10;
    }
  }
  circle(width/2, height/2,genCount);
}
