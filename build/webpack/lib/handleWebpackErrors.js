/*
  Collects errors and warnings output by webpack when run through gulp
  and emits them to the console (without this all errors and warnings are swallowed)
*/

const chalk = require('chalk');
const gutil = require('gulp-util');

module.exports = (err, stats, done) => {
  if (err) {
    if (done) { done(err); return; }
    gutil.log('[webpack-error]', err);
  }

  // see https://webpack.github.io/docs/node.js-api.html#stats-tostring
  gutil.log(stats.toString({
    colors: true,
    chunks: false,
    version: false
  }));

  if (stats.hasWarnings() || stats.hasErrors()) {
    gutil.log(chalk.bgRed('Webpack completed with errors or warnings.'), '\u0007');
    if (done) process.exit(1);
  }

  if (done) {
    gutil.log('Webpack completed without error.');
    done();
  }
};

