var monkey , monkey_running;
var ground, invisibalGround

var banana ,bananaImage
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,200);
  
  monkey = createSprite(50,180,20,50);
  
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(0,180,1200,5);
  ground.velocityX= -6; 
  
  invisibleGround = createSprite(0,180,1000,5);
  invisibleGround.visibal=false;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  score = 0;
  
}


function draw() {
  
  background("lightblue");
  text("score:"+score,400,50);
 
   if(keyDown("space")){
     
    monkey.velocityY=-12;
  }
  
  score = score+Math.round(getFrameRate()/60);
  ground.velocityX= -6;
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
 monkey.velocityY = monkey.velocityY+0.1;
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  
  spawnObstacles();
  spawnBanana();
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 2*score/100);
    obstacle.addImage(obstaceImage);
  
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
 }

function spawnBanana() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(600,115,10,40);
   
    banana.velocityX = -(6 + 2*score/100);
    banana.addImage(bananaImage);
  
    
              
    banana.scale = 0.1;
    banana.lifetime = 300;
    //add each obstacle to the group
    FoodGroup.add(banana);
  }
 }

