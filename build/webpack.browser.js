const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({
  devtool = 'source-map',
  entry = '.js',
  outputPath = path.resolve(__dirname, 'dist'),
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
}) => ({
  devServer: { 
    stats: 'errors-only'
  },
  devtool: devtool,
  entry: {
    main: entry
  },
  output: {
    path: outputPath,
    filename: outputScript
  },
  publicPath: './dist/',
  postcss: require('./postcss-pack.js'),
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
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
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'html!md'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(outputStyle)
  ]
});