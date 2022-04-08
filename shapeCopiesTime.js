
function shapeCopiesTime(){
  stroke(color1);
  if(frameCount > 100 && frameCount < width){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    circle(x*20,0,20);
  }
}
