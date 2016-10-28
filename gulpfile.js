const chalk = require('chalk');
const gulp = require('gulp');
const sequence = require('run-sequence');
const webpack = require('webpack');

const del = require('del')

const webpackConfig = require('./webpack.config');
const webpackProductionConfig = require('./webpack.production.config');

gulp.task('clean', () => {
  return del('dist')
});

gulp.task('postClean', () => {
  return del('dist/tmp');
});

gulp.task('buildWebpack', done => {
  webpack(webpackConfig, (err, stats) => {
    reportWebpackErrors(err, stats);

    done();
  });
})

gulp.task('buildProductionWebpack', done => {
	webpack(webpackProductionConfig, (err, stats) => {
    reportWebpackErrors(err, stats);

    done();
  });
});

gulp.task('build', done => {
  sequence('clean', 'buildWebpack', 'postClean', done);
});

gulp.task('production', done => {
  sequence('clean', 'buildProductionWebpack', 'postClean', done);
});

const reportWebpackErrors = (err, stats) => {
  if (err) throw new Error(err);

  var error = false;
  stats.stats.map(build => {
    if (build.compilation.errors && build.compilation.errors.length) {
      build.compilation.errors.forEach(error => console.error(chalk.red(error.toString())));
      error = true;
    }

    if (build.compilation.warnings && build.compilation.warnings.length) {
      build.compilation.warnings.forEach(warn => console.error(chalk.yellow(warn.toString())));
      error = true;
    }
  });

  if(error) {
    throw new Error('Webpack completed with errors or warnings.');
  }
}