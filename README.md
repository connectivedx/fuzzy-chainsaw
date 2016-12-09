# Fuzzy Chainsaw

Fuzzy Chainsaw is [Connective DX's](https://www.connectivedx.com) toolset for making static websites and component styleguides.  It's great for producing static web assets with an emphasis on component driven architecture.

To get started, just [download](https://github.com/connectivedx/fuzzy-chainsaw/archive/develop.zip) a copy of this repository from github.


## System Dependencies

Before you get up and running, make sure your computer has the following dependencies installed:

- [Node LTS+](https://nodejs.org/en/download)
- [Yarn](https://yarnpkg.com/en/docs/install) (optional)


## Install

To install project dependencies, start up the best terminal on your machine and do:

```
npm install
```

__Using Yarn instead__

[Yarn](https://github.com/yarnpkg/yarn) is an alterntive package manager that offers great performance and predictability.  If you'd like to install dependencies using Yarn, do:

```
yarn
```


## Command line scripts

After you've installed npm depenedencies, FC provides a couple command line scripts that can be used in your favorite terminal.

### Build tasks

Build tasks are used to compile, watch, and preview your website.

Command | Description
--- | ---
`npm run build` | Compiles source files into output directory
`npm run production` | Compiles and minifies source files into output directory.
`npm run watch` | Compiles src directory and watches for file changes. Starts a development server at `http://localhost:8080`
`npm run start` | Starts a static server at `http://localhost:8080` to use with `npm run build`

### Scaffolding tasks

Scaffolding tasks are used to quickly create new tags and components while developing a website.

Command | Description
--- | ---
`npm run new-tag [name]` | Creates a new tag component in the `/source/tags` directory.
`npm run new-component [name]` | Creates a new stateless integration component in the `/source/components` directory.


## FAQ

### What is this?

Connective DX’s front-end toolset.

### What technologies are used?

[Gulp](https://github.com/gulpjs/gulp) is used as a general task runner.  Web assets (html, js, css, images, svgs) are built with [Webpack](https://webpack.github.io).  [React](https://facebook.github.io/react) is used to rendering static html for CMS integration and render for browsers, using [Babel](https://babeljs.io) to transpile ES6 to ES5.  [Enzyme](https://github.com/airbnb/enzyme) is used to unit-test React components.  [PostCSS](https://github.com/postcss/postcss) is used to transform CSS, with [CSSNext](http://cssnext.io) as a base set of plugins.  [SVG Symbols](https://css-tricks.com/svg-symbol-good-choice-icons) are used to easily define and use vector icons.

### Is it any good?

It depends.  It's a great tool for the way we build projects at [Connective DX](https://www.connectivedx.com), but may not align with your project's goals.

### Where’s the documentation?

It's a slow and steady trek to writing great documentation. We are doing our best, but we'd love your suggestions. If you'd like to help improve these documents, just create a new branch and submit a Pull Request – it's why we're on github! :computer: :bamboo:

### Why fuzzy chainsaw?

GitHub gifted it to us as the randomly generated suggestion and we took it, because it’s a pretty awesome phrase.

### What verisons of Node are supported?

Fuzzy Chainsaw was developed to work best with Node's [most recent LTS release](https://nodejs.org/en/download/) and up. We intend to keep support pegged to Node's [LTS schedule](https://github.com/nodejs/LTS#lts-schedule).


## License

MIT Copyright (c) 2016 Connective DX
