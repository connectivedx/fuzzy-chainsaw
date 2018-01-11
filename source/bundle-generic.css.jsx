const requireAll = (context) => context.keys().map(context);

// import variables before molecules
require('@vars/index.css');

// require the rest of the molecules
requireAll(require.context('@atoms/', true, /\.generic.css$/));
requireAll(require.context('@molecules/', true, /\.generic.css$/));
requireAll(require.context('@compositions/', true, /\.generic.css$/));
