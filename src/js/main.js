require('../css/variables.scss');
require('../css/main.scss');

import React from 'react';
import {render} from 'react-dom';
import ROCK_PAPER_SCISSORS from '../modules/rock-paper-scissors';

function getInitialState() {
    return require('./initial-data.js').getData();
}
render(React.createElement(ROCK_PAPER_SCISSORS, getInitialState()), document.getElementById('content'));
