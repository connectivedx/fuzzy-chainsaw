const gulp = require('gulp');
const pages = require('../submodules/task-pages');
const dirs = require('../package.json').directories;
const handlebars = require('handlebars');

gulp.task('pages', pages({
	handlebars: handlebars,
	partials: [dirs.components + '/**/*.hbs'],
	data: [dirs.data + '/**/*.json'],
	src: dirs.pages + '/**/*',
	dest: dirs.dest
}));

gulp.task('pages-watch', function() {
	gulp.watch(
		[
			dirs.pages + '/**/*',
			dirs.data + '/**/*.json',
			dirs.components + '/**/*.hbs'
		],
		['pages']
	);
});
