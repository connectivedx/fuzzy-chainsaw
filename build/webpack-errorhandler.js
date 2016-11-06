const chalk = require('chalk');
const gutil = require('gulp-util');

module.exports = (err, stats, options, done) => {
  const { noexit } = options;

  if (err) return done(err);

  // see https://webpack.github.io/docs/node.js-api.html#stats-tostring
  gutil.log(stats.toString({
    colors: true,
    chunks: false,
    hash: false,
    timings: false,
    version: false
  }));

  if(stats.hasWarnings()) {
    gutil.log(chalk.yellow('Webpack had warnings. Beware.'));
  }

  if(stats.hasErrors()) {
    console.error('');
    console.error(chalk.bgRed('Webpack completed with errors or warnings.'));
    console.log('\u0007');

    if(!noexit) {
      process.exit(1);
    } else {
      return;
    }
  }

  gutil.log('Webpack completed without error.');

  done();
}

