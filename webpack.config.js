/* 
  Configures webpack to build all elements of the site.
  
  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/

const path = require('path');
const glob = require('glob');
const fs = require('fs');
const fileExists = require('file-exists');

/*
 *
 * IMPORT SHARED WEBPACK CONFIGURATIONS
 *
 */
const staticConfig = require('./build/webpack.static');
const styleguideConfig = require('./build/webpack.styleguide');
const browserConfig = require('./build/webpack.browser');
const testsConfig = require('./build/webpack.tests');


/*
 *
 * HELPER FUNCTIONS
 * (todo: do these belong off in a library so the config is more terse? Probably.)
 *
 */

// get path of file relative to source directory
const getDeepName = source => blob => {
  const blobPath = path.resolve(__dirname, blob);
  const rootPath = path.resolve(__dirname, source);
  const name = blobPath.substr(rootPath.length + 1);

  return name
    .substr(0, name.length - path.extname(blob).length)
    .replace(/\\/g, '/');
};


// helpers for finding files for rendering
const getDirectories = (src) =>
  fs.readdirSync(src)
    .filter(file => fs.statSync(path.join(src, file)).isDirectory());

const componentExists = (baseSrc, name) =>
  fileExists(path.resolve(baseSrc, name, name + '.jsx'));


// create lists of components with a coresponding jsx file
const components =
  getDirectories('./source/components')
    .filter(name => componentExists('./source/components', name));

const tags =
  getDirectories('./source/tags')
    .filter(name => componentExists('./source/tags', name));


// concatinate both lists together for the styleguide
const prefix = pre => str => pre + str;
const styleguides =
  tags.map(prefix('tags/'))
    .concat(components.map(prefix('components/')))


// a base objects used in every configuration
const baseOutput = config => Object.assign({
  outputPath: path.resolve(__dirname, 'dist'),
}, config);


/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */
const renderPages = staticConfig(baseOutput({
  entry: './source/RenderPage.jsx',
  locals: { components, tags },
  paths: glob.sync('./source/pages/**/*.jsx')
    .map(getDeepName('source/pages'))
    .map(page => `${page}.html`),
}));

const renderStyleguide = styleguideConfig(baseOutput({
  entry: './source/RenderStyleguide.jsx',
  locals: { components, tags },
  paths: styleguides.map(page => `styleguide/${page}.html`)
}));

const styleguideBundle = browserConfig(baseOutput({
  entry: './source/styleguide.jsx',
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
}));

const browserScript = browserConfig(baseOutput({
  entry: './source/main.jsx',
  outputScript: '/assets/bundle.js'
}));

const browserStyle = browserConfig(baseOutput({
  entry: './source/style.jsx',
  outputStyle: '/assets/bundle.css'
}));

const componentTests = testsConfig(baseOutput({
  entry: './source/tests.jsx',
  outputScript: '/tmp/tests.js',
  reporter: 'tap-min'
}))


/*
 *
 * EXPORT ALL CONFIGURATIONS
 * Consumers of this config (e.g. gulp) will pass these to webpack for execution.
 *
 */
module.exports = [
  browserScript,
  browserStyle,
  renderStyleguide,
  styleguideBundle,
  renderPages,
  componentTests
];
