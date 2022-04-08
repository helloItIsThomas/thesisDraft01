
function imagePositionMouseClick(){
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  // noStroke();
  if(mouseIsPressed ==  true){
    xPos = mouseX;
    yPos = mouseY;
  }
  image(pImg1, xPos, yPos,200,200);
}
