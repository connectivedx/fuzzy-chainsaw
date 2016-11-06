/* 
  Configures how the styleguide's static pages are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is an extension of the shared static site configuration in webpack.static.js.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const staticConfig = require('./webpack.static');

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
