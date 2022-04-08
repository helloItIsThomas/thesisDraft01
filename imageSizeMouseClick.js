
function imageSizeMouseClick(){
  translate(width/2,0);
  if(mouseIsPressed == true){
    genCount++;
  }
  image(pImg1, 0,50,genCount,genCount);
}
