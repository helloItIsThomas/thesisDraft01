let color1;

function lineDrawKey(){
  color1 = color('#91C85C');
  push();
  translate(width/2,height/2);
  stroke(color1);
  if(keyIsPressed == true){
    line(-300,0,300,0);
  }
  pop();
}
