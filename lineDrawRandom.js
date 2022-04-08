
function lineDrawRandom(){
  stroke(color1);
  randomNum = random(0,10);
  if(randomNum > 5){
    line(width/2-300,0,width/2+300,0);
  }
}
