let genCount1 = 0;

function shapeCopiesKey(){
  push();
  translate(0,height/2);
  circle(windowWidth*0.5,0,windowWidth*0.25);
  if(keyIsPressed == true){
    genCount1++;
  }
  for(let x=0; x<genCount1; x++){
    circle(x*(windowWidth*0.05),0,windowWidth*0.05);
  }
  pop();
}
