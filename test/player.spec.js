import React from 'react';
var TestUtils = require('react/lib/ReactTestUtils');
import PLAYER from '../src/modules/player';

describe('player ui component', () => {

	it('it should render the player component', () => {
		// setup
		const initialData = require('../src/js/initial-data').getData();
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(PLAYER, initialData.playerOne));
		let rootNode = renderer.getRenderOutput();
		// test
		expect(rootNode).to.exist;
		expect(rootNode.props.className).to.contain('rps-player');
	});

	it('it should display player one with actions', () => {
		// setup
		const initialData = require('../src/js/initial-data').getData();
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(PLAYER, initialData.playerOne));
		let rootNode = renderer.getRenderOutput();
		let playerIcon = rootNode.props.children[0];
		let playerActions = rootNode.props.children[1];
		let rockAction = playerActions.props.children[0];
		let paperAction = playerActions.props.children[1];
		let scissorsAction = playerActions.props.children[2];
		// test
		expect(playerIcon).to.exist;
		expect(playerIcon.props.className).to.contain('rps-player-icon');
		expect(playerIcon.props.className).to.contain('rps-player--one');
		expect(playerActions).to.exist;
		expect(playerActions.props.className).to.contain('rps-player-actions');
		expect(rockAction).to.exist;
		expect(paperAction).to.exist;
		expect(scissorsAction).to.exist;
	});
	it('it should handle an action click', (done) => {
		const initialData = require('../src/js/initial-data').getData();
		initialData.playerOne.playerSubmit = (action) => {
			expect(action).to.exist;
			expect(action.player).to.equal(1);
			expect(action.choice).to.equal('rock');
			done();
		}
		let renderedObj = TestUtils.renderIntoDocument(React.createElement(PLAYER, initialData.playerOne));
		let rockAction = TestUtils.findRenderedDOMComponentWithClass(renderedObj, 'rps-player-action--rock');
		TestUtils.Simulate.click(rockAction);
	});
});
