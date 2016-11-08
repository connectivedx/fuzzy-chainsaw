/* 
  Configures webpack to build the site for production deployment.
  
  This file imports the debug configuration (webpack.config.js) and extends it to set production 
  tasks such as minification to enabled. Thus, changes to the debug build also apply here unless
  this configuration actively undoes them.
*/
const cssnano = require('cssnano');
const webpack = require('webpack');
let build = require('./webpack.config')();

// production specific configuration
build.forEach((config) => {
	if(config.doNotApplyProductionConfig) {
		return;
	}

	// apropos devtool (see http://cheng.logdown.com/posts/2016/03/25/679045)
	config.devtool = 'cheap-module-source-map'

	// add production flag to build environment
	// libraries can key off this to import versions without debug info
	// (e.g. react turns off warnings in the console and gets much smaller because of this)
	config.plugins.unshift(
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	);

	// uglify JS
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
	    compress: {
        	warnings: false
    	}
	}));

	// add css minification
	if (config.postcss !== undefined) {
		config.postcss = config.postcss.concat([
			cssnano()
		]);
	}
});

module.exports = build;