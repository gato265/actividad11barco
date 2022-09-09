var barco, barco_moviendose;
var mar, marimagen;
function preload(){
barco_moviendose = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
marimagen = loadImage("sea.png");
}

function setup(){
  createCanvas(600, 600);
//crear mar
mar = createSprite (200, 200, 400, 10);
mar.addImage("mar", marimagen);
mar.x = mar.width /2 ;
mar.velocityX = -4; 
//crear barco
  barco = createSprite(200, 200, 80, 40);
  barco.addAnimation("movimiento", barco_moviendose);
  barco.scale = 0.5;

 
  
}

function draw() {
  background ("	rgb(175, 238, 238)");
drawSprites();
}