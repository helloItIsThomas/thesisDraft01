
function shapeCopiesRandom(){
  randomNum = random(0,10);
  if(randomNum > 9){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    circle(x*20,0,20);
  }
}
