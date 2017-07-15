/*
  Configures webpack to:
    - build all assets including styleguide
    - bundle static render bundle
*/

const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const buildWorkflow = require('./workflow/build');
const staticWorkflow = require('./workflow/static');

const { entries } = require(source('fc-config')); // eslint-disable-line


// remove dll references
const modify = (config) => {
  config.plugins = config.plugins.slice(2);
  return config;
};


module.exports = [
  merge(buildWorkflow, {
    entry: sourceAll(entries.build)
  }),
  modify(merge(staticWorkflow, {
    entry: sourceAll(entries.static)
  }))
];
