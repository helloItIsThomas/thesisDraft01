
function lineRotationKey(){
  stroke(color1);
  translate(width/2,0);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  line(0,0,200,0);
}
