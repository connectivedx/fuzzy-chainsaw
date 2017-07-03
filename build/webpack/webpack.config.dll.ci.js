const webpackMerge = require('webpack-merge');
const dllWorkflow = require('./workflow/dll');
const { source } = require('../lib/path-helpers');

module.exports = webpackMerge(dllWorkflow, {
  entry: {
    vendor: [
      'react'
    ]
  }
});
