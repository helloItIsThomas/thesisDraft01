
function lineColorTime(){
  stroke(color1);
  if(frameCount > 200){
    stroke(color2);
  }
  line(width/2-300,0,width/2+300,0);
}
