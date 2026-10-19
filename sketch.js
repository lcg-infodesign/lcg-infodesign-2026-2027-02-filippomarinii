function setup(){
createCanvas(windowWidth, windowHeight);

background(50, 100, 50);
let numeroglifi = 20;
let colonne = 5;
let righe = 4
let discolonna = windowWidth / colonne;
let disriga = windowHeight / righe;
let xcorrente = 0;
let ycorrente = 0;

  for(let g = 0; g < numeroglifi; g++){
  glifo(xcorrente + discolonna/2, ycorrente + disriga/2, disriga*0.5);
   xcorrente = xcorrente + discolonna;

  if(xcorrente >= windowWidth){
   xcorrente =0;
  ycorrente = ycorrente + disriga;
  }
  }
}

function draw(){
}
function glifo(_x, _y, _size) {
push();

translate(_x, _y);
angleMode(DEGREES)
let tipo =(random(0, 3));
let petali;

  if (tipo <1){
  petali = 5;
  fill(235, 130, 160);
}else if(tipo < 2){
  petali = 7;
  fill(245, 195, 85);
}else{
  petali = 9;
  fill(170, 140, 210);
}

noStroke();

for(let i=0; i< petali; i++){
const miarotazione = i * 360 / petali;

push()

  rotate(miarotazione);
  translate(_size/4, 0);
  ellipse(0, 0, _size/2, _size/4);
  pop();
}

fill(255, 225, 150);
circle(0, 0, _size/3);

pop();
}