const gulp = require('gulp');
const file = require('gulp-file');
const merge = require('gulp-merge');
const print = require('gulp-print');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

const { dest } = require('./lib/path-helpers');
const {
  getOutputRelativity,
  makeAbsolutePathRelative,
  getContextList,
  renderComponent
} = require('./lib/render-helpers');


module.exports = ({ production }) => () => {
  const pageTemplate = fs.readFileSync(dest('_skeleton.html'));
  const styleguideTemplate = fs.readFileSync(dest('_skeleton.styleguide.html'));
  const {
    pagesContext,
    componentsContext,
    tagsContext,
    getModule
  } = require(dest('tmp/static.js')); // eslint-disable-line

  const renderFiles = (list, template) =>
    list.map(({ moduleName, outputPath }) => {
      const output = makeAbsolutePathRelative(
        renderComponent({
          module: getModule(moduleName),
          template
        }),
        getOutputRelativity(outputPath)
      );

      return file(outputPath, output, { src: true });
    });

  return (
    merge(
      ...renderFiles(
        getContextList(pagesContext),
        pageTemplate
      ),
      ...renderFiles([
        ...getContextList(componentsContext, 'styleguide/components'),
        ...getContextList(tagsContext, 'styleguide/tags')
      ], styleguideTemplate)
    )
    .pipe(gulpif(production, htmlmin({ collapseWhitespace: true })))
    .pipe(print())
    .pipe(gulp.dest(dest()))
  );
};
