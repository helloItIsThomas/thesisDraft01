
function linePositionMouse(){
  stroke(color1);
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  let lineSize = 100;
  line(mouseX,mouseY,mouseX+lineSize,mouseY);
}
