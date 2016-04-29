const pick = require('lodash/pick');
const extend = require('lodash/extend');
const path = require('path');

const gulp = require('gulp');
const ext = require('gulp-ext-replace');
const prettify = require('gulp-prettify');
const hb = require('gulp-hb');
const hbOpts = [
	'handlebars', 'partials',' helpers',
	'decorators', 'data', 'parseHelperName',
	'parsePartialName', 'parseDecoratorName'
];

function getFilename(options, file) {
	return file.path.substr(file.path.lastIndexOf('/') + 1).split('.')[0];
}

module.exports = function(opts) {
	const hbOptions = extend({
		parseHelperName: getFilename,
		parsePartialName: getFilename,
		parseDecoratorName: getFilename,
		parseDataName: getFilename
	}, pick(opts, hbOpts));

	return function() {
		return gulp.src(opts.src)
			.pipe(hb(hbOptions))
		    .pipe(prettify({
		    	indent_size: 2
		    }))
			.pipe(ext('.html'))
			.pipe(gulp.dest(opts.dest));
	}
};
