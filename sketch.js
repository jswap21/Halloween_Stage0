var bat,batImg;


function preload(){
//bat image
  batImg=loadImage("Images/bat1.png");

}

function setup() {
createCanvas(displayWidth,displayHeight);
  
 
bat=createSprite(displayWidth/2,displayHeight/2,30,50);
bat.addImage(batImg)
bat.scale=2;


}


function draw() {
  background("black");
//moving bat with mouse  


    
 drawSprites(); 
}
