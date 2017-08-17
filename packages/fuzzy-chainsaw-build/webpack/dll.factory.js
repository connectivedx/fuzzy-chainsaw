/*
  Webpack configuration to precompile vendor
  modules before the main bundle
*/

const webpack = require('webpack');
const merge = require('webpack-merge');
const StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const stats = require('./lib/webpack-stats');


module.exports = (buildConfig) => (factoryOpts = {}) => {
  const { dest } = buildConfig.pathHelpers;
  const { dlls, outputDirectories } = buildConfig.fcConfig;

  const ciEntry = {
    entry: {
      vendor: dlls.vendor
    }
  };

  const allEntry = {
    entry: dlls
  };

  const entry = factoryOpts.ci ? ciEntry : allEntry;

  const shared = {
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    node: {
      fs: 'empty'
    },
    externals: {
      jsdom: 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/addons': true,
      'react/lib/ReactContext': true
    },
    output: {
      path: dest(outputDirectories.dll),
      filename: '[name].dll.js',
      library: '[name]_dll',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules\/(?!(get-own-enumerable-property-symbols|stringify-object)\/)/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectories.dll], { root: dest() }),
      new webpack.DllPlugin({
        path: dest(`${outputDirectories.dll}/[name]-manifest.json`),
        name: '[name]_dll'
      }),
      new StatsPlugin('dll-stats.json', {
        chunkModules: true,
        exclude: [/node_modules/]
      }),
      new WebpackNotifierPlugin({
        title: 'FC Dll'
      })
    ],
    stats
  };

  const production = {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          comments: false
        }
      })
    ]
  };

  // dll-production/ci mode
  if (factoryOpts.production) {
    return merge({}, shared, production, entry);
  }

  // dll-build/ci mode
  return merge({}, shared, entry);
};
