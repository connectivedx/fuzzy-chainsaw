const requireAll = (context) => context.keys().map(context);

// import variables before components
require('@sg-vars/index.css');

// import all css files in styleguide directory
requireAll(require.context('@sg-tags/', true, /\.css$/));
requireAll(require.context('@sg-components/', true, /\.css$/));

// dependencies
require('prismjs/themes/prism.css');
