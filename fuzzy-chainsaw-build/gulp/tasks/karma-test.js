/*
  This task starts the karma test runner
  in singleRun mode.
*/

const Server = require('karma').Server;
const gutil = require('gulp-util');


module.exports = ({ pathHelpers }) => (done) => {
  new Server({
    configFile: pathHelpers.root('karma.conf.js'),
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
