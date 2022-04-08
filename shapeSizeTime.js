
function shapeSizeTime(){
  if(frameCount > 200){
    if(genCount < height/2){
      genCount+=10;
    }
  }
  circle(width/2, height/2,20+genCount);
}
