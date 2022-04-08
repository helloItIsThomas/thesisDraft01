
function lineRotationTime(){
  stroke(color1);
  translate(width/2,0);
  if(frameCount > 200){
    genCount += 0.01;
  }
  rotate(genCount);
  line(0,0,200,200);
}
