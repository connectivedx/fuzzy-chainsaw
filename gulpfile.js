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
    if (err) throw new Error(err);
    done();
  });
})

gulp.task('buildProductionWebpack', done => {
	webpack(webpackProductionConfig, (err, stats) => {
    if (err) throw new Error(err);
    done();
  });
});

gulp.task('build', done => {
  sequence('clean', 'buildWebpack', 'postClean', done);
});

gulp.task('production', done => {
  sequence('clean', 'buildProductionWebpack', 'postClean', done);
});