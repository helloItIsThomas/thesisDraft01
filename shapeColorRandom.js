
function shapeColorRandom(){
  randomNum = random(0,10);
  if(randomNum > 2){
    fill(color2);
  } else{
    fill(color1);
  }
  circle(windowWidth*0.5,0,windowWidth*0.25);
}
