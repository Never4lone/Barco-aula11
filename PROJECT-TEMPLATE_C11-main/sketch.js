
var barco, barcoAnimate;
var mar, marImag;

function preload(){
  marImag=loadImage("sea.png");
  barcoAnimate=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  mar=createSprite(200, 200, 400, 200);
  mar.addImage("mar", marImag);
  mar.scale=0.25

  barco=createSprite(100, 200, 20, 20);
  barco.addAnimation("barco", barcoAnimate);
  barco.scale=0.2

}

function draw() {
  background("blue");
    drawSprites();

 
}
