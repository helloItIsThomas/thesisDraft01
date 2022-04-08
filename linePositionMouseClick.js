
function linePositionMouseClick(){
  stroke(color1);
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  if(mouseIsPressed ==  true){
    xPos = mouseX;
    yPos = mouseY;
  }
  line(xPos, yPos, xPos+100, yPos);
}
