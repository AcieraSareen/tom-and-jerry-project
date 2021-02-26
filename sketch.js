//loading vars here:-
//tom
var tom,tomImg1,tomImg2,tomImg3,tomImg4;
//jerry
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;
//garden
var garden,gardenImg;


function preload() {
//load the images here
gardenImg=loadImage("images/garden.png");
jerryImg1=loadAnimation("images/mouse1.png");
jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg4=loadAnimation("images/mouse4.png");
tomImg1=loadAnimation("images/cat1.png");
tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
tomImg4=loadAnimation("images/cat4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //tom
    tom=createSprite(870,600);
    tom.addAnimation("tom",tomImg1);
    tom.scale=0.2;
    //jerry
    jerry=createSprite(200,600);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale=0.15;
    //background
    //garden=createSprite(400,400);
    //garden.addImage("garden",gardenImg);
    

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
      tom.velocityX=0;
      tom.addAnimation("tomcollided",tomImg4);
      tom.x=300;
      tom.scale=0.2;
      tom.changeAnimation("tomcollided");

      jerry.addAnimation("jerrycollided",jerryImg4);
      jerry.scale=0.15;
      jerry.changeAnimation("jerrycollided");
      
      //jerry.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomImg2);
    tom.changeAnimation("tomrunning");

    jerry.addAnimation("jerryteasing",jerryImg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryteasing");

  }
}