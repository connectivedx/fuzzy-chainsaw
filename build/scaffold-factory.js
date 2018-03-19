/*
  This provides a factory that returns a gulp task
  for scaffolding directories.
*/

const gutil = require('gulp-util');
const path = require('path');
const minimist = require('minimist');
const chalk = require('chalk');
const dopl = require('dopl');

const { source } = require('./lib/path-helpers');


const scaffoldComponent = ({
  name,
  cssName,
  src,
  output
}) => {
  if (!/^[A-Z][A-Za-z]+$/.test(name)) {
    gutil.log(chalk.bgRed('The name should be in PascalCase.'));
    process.exit(1);
  }

  return dopl({
    src,
    output,
    data: {
      name,
      cssName
    }
  });
};


module.exports = ({ src, dest }) => () => {
  const argv = minimist(process.argv.slice(2));

  return scaffoldComponent({
    name: argv.name,
    cssName: argv.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
    src: path.resolve(__dirname, 'scaffolding', src),
    output: source('elements', dest, argv.name)
  });
};

