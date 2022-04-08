
function imageRotationKey(){
  translate(width/2,0);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  image(pImg1, 0,0,200,200);
}
