module.exports = {
    getData: function() {
        let data = {
            playerOne: {
                playerNumber: 1,
                isHuman: true,
                wins: 0
            },
            playerTwo: {
                playerNumber: 2,
                isHuman: false,
                wins: 0
            },
            scoreboard: {
                totalGames: 5,
                bestOf: 3,
                currentGame: 0,
                games: []
            },
            choices: {
                rock: {
                    id: 'rock',
                    beats: ['scissors']
                },
                paper: {
                    id: 'paper',
                    beats: ['rock']
                },
                scissors: {
                    id: 'scissors',
                    beats: ['paper']
                }
            }
        };
        data.playerOne.choices = data.choices;
        return data;
    }
};
