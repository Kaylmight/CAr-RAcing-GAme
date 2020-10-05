class Form
{
    constructor()
    {
        this.title = createElement("h1", "CAR_RACING");
        this.input = createInput("ENTER YUR NAME");
        this.button = createButton("play");
        this.greeting = createElement("h1")
        this.reset = createButton("RESET")
    }

    display()
    {
       
        this.title.position(displayWidth/2, 0)

        
        this.input.position(displayWidth/2, displayHeight/2)

        
        this.button.position(displayWidth/2 + 200, displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

        player.playerName = this.input.value()
        playerCount += 1
        player.playerPos = playerCount
        player.updatePlayer()
        player.updatePlayerCount(playerCount)

        this.greeting.html ("HELLO! "+ player.playerName) 
        this.greeting.position(displayWidth/2, displayHeight/2)

        })

        this.reset.mousePressed(() =>{
            game.updateGameState(0);
            player.updatePlayerCount(0);
            database.ref("/").child("players").remove()
        }
            
        )
    }

    hide()
    {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}