let genCount = 0;

function imageCopiesKey(){
  image(pImg2, width/2,0,200,200);
  if(keyIsPressed == true){
    genCount++;
  }
  for(let x=0; x<genCount; x++){
    image(pImg2, x*20,0,20,20);
  }
}
