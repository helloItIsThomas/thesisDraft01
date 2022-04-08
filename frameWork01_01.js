let pImg1, pImg2;
let randomNum;
let colOne = [];
let marginW, marginH;
let menuH;
let glyphSize = 50;
let input;
let keyLeft, keyRight, keyUp, keyDown;
let genCount;
let tiny;
let apercu;
let color1, color2, color3;
let xPos, yPos;
let moveX, moveY;

function preload(){
  pImg1 = loadImage('data/plantImg1.png');
  pImg2 = loadImage('data/plantImg2.png');
  tiny = loadFont('data/tiny_160.otf');
  apercu = loadFont('data/apercu.otf');
}

function setup(){
  imageMode(CENTER);
  moveX = 0;
  moveY = 0;
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
  textFont(tiny);
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
  sel1.changed(changeBg);
  sel2.position(0,0);
  sel2.changed(changeBg);
  sel3.position(0,0);
  sel3.changed(changeBg);
  changeBg();
}

function draw(){
  background('#000000');
  fill('#91C85C');
  noStroke();
  menuBar01();
  typeSizeTime();
}

function changeBg(){
  translate(marginW,(menuH + marginH)+(height/2));
  push();
 	let val1 = sel1.value();

  if(val1 == "type"){
    // shapeRotationMouse();
  } else if(val1 == 'shape'){
    drawShape();
  } else if(val1 == 'line'){
    drawLine();
  } else if(val1 == "image"){
    drawImage();
  }
  pop();
}

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
