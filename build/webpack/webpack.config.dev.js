/*
  Configures webpack to build all elements of the site.

  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/
const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const devWorkflow = require('./workflow/dev');

const { entries } = require(source('fc-config')); // eslint-disable-line

/*
 *
 * CREATE WEBPACK CONFIGURATION
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = merge(devWorkflow, {
  entry: sourceAll(entries.dev)
});
