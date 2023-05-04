var bg,bgimg
var player,shooterimg,shootershooting
var zombie,heart1,heart2,heart3
var zombieImg,heart1Img,heart2Img,heart3Img
var zombieGroup
var gameOverImg,restartImg
var PLAY=1;
var END=0;
var WIN=2;
var gameState=PLAY;

function preload(){
  shooterimg = loadImage("assets/shooter_2.png");
  shootershooting = loadImage("assets/shooter_3.png");
 bgimg = loadImage("assets/bg.jpeg"); 
 zombieImg=loadImage("assets/zombie.png");
 heart1Img=loadImage("assets/heart_1.png");
 heart2Img=loadImage("assets/heart_2.png");
 heart3Img=loadImage("assets/heart_3.png");
 gameOverImg=loadImage("assets/gameOver.png");
 restartImg=loadImage("assets/restart.png");


  



}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgimg);
  bg.scale=1.1;

  player=createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooterimg);
  player.scale=0.3;
  player.debug=true;
  player.setCollider("rectangle",0,0,300,300);

  heart1=createSprite(displayWidth-150,40,20,20);
  heart1.addImage("heart1", heart1Img);
  heart1.scale=0.5;
  heart1.visible=false;
  heart2=createSprite(displayWidth-145,40,20,20);
  heart2.addImage("heart2",heart2Img);
  heart2.scale=0.5;
  heart2.visible= false;
  heart3=createSprite(displayWidth-155,40,20,20);
  heart3.addImage("heart3",heart3Img);
  heart3.scale=0.5;

  zombieGroup=createGroup();
  

}
function enemy(){
  if(frameCount%50===0){
    zombie=createSprite(random(500,1100),random(100,500),50,50);
    zombie.addImage("zombie",zombieImg);
    zombie.scale=0.15;
    zombie.velocityX=-3;
    zombie.setCollider("rectangle",0,0, 400,400)
    zombie.lifetime=400;
    zombieGroup.add(zombie);
  }
}

function draw(){
  background(0)
  if(keyDown("UP_ARROW")){
    player.y=player.y-30

  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+30

  }
  if(keyWentDown("SPACE")){
    player.addImage(shootershooting);

  }
  if(keyWentUp("SPACE")){
    player.addImage(shooterimg);

  }
  enemy();
  drawSprites()

}
gameOver=createSprite(400,350,1600,10);
gaveOver.addImage(gameOverImg);

restart=createSprite(550,140);
restart.addImage(restartImg);

gameOver.scale=0.5;
restart.scale=0.1;

gameOver.visible=false;
restart.visible=false;

zombieGroup=new Group();

score=0;

 if (gameState===END){
  gameOver.x=camera.position.x;
  restart.x=camera.position.x;
  gameOver.visible=true;
  restart.visible=true;
  player.velocityY=0;
  bg.veloxityX=0;
  zombieGroup.setVelocityXEach(0);

  zombieGroup.setLifetimeEach(-1);
  if(mosePressedOver(restart)){
    reset();
  }
}
if(gameState===WIN){
  bg.veloxityX=0;
  player.veloxityY=0;
  zombieGroup.setVeloxityXEach(0);

  zombieGroup.setLifetimeEach(-1);
}

drawSprites();
textSize(20);
stroke(3);
fill("black");
text("Score:"+score,camera.postion.x,50);

if(score>=5){
  player.visible=false;
  textSize(30);
  stroke(3)
  fill("black");
  text("Congratulations!! You win the game!!",70,200);
  gameState=WIN;

}
 function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
  player.visible=true;
  zombieGroup.destroyEach();
  score=0;
 }




