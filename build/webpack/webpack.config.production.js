/*
  Configures webpack, in production mode, to:
    - build all assets including styleguide
    - bundle static render bundle
*/

const webpack = require('webpack');
const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const productionWorkflow = require('./workflow/production');
const staticWorkflow = require('./workflow/static');

const { entries } = require(source('fc-config')); // eslint-disable-line


// remove dll references
const modify = (config) => {
  config.plugins = config.plugins.slice(2);
  return config;
};


module.exports = [
  merge(productionWorkflow, {
    entry: sourceAll(entries.production)  
  }),
  modify(merge(staticWorkflow, {
    entry: sourceAll(entries.static)
  }))
];
