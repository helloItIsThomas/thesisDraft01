
function lineSizeMouseClick(){
  stroke(color1);
  translate(width/2,0);
  if(mouseIsPressed == true){
    genCount++;
  }
  line(0,50,genCount,genCount);
}
