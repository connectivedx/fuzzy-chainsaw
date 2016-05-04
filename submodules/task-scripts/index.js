const createBundler = require('./lib/createBundler');

module.exports = {
	bundle(opts) {
		return function() {
			return createBundler(opts);
		};
	},

	watch(opts) {
		return function() {
			const options = Object.assign({ watch: true }, opts);
			return createBundler(options);
		};
	}
};
