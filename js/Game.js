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
        cars1.addImage("gaddi", car1)
        cars2 = createSprite(300, 200, 100, 100)
        cars2.addImage("gaddi2", car2)
        cars3 = createSprite(500, 200, 100, 100)
        cars3.addImage("gaddi3", car3)
        cars4 = createSprite(700, 200, 100, 100)
        cars4.addImage("gaddi4", car4)

        carArray = [cars1, cars2, cars3, cars4]

    }

    play()
    {
        form.hide()
        Player.getAllPlayerInfo()

        Player.getCarRank()

        text("STARTED", 200, 300)

        if(allPlayer != undefined)
        {

            background("#c68767")

            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5) 

            var yPos = 0;
            var xPos = 175;
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
                   fill(0)
                   ellipse(xPos, yPos, 80, 80)
                   
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
            console.log(player.distance);
        }

        if(player.distance >= 3800)
        {
            gameState = 2
            ranking = ranking+1
            player.updateCarRank(ranking)
            player.rank = ranking
            this.updateGameState(gameState)
        }
            drawSprites();
        }

        end()
        {
            alert("YOU ARE BEEN BANNED" + player.rank)
        }

}