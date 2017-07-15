/*
  Configures webpack for development.
*/

const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const devWorkflow = require('./workflow/dev');

const { entries } = require(source('fc-config')); // eslint-disable-line


module.exports = merge(devWorkflow, {
  entry: sourceAll(entries.dev)
});
