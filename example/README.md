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
>

### Development

```
npm run dev
```

Use these commands to develop a local copy of the website. These will watch for file changes and update bundles as you work.

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explaination](#dll-explaination)
`dev` | Starts the development server and karama test runner in watch modes.
`build:dev` | Runs webpack-dev-server that watches for file changes. Starts a local sever at `http://0.0.0.0:8080` (also accessible at `http://localhost:8080`)
`test:dev` | Runs the karma test runner in watch mode


### Standard Build

```
npm run build
```

Use build commands if you want to quickly build a static representation of your website.

Command | Description
--- | ---
`dll` | Builds a DLL library of vendor files to speed up future builds. [DLL Explaination](#dll-explaination)
`build` | Compiles source files into output directory
`test` | Runs the Karama test in single run mode
`start` | Starts a static server at `http://localhost:8081` pointing at the output directory


### Production Build

```
npm run production
```

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


## License

MIT Copyright (c) 2017 Connective DX
