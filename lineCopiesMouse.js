
function lineCopiesMouse(){
  stroke(color1);
  if(mouseX != pmouseX){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    line(x*20,0,x*20+15,0);
  }
}
