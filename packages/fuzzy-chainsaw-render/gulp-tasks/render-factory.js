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

const { renderComponent, selectListing } = require('../lib/render-helpers');

/*
  When the output directory is outside of the directory containing
  node_modules, we need to force the module resolution algorithm to use
  this file's node_module search paths instead of the desination.
*/
const injectModulePaths = (modulePath) => {
  const module = fs.readFileSync(modulePath);

  const fixedModule =
    module.indexOf('module.paths = require.main.paths') === -1
      ? `module.paths = require.main.paths;${module}`
      : module;

  fs.writeFileSync(modulePath, fixedModule);
};


module.exports = ({ pathHelpers, framework, projectConfig }) => ({ production }) => () => {
  const { dest } = pathHelpers;
  const { outputDirectories } = projectConfig;
  const { isFileRenderable, getOutputName, renderComponent: render } = framework.render;

  const archivePath = dest(outputDirectories.js, 'archive.js');
  injectModulePaths(archivePath);

  const archive = require(archivePath); // eslint-disable-line
  const template = fs.readFileSync(dest('_skeleton.html'));

  const listings = selectListing(archive.pages, { isFileRenderable, getOutputName });

  const renderFiles =
    Object.keys(listings)
      .map((outputPath) => {
        const module = listings[outputPath];
        const output = renderComponent({ module, template, render });
        return file(outputPath, output, { src: true });
      });

  return (
    merge(...renderFiles)
      .pipe(gulpif(production, htmlmin({ collapseWhitespace: true })))
      .pipe(print())
      .pipe(gulp.dest(dest()))
  );
};
