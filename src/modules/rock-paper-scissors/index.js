require('./style.scss');
require('../../css/variables.scss');

import React from 'react';
import PLAYER from '../player';
import MENU from '../menu'
import SCOREBOARD from '../scoreboard';

export default class ROCK_PAPER_SCISSORS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playerOne: props.playerOne, playerTwo: props.playerTwo, scoreboard: props.scoreboard, mode: 'human'};
        this.playerSubmit = this.playerSubmit.bind(this);
        this.reloadGame = this.reloadGame.bind(this);
        this.changeMode = this.changeMode.bind(this);
        if (props.playerOne) {
            this.props.playerOne.playerSubmit = this.playerSubmit;
            this.props.playerOne.reloadGame = this.reloadGame;
        }
        this.state.mode = 'human';
    }
    changeMode(mode) {
        let playerOne = this.state.playerOne;
        playerOne.mode = mode;
        this.setState({playerOne: playerOne, mode: mode});
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomChoice() {
        const { choices } = this.props;
        const numChoices = Object.keys(choices).length -1;
        const choiceNum = this.getRandomIntInclusive(0, numChoices);
        return choices[Object.keys(choices)[choiceNum]];
    }
    findWinner(playerOne, playerTwo) {
        const { choices } = this.props;
        let playerOneChoice = choices[playerOne.choice];
        let playerTwoChoice = choices[playerTwo.choice];
        if (playerOneChoice.id === playerTwoChoice.id) {
            return 0;
        } else {
            for (let i = 0; i < playerOneChoice.beats.length; i++) {
                if (playerOneChoice.beats[i] === playerTwoChoice.id) {
                    return 1;
                }
            }
            return 2;
        }
    }
    playerSubmit(action) {
        let { playerOne, playerTwo, scoreboard} = this.state;
        const valid = (action && action.player && action.choice);
        if (valid && action.player === 1) {
            if (action.choice === 'computer') {
                playerOne.choice = this.getRandomChoice().id;
            } else {
                playerOne.choice = action.choice;
            }
        }
        if (valid && action.player === 2) {
            playerTwo.choice = action.choice;
        }
        if (!playerTwo.isHuman) {
            playerTwo.choice = this.getRandomChoice().id;
        }
        if (playerOne.choice && playerTwo.choice) {
            scoreboard.games[scoreboard.currentGame] = {
                winner: this.findWinner(playerOne, playerTwo),
                playerOne: playerOne.choice,
                playerTwo: playerTwo.choice
            };
            let winner = scoreboard.games[scoreboard.currentGame].winner;
            if (winner > 0) {
                if (winner === 1) {
                    playerOne.wins++;
                    if (playerOne.wins === scoreboard.bestOf) {
                        playerOne.winner = true;
                        playerOne.gameOver = true;
                        playerTwo.gameOver = true;
                    }
                } else if (winner === 2) {
                    playerTwo.wins++;
                    console.log(playerTwo.wins);
                    if (playerTwo.wins === scoreboard.bestOf) {
                        playerTwo.winner = true;
                        playerOne.gameOver = true;
                        playerTwo.gameOver = true;
                    }
                }
                scoreboard.currentGame++;
            }
        }
        this.setState({playerOne: playerOne, playerTwo: playerTwo, scoreboard: scoreboard});

    }
    reloadGame() {
        const initial = require('../../js/initial-data.js').getData();
        initial.playerOne.playerSubmit = this.playerSubmit;
        initial.playerOne.reloadGame = this.reloadGame;
        let mode = this.state.mode;
        initial.playerOne.mode = mode;
        this.setState({playerOne: initial.playerOne, playerTwo: initial.playerTwo, scoreboard: initial.scoreboard, mode: mode});
    }
    render() {
        const { playerOne, playerTwo, scoreboard } = this.state;
        return React.createElement('div', { className: 'rps-main'},
            React.createElement('div', { className: 'rps-header'},
                React.createElement(MENU, { mode: this.state.mode, changeMode: this.changeMode })
            ),
            React.createElement('div', { className: 'rps-section rps-section--top'},
                React.createElement(PLAYER, playerTwo)
            ),
            React.createElement('div', { className: 'rps-section rps-section--middle'},
                React.createElement(SCOREBOARD, scoreboard)
            ),
            React.createElement('div', { className: 'rps-section rps-section--bottom'},
                React.createElement(PLAYER, playerOne)
            )
        );
    }
}
