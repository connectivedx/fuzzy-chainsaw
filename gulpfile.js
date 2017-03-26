const gulp = require('gulp');
const sequence = require('run-sequence');

const scaffoldFactory = require('./build/scaffold-factory');
const webpackBuild = require('./build/webpack-build-factory');
const webpackWatch = require('./build/webpack-watch-factory');

// define build tasks
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));

gulp.task('webpack:vendor', webpackBuild(require('./build/webpack/webpack.config.dll')));
gulp.task('webpack:build', webpackBuild(require('./build/webpack/webpack.config.build')));
gulp.task('webpack:production', webpackBuild(require('./build/webpack/webpack.config.production')));
gulp.task('webpack:watch', webpackWatch(require('./build/webpack/webpack.config.ci')));
gulp.task('webpack:ci', webpackBuild(require('./build/webpack/webpack.config.ci')));

gulp.task('static:build', require('./build/static-build'));


// define workflows
gulp.task('pre-build', (done) => {
  sequence('webpack:vendor', done);
});

gulp.task('build', (done) => {
  sequence('clean:pre', 'webpack:build', 'static:build', 'clean:post', done);
});

// for ui server
gulp.task('production', (done) => {
  sequence('clean:pre', 'webpack:production', 'static:build', 'clean:post', done);
});

// for back end integration
gulp.task('production:ci', (done) => {
  sequence('clean:pre', 'webpack:ci', 'clean:post', done);
});

gulp.task('watch', (done) => {
  sequence('clean:pre', 'webpack:watch', done);
});


// scaffolding tasks
// tasks here require cli arguments

// gulp scaffold:tag --name [name]
gulp.task('scaffold:tag', scaffoldFactory({
  src: 'stateless-component',
  dest: 'tags'
}));

// gulp scaffold:component --name [name]
gulp.task('scaffold:component', scaffoldFactory({
  src: 'stateless-component',
  dest: 'components'
}));

