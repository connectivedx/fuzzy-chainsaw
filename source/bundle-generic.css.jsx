const requireAll = (context) => context.keys().map(context);

// import variables before components
require('@vars/index.css');

// require the rest of the components
requireAll(require.context('@tags/', true, /\.generic.css$/));
requireAll(require.context('@components/', true, /\.generic.css$/));
requireAll(require.context('@compositions/', true, /\.generic.css$/));
