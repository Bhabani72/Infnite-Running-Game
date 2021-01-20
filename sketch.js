var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Cycle1img,Cycle2img,Cycle3img,Cycle4img;
var trackimg,groundimg;
var Cycles, Cycle1, Cycle2, Cycle3, Cycle4;

function preload(){
  Cycle1img = loadImage("../images/Cycle1.png")
  Cycle2img = loadImage("../images/Cycle2.png")
  Cycle3img = loadImage("../images/Cycle3.png")
  Cycle4img = loadImage("../images/Cycle4.png")
  trackimg = loadImage("../images/track.png")
  groundimg = loadImage("../images/ground.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
