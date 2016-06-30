const gulp = require('gulp');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const getOptions = require('./lib/getOptions');

module.exports = function(options) {
	var opts = getOptions(options);

	return function() {
		return (
			gulp.src(opts.src)
				.pipe(gutil.env.type === 'production' ? imagemin() : gutil.noop())
				.pipe(gulp.dest(opts.dest))
		);
	};
};
