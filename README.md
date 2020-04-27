# Lattice Take Home Exercise
This is a coding assignment for the frontend Lattice interview process.

## Install and run locally

From root directory, run `$ npm install` to install dependencies.

Copy the contents of config/server-template.json to a new file in the same directory named server.json, and replace the value in the field marked INSERT HERE with your TMDB api key. **config/server.json is explicitly gitignored and should not be committed.**

To run the server, run `$ npm run watch` to start the Node server and watch for changes (or `$npm run serve` just to start the server, if you're not planning to make server changes) and `$ npm start` to start a dev server and build/watch the bundled JS package.

### Client
Webpack is configured for [hot reloading](https://webpack.js.org/concepts/hot-module-replacement/), so changes made to .js/.jsx files will appear automatically.
