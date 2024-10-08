# React Game of Life

![Game of Life](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

A React implementation of Conway's Game of Life.

## Table of Contents

- Introduction
- Features
- [Getting Started](#getting-started)
- Usage
- Deployment
- Contributing
- License

## Introduction

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

## Features

- Interactive grid to set initial state
- Start, stop, and reset controls
- Predefined patterns (e.g., pulsar)
- Responsive design

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/<USERNAME>/react-game-of-life.git
   cd react-game-of-life
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the App

To start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Click on the grid to set the initial state.
- Use the controls to start, stop, and reset the simulation.
- Observe the evolution of the grid according to Conway's rules.

## Deployment

To deploy the app to GitHub Pages:

1. Install the `gh-pages` package:

   ```sh
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to your [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmdillon%2Fwa%2Freact-game-of-life%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/mdillon/wa/react-game-of-life/package.json"):

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the app:

   ```sh
   npm run deploy
   ```

The app will be available at `https://<USERNAME>.github.io/<REPO>`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.