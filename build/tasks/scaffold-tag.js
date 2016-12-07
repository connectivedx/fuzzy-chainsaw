const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldComponent({
    src: __dirname + '/scaffolding/stateless-component',
    name: argv.name,
    dest: path.resolve(pkgpath.self(), dirs.source, 'tags')
  });
}
