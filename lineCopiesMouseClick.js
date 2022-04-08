
function lineCopiesMouseClick(){
  stroke(color1);
  if(mouseIsPressed == true){
    genCount+=1;
  }
  for(let x=0; x<genCount; x++){
    line(x*20,0,x*20+15,0);
  }
}
