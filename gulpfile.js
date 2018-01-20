const gulp = require('gulp');
const sequence = require('run-sequence');

const scaffoldFactory = require('./build/scaffold-factory');
const staticRender = require('./build/static-render-factory');
const webpackBuild = require('./build/webpack-build-factory');
const webpackWatch = require('./build/webpack-watch-factory');

// build configs
const buildConfig = require('./build/webpack/webpack.config.build');
const buildCiConfig = require('./build/webpack/webpack.config.build.ci');
const productionConfig = require('./build/webpack/webpack.config.production');
const productionCiConfig = require('./build/webpack/webpack.config.production.ci');

// for color swatches
const postcss = require('gulp-postcss');
const exportVars = require('postcss-export-vars');
const watch = require('gulp-watch');

// duplicates gulp 4 type series api
const series = (...task) => (done) => sequence(...task, done);


// clean certain directories and files
// before and after builds
gulp.task('clean:pre', require('./build/clean-pre'));
gulp.task('clean:post', require('./build/clean-post'));

// build tasks: webpackBuild(factoryType, exitOnError);
gulp.task('webpack:build', webpackBuild(buildConfig, true));
gulp.task('webpack:build:ci', webpackBuild(buildCiConfig, true));
gulp.task('webpack:production', webpackBuild(productionConfig, true));
gulp.task('webpack:production:ci', webpackBuild(productionCiConfig, true));
gulp.task('webpack:watch:build', webpackBuild(productionCiConfig, false));

// watch is a minimal watcher for intergration
// not requiring page rendering (only /assets)
gulp.task('watch', series('clean:pre', 'webpack:watch:build', 'webpack:watch')); //pre tasks before webpack:watch (happens once)
gulp.task('webpack:watch', webpackWatch()); //gulp watch using webpack:watch:sequence below
gulp.task('webpack:watch:sequence', series('clean:pre', 'webpack:watch:build', 'clean:post')); //repeated watch factory sequence

// static rendering with create static html from
// source pages and automatically constructs
// a component library for tags and components
gulp.task('static:render', staticRender({ production: false }));
gulp.task('static:render:production', staticRender({ production: true }));

// test code using karma
gulp.task('test', require('./build/karma-test'));

gulp.task('colorSwatch', series('export-colors', 'color-watch'));

// extract vars for ColorSwatches
gulp.task('export-colors', () => { // eslint-disable-line
  return gulp.src('source/elements/variables/colors.css')
  .pipe(postcss([exportVars({
    file: './source/styleguide/molecules/SgColorSwatch/SgColorSwatch__variables.json',
    type: 'json',
    match: ['--color']
  })]));
});

gulp.task('color-watch', () => { // eslint-disable-line
  return watch('source/elements/variables/colors.css', () => {
    gulp.start('export-colors');
  });
});

// builds for quick publishing
// to a static server
gulp.task('build', series(
  'clean:pre',
  'webpack:build',
  'static:render',
  'clean:post',
  'test'
));

// builds a production ready set
// of static assets and html
gulp.task('production', series(
  'clean:pre',
  'webpack:production',
  'static:render:production',
  'clean:post'
));

// builds a minimal set of static
// assets (only /assets folder, no html)
// hint: this will be faster for integrators
gulp.task('build:ci', series(
  'clean:pre',
  'webpack:build:ci',
  'clean:post'
));

// builds a minimal set of minified static assets
gulp.task('production:ci', series(
  'clean:pre',
  'webpack:production:ci',
  'clean:post'
));

// scaffolding tasks
// tasks here require cli arguments

// gulp scaffold:atom --name [name]
gulp.task('scaffold:atom', scaffoldFactory({
  src: 'stateless-component',
  dest: 'atoms'
}));

// gulp scaffold:molecule --name [name]
gulp.task('scaffold:molecule', scaffoldFactory({
  src: 'stateless-component',
  dest: 'molecules'
}));

// gulp scaffold:organism --name [name]
gulp.task('scaffold:organism', scaffoldFactory({
  src: 'stateless-component',
  dest: 'organisms'
}));

// gulp scaffold:template --name [name]
gulp.task('scaffold:template', scaffoldFactory({
  src: 'stateless-component',
  dest: 'templates'
}));

// gulp scaffold:component:stateful --name [name]
gulp.task('scaffold:molecule:stateful', scaffoldFactory({
  src: 'stateful-component',
  dest: 'molecules'
}));

