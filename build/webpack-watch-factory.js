/*
  This provides a factory that returns a gulp task
  for building webpack in watch mode.

  This is different than development mode.
*/

const gulp = require('gulp');
const watch = require('gulp-watch');
const { source } = require('./lib/path-helpers');

module.exports = () => () => {
	watch([ source('elements/components/**') ], () => {
		gulp.start('webpack:watch:sequence');
	}); 
};
