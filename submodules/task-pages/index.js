const path = require('path');

const gulp = require('gulp');
const ext = require('gulp-ext-replace');
const prettify = require('gulp-prettify');
const hb = require('gulp-hb');

const getOptions = require('./lib/getOptions');

module.exports = function(options) {
	const opts = getOptions(options)

	return function() {
		return gulp.src(opts.src)
			.pipe(hb(opts.hb))
		    .pipe(prettify({
		    	indent_size: 2
		    }))
			.pipe(ext('.html'))
			.pipe(gulp.dest(opts.dest));
	}
};
