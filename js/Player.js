class Player
{
    constructor()
    {
        this.playerName = null; 
        this.distance = 0;
        this.playerPos = null;
        this.rank = 0;
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

    updatePlayer()
    {
        var playerRef = "players/player" + this.playerPos
        database.ref(playerRef).set
        ({
            name: this.playerName,
            distance: this.distance

        })
    }

    static getAllPlayerInfo()
    {
         database.ref("players").on("value", (data) => {
             allPlayer = data.val()
         })
      
    }

    static getCarRank()
    {
        database.ref("carRank").on("value", (data) => 
        {
            ranking = data.val()
        })       
    }

    updateCarRank(ranking)
    {
        database.ref("/").update
        ({
            carRank:ranking
        })
    }
}