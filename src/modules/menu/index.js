require('../../css/variables.scss');
require('./style.scss');

import React from 'react';

export default class MENU extends React.Component {
	constructor(props) {
		super(props);
		this.handleIconClicked = this.handleIconClicked.bind(this);
	}
	/**
	 * Handles the click event for the human / computer toggle.
	 * this.props.changeMode() must exist.
	 */
	handleIconClicked() {
		let mode = 'human'
		if (this.props.mode === 'human') {
			mode = 'computer';
		}
		this.props.changeMode(mode);
	}
	render() {
		const {mode} = this.props;
		let menuIconClass = 'rps-menu-icon--human';
		if (mode === 'computer') {
			menuIconClass = 'rps-menu-icon--computer'
		}
		const childrenElements = [
			"React, Paper, Scissors!",
			React.createElement('div', {
				key: 'rps-menu-icon',
				className: 'rps-menu-icon ' + menuIconClass,
				onClick: this.handleIconClicked
			})
		]

		return React.createElement("div", {
			className: 'rps-menu'
		}, childrenElements, null);
	}
}
