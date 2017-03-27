const gutil = require('gulp-util');
const path = require('path');
const minimist = require('minimist');
const chalk = require('chalk');
const dopl = require('dopl');

const { source } = require('./lib/path-helpers');


// transforms PascalCase into slug-case for the CSS class name
const createClassName = name => (
  name
    .replace(/[A-Z]/g, word => `-${word.toLowerCase()}`)
    .substring(1) // trim off leading - from the first capital
);


const scaffoldComponent = ({
  name,
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
      className: createClassName(name)
    }
  });
};


module.exports = ({ src, dest }) => () => {
  const argv = minimist(process.argv.slice(2));

  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding', src),
    output: source(dest, argv.name)
  });
};

