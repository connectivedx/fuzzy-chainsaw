const chokidar = require('chokidar');
const webpack = require('webpack');

const pkg = require('../package.json');
const webpackErrorHandler = require('./webpack-errorhandler');

module.exports = config => {
  let watcher;

  const watch = changedPath => {
    if(watcher && changedPath) {
      // stop the old watcher
      console.log('Restarting webpack watch due to change webpack will not see...')
      console.log(changedPath);
      watcher.close();
    }

    // start the new watcher
    watcher = webpack(config, (err, stats) => {
      // note we're passing it a fake callback because we don't want watch to terminate on error :)
      webpackErrorHandler(err, stats, { noexit: true }, function() {});
    });
  }

  // enable watch mode on all webpack configs
  config.forEach((b, i) => {
    b.watch = true;
  });

  chokidar.watch(pkg.directories.source, { ignoreInitial: true })
    .on('ready', watch)
    .on('addDir', watch)
    .on('unlinkDir', watch)
    .on('error', error => console.error('Webpack watch had an error: ', error));
};
