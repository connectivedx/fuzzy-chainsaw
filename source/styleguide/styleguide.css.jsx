const requireAll = (context) => context.keys().map(context);

// CSS
require('@sg-vars/index.css');

requireAll(require.context('@sg-tags/', true, /\.css$/));
requireAll(require.context('@sg-components/', true, /\.css$/));

// dependencies
require('prismjs/themes/prism.css');
