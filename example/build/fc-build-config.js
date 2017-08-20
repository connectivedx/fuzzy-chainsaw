const path = require('path');
const buildConfig = require('fuzzy-chainsaw-build');
// const postcss = require('postcss');

const pkg = require('../package.json');
const fcConfig = require('./fc-config');

module.exports = buildConfig({
  pkg,
  fcConfig,
  postcssPlugins: (plugins, fcBuildConfig) => { // eslint-disable-line
    return plugins;
  },
  baseUrl: pkg.baseUrl,
  directories: {
    root: path.resolve(__dirname, '..'),
    source: path.resolve(__dirname, '..', pkg.directories.source),
    dest: path.resolve(__dirname, '..', pkg.directories.dest)
  }
  // webpackOpts: {
  //   definePlugin: {},
  //   providePlugin: {},
  //   definePluginProduction: {},
  //   definePluginDev: {},
  //   definePluginTest: {},
  //   definePluginCi: {}
  // },
  // skeletonSource: 'lib/skeleton.html',
  // testExternals: {}
});
