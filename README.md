# Fuzzy Chainsaw

[Fuzzy Chainsaw](https://github.com/connectivedx/fuzzy-chainsaw) is [Connective DX](https://www.connectivedx.com)'s in-house toolset for making static websites and component styleguides.  It's great for producing static web assets with an emphasis on atomic driven architecture.

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
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explanation](#dll-explaination)
`dev` | Starts the development server and karama test runner in watch modes.
`build:dev` | Runs webpack-dev-server that watches for file changes. Starts a local sever at `http://0.0.0.0:8080` (also accessible at `http://localhost:8080`)
`test:dev` | Runs the karma test runner in watch mode

### Standard Build

Use build commands if you want to quickly build a static representation of your website.

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explanation](#dll-explaination)
`build` | Compiles source files into output directory
`test` | Runs the Karama test in single run mode
`start` | Starts a static server at `http://localhost:8081` pointing at the output directory

### Production Build

Use production commands to build a minimized static representation of the website.

Command | Description
--- | ---
`dll:production` | Builds a production ready DLL library of vendor files. [DLL Explanation](#dll-explaination)
`build:production` | Compiles and minimizes source files into output directory
`production` | Runs `dll:production` and `build:production` tasks


### Integration Tasks

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explanation](#dll-explaination)
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

Scaffolding tasks are used to quickly create new atoms and molecules while developing a website.

Command | Description
--- | ---
`new:atom [name]` | Creates a new atom component in the `/source/atom` directory.
`new:molecule [name]` | Creates a molecule stateless integration molecule in the `/source/molecule` directory.
`new:organisms [name]` | Creates a new stateless integration organisms in the `/source/organisms` directory.


#### DLL Explanation

DLLs are libraries of vendor files that are referenced by other tasks.  This speeds up subsequent runs by referencing the DLL dependency tree instead of rebuilding it for every tasks. DLL files will only change when `node_modules` are update, and will be automatically generated after each `npm install` or `yarn`.

> For most task this will be enough, but if you are building production ready code, be sure to use `dll:production` before running a production build tasks. Using the development DLL file in production, or visa-versa will result in hard to debug errors.

#### BASE_URL

The `BASE_URL` defines the root path where the bundled files will be located.  If you are uploading to a non-root path on a server (`http://myserver.com/this-path/`) this will need to be defined. This can be done on a one-off basis via build commands, or permanently via `package.json`.

If you are developing locally, or if your project will be served at the root of a domain or IP (`http://myserver.com/` or `http://133.713.37/`), you don't have to worry about configuring the `BASE_URL` at all.

##### Define via build commands

```
BASE_URL=/this-path/ npm run build
```

##### Define via package.json

```
"baseUrl": "/this-path/",
```

_Note: `BASE_URL` should always have a leading and trailing slash._


## Configuration

### fc-config

`source/fc-config.js` is used to configure the fuzzy chainsaw build tools.  This is where you can define webpack bundles, dll bundles, and theme options.

By default FC is setup with a `generic` theme, but this can be removed or updated depending on if you need multibrand/multi-theme support.


## Goals

We have tried to be thoughtful in our architectural decisions, and drive based on a few goals:

- Emphasize modular development
- Atomic based Architecture
- Reuseability between projects
- Reduce development friction

### Emphasize module development

This might be subtitled, Unix Philosophy.  The system should be composed of many smaller pieces that each have a single responsibility.  This means making use of modules from [NPM](https://www.npmjs.com) and developing our files using CommonJS module format.

### Atomic-based architecture

Fuzzy Chainsaw projects are written using React JSX, which provides a great model for composing components and managing dependencies.  Elements are split into three categories, __Atoms__, __Molecules__, __Organisms__. Atoms will be mostly generic small elements, where as molecules and organisms are collections of smaller elements.

#### Atoms

Found in `/source/elements/atoms`

Atoms are small, reuseable elements that can be used in many contexts.

#### Molecules

Found in `/source/elements/molecules`

Molecules are generally more singular purpose elements that are tied to a business requirement, or complex reusuable elmenets that require internal state.

#### Organisms

Found in `/source/elements/organisms`

Organisms are specific arrangments of Atoms and Molecules with minimal styling requirements.

#### Modifiers

Found in `/source/elements/modifiers`

Modifiers are css styles and/or javascript containers that don't require specific html be defined.


### Reuseability between projects

Using work between projects has historically been a difficult nut to crack. We've selected technologies that have proven to be easily portable, and used an opionated folder and file naming scheme that self contains molecules.

#### Naming conventions

Defining strong naming conventions help to ease the pain of context switching between projects.  Instead of focusing on the naming style of your fellow developers, you can focus on the goals of their code.

#### Molecule structure

All atoms and molecules share a similar set of files. Once you learn how one molecule is put together, you will have a very good idea how all molecule operate. Our preference is to repeat simple patterns many times instead of building fewer complex monolithic molecules.


### Reduce development friction

The web development world is evolving rapidly. A tool that can automate the myriad tasks we regularly perform can redirect our focus on business decisions instead of trival tasks. We've provided a few different tools on your development adventures.

#### Building and watching

There are some very helpful command line scripts to help with development and continuous-integration. You can build a static set of files using `npm run build` or `npm run production` and create a local server to preview using `npm run start`. Use `npm run dev` if you are developing, this creates a server at http://localhost:8080 that updates as file changes.

#### Scaffolding components

Since you will likely be creating a number of atoms and molecules, there are also some commands to help with that common task.

```
npm run new:atom [Name]
npm run new:molecule [Name]
npm run new:organisms [Name]
npm run new:stateful [Name]
```

Molecules come in a variety of shapes and sizes!

- Atoms are small, reuseable elements that can be used in many contexts.
- Molecules are generally more singular purpose elements that are tied to a business requirement, or complex reusuable elmenets that require internal state.
- Organisms are specific arrangments of Atoms and Molecules with minimal styling requirements.
- Stateful molecules are elements that require tracking of internal state properties. The scaffolding for Stateful molecule intends for a more application-based implementation of React.

You can read more on Stateless vs. Stateful molecules [here](https://reactjs.org/docs/state-and-lifecycle.html)

> Remember that elements names use [PascalCase](https://en.wikipedia.org/wiki/PascalCase)


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

MIT Copyright (c) 2018 Connective DX
