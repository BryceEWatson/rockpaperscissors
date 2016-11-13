require('./style.scss');

import React from 'react';

export default class PLAYER extends React.Component {
	constructor(props) {
		super(props);
		this.handleActionClick = this.handleActionClick.bind(this);
		this.handleReloadClick = this.handleReloadClick.bind(this);
	}
	/**
	 * Handles a click from the action buttons.
	 * this.props.playerSubmit must exist.
	 * @param  {String} choice [Must be of type choice.id ('rock', 'paper', 'scissors')]
	 */
	handleActionClick(choice) {
		if (this.props.playerSubmit) {
			this.props.playerSubmit({player: this.props.playerNumber, choice: choice});
		}
	}
	/**
	 * Handles a click from the reload game button.
	 * this.props.reloadGame must exist.
	 */
	handleReloadClick() {
		this.props.reloadGame();
	}
	render() {
		const {
			playerNumber,
			isHuman,
			choice,
			choices,
			wins,
			winner,
			gameOver,
			mode
		} = this.props;
		let className = 'rps-player-icon';
		let onClickHandler;
		let choicesButtons;
		let winsDisplay = [];
		switch (playerNumber) {
			case 1:
				className += ' rps-player--one';
				break;
			case 2:
				className += ' rps-player--two';
				break;
		}
		if (choice) {
			className += ' rps-player-icon--' + choice;
		} else {
			className += ' rps-player-icon--no-choice';
		}
		if (winner) {
			className += ' rps-player-icon--winner';
		}
		if (isHuman) {
			if (!gameOver) {
				onClickHandler = this.handleActionClick;
			}
			let choicesActions = [];
			if (choices) {
				let keys = Object.keys(choices);
				for (let i = 0; i < keys.length; i++) {
					choicesActions.push(React.createElement('span', {
						key: 'c-' + i,
						className: 'rps-player-action rps-player-action--' + choices[keys[i]].id,
						onClick: () => {
							if (onClickHandler) {
								onClickHandler(choices[keys[i]].id)
							}
						}
					}, ''));
				}
			}
			choicesButtons = React.createElement('div', {
				key: 'ci-1',
				className: 'rps-player-actions'
			}, choicesActions);
		}
		if (mode && mode === 'computer') {
			if (!gameOver) {
				onClickHandler = this.handleActionClick;
			}
			choicesButtons = React.createElement('div', {
				key: 'ci-1',
				className: 'rps-player-actions'
			}, React.createElement('span', {
				key: 'c-action',
				className: 'rps-computer-action',
				onClick: () => {
					if (onClickHandler) {
						onClickHandler('computer')
					}
				}
			}));
		}
		if (wins) {
			winsDisplay = [React.createElement('span', {
					key: 'winsCount',
					className: 'rps-player-wins'
				}, wins)];
		}
		if (gameOver && playerNumber === 1) {
			winsDisplay.push(React.createElement('div', {
				key: 'reload',
				className: 'rps-player-reload',
				onClick: this.handleReloadClick
			}, ''));
		}
		return React.createElement('span', {
			className: 'rps-player'
		}, [
			React.createElement('span', {
				key: 'ci-0',
				className: className
			}, winsDisplay),
			choicesButtons
		]);
	}
}
