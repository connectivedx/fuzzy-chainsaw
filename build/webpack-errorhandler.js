const chalk = require('chalk');

module.exports = (err, stats, done) => {
  if (err) return done(err);

  // see https://webpack.github.io/docs/node.js-api.html#stats-tostring
  console.log(stats.toString({
    colors: true,
    chunks: false,
    hash: false,
    timings: false,
    version: false
  }));

  if(stats.hasErrors()) {
    console.error('');
    console.error(chalk.bgRed('Webpack completed with errors or warnings.'));
    process.exit(1);
  }

  if(stats.hasWarnings()) {
    console.log(chalk.yellow('Webpack had warnings. Beware.'));
  }

  done();
}

