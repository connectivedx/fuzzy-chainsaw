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
gulp.task('build-core', function(done) {
	sequence(['styles'], done);
});

gulp.task('build-full', function(done) {
	sequence(['build-core'], done);
});

gulp.task('build', function(done) {
	sequence('clean', 'build-core', done);
});

gulp.task('default', ['build']);
