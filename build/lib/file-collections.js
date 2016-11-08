const glob = require('glob');
const pkg = require('../../package.json');
const dirs = pkg.directories;
const {
  getDeepName,
  getDirectories,
  componentExists
} = require('./filepath-helpers');


// create a list of pages in source
const pages = glob.sync(dirs.source + 'pages/**/*.jsx')
    .map(getDeepName(dirs.source + 'pages'))

// create lists of components with a coresponding jsx file
const components =
  getDirectories(dirs.source + 'components')
    .filter(name => componentExists(dirs.source + 'components', name));

const tags =
  getDirectories(dirs.source + 'tags')
    .filter(name => componentExists(dirs.source + 'tags', name));

// concatenate lists together for the styleguide
const prefix = pre => str => pre + str;
const styleguides =
  [].concat(
    tags.map(prefix('tags/')),
    components.map(prefix('components/'))
  );


module.exports = {
  pages,
  components,
  tags,
  styleguides
}
