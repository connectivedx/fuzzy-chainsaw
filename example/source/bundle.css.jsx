const requireAll = (context) => context.keys().map(context);

// import variables before components
require('@vars/index.css');

// require any components that
// need to preserve ordering
require('@tags/Root/Root.css');
require('@tags/RichText/RichText.css');

// require the rest of the components
requireAll(require.context('@elements/', true, /\.css$/));
