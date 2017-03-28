const gulp = require('gulp');
const sequence = require('run-sequence');

const scaffoldFactory = require('./build/scaffold-factory');
const webpackBuild = require('./build/webpack-build-factory');
const webpackWatch = require('./build/webpack-watch-factory');

const series = (...task) => done => sequence(...task, done);


// define build tasks
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));

gulp.task('webpack:dll', webpackBuild(require('./build/webpack/webpack.config.dll')));
gulp.task('webpack:build', webpackBuild(require('./build/webpack/webpack.config.build')));
gulp.task('webpack:production', webpackBuild(require('./build/webpack/webpack.config.production')));
gulp.task('webpack:watch', webpackWatch(require('./build/webpack/webpack.config.ci')));
gulp.task('webpack:ci', webpackBuild(require('./build/webpack/webpack.config.ci')));

gulp.task('static:render', require('./build/static-render'));


// define workflows
gulp.task('dll', series('webpack:dll'));
gulp.task('build', series('clean:pre', 'webpack:build', 'static:render', 'clean:post'));
gulp.task('production', series('clean:pre', 'webpack:production', 'static:render', 'clean:post'));
gulp.task('production:ci', series('clean:pre', 'webpack:ci', 'clean:post'));
gulp.task('watch', series('clean:pre', 'webpack:watch'));


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

