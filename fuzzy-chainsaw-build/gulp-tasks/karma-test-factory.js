/*
  This task starts the karma test runner
  in singleRun mode.
*/

const Server = require('karma').Server;
const gutil = require('gulp-util');

const karmaConfFactory = require('../testing/karma.conf.factory.js');


module.exports = (buildConfig) => (factoryOptions) => (done) => {
  const karmaConf = karmaConfFactory(buildConfig);

  if (factoryOptions.singleRun) {
    Object.assign(karmaConf, { singleRun: true });
  }

  new Server(karmaConf)
    .on('browser_error', (browser, err) => {
      gutil.log(`Karma Run Failed: ${err.message}`);
      throw err;
    })
    .on('run_complete', (browsers, results) => {
      if (results.failed) {
        throw new Error('Karma: Tests Failed');
      }
      gutil.log('Karma Run Complete: No Failures');
      done();
    })
    .start();
};
