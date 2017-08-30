const path = require('path');

// configs
const bundleConfig = require('fuzzy-chainsaw-bundle');
const cleanConfig = require('fuzzy-chainsaw-clean');
const renderConfig = require('fuzzy-chainsaw-render');
const styleguideConfig = require('fuzzy-chainsaw-styleguide');
const scaffoldConfig = require('fuzzy-chainsaw-scaffold');
const testConfig = require('fuzzy-chainsaw-test');

// framework adaptor
const reactFramework = require('fuzzy-chainsaw-framework-react');

// project data
const pkg = require('../package.json');
const projectConfig = require('./project-config');

// path helpers
const { source, dest } = pkg.directories;
const rootPath = (...args) => path.resolve(__dirname, '..', ...args);

// directory object helper
const directories = {
  root: rootPath(),
  source: rootPath(source),
  dest: rootPath(dest)
};

const sharedConfig = {
  pkg,
  projectConfig,
  baseUrl: pkg.baseUrl,
  framework: reactFramework,
  directories
};


// export task configurations
module.exports.clean = cleanConfig(sharedConfig);
module.exports.bundle = bundleConfig(sharedConfig);
module.exports.render = renderConfig(sharedConfig);

module.exports.test = testConfig(
  Object.assign({}, sharedConfig, {
    // this gets the shared webpack config
    bundleConfig: module.exports.bundle
  })
);

module.exports.styleguide = styleguideConfig(
  Object.assign({}, sharedConfig, {
    directories: Object.assign({}, directories, {
      dest: rootPath(dest, 'styleguide')
    }),
    variables: {
      colors: {
        background: '#fff',
        text: '#666',
        active: '#4925a0',
        inlineCode: '#4925a0',
        tableHeaders: '#000',
        tableRowBorder: '#999',
        headerBackground: '#fff',
        headerTitle: '#999',
        headerLinks: '#666',
        headerBorder: '#ddd',
        exampleHeaderBackground: '#222',
        exampleHeaderForeground: '#fff',
        exampleBackground: '#eee',
        exampleForeground: '#222',
        exampleDarkBackground: '#111',
        exampleDarkForeground: '#fff',
        codeHeaderBackground: '#4925a0',
        codeHeaderForeground: '#fff',
        codeBackground: '#090226'
      }
    }
  })
);

module.exports.scaffold = scaffoldConfig(
  Object.assign({}, sharedConfig, {
    directories: Object.assign({}, directories, {
      dest: rootPath(source, 'elements')
    })
  })
);
