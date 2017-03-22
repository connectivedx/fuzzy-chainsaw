const del = require('del');
const path = require('path');
const pkgpath = require('packpath');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => (
  del([
    `${path.resolve(pkgpath.self(), dirs.dest)}/**/*.html`,
    `${path.resolve(pkgpath.self(), dirs.dest)}/assets/*.{js,js.map,css,css.map}`,
    `${path.resolve(pkgpath.self(), dirs.dest)}/assets/images/**`,
    `${path.resolve(pkgpath.self(), dirs.dest)}/assets/fonts/**`,
    `${path.resolve(pkgpath.self(), dirs.dest)}/assets/svgs/**`
  ], {
    force: true
  })
);
