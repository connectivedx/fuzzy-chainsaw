const path = require('path');
const glob = require('glob');
const fs = require('fs');
const fileExists = require('file-exists');
const pkg = require('./package.json')
const staticConfig = require('./build/webpack.static.js');
const styleguideConfig = require('./build/webpack.styleguide.js');
const browserConfig = require('./build/webpack.browser.js');
const testsConfig = require('./build/webpack.tests.js');

const dirs = pkg.directories;

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
  getDirectories(dirs.source + 'components')
    .filter(name => componentExists(dirs.source + 'components', name));

const tags =
  getDirectories(dirs.source + 'tags')
    .filter(name => componentExists(dirs.source + 'tags', name));


// concatinate both lists together for the styleguide
const prefix = pre => str => pre + str;
const styleguides =
  tags.map(prefix('tags/'))
    .concat(components.map(prefix('components/')))


// a base objects used in every configuration
const baseOutput = config => Object.assign({
  outputPath: path.resolve(__dirname, dirs.output),
}, config);


// webpack configurations
const renderPages = staticConfig(baseOutput({
  entry: dirs.source + 'render-page.jsx',
  locals: { components, tags },
  paths: glob.sync(dirs.source + 'pages/**/*.jsx')
    .map(getDeepName('source/pages'))
    .map(page => `${page}.html`),
}));

const renderStyleguide = styleguideConfig(baseOutput({
  entry: dirs.source + 'render-styleguide.jsx',
  locals: { components, tags },
  paths: styleguides.map(page => `styleguide/${page}.html`)
}));

const styleguideBundle = browserConfig(baseOutput({
  entry: dirs.source + 'styleguide.jsx',
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
}));

const browserScript = browserConfig(baseOutput({
  entry: dirs.source + 'main.jsx',
  outputScript: '/assets/bundle.js'
}));

const browserStyle = browserConfig(baseOutput({
  entry: dirs.source + 'style.jsx',
  outputStyle: '/assets/bundle.css'
}));

const componentTests = testsConfig(baseOutput({
  entry: './source/tests.jsx',
  outputScript: '/tmp/tests.js',
  reporter: 'tap-min'
}))


// output all webpack configurations to cli
module.exports = [
  browserScript,
  browserStyle,
  renderStyleguide,
  styleguideBundle,
  renderPages,
  componentTests
];
