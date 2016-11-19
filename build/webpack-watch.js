const chokidar = require('chokidar');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pkg = require('../package.json');

module.exports = (configs, watchOpts) => {
  watchOpts.host = watchOpts.host || 'localhost';
  watchOpts.port = watchOpts.port || 8080;

  // normalize config output paths
  // (code sniped from bin/webpack-dev-server.js:95)
  // without this, assets are not loaded correctly
  configs = configs.map(config => {
    config.output.path = '/';
    return config;
  });

  // start the dev server

  // want to try for HMR on the configs?
  // See http://andrewhfarmer.com/webpack-hmr-tutorial/
  // and https://github.com/ahfarmer/webpack-hmr-starter-dev-server-api
  // but didn't work for me. Got errors about window not being defined
  // after registering the HMR entry points, and the page markup was not updating

  var compiler = webpack(configs);

  const serverConfig = {
    host: watchOpts.host,
    port: watchOpts.port,
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
  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(serverConfig.port, serverConfig.host, (err) => {
    var uri = "http://" + serverConfig.host + ":" + serverConfig.port + "/";
    if (!serverConfig.inline) {
      uri += "webpack-dev-server/";
    }

    if (err) throw new Error(err);

    console.log(" " + uri);
    console.log("webpack result is served from " + serverConfig.publicPath);

    if(typeof serverConfig.contentBase === "object") {
      console.log("requests are proxied to " + serverConfig.contentBase.target);
    } else {
      console.log("content is served from " + serverConfig.contentBase);
    }
  });
};
