const semver = require('semver');

module.exports = function(opts) {
	const engines = opts.pkg.engines;

	return function(done) {
		if (engines === undefined || engines.node === undefined) {
			done('The `engines.node` field is not found in package.json');
		}

		const valid = semver.satisfies(process.versions.node, engines.node);

		if (valid) {
			done();
		} else {
			done('The current node version in use is incompatible with the engine defined in package.json.');
		}
	}
};
