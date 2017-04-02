const requireAll = (context) => context.keys().map(context);

require('Vars/index.css');

// require any components that
// need to preserve ordering
require('Tags/Fonts/Fonts.css');
require('Tags/Root/Root.css');
require('Tags/RichText/RichText.css');

// require the rest of the components
requireAll(require.context('Tags/', true, /\.css$/));
requireAll(require.context('Components/', true, /\.css$/));
