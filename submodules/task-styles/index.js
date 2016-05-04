const path = require('path');

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

module.exports = function(opts) {
	return function() {
		return gulp.src(opts.src)
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(postcss([
				autoprefixer({ browsers: ['last 2 version'] })
			]))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(opts.dest))
	}
};
