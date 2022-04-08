
function linePositionRandom(){
  stroke(color1);
  translate(-1*marginW,-1*((menuH + marginH)+(height/2)));
  randomNum = random(0,width);
  randomNum2 = random(0,height);
  line(randomNum, randomNum2,randomNum+200, randomNum2);
}
