const chokidar = require('chokidar');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pkg = require('../package.json');

const host = 'localhost';
const port = 8080;
let server;

module.exports = config => {

  // normalize config output paths
  // (code sniped from bin/webpack-dev-server.js:95)
  // without this, assets are not loaded correctly
  [].concat(config).forEach(function(wpOpt) {
    wpOpt.output.path = "/";
  });

  // watch function is called both
  // (a) on startup and
  // (b) when dirs are added or removed to recycle the watch and update static site file paths
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

    const serverConfig = {
      host: host,
      port: port,
      publicPath: '/',
      outputPath: '/',
      filename: '/tmp/[name].js',
      contentBase: path.resolve(pkg.directories.output),
      hot: false,
      stats: {
        colors: true,
        chunks: false,
        hash: false,
        version: false
      }
    };

    // see https://webpack.github.io/docs/webpack-dev-server.html#api for dev-server API options
    server = new WebpackDevServer(compiler, serverConfig);

    server.listen(port, host, (err) => { 
      var uri = "http://" + serverConfig.host + ":" + serverConfig.port + "/";
      if(!serverConfig.inline)
        uri += "webpack-dev-server/";

      if(err) throw err;

      console.log(" " + uri);
      console.log("webpack result is served from " + serverConfig.publicPath);

      if(typeof serverConfig.contentBase === "object") {
        console.log("requests are proxied to " + serverConfig.contentBase.target);
      }
      else {
        console.log("content is served from " + serverConfig.contentBase);
      }
    });
  }

  chokidar.watch(pkg.directories.source, { ignoreInitial: true })
    .on('ready', watch)
    .on('addDir', watch)
    .on('unlinkDir', watch)
    .on('error', error => console.error('webpack-dev-server had an error: ', error));
};