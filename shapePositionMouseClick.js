let tempMouseX, tempMouseY;

function shapePositionMouseClick(){
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  noStroke();
  if(mouseIsPressed == true){
    tempMouseX = mouseX;
    tempMouseY = mouseY;
  }
  circle(tempMouseX, tempMouseY, 50);
}
