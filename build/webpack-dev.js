const gutil = require('gulp-util');
const pkgpath = require('packpath');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const config = require('./webpack/webpack.config.dev');

module.exports = () => {
  const host = '0.0.0.0';
  const port = 8080;

  // normalize config output paths
  // without this, assets are not loaded correctly
  config.output.path = '/';

  const serverConfig = Object.assign({}, config.devServer, {
    host,
    port,
    outputPath: '/',
    contentBase: path.resolve(pkg.directories.dest)
  });

  // see https://webpack.github.io/docs/webpack-dev-server.html#api for dev-server API options
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(port, host, (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', `started at http://${host}:${port}/`);
  });
};
