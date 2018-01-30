const requireAll = (context) => context.keys().map(context);

// import variables before molecules
require('@sg-vars/index.css');

// import all css files in styleguide directory
requireAll(require.context('@sg-atoms/', true, /\.css$/));
requireAll(require.context('@sg-molecules/', true, /\.css$/));
requireAll(require.context('@sg-organisms/', true, /\.css$/));
requireAll(require.context('@sg-templates/', true, /\.css$/));

// dependencies
require('prismjs/themes/prism.css');
