const staticConfig = require('./webpack.static.js');

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
  paths = [],
  locals = {}
}) => {
  const build = staticConfig({ 
    devtool, entry, outputPath, publicPath,
    outputScript, outputStyle, paths, locals
  });

  build.plugins.pop();
  build.module.loaders = [
    build.module.loaders[0],
    { test: /\.css$/, loader: 'raw-loader!postcss-loader' },
    ...build.module.loaders.slice(2)
  ];

  return build;
};