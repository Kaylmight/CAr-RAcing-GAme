class Player
{
    constructor()
    {

    }

    getPlayerCount()
    {
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        })
    }

    updatePlayerCount(count)
    {
        database.ref("/").update
        ({
            playerCount:count
        })
    }

    updatePlayerName(playerName)
    {
        var playerRef = "player" + playerCount
        database.ref(playerRef).set
        ({
            name: playerName
        })
    }
}