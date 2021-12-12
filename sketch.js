var giga;
var bird,coin;
var bg;
var ground1,ground2,ground;
var checkpoint,safe;
var birdImg,gigaImg,coinImg,bgImg,groundImg1,groundImg2,checkpointImg,safeImg;

function preload(){
  bgImg = loadImage('Images/Background 1.jpg');
  birdImg = loadAnimation('Images/Bird1.png','Images/Bird2.png','Images/Bird3.png','Images/Bird4.png');
  gigaImg = loadAnimation('Images/Giga1.png', 'Images/Giga2.png', 'Images/Giga3.png','Images/Giga4.png','Images/Giga5.png','Images/Giga6.png','Images/Giga7.png','Images/Giga8.png');
  coinImg = loadImage('Images/Coin.png');
  
  groundImg1 = loadImage('Images/Ground 1.png');
  groundImg2 = loadImage('Images/Ground 2.png');
  checkpointImg = loadAnimation('Images/Checkpoint1.png','Images/Checkpoint2.png');
  safeImg = loadImage('Images/Safe.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,50,50);
  giga = createSprite(displayWidth/2-200, displayHeight-190, 50, 50);
  bird = createSprite(200,200,20,20);
  coin = createSprite(400,500,30,30);

  ground = createSprite(displayWidth/2,displayHeight-130,1000,10);
  
  
  checkpoint = createSprite(100,100,100,100);
  safe = createSprite(100,100,100,100);

  bg.addImage(bgImg);
  bg.scale = 1.2;
  bg.velocityY = 4;

  giga.addAnimation("gigasmile",gigaImg);
  giga.scale = 0.65;
  giga.velocityY = 5;
  giga.debug = true;
  giga.setCollider("circle",0,0,75);

  bird.addAnimation("birdfly",birdImg);
  bird.scale = 0.5;

  coin.addImage(coinImg);
  coin.scale = 0.2;

  

  

  checkpoint.addAnimation("reached",checkpointImg);
  checkpoint.scale = 0.5;

  safe.addImage(safeImg);
  safe.scale = 0.6;
}

function draw() {
  background("white");

  

  if(bg.y>displayHeight-250){
    bg.y = displayHeight/2;
  }

  giga.collide(ground);

  if(keyDown(LEFT_ARROW)){
    giga.x = giga.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    giga.x = giga.x+5;
  }

  if(keyDown(UP_ARROW)&&giga.y>=158)
  {
    //giga.velocityY = giga.velocityY-5;
    giga.velocityY=-12;
  }
  
  giga.velocityY=giga.velocityY + 0.6;
  spawnGround();

  drawSprites();
}

function spawnGround(){
  if(World.frameCount%120===0){
    ground1 = createSprite(100,0,40,10);
    ground2 = createSprite(displayWidth-100,-200,40,10);

    ground1.addImage(groundImg1);
    ground2.addImage(groundImg2);

    ground1.scale = 0.25;
    ground2.scale = 0.25;

    ground1.velocityY = 3;
    ground2.velocityY = 3;

    ground1.lifetime = 250;
    ground2.lifetime = 250;
  }

  
  


}