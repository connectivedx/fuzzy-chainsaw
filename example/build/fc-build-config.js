const path = require('path');
const buildConfig = require('fuzzy-chainsaw-build');

const pkg = require('../package.json');
const fcConfig = require('./fc-config');
const postcssPlugins = require('./postcss-plugins');

module.exports = buildConfig({
  pkg,
  fcConfig,
  postcssPlugins,
  baseUrl: pkg.baseUrl,
  directories: {
    root: path.resolve(__dirname, '..'),
    source: path.resolve(__dirname, '..', pkg.directories.source),
    dest: path.resolve(__dirname, '..', pkg.directories.dest)
  }
});
