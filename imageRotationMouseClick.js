
function imageRotationMouseClick(){
  translate(width/2,0);
  if(mouseIsPressed == true){
    genCount+=0.1;
  }
  rotate(genCount);
  image(pImg1, 0,0,200,200);
}
