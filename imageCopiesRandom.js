
function imageCopiesRandom(){
  image(pImg2, width/2,0,200,200);
  randomNum = random(0,10);
  if(randomNum > 9){
    genCount++;
  }
  for(let x=0; x<genCount; x++){
    image(pImg2, x*20,0,20,20);
  }
}
