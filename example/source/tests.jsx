const context = require.context('@source/', true, /\.test\.jsx$/);

context.keys().forEach(context);
