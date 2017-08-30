/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/

// webpack core
const webpack = require('webpack');
const merge = require('webpack-merge');
const { webpackStats: stats } = require('fuzzy-chainsaw-shared');


module.exports = (config) => () => {
  const { bundleConfig, framework, testExternals, webpackOpts = {} } = config;
  const { shared } = bundleConfig.webpackConfigs;

  const test = {
    devtool: 'cheap-eval-source-map',
    node: {
      fs: 'empty'
    },
    externals: Object.assign({}, framework.test.webpackExternals, testExternals),
    module: {
      rules: [
        {
          test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
          use: 'null-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.NODE_ENV': JSON.stringify('test')
      }, webpackOpts.definePluginTest))
    ],
    stats
  };


  return merge(shared, test);
};
