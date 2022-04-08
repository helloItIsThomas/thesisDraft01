
function lineCopiesRandom(){
  stroke(color1);
  randomNum = random(0,10);
  if(randomNum > 9){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    line(x*20,0,x*20+15,0);
  }
}
