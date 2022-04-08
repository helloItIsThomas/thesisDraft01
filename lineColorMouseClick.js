
function lineColorMouseClick(){
  if(mouseIsPressed){
    stroke(color2);
  } else{
    stroke(color1);
  }
  line(width/2-300,0,width/2+300,0);
}
