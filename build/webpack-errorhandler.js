/*
  Collects errors and warnings output by webpack when run through gulp
  and emits them to the console (without this all errors and warnings are swallowed)
*/

const chalk = require('chalk');

module.exports = (err, stats, done) => {
  if (err) return done(err);

  let error = false;
  stats.stats.forEach(build => {
    if (build.compilation.errors && build.compilation.errors.length) {
      build.compilation.errors.forEach(error => console.error(chalk.bgRed(error.toString())));
      error = true;
    }

    if (build.compilation.warnings && build.compilation.warnings.length) {
      build.compilation.warnings.forEach(warn => console.error(chalk.yellow(warn.toString())));
    }
  });

  if(error) {
    console.error('');
    console.error(chalk.bgRed('Webpack completed with errors or warnings.'));
    process.exit(1);
  } else {
    done();
  }
}