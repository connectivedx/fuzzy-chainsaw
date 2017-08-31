import 'fuzzy-chainsaw-bundle/helpers/shim';

const context = require.context('@elements/', true, /\.test\.jsx$/);

context.keys().forEach(context);
