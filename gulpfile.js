const requireDir = require('require-dir')
const gulp = require('gulp');
const sequence = require('run-sequence').use(gulp);

// import all tasks from task folders
requireDir('./tasks', { recurse: true });

// watchers
gulp.task('watch', function(done) {
	gulp.watch('source/components/**/*.scss', ['styles']);
});

// main tasks

// build-core is the minimal build tasks
// required to get the project started
// like stylesheets, scripts and templates
gulp.task('build-core', function(done) {
	sequence(['styles'], done);
});

// build-extras is the optional tasks
// like styleguide and documentation
gulp.task('build-extras', function(done) {
	sequence(['styleguide'], done);
});

// production runs the full shabang build
gulp.task('production', function(done) {
	sequence('clean', 'build-core', 'build-extras', done);
});

// the default task is to do the minimal build
gulp.task('default', function(done) {
	sequence('clean', 'build-core', done);
});
