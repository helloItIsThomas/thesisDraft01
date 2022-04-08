
function menuBar01(){
  menuH = height/20;
  push();
  translate(10,10);
  // textSize(menuH*0.75);
  textSize(15);
  noFill();
  fill('#FFFFFF');
  stroke('#000000');
  rect(0, 0, width-20, menuH, 2.5);
  noStroke();
  fill('#000000');
  text("I want",menuH*0.25,menuH*0.6);
  // sel.position(menuH*0.25, menuH*0.5);
  push();
  translate(marginW);
  sel1.position(150, marginH);
  sel1.size(120, menuH);
  pop();
  push();
  translate(marginW+200,0);
  text("to",70,menuH*0.6);
  pop();
  push();
  sel2.position(350, marginH);
  sel2.size(120, menuH);
  pop();
  push();
  translate(marginW+200,0);
  text("when",270,menuH*0.6);
  sel3.position(600, marginH);
  sel3.size(120, menuH);
  pop();
  pop();
}
