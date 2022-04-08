
function lineColorRandom(){
  randomNum = random(0,10);
  if(randomNum > 2){
    stroke(color2);
  } else{
    stroke(color1);
  }
  line(width/2-300,0,width/2+300,0);
}
