const gulp = require('gulp');
const sequence = require('run-sequence');

const scaffoldFactory = require('./build/scaffold-factory');
const staticRender = require('./build/static-render-factory');
const webpackBuild = require('./build/webpack-build-factory');
const webpackWatch = require('./build/webpack-watch-factory');

const series = (...task) => (done) => sequence(...task, done);


// define build tasks
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));

gulp.task('webpack:dll', webpackBuild(require('./build/webpack/webpack.config.dll')));
gulp.task('webpack:dll:production', webpackBuild(require('./build/webpack/webpack.config.dll.production')));

gulp.task('webpack:build', webpackBuild(require('./build/webpack/webpack.config.build')));
gulp.task('webpack:production', webpackBuild(require('./build/webpack/webpack.config.production')));
gulp.task('webpack:watch', webpackWatch(require('./build/webpack/webpack.config.ci')));
gulp.task('webpack:ci', webpackBuild(require('./build/webpack/webpack.config.ci')));

gulp.task('static:render', staticRender({ production: false }));
gulp.task('static:render:production', staticRender({ production: true }));


// define workflows
gulp.task('dll', series('webpack:dll'));
gulp.task('dll:production', series('webpack:dll:production'));
gulp.task('build', series('clean:pre', 'webpack:build', 'static:render', 'clean:post'));
gulp.task('production:static', series('clean:pre', 'webpack:dll:production', 'webpack:production', 'static:render:production', 'clean:post'));
gulp.task('production:ci', series('clean:pre', 'webpack:dll:production', 'webpack:ci', 'clean:post'));
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

