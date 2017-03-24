/*
  Configures webpack to build the site for production deployment.

  This file imports the webpack config factory and extends it to set production
  tasks such as minification to enabled. Thus, changes to the debug build also apply here unless
  this configuration actively undoes them.
*/
const webpack = require('webpack');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

let build = require('./webpack.factory')();

// production specific configuration
module.exports = build.map(config => {
  config.devtool = 'source-map';

  config.responsiveLoader = {
    sizes: [720, 1280, 1920]
  };

  if (config.workflow === 'static') {
    config.module.loaders[config.module.loaders.length - 1] = {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'responsive?name=/assets/images/content/[name]-[md5:hash:hex:8].',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    };
  }

  if (config.workflow === 'browser') {
    config.module.loaders[config.module.loaders.length - 1] = {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'responsive?name=/assets/images/css/[name]-[md5:hash:hex:8].',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    };

    // add production flag to build environment
    // libraries can key off this to import versions without debug info
    // (e.g. react turns off warnings in the console and gets much smaller because of this)
    config.plugins.unshift(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    );

    // add css minification
    config.plugins.push(
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: [
          require('cssnano')
        ]
      })
    );

    // uglify JS
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    );
  }

  return config;
});
