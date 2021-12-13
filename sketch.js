var MC;
var MCImg;

var TV1;
var TV1Img;

var npc1, npc2;
var npc1Img, npc2Img;

var house1;
var house1Img;
var celling;
var door;
var doorImg;

var bg;

var START = 0;
var HOUSE = 1;
var gameState = START;

var edges;

////////////////////////////
function preload(){
  MCImg = loadImage("images/MCSketch1Transparent.png");
  TV1Img = loadImage("images/TVSketch1Transparent.png");

  npc1Img = loadImage("images/NPCSketch1Transparent.png");
  npc2Img = loadImage("images/NPCSketch1Transparent.png");

  house1Img = loadImage("images/HouseSketch1Transparent.png");
  //doorImg = loadImage("images/");

}

////////////////////////////
function setup(){
  createCanvas(displayWidth,displayHeight-60);

////////////////////// CONSTRUCTIONS /////////////////////////
 //House1 sprite
  house1 = createSprite(displayWidth/2,displayHeight/4);
  //house1.shapeColor = "green";
  house1.addImage("Houseimg",house1Img);
  house1.scale = 3;
  //house1.debug=true;
  house1.setCollider("rectangle",0,0,20,0,0);
 //+CELLING
  celling = createSprite(displayWidth/2,displayHeight/6);
  celling.scale = 0.2;
  celling.visible = false;
  //celling.debug=true;
  celling.setCollider("rectangle",-5,0,800,300,0);

////////////////////// NPCS /////////////////////////
 //npc1 sprite
 npc1 = createSprite(displayWidth-150,displayHeight-150);
  //npc1.shapeColor = "black";
  npc1.addImage("npc1img",npc1Img);
  npc1.scale = 2.5;
  //npc1.debug=true;
  npc1.setCollider("rectangle",0,2,16,npc1.width-5, npc1.heigth);

 //npc2 sprite
 npc2 = createSprite(displayWidth/12,displayHeight-150);
  //npc2.shapeColor = "black";
  npc2.addImage("npc2img",npc2Img);
  npc2.scale = 2.5;
  //npc2.debug=true;
  npc2.setCollider("rectangle",0,2,16,npc2.width-5, npc2.heigth);

////////////////////// TV /////////////////////////
 //TV1 sprite
  TV1 = createSprite(displayWidth/12,displayHeight/8);
  //TV1.shapeColor = "yellow";
  TV1.addImage("TVimg",TV1Img);
  TV1.scale = 2.5;
  //TV1.debug=true;
  TV1.setCollider("rectangle",1,2,22,-40, 0);

////////////////////// MC /////////////////////////
 //MC sprite
 MC = createSprite(displayWidth/2,displayHeight/2);
  //MC.shapeColor = "blue";
  MC.addImage("MCimg",MCImg);
  MC.scale = 2.5;
  //MC.debug=true;
  MC.setCollider("rectangle",0,2,16,MC.width-5, MC.heigth);
}

////////////////////////////
function draw(){
  background("grey");

  textSize(15);
  fill("black");
  text("DEMO 1",displayWidth-100,displayHeight/22);

  //edges
  edges = createEdgeSprites();

  //Controls (MC sprite)
   if(keyDown("A")){
    MC.x = MC.x -5;
   }

   if(keyDown("D")){
    MC.x = MC.x +5;
  }

  if(keyDown("W")){
    MC.y = MC.y -5;
  }

  if(keyDown("S")){
    MC.y = MC.y +5;
  }

 //Gamestate = START
  if(gameState === START){
    background(70, 145, 90);
    TV1.visible = false;
  }

 //Gamestate = HOUSE
  if(MC.isTouching(house1)){
    gameState = HOUSE;
  }

  if(gameState === HOUSE){
    house1.destroy();
    background(138, 129, 120);
    TV1.visible = true;
    npc1.visible = false;
    npc2.visible = false;
  }

 //isTouching mc+tv
  if(MC.isTouching(TV1)){
    textSize(35);
    fill("black");
    text("???: Olá, quem é você?",displayWidth/16,displayHeight-150);
    //fill("red")
    //text("tocou",displayWidth/2,displayHeight/2);
  }
  MC.collide(TV1);

  drawSprites();
}