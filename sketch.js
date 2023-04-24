var balloon, balloonImage;
var background, backgroundImage;
var obsTop, obsTop1, obsTop2;
var obsBottom, obsBottom1, obsBottom2, obsBottom3;
var bottomGround, topGround;


function preload(){
    balloonImage = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
    backgroundImage = loadImage("assets/bg.png");
    obsTop1 = loadImage("assets/obsTop1.png");
    obsTop2 = loadImage("assets/obsTop2.png");
    obsBottom1 = loadImage("assets/obsBottom1.png");
    obsBottom2 = loadImage("assets/obsBottom2.png");
    obsBottom3 = loadImage("assets/obsBottom3.png");

}

function setup(){
    createCanvas(1000,800);

    background = createSprite(1000,800, 100,100);
    background.addImage(backgroundImage);
    background.scale = 2.3;

    balloon = createSprite(150, 400, 100,100);
    balloon.addAnimation("balloon", balloonImage);
    balloon.scale = 0.3;

    
}

function draw() {
    if(keyDown("space")){
        balloon.velocityY = -0.5;
    }
    //add gravity to code
    balloon.velocityY = balloon.velocityY+2;
  
  drawSprites();
}