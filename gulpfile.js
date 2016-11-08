const gulp = require('gulp');
const webpack = require('webpack');
const sequence = require('run-sequence');
const del = require('del')
const minimist = require('minimist');

const pkg = require('./package.json');
const dirs = pkg.directories;
const webpackConfig = require('./webpack.config')();
const webpackProductionConfig = require('./webpack.production.config');
const scaffoldComponent = require('./build/scaffold-component');
const webpackErrorHandler = require('./build/webpack-errorhandler');


// build tasks
gulp.task('preClean', () => {
  return del(dirs.output, { force: true })
});

gulp.task('postClean', () => {
  return del(dirs.output + '/tmp', { force: true });
});

gulp.task('buildWebpack', done => {
  webpack(webpackConfig, (err, stats) => {
    webpackErrorHandler(err, stats, done);
  });
})

gulp.task('buildProductionWebpack', done => {
	webpack(webpackProductionConfig, (err, stats) => {
    webpackErrorHandler(err, stats, done);
  });
});

gulp.task('build', done => {
  sequence('preClean', 'buildWebpack', 'postClean', done);
});

gulp.task('production', done => {
  sequence('preClean', 'buildProductionWebpack', 'postClean', done);
});


// scaffolding tasks
// tasks here require cli arguments

// gulp new-tag --name my-new-tag
gulp.task('new-tag', () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldComponent({
    name: argv.name,
    dest: `${dirs.source}/tags`
  });
});

// gulp new-component --name my-new-tag
gulp.task('new-component', () => {
  const argv = minimist(process.argv.slice(2))
  return scaffoldComponent({
    name: argv.name,
    dest: `${dirs.source}/components`
  });
});
