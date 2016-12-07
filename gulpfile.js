const gulp = require('gulp');
const sequence = require('run-sequence');


// define build tasks
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));
gulp.task('webpack:build', require('./build/webpack-build'));
gulp.task('webpack:production', require('./build/webpack-production'));
gulp.task('webpack:watch', require('./build/webpack-watch'));


// define workflows
gulp.task('build', done => {
  sequence('clean:pre', 'webpack:build', 'clean:post', done);
});

gulp.task('production', done => {
  sequence('clean:pre', 'webpack:production', 'clean:post', done);
});

gulp.task('watch', done => {
  sequence('clean:pre', 'webpack:watch', done);
});


// scaffolding tasks
// tasks here require cli arguments

// gulp scaffold:tag --name [name]
gulp.task('scaffold:tag', require('./build/scaffold-tag'));

// gulp scaffold:component --name [name]
gulp.task('scaffold:component', require('./build/scaffold-component'));

