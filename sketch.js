var database;
var gameState = 0
var playerCount = 0
var game, form, player, allPlayer ;
var cars1, cars2, cars3, cars4;
var carArray = [];

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
  }

