const requireAll = (context) => context.keys().map(context);

// import variables before components
require('@vars/index.css');

// require the rest of the components
requireAll(require.context('@elements/', true, /\.generic.css$/));
