/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/

module.exports = ({
  entry,
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js'
}) => ({
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
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
