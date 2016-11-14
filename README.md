# React, Paper Scissors!
A rock-paper-scissors game, built in React.js.
Author: Bryce Watson <BryceEWatson@gmail.com>

## Description

React, paper, scissors uses React.js to implement a stateful version of the game Rock, Paper, Scissors.

Don't know the game? http://en.wikipedia.org/wiki/Rock-paper-scissors

App state is used to keep track of the players, their score, and more.

The UI follows Google's Material Design specifications (https://design.google.com/)

<img width="240" alt="screen shot 2016-11-13 at 5 28 01 pm" src="https://cloud.githubusercontent.com/assets/1322843/20250777/3c7dcdec-a9c7-11e6-9bc9-e1cb15bde34a.png">


## Features

- Ability to play against the computer
- Ability to simulate a game (Computer vs Computer)
- Ability to restart the game
- Computer generated plays are random
- Scoreboard keeps track of previous plays
- Ability to toggle between computer and human at any time

## Running

To see the application locally, run `npm run dev`.

To create a distributable, run `npm run build`.

## Testing

To run the test suite, run `npm test`.

Tests are located in `/test/`, and there is a test suite for each UI component.

Tests use ReactTestUtils to render & retrieve components. PhantomJS is used for DOM interaction.

## Extensibility

Certain changes to the game, such as increasing the number of rounds per match, can be made easily by modifying the initial state in `/src/js/initial-data.js`.

Other changes, such as adding additional actions beyond 'rock', 'paper', and 'scissors', can be accomplished with some minor modifications to the player and rock-paper-scissors ui components.

### Tooling

The following tooling / libraries are used:

- `webpack` to modularise the Javascript code
- `babel` to utilise ES2015/ES6 features today in case you're into it
- `node-sass` to modularise your styling via SASS
- `eslint` to make sure your code meets the standards
- `karma`, `mocha` and `chai` to help you write and run your unit tests in various browsers
- `file-loader` for loading SVG and other images
- `react.js` for fast rendering of stateful UI components
- `ReactTestUtils` for easy testing of react UI components

To start developing, fork and clone the project first, then make sure you have Node.js *5.x* or higher and run

```
$ npm install
```

### Helpful commands

You have the following CLI commands available:

- `npm run dev` running `webpack-dev-server` and serving the project on `localhost`
- `npm run test -- --browsers Chrome` running unit tests via `karma` in Chrome
- `npm run test` running unit tests via `PhantomJS` in a headless state
- `npm run lint` running `eslint` against your source (and config) files
- `npm run build` running `webpack` build
- `npm run serve` serving the `build/` folder contents

Whilst developing, you'll most likely to run `npm run dev` in a terminal window, `webpack` will take care of everything, bundling your project to an in-memory `build/` folder and serving it from there. Also, `npm run test` in another terminal window to see your tests running / failing on every file change.

If you'd like to see the output as files, just run `npm run build` and the result will be found under a real `build/` folder.
