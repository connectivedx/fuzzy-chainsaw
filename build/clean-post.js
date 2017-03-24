const del = require('del');
const path = require('path');
const pkgpath = require('packpath');
const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  return del([
    path.resolve(pkgpath.self(), dirs.dest, 'tmp'),
    path.resolve(pkgpath.self(), dirs.dest, 'assets/scripts.css'),
    path.resolve(pkgpath.self(), dirs.dest, 'assets/scripts.css.map'),
    path.resolve(pkgpath.self(), dirs.dest, 'assets/styles.js'),
    path.resolve(pkgpath.self(), dirs.dest, 'assets/styles.js.map'),
  ], { force: true })
};
