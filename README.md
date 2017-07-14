# Fuzzy Chainsaw

[Fuzzy Chainsaw](https://github.com/connectivedx/fuzzy-chainsaw) is [Connective DX](https://www.connectivedx.com)'s in-house toolset for making static websites and component styleguides.  It's great for producing static web assets with an emphasis on component driven architecture.

> To get started, [download](https://github.com/connectivedx/fuzzy-chainsaw/archive/develop.zip) a copy of this repository from github.


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


## Getting Started

After you've installed npm depenedencies, FC provides command line scripts to automate usual tasks. Tasks are divided below into common workflows.

> Use `npm run` or `yarn run` to execute these commands in your favorite terminal.

### Development

Use these commands to develop a local copy of the website. These will watch for file changes and update bundles as you work.

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explaination](#dll-explaination)
`dev` | Starts the development server and karama test runner in watch modes.
`build:dev` | Runs webpack-dev-server that watches for file changes. Starts a local sever at `http://0.0.0.0:8080` (also accessible at `http://localhost:8080`)
`test:dev` | Runs the karma test runner in watch mode

### Standard Build

Use build commands if you want to quickly build a static representation of your website.

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explaination](#dll-explaination)
`build` | Compiles source files into output directory
`test` | Runs the Karama test in single run mode
`start` | Starts a static server at `http://localhost:8081` pointing at the output directory

### Production Build

Use production commands to build a minimized static representation of the website.

Command | Description
--- | ---
`dll:production` | Builds a production ready DLL library of vendor files. [DLL Explaination](#dll-explaination)
`production` | Compiles and minimizes source files into output directory


### Integration Tasks

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explaination](#dll-explaination)
`watch` | Compiles src directory to output directory and watches for file changes.
`dll:ci` | Builds a DLL library of only the vendor files required only for integration.
`build:ci` | Compiles only source files required for backend integration.
`dll:production:ci` | Builds a production ready DLL library of vendor files required only for integration.
`production:ci` | Compiles required assets to output directory – skips styleguide and html generation.


### Full Builds

Use these task to build a full copy of the website, including the DLL generation.

Command | Description
--- | ---
`full:build` | runs `dll` and `build` tasks
`full:build:ci` | runs `dll:ci` and `build:ci` tasks
`full:production` | runs `dll:production` and `build:production` tasks
`full:production:ci` | runs `dll:production:ci` and `build:production:ci` tasks


### Scaffolding tasks

Scaffolding tasks are used to quickly create new tags and components while developing a website.

Command | Description
--- | ---
`new:tag [name]` | Creates a new tag component in the `/source/tags` directory.
`new:component [name]` | Creates a new stateless integration component in the `/source/components` directory.
`new:composition [name]` | Creates a new stateless integration component in the `/source/compositions` directory.


#### DLL Explaination

DLLs are libraries of vendor files that are referenced by other tasks.  This speeds up subsequent runs by referencing the DLL dependency tree instead of rebuilding it for every tasks. DLL files will only change when `node_modules` are update, and will be automatically generated after each `npm install` or `yarn`.

> For most task this will be enough, but if you are building production ready code, be sure to use `dll:production` before running a production build tasks. Using the development DLL file in production, or visa-versa will result in hard to debug errors.

#### BASE_URL

The `BASE_URL` defines the root path where the bundled files will be located.  If you are uploading to a non-root path on a server (`http://myserver.com/this-path`) this will need to be defined.

```
BASE_URL=/this-path/ npm run build
```

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

It depends.  It's a great tool for the way we build projects at [Connective DX](https://www.connectivedx.com), but may not align with your project's goals.  It is more focused on integrating with a back end system than application development.

### Where’s the documentation?

It's a slow and steady trek to writing great documentation. We are doing our best, but we'd love your suggestions. If you'd like to help improve these documents, just create a new branch and submit a Pull Request – it's why we're on github! :computer: :bamboo:

### Why fuzzy chainsaw?

GitHub gifted it to us as the randomly generated suggestion and we took it, because it’s a pretty awesome phrase.

### What verisons of Node are supported?

Fuzzy Chainsaw was developed to work best with Node's [most recent LTS release](https://nodejs.org/en/download/) and above. We intend to keep support pegged to Node's [LTS schedule](https://github.com/nodejs/LTS#lts-schedule).


## License

MIT Copyright (c) 2016 Connective DX
