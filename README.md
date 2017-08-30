# Fuzzy Chainsaw

[Fuzzy Chainsaw](https://github.com/connectivedx/fuzzy-chainsaw) is [Connective DX](https://www.connectivedx.com)'s in-house toolset for making static websites and component styleguides.  It's great for producing static web assets with an emphasis on component driven architecture.


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

### Installing Package Dependencies

To install npm modules for each of the packages, you can do:

```
npm run setup
```

### Linking Packages

This is a mono-repo containing a number of packages, to develop locally you will need link them instead of referencing the modules from npm.

```
npm run link
```

### Unlinking Packages

You can always unlink local modules later by deleting the `node_modules` folder, or with:

```
npm run unlink
```


### Deleting node_modules for all packages

If you ever need to completely nuke your `node_modules` and start over, you can:

```
npm run cleanup
```


## License

MIT Copyright (c) 2017 Connective DX
