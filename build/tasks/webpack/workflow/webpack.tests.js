/*
  Configures how unit test files are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note: Tests are compiled with babel and written to a temporary folder, executed, and then deleted after the build (by post-clean)

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
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
  devtool: devtool,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: entry,
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
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      },
      {
        test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
        loader: 'null-loader'
      }
    ]
  },
  plugins: [
    new TapWebpackPlugin({ reporter: reporter })
  ],
  doNotApplyProductionConfig: true
});
