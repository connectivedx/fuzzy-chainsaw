const gulp = require('gulp');
const file = require('gulp-file');
const merge = require('gulp-merge');
const print = require('gulp-print');

const fs = require('fs');
const path = require('path');
const pkgpath = require('packpath');
const Dom = require('react-dom/server');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));


const getContextList = (context, normalizePath, prefix = false) =>
  context.keys()
    .filter(key => key.indexOf('.test.jsx') === -1)
    .map((key) => {
      if (prefix) {
        const full = key.substr(0, key.indexOf('.jsx')).substr(1);
        const name = full.substr(full.lastIndexOf('/'));

        return {
          isStyleguide: true,
          outputPath: `${prefix}${name}.html`,
          moduleName: `/${prefix}${name}`
        };
      }

      const full = key.substr(0, key.indexOf('.jsx')).substr(1);
      return {
        isStyleguide: false,
        outputPath: `${full.substr(1)}.html`,
        moduleName: full
      };
    });


const pageTemplate = fs.readFileSync(`${__dirname}/templates/static.html`);
const styleguideTemplate = fs.readFileSync(`${__dirname}/templates/styleguide.html`);

const createComponentFile = (pathInfo, getModule, stats) => {
  const template = pathInfo.isStyleguide ? styleguideTemplate : pageTemplate;
  const module = getModule(pathInfo.moduleName);

  const output =
    template.toString()
      .replace('{{title}}', module.pageTitle)
      .replace('{{output}}', Dom.renderToStaticMarkup(module.Component))
      .replace(/\{\{hash\}\}/g, stats.hash);

  return file(pathInfo.outputPath, output, { src: true });
};

module.exports = () => {
  const staticStats = require(path.resolve(pkgpath.self(), dirs.dest, 'static-stats.json'));
  const buildStats = require(path.resolve(pkgpath.self(), dirs.dest, 'build-stats.json'));
  const staticFile = require(path.resolve(pkgpath.self(), dirs.dest, `assets/static-${staticStats.hash}.js`));
  const {
    pagesContext,
    componentsContext,
    tagsContext,
    getModule,
    normalizePath
  } = staticFile;

  const pagesToRender = (
    []
    .concat(
      getContextList(pagesContext, normalizePath),
      getContextList(componentsContext, normalizePath, 'styleguide/components'),
      getContextList(tagsContext, normalizePath, 'styleguide/tags')
    )
    .map(pathInfo => createComponentFile(pathInfo, getModule, buildStats))
  );

  return merge(...pagesToRender)
    .pipe(print())
    .pipe(gulp.dest(path.resolve(pkgpath.self(), dirs.dest)));
};
