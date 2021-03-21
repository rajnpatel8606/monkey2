
var monkey , monkey_running,ground,groundimage,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600, 400);
  
  ground = createSprite(200,height/3,400,20);
  ground.addImage("ground",groundImage)
  ground.x = ground.width /2;
  ground.velocityX = -(3 + 3*survivaltime /100);
  ground.scale=0.9
  
 monkey  = createSprite(50,height-80,20,50);
  monkey.addAnimation("runmonkey", monkey_running);
  monkey.scale=0.2 
  //monkey.debug=true
  
  
  
  invisibleGround = createSprite(200,height-30,400,10);
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(255);
  survivaltime = survivaltime + Math.round(frameCount/getFrameRate());
  text("survivaltime: "+ survivaltime, 500,50);
  
  if(keyDown("space") && monkey.y > height-70) {
      monkey.velocityY = -12;
  }
  
  if (ground.x < 70){
      ground.x = ground.width/2;
    }
  
  monkey.collide(invisibleGround);
  
  monkey.velocityY = monkey.velocityY + 0.5
  
   spawbanana()
  spawobstacle()
   drawSprites();
}

function spawbanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(width,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawobstacle() {

if (frameCount % 200 === 0) {
    var obstacle = createSprite(width,330,40,10);
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    

    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}
  






