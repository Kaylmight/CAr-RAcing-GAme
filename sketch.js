var database;
var gameState = 0
var playerCount = 0
var game, form, player, allPlayer ;
var cars1, cars2, cars3, cars4;
var carArray = [];

var car1, car2, car3, car4, ground, track

function preload()
{
car1 = loadImage("Images/car1.png")
car2 = loadImage("Images/car2.png")
car3 = loadImage("Images/car3.png")
car4 = loadImage("Images/car4.png")
ground = loadImage("Images/ground.png")
track = loadImage("Images/track.jpg")
}

function setup(){
    createCanvas(displayWidth , displayHeight);

database = firebase.database();

game = new Game()
game.getGameState()
game.start()


 
}

function draw(){
  background(255)
   if(playerCount == 4)
   {
     game.updateGameState(1)
   }

   if(gameState == 1)
   {
     game.play()
   }

   if(gameState == 2)
   {
     game.end();
   }
  }

