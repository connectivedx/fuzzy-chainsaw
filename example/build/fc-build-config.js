const path = require('path');
const buildConfig = require('fuzzy-chainsaw-build');

const { baseUrl, directories } = require('./package.json');

const fcConfigPath = path.resolve(__dirname, '..', directories.source, 'fc-config.js');
const fcConfig = require(fcConfigPath); // eslint-disable-line

module.exports = buildConfig({
  fcConfig,
  fcConfigPath,
  baseUrl,
  directories: {
    root: path.resolve(__dirname, '..'),
    source: path.resolve(__dirname, '..', directories.source),
    dest: path.resolve(__dirname, '..', directories.dest)
  },
  postcssPlugins: [
    require('postcss-mixins') // eslint-disable-line
  ]
});
