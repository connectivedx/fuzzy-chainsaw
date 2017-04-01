const gulp = require('gulp');
const file = require('gulp-file');
const merge = require('gulp-merge');
const print = require('gulp-print');
const fs = require('fs');

const { dest } = require('./lib/path-helpers');
const {
  getContextList,
  renderComponent
} = require('./lib/render-helpers');


module.exports = () => {
  const pageTemplate = fs.readFileSync(dest('_skeleton.html'));
  const styleguideTemplate = fs.readFileSync(dest('_skeleton.styleguide.html'));
  const { hash: dllHash } = require(dest('assets/dlls/dll-stats.json'));
  const { hash: staticHash } = require(dest('static-stats.json'));
  const { hash: buildHash } = require(dest('build-stats.json'));
  const {
    pagesContext,
    componentsContext,
    tagsContext,
    getModule
  } = require(dest(`assets/static-${staticHash}.js`));

  const renderFiles = (list, template) =>
    list.map(({ moduleName, outputPath }) => {
      const output = renderComponent({
        module: getModule(moduleName),
        template,
        dllHash,
        buildHash
      });

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
    .pipe(print())
    .pipe(gulp.dest(dest()))
  );
};
