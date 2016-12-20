# [Fuzzy Chainsaw](https://github.com/connectivedx/fuzzy-chainsaw)

> Boilerplate for component-based UI development

## Features

* ES2015
* webpack
* react
* postcss
* automatically generated style guide

## Getting Started

- Requires: [node 6.9.1](https://nodejs.org/en/), [gulp 3.9.1](http://gulpjs.com/)
- Install: `npm install`

## CLI Scripts

### Build Tasks

Command | Description
--- | ---
`npm run build` | Compiles source files into output directory
`npm run production` | Compiles and minifies source files into output directory.
`npm run watch` | Compiles src directory and watches for file changes. Starts a development server at `http://0.0.0.0:8080` (also accessible at `http://localhost:8080`)
`npm run start` | Starts a static server at `http://localhost:8080` to use with `npm run build`

### Scaffolding Tasks

Command | Description
--- | ---
`npm run new-tag [name]` | Creates a new tag component in the `/source/tags` directory.
`npm run new-component [name]` | Creates a new integration component in the `/source/components` directory.


## FAQ

### What is this?

Connective DX’s front-end boilerplate, build using Webpack, React, and POSTCSS, among other fine open source goodness.

### Where’s the documentation?

It’s coming. Pinkie swear.

### Why fuzzy chainsaw?

GitHub gifted it to us as the randomly generated suggestion and we took it, because it’s a pretty awesome phrase.

### What verisons of Node are supported?
Fuzzy Chainsaw was developed to work best with Node's [most recent LTS release](https://nodejs.org/en/download/) and up. At the time of this writing, LTS is 6.9.1.
We intend to keep support pegged to Node's [LTS schedule](https://github.com/nodejs/LTS#lts-schedule).
