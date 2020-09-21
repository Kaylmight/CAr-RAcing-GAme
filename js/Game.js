class Game
{
    constructor()
    {

    }

getGameState()
    {
       database.ref("gameState").on("value", function(data)
       {
        gameState = data.val()
       }) 
    }

    updateGameState(state)
    {
        database.ref("/").update
        ({
            gameState:state
        })
    }

    start()
    {
        if(gameState == 0)
        {
            player = new Player()
            form = new Form()
            player.getPlayerCount();
            form.display()
        }

        cars1 = createSprite(100, 200, 100, 100)
        cars2 = createSprite(300, 200, 100, 100)
        cars3 = createSprite(500, 200, 100, 100)
        cars4 = createSprite(700, 200, 100, 100)

        carArray = [cars1, cars2, cars3, cars4]
    }

    play()
    {
        form.hide()
        Player.getAllPlayerInfo()

        text("STARTED", 200, 300)

        if(allPlayer != undefined)
        {
            var yPos = 0;
            var xPos = 0;
            var index = 0;

            for(var i in allPlayer)
            {
                index = index + 1
                xPos = xPos + 200;
                yPos = displayHeight - allPlayer[i].distance

                carArray[index-1].x = xPos;
                carArray[index-1].y = yPos;

                if(index == player.playerPos)
                {
                   carArray[index-1].shapeColor = "red"
                   camera.position.x = displayWidth/2
                   camera.position.y = carArray[index-1].y
                }
                else
                {
                    carArray[index-1].shapeColor = "black"
                }
            }
        }

        if(keyDown(UP_ARROW) && player.playerPos != null)
        {
            player.distance += 50
            player.updatePlayer()
        }
            drawSprites();
        }

}