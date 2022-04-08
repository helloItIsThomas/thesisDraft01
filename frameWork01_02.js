let pImg1, pImg2;
let randomNum, randomNum2;
let colOne = [];
let marginW, marginH;
let menuH;
let glyphSize = 50;
let input;
let keyLeft, keyRight, keyUp, keyDown;
let xPos, yPos;
let genCount;
let color1, color2, color3;

function preload(){
  pImg1 = loadImage('data/plantImg1.png');
  pImg2 = loadImage('data/plantImg2.png');
}

function setup(){
  imageMode(CENTER);
  color1 = color('#91C85C');
  color2 = color('#355E92');
  color3 = color('#E6B8B9');
  randomNum = 0;
  genCount = 0;
  keyLeft = 0;
  keyRight = 0;
  keyUp = 0;
  keyDown = 0;
  createCanvas(windowWidth,windowHeight);
  marginW = 10;
  marginH = marginW;
  textSize(glyphSize);

  colOne = ["type", "shape", "image", "line", "sound"];
  colTwo = ["draw", "change size", "change position", "change rotation", "change color", "change content", "make copies"];
  colThree = ["the sketch starts", "the mouse moves", "a key is pressed", "the mouse is clicked", "randomly", "after some time"];

  sel1 = createSelect();
  sel2 = createSelect();
  sel3 = createSelect();
  for(let c=0; c<colOne.length; c++){
    sel1.option(colOne[c]);
  }
  for(let c=0; c<colTwo.length; c++){
    sel2.option(colTwo[c]);
  }
  for(let c=0; c<colThree.length; c++){
    sel3.option(colThree[c]);
  }
  sel1.position(0,0);
  sel2.position(0,0);
  sel3.position(0,0);
}













function draw(){
  background('#000000');
  fill('#91C85C');
  noStroke();
  menuBar01();
  translate(marginW,(menuH + marginH)+(height/2));

  imageContentMouseClick();

}


































































// function changeBg(){
//   push();
//  	let val1 = sel1.value();
//
//   if(val1 == "type"){
//
//   } else if(val1 == 'shape'){
//     drawShape();
//   } else if(val1 == 'line'){
//     drawLine();
//   } else if(val1 == "image"){
//     drawImage();
//   }
//   pop();
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    keyLeft++;
  } else if(keyCode == RIGHT_ARROW){
    keyRight++;
  } else if(keyCode == UP_ARROW){
    keyUp++;
  } else if(keyCode == DOWN_ARROW){
    keyDown++;
  }
}
