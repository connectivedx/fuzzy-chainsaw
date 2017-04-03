const Server = require('karma').Server;
const gutil = require('gulp-util');
const path = require('path');
const pkgpath = require('packpath');


module.exports = (done) => {
  new Server({
    configFile: path.resolve(pkgpath.self(), 'karma.conf.js'),
    singleRun: true
  }).on('browser_error', (browser, err) => {
    gutil.log(`Karma Run Failed: ${err.message}`);
    throw err;
  }).on('run_complete', (browsers, results) => {
    if (results.failed) {
      throw new Error('Karma: Tests Failed');
    }
    gutil.log('Karma Run Complete: No Failures');
    done();
  }).start();
};
