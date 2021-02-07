  //var Engine = Matter.Engine,
 // World = Matter.World,
  //Events = Matter.Events,
  //Bodies = Matter.Bodies;
  var PLAY = 1;
  var END = 0;
  var gameState=PLAY;
  var tree, treeImg;
  var rain, rainImg,rainGrp
  var axe,axeImg,axeGrp
  var background1,bgImg;
  var invisibleGround;
  var score;

function preload(){
treeImg=loadImage("tree.png")
axeImg=loadImage("axe.png")
rainImg=loadImage("rain.png")
bgImg=loadImage("background.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //engine = Engine.create();
  //world = engine.world;   

  background1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background1.scale=1.5;
  background1.addImage(bgImg);

  invisibleGround = createSprite(displayWidth/2,displayHeight,displayWidth,displayHeight-50);
  invisibleGround.visible = false;

  tree = createSprite(displayWidth/4-50,displayHeight-330,20,50);
  tree.addImage(treeImg);

  rainGrp=createGroup();
  axeGrp=createGroup();

  tree.setCollider("rectangle",0,0,tree.width,tree.height);
  tree.debug = true

  score = 0;
  
}
 
function draw() {
  background("yellow");

  if(gameState===PLAY){
   
  if (background1.x < 0){
  background1.x = background1.width/2;
 }

  spawnAxe();
  spawnRain();

  if(keyCode===32 && tree.y >= 100) {
    tree.velocityY = -12;}

    tree.velocityY = tree.velocityY + 0.8

    if(rainGrp.isTouching(tree)){
      rainGrp.visible=false;
      score=score+1;
    }



 if(axeGrp.isTouching(tree)){
  gameState = END;
}
  }
  else if(gameState===END){
    ground.velocityX = 0;
      trex.velocityY = 0
      

   // axeGrp.setLifetimeEach(-1);
   // rainGrp.setLifetimeEach(-1);
     
     axeGrp.setVelocityXEach(0);
     rainGrp.setVelocityXEach(0);  
  }
  tree.collide(invisibleGround);
  
   drawSprites();
   textSize(16);
   fill("black");
   text("SCORE"+score,displayWidth/2,displayHeight/2);

}

function spawnAxe(){
   if(frameCount % 300===0){
   axe=createSprite(800,400,10,50);
axe.velocityX=-3;
   var rand=Math.round(random(1,6));
     console.log(rand);
     axeGrp.add(axe);
    axe.addImage(axeImg);
   
   } 
    
 }
 
 function spawnRain(){
  if(frameCount % 200===0){
  rain=createSprite(800,160,10,50);
rain.velocityX=-3;
  var rand=Math.round(random(1,6));
    console.log(rand);
    rainGrp.add(rain)
   rain.addImage(rainImg);
  
  } 
   
}

 
