
function lineRotationMouseClick(){
  stroke(color1);
  translate(width/2,0);
  if(mouseIsPressed == true){
    genCount+=0.1;
  }
  rotate(genCount);
  line(0,0,200,0);
}
