const TapWebpackPlugin = require('tap-webpack-plugin');

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
  paths = [],
  locals = {},
  reporter = 'tap-dot'
}) => ({
  devServer: {
    stats: 'errors-only'
  },
  devtool: devtool,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [entry],
  target: 'node',
  output: {
    path: outputPath,
    filename: outputScript
  },
  node: {
    fs: 'empty'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  publicPath: publicPath,
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|md|json|jpe?g|png|gif|svg)$/i,
        loader: 'null-loader'
      }
    ]
  },
  plugins: [
    new TapWebpackPlugin({ reporter: reporter })
  ]
});
