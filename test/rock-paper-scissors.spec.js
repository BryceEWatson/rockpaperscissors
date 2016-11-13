import React from 'react';
var TestUtils = require('react/lib/ReactTestUtils');
import ROCK_PAPER_SCISSORS from '../src/modules/rock-paper-scissors';

describe('rock-paper-scissors ui component', () => {

	it('it should render the rock-paper-scissors component', () => {
		// setup
		const initialData = require('../src/js/initial-data').getData();
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(ROCK_PAPER_SCISSORS, initialData));
		let rootNode = renderer.getRenderOutput();
		// test
		expect(rootNode).to.exist;
		expect(rootNode.props.className).to.contain('rps-main');
	});
	it('it should update the scoreboard when an action is clicked', () => {
		// setup
		const initialData = require('../src/js/initial-data').getData();
		let renderedObj = TestUtils.renderIntoDocument(React.createElement(ROCK_PAPER_SCISSORS, initialData));
		let rockAction = TestUtils.findRenderedDOMComponentWithClass(renderedObj, 'rps-player-action--rock');
		TestUtils.Simulate.click(rockAction);
		let gameBoxOne = TestUtils.findRenderedDOMComponentWithClass(renderedObj, 'rps-gamebox--player-1-game-1');
		expect(gameBoxOne.className).to.contain('rps-gamebox--rock');

	});
});
