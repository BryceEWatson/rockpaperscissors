require('./style.scss');

import React from 'react';

export default class SCOREBOARD extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { totalGames, games } = this.props;
        let gameBoxes = [];
        for (let i = 0; i < totalGames; i++) {
            const game = games && games[i];
            const winner = game && game.winner;
            let playerClasses = ['rps-scoreboard__gamebox', 'rps-scoreboard__gamebox'];
            switch(winner) {
                case 1:
                    playerClasses[0] += ' rps-scoreboard--winner';
                    break;
                case 2:
                    playerClasses[1] += ' rps-scoreboard--winner';
                    break;
            }
            if (game) {
                playerClasses[0] += ' rps-gamebox--' + game.playerOne + ' rps-gamebox--player-1-game-' + games.length;
                playerClasses[1] += ' rps-gamebox--' + game.playerTwo + ' rps-gamebox--player-2-game-' + games.length;
            }
            gameBoxes.push(React.createElement('div', { key: 'wrp-' + i, className: 'rps-scoreboard__game-wrapper'}, [
                React.createElement('div', { key: 'p2-' + i, className: playerClasses[1]}, ''),
                React.createElement('div', { key: 'p1-' + i, className: playerClasses[0]}, '')]));
        }
        return React.createElement('div', { className: 'rps-scoreboard'}, gameBoxes);
    }
}
