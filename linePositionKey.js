
function linePositionKey(){
  stroke(color1);
  translate(width/2,0);
  let lineSize = 100;
  line(keyRight*30-keyLeft*30,keyDown*10-keyUp*10,keyRight*30-keyLeft*30+lineSize,keyDown*10-keyUp*10);
}
