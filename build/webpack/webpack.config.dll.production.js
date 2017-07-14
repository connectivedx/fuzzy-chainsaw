/*
  Webpack configuration to precompile vendor
  modules DLLs before the main bundle
  in production mode
*/

const webpackMerge = require('webpack-merge');

const dllProductionWorkflow = require('./workflow/dll.production');
const { source } = require('../lib/path-helpers');

const { dlls } = require(source('fc-config')); // eslint-disable-line


module.exports = webpackMerge(dllProductionWorkflow, {
  entry: {
    vendor: dlls.vendor,
    styleguide: dlls.styleguide,
    tests: dlls.tests
  }
});

