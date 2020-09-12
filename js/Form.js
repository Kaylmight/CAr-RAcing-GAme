class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement("h1", "CAR_RACING")
        title.position(130, 0)

        var input = createInput("NTER YUR NAME")
        input.position(130, 160)

        var button = createButton("play")
        button.position(250, 200)
        button.mousePressed(function(){
            input.hide()
            button.hide()

        var name = input.value()
        playerCount += 1
        player.updatePlayerName(name)
        player.updatePlayerCount(playerCount)

        var greeting = createElement("h1", "HELLO! "+ name)
        greeting.position(130, 160)

        })
    }
}