import React from 'react';
var TestUtils = require('react/lib/ReactTestUtils');
import SCOREBOARD from '../src/modules/scoreboard';

describe('scoreboard ui component', () => {

	it('it should render the scoreboard component', () => {
		// setup
		const initialData = require('../src/js/initial-data').getData();
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(SCOREBOARD, initialData.scoreboard));
		let rootNode = renderer.getRenderOutput();
		// test
		expect(rootNode).to.exist;
		expect(rootNode.props.className).to.contain('rps-scoreboard');
	});

	it('it should display the correct # of games', () => {
		// setup
		let initialData = require('../src/js/initial-data').getData();
		let renderer = TestUtils.createRenderer();
		initialData.scoreboard.totalGames = 5;
		renderer.render(React.createElement(SCOREBOARD, initialData.scoreboard));
		let rootNode = renderer.getRenderOutput();
		expect(rootNode.props.children.length).to.equal(5);
	});
	it('it should display the correct winner of a game', () => {
		let initialData = require('../src/js/initial-data').getData();
		initialData.scoreboard.games[0] = {winner: 1, playerOne: 'rock', playerTwo: 'scissors'};
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(SCOREBOARD, initialData.scoreboard));
		let rootNode = renderer.getRenderOutput();
		let gameWrapper = rootNode.props.children[0];
		expect(gameWrapper.props.children[1].props.className).to.contain('rps-scoreboard--winner');
	});
});
