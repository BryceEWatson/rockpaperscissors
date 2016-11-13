import React from 'react';
var TestUtils = require('react/lib/ReactTestUtils');
import MENU from '../src/modules/menu';

describe('menu ui component', () => {

	it('it should render the menu component', () => {
		// setup
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(MENU, {}));
		let output = renderer.getRenderOutput();
		// excersise
		expect(output).to.exist;
		// teardown
	});

	it('it should display the default header text', () => {
		// setup
		let renderer = TestUtils.createRenderer();
		renderer.render(React.createElement(MENU, {}));
		let text = renderer.getRenderOutput().props.children[0];
		// excersise
		expect(text).to.equal('React, Paper, Scissors!');
		// teardown
	});
});
