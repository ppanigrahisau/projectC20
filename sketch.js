var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png");
    mouseimg2 = loadAnimation("images/mouse2.png");
    mouseimg3 = loadAnimation("images/mouse3.png");
    catimg3 = loadAnimation("images/cat3.png")

    }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
        cat=createSprite(870,720,50,50);
        cat.addAnimation("catRunning",catimg1);
        cat.scale=0.15;

        mouse=createSprite(200,700,50,50);
        mouse.addAnimation("mouseTeasing",mouseimg1);
        mouse.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
        if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning")

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg2);
       mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }

    cat.addAnimation("catRunning",catimg3);
    cat.changeAnimation("catRunning")

    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg3);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }
    


}
