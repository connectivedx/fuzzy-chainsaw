/*
  Configures webpack to build the site for production deployment.

  This file imports the webpack config factory and extends it to set production
  tasks such as minification to enabled. Thus, changes to the debug build also apply here unless
  this configuration actively undoes them.
*/
const webpack = require('webpack');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

const build = require('./webpack.config.build');

// production specific configuration
module.exports = Array.from(build).map(config => {
  let res = Object.assign({}, config, {
    devtool: 'source-map',
    responsiveLoader: {
      sizes: [720, 1280, 1920]
    }
  })

  if (res.workflow === 'static') {
    res.module.loaders[res.module.loaders.length - 1] = {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'responsive?name=/assets/images/content/[name]-[md5:hash:hex:8].',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    };
  }

  if (res.workflow === 'browser') {
    res.module.loaders[res.module.loaders.length - 1] = {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'responsive?name=/assets/images/css/[name]-[md5:hash:hex:8].',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    };

    // add production flag to build environment
    // libraries can key off this to import versions without debug info
    // (e.g. react turns off warnings in the console and gets much smaller because of this)
    res.plugins.unshift(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    );

    // add css minification
    res.plugins.push(
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: [
          require('cssnano')
        ]
      })
    );

    // uglify JS
    res.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    );
  }

  return res;
});
