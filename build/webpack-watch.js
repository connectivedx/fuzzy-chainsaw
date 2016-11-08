const chokidar = require('chokidar');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pkg = require('../package.json');

const host = 'localhost';
const port = 8080;
let server;

module.exports = config => {

  const watch = (changedPath) => {
    if(server && changedPath) {
      // stop the old dev server
      console.log('Restarting webpack watch due to change webpack will not see...')
      console.log(changedPath);
      server.close();
    }

    // start the new dev server

    // want to try for HMR on the configs?
    // See http://andrewhfarmer.com/webpack-hmr-tutorial/
    // and https://github.com/ahfarmer/webpack-hmr-starter-dev-server-api
    // but didn't work for me. Got errors about window not being defined
    // after registering the HMR entry points, and the page markup was not updating

    var compiler = webpack(config);

    // see https://webpack.github.io/docs/webpack-dev-server.html#api for dev-server API options
    server = new WebpackDevServer(compiler, {
      contentBase: pkg.directories.output,
      filename: "bundle.js",
      publicPath: "/",
      hot: false,
      stats: {
        colors: true,
        chunks: false,
        hash: false,
        timings: false,
        version: false
      }
    });

    server.listen(port, host, () => { console.log(`webpack-dev-server is now listening on http://${host}:${port}`); });
  }

  chokidar.watch(pkg.directories.source, { ignoreInitial: true })
    .on('ready', watch)
    .on('addDir', watch)
    .on('unlinkDir', watch)
    .on('error', error => console.error('webpack-dev-server had an error: ', error));
};