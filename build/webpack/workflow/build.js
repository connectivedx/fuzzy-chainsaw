/*
  Configures webpack to build all elements of the site.
*/

const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

const browserWorkflow = require('./browser');
const ciBuildWorkflow = require('./build.ci');

module.exports = (
  webpackMerge(
    ciBuildWorkflow,
    {
      plugins: [
        new WebpackNotifierPlugin({
          title: 'FC Build'
        })
      ]
    }
  )
);
