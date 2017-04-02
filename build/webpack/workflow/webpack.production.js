/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

const { production: postcssPipeline } = require('../lib/postcss-plugins.js');
const buildConfig = require('./webpack.build');


const production = webpackMerge(
  buildConfig,
  {
    devtool: 'source-map',
    responsiveLoader: {
      sizes: [720, 1280, 1920]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: postcssPipeline
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]
  }
);

// overwrite normal build image loaders
const imageLoaderIndex =
  production.module.loaders.map((rule, i) => (
    String(rule.test).indexOf('jpe') !== -1
      && rule.loaders
      && rule.loaders[0].indexOf('file?') !== -1
    ? i : false
  )).filter((a) => a !== false)[0];

production.module.loaders[imageLoaderIndex] = {
  test: /\.(jpe?g|png)$/i,
  loaders: [
    'responsive?name=/assets/images/css/[name]-[md5:hash:hex:8].',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
  ]
};


module.exports = production;
