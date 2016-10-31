const gulp = require('gulp');
const sequence = require('run-sequence');
const webpack = require('webpack');

const del = require('del')

const webpackConfig = require('./webpack.config');
const webpackProductionConfig = require('./webpack.production.config');
const scaffoldComponent = require('./build/scaffold-component');

// build tasks
gulp.task('preClean', () => {
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
  sequence('preClean', 'buildWebpack', 'postClean', done);
});

gulp.task('production', done => {
  sequence('preClean', 'buildProductionWebpack', 'postClean', done);
});

// scaffolding tasks

// gulp create-tag --name my-new-tag
gulp.task('create-tag', () => {
  return scaffoldComponent({
    name: process.argv[4],
    dest: 'source/tags'
  });
});

// gulp create-component --name my-new-tag
gulp.task('create-component', () => {
  return scaffoldComponent({
    name: process.argv[4],
    dest: 'source/tags'
  });
});
