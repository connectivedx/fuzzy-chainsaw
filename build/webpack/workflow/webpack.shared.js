/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/
const path = require('path');
const pkgpath = require('packpath');
const SvgStorePlugin = require('webpack-svgstore-plugin');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const { source, dest } = require('../../lib/path-helpers');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      Vendor: source('vendor'),
      Vars: source('variables'),
      Tags: source('tags'),
      Components: source('components'),
      Pages: source('pages'),
      Styleguide: source('styleguide'),
      SgVars: source('styleguide/variables'),
      SgTags: source('styleguide/tags'),
      SgComponents: source('styleguide/components')
    }
  },
  output: {
    path: dest(),
    filename: '/assets/[name]-[hash].js',
    libraryTarget: 'umd'
  },
  publicPath: directories.dest,
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new SvgStorePlugin()
  ]
};
