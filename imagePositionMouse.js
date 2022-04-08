
function imagePositionMouse(){
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  noStroke();
  image(pImg1, mouseX, mouseY,200,200);
}
