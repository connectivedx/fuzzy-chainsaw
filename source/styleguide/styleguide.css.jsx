const requireAll = (context) => context.keys().map(context);

// CSS
require('SgVars/index.css');

requireAll(require.context('SgTags/', true, /\.css$/));
requireAll(require.context('SgComponents/', true, /\.css$/));

// dependencies
require('prismjs/themes/prism.css');
