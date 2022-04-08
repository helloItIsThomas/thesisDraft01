
function shapeRotationKey(){
  translate(width/2,0);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  rect(0,0,200,150);
}
