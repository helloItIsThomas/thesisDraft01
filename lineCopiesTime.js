
function lineCopiesTime(){
  stroke(color1);
  if(frameCount > 100 && frameCount < width){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    line(x*20,0,x*20+15,0);
  }
}
