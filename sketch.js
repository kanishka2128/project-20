var backgroundImg

var cat, catImg, catImg2, catImg3, catImg4
var mouse, mouseImg, mouseImg2, mouseImg3, mouseImg4
function preload() {
    //load the images here

    backgroundImg = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,50,50)
    cat.addAnimation("catStanding", catImg)
  
    

    mouse = createSprite(200,600,20,20)
    mouse.addAnimation("mouseStanding", mouseImg)
    
}

function draw() {

    background(backgroundImg);

    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage")
        mouse.velocityX = 0
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.changeAnimation("mouseLastImage" )  
    }
    cat.scale = 0.2
    mouse.scale = 0.2
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
  cat.velocityX= -5
  cat.addAnimation("catRunning", catImg2)
  cat.changeAnimation("catRunning")
  mouse.addAnimation("mouseTeasing", mouseImg2)
  mouse.frameDelay = 25
  mouse.changeAnimation("mouseTeasing")

  }
 
}

