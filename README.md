# Fuzzy Chainsaw

Fuzzy Chainsaw is [Connective DX](https://www.connectivedx.com)'s in-house toolset for making static websites and component styleguides.  It's great for producing static web assets with an emphasis on component driven architecture.

To get started, just [download](https://github.com/connectivedx/fuzzy-chainsaw/archive/develop.zip) a copy of this repository from github.


## System Dependencies

Before you get up and running, make sure your environment has the following dependencies installed:

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


## Goals

We have tried to be thoughtful in our architectural decisions, and drive based on a few goals:

- Emphasize modular development
- Component based Architecture
- Reuseability between projects
- Reduce development friction

### Emphasize module development

This might be subtitled, Unix Philosophy.  The system should be composed of many smaller pieces that each have a single responsibility.  This means making use of modules from [NPM](https://www.npmjs.com) and developing our files using CommonJS module format.

### Component-based architecture

We were inspired by the patterns in Brad Frost's [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and Lonely Planet's [Rizzo](https://github.com/lonelyplanet/rizzo) component API.  Our goal is to think about user interfaces as compositions of many small components. We've tried to build tools that help us think in this fashion.

Components are written using React JSX, which provides a great model for composing component and managing dependencies.  Components are split into two categories, __Tags__ or __Components__. Tags are generally more reuseable, whereas Components are generally connected more directly to a CMS data model.

#### Tags

Found in `/source/tags`

#### Components

Found in `/source/components`


### Reuseability between projects

Using work between projects has historically been a difficult nut to crack. We've selected technologies that have proven to be easily portable, and used an opionated folder and file naming scheme that self contains components.

#### Naming conventions

Defining strong naming conventions help to ease the pain of context switching between projects.  Instead of focusing on the naming style of your fellow developers, you can focus on the goals of their code.

#### Component structure

All tags and components share a similar set of files. Once you learn how one component is put together, you will have a very good idea how all component operate. Our preference is to repeat simple patterns many times instead of building fewer complex monolithic components.


### Reduce development friction

The web development world is evolving rapidly. A tool that can automate the myriad tasks we regularly perform can redirect our focus on business decisions instead of trival tasks. We've provided a few different tools on your development adventures.

#### Building and watching

There are some very helpful command line scripts to help with development and continuous-integration. You can build a static set of files using `npm run build` or `npm run production` and create a local server to preview using `npm run start`. Use `npm run watch` if you are developing, this creates a server at http://localhost:8080 that updates as file changes.

#### Scaffolding components

Since you will likely be creating a number of tags and components, there are also some commands to help with that common task.

```
npm run new-tag [Name]
npm run new-component [Name]
```

> Remember that component names use [PascalCase](https://en.wikipedia.org/wiki/PascalCase)


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

Fuzzy Chainsaw was developed to work best with Node's [most recent LTS release](https://nodejs.org/en/download/) and above. We intend to keep support pegged to Node's [LTS schedule](https://github.com/nodejs/LTS#lts-schedule).


## License

MIT Copyright (c) 2016 Connective DX
