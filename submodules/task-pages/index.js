const path = require('path');

const gulp = require('gulp');
const hb = require('gulp-hb');
const ext = require('gulp-ext-replace');


module.exports = function(opts) {
	const renderer = hb();

	if (opts.partials) renderer.partials(opts.partialsDir)
	if (opts.helpers) renderer.helpers(opts.helpersDir)
	if (opts.decorators) renderer.decorators(opts.decoratorsDir)
	if (opts.data) renderer.data(opts.dataDir)

	return function() {
		return gulp.src(opts.src)
			.pipe(renderer)
			.pipe(ext('.html'))
			.pipe(gulp.dest(opts.dest));
	}
};
