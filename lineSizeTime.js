
function lineSizeTime(){
  stroke(color1);
  translate(width/2,0);
  if(frameCount > 200){
    if(genCount < height){
      genCount+=10;
    }
  }
  line(0,0,genCount,genCount);
}
