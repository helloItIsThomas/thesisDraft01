
function lineColorStart(){
  stroke(color1);
  if(frameCount > 10){
    stroke(color2);
  }
  line(width/2-300,0,width/2+300,0);
}
