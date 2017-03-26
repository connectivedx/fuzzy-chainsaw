const path = require('path');
const pkgpath = require('packpath');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));

module.exports.source = (...paths) => path.resolve(pkgpath.self(), dirs.source, ...paths);
module.exports.dest = (...paths) => path.resolve(pkgpath.self(), dirs.dest, ...paths);
