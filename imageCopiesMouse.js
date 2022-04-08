let genCount = 0;

function imageCopiesMouse(){
  image(pImg2, width/2,0,200,200);
  if(mouseX != pmouseX || mouseY != pmouseY){
    genCount++;
  }
  for(let x=0; x<genCount; x++){
    image(pImg2, x*20,0,20,20);
  }
}
