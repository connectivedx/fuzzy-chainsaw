const requireAll = (context) => context.keys().map(context);

require('Vars/index.css');

// require the rest of the components
requireAll(require.context('Tags/', true, /\.generic.css$/));
requireAll(require.context('Components/', true, /\.generic.css$/));
requireAll(require.context('Compositions/', true, /\.generic.css$/));
