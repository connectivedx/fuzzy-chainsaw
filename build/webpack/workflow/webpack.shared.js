/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/
const path = require('path');
const pkgpath = require('packpath');
const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));

module.exports = ({
  entry,
  outputPath = 'dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js'
}) => ({
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      Vendor: path.resolve(pkgpath.self(), dirs.source, 'vendor'),
      Vars: path.resolve(pkgpath.self(), dirs.source, 'variables'),
      Tags: path.resolve(pkgpath.self(), dirs.source, 'tags'),
      Components: path.resolve(pkgpath.self(), dirs.source, 'components'),
      Pages: path.resolve(pkgpath.self(), dirs.source, 'pages'),
      Styleguide: path.resolve(pkgpath.self(), dirs.source, 'styleguide'),
      SgVars: path.resolve(pkgpath.self(), dirs.source, 'styleguide/variables'),
      SgTags: path.resolve(pkgpath.self(), dirs.source, 'styleguide/tags'),
      SgComponents: path.resolve(pkgpath.self(), dirs.source, 'styleguide/components')
    }
  },
  entry: entry,
  output: {
    path: outputPath,
    filename: outputScript
  },
  publicPath: publicPath,
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      }
    ]
  }
});
