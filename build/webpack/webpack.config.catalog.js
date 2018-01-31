/*
  Configures webpack for development.
*/

const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const catalogWorkflow = require('./workflow/catalog');

const { entries } = require(source('fc-config')); // eslint-disable-line


module.exports = merge(catalogWorkflow, {
  entry: sourceAll(entries.dev)
});
