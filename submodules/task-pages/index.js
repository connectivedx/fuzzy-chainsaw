const path = require('path');

const gulp = require('gulp');
const ext = require('gulp-ext-replace');
const hb = require('gulp-hb');

const getOptions = require('./lib/getOptions');

module.exports = function(options) {
	const opts = getOptions(options)

	return function() {
		return gulp.src(opts.src)
			.pipe(hb(opts.hb))
			.pipe(ext('.html'))
			.pipe(gulp.dest(opts.dest));
	}
};
