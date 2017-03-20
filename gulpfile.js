const gulp = require('gulp');
const sequence = require('run-sequence');


// define build tasks
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));
gulp.task('webpack:build', require('./build/webpack-build'));
gulp.task('webpack:production', require('./build/webpack-production'));
gulp.task('webpack:dev', require('./build/webpack-dev'));
gulp.task('webpack:watch', require('./build/webpack-watch'));
gulp.task('static:build', require('./build/static-build'));
gulp.task('test', require('./build/test'));


// define workflows
gulp.task('build', (done) => {
  sequence('clean:pre', 'webpack:build', 'static:build', 'clean:post', done);
});

gulp.task('production', (done) => {
  sequence('clean:pre', 'webpack:production', 'static:build', 'clean:post', done);
});

gulp.task('dev', (done) => {
  sequence('clean:pre', 'webpack:dev', done);
});

gulp.task('watch', (done) => {
  sequence('clean:pre', 'webpack:watch', done);
});


// scaffolding tasks
// tasks here require cli arguments

// gulp scaffold:tag --name [name]
gulp.task('scaffold:tag', require('./build/scaffold-tag'));

// gulp scaffold:component --name [name]
gulp.task('scaffold:component', require('./build/scaffold-component'));

