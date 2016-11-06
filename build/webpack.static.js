/* 
  Configures how static site elements (e.g. JSX -> HTML templates) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that the styleguide (webpack.styleguide.js) shares this base configuration, so keep in mind alterations here also apply there.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
  paths = [],
  locals = {}
}) => ({
  devServer: {
    stats: 'errors-only'
  },
  devtool: devtool,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    main: entry
  },
  output: {
    path: outputPath,
    filename: outputScript,
    libraryTarget: 'umd'
  },
  publicPath: publicPath,
  postcss: require('./postcss-pack.js'),
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.md$/,
        loader: 'html!markdown-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // below: filetypes that shouldn't be loaded
      {
        test: /\.(cs|cshtml|csproj)$/,
        loader: 'null-loader'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, locals),
    new ExtractTextPlugin(outputStyle)
  ]
});
