/*
  Enables scaffolding of new FC items (e.g. components, tags) using the dopl templating library.
  See the component-template folder for the template source files.
*/

const chalk = require('chalk');
const dopl = require('dopl');

module.exports = ({
  name,
  dest
}) => {
  validateComponentName(name);

  const className = createClassName(name);
  
  return dopl({
    name,
    output: dest,
    src: __dirname + '/component-template',
    data: {
      className
    }
  });
}

const validateComponentName = proposedName => {
  if(!/^[A-Z][A-Za-z]+$/.test(proposedName)) {
    console.error(chalk.bgRed('The name should be in PascalCase.'));
    process.exit(1);
  }
}

const createClassName = name => {
  // transforms PascalCase into slug-case for the CSS class name
  return name.replace(/[A-Z]/g, (word) => {
      return '-' + word.toLowerCase(); 
  })
  .substring(1); // trim off leading - from the first capital
}