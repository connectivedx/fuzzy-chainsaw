const gutil = require('gulp-util');
const pkgpath = require('packpath');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));

module.exports = (config, watchOpts) => {
  watchOpts.host = watchOpts.host || '0.0.0.0';
  watchOpts.port = watchOpts.port || 8080;

  // normalize config output paths
  // without this, assets are not loaded correctly
  config.output.path = '/';

  // start the dev server
  const compiler = webpack(config);

  const serverConfig = Object.assign({}, config.devServer, {
    host: watchOpts.host,
    port: watchOpts.port,
    outputPath: '/',
    contentBase: path.resolve(pkg.directories.dest)
  });

  // see https://webpack.github.io/docs/webpack-dev-server.html#api for dev-server API options
  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(serverConfig.port, serverConfig.host, (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', `http://${watchOpts.host}:${watchOpts.port}/`);
  });
};
