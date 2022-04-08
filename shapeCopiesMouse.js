
function shapeCopiesMouse(){
  if(mouseX != pmouseX){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    circle(x*(windowWidth*0.05),0,windowWidth*0.05);
  }
}
