let randomNum;

function imageContentRandom(){
  randomNum = random(0,10);
  if(randomNum > 5){
    image(pImg2, width/2,0,200,200);
  } else{
    image(pImg1, width/2,0,200,200);
  }
}
