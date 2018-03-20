/*
  Webpack configuration to precompile vendor
  module DLLs before the main bundle
  in CI mode only the vendor entry is included
*/

const webpackMerge = require('webpack-merge');
const ciDllWorkflow = require('./workflow/dll.ci');
const { source } = require('../lib/path-helpers');

const { dlls } = require(source('fc-config')); // eslint-disable-line


module.exports = webpackMerge(ciDllWorkflow, {
  entry: {
    vendor: dlls.vendor
  }
});
