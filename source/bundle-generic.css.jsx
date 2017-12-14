const requireAll = (context) => context.keys().map(context);

// import variables before components
require('@vars/index.css');

// require the rest of the components
requireAll(require.context('@atoms/', true, /\.generic.css$/));
requireAll(require.context('@molecules/', true, /\.generic.css$/));
requireAll(require.context('@organisms/', true, /\.generic.css$/));
requireAll(require.context('@templates/', true, /\.generic.css$/));
