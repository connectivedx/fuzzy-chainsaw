/*
  This task takes renders static html
  using the static webpack bundle
*/

const gulp = require('gulp');
const file = require('gulp-file');
const merge = require('gulp-merge');
const print = require('gulp-print');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

const { dest } = require('./lib/path-helpers');
const {
  getContextList,
  renderComponent
} = require('./lib/render-helpers');


/*
  When the output directory is outside of the directory containing
  node_modules, we need to force the module resolution algorithm to use
  this file's node_module search paths instead of the desination.
*/
const injectModulePaths = (staticPath) => {
  const staticBundle = fs.readFileSync(staticPath);

  const fixedStaticBundle =
    staticBundle.indexOf('module.paths = require.main.paths') === -1
      ? `module.paths = require.main.paths;${staticBundle}`
      : staticBundle;

  fs.writeFileSync(staticPath, fixedStaticBundle);
};


module.exports = ({ production }) => () => {
  injectModulePaths(dest('tmp/static.js'));

  const pageTemplate = fs.readFileSync(dest('_skeleton.html'));
  const {
    pagesContext,
    templatesContext,
    organismsContext,
    moleculesContext,
    atomsContext,
    getModule
  } = require(dest('tmp/static.js')); // eslint-disable-line

  const renderFiles = (list) =>
    list.map(({ moduleName, outputPath }) => {
      const output = renderComponent({
        module: getModule(moduleName),
        template: pageTemplate
      });

      return file(outputPath, output, { src: true });
    });

  return (
    merge(
      ...renderFiles([
        ...getContextList(pagesContext),
        ...getContextList(templatesContext, 'styleguide/templates'),
        ...getContextList(organismsContext, 'styleguide/organisms'),
        ...getContextList(moleculesContext, 'styleguide/molecules'),
        ...getContextList(atomsContext, 'styleguide/atoms')
      ])
    )
    .pipe(gulpif(production, htmlmin({ collapseWhitespace: true })))
    .pipe(print())
    .pipe(gulp.dest(dest()))
  );
};
