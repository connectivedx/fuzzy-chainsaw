const gulp = require('gulp');
const pages = require('../submodules/task-pages');
const dirs = require('../package.json').directories;

gulp.task('pages', pages({
	partials: './' + dirs.components + '.{hbs}',
	src: dirs.pages + '/**/*',
	dest: dirs.dest
}))
