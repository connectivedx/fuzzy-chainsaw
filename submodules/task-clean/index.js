const del = require('del');

module.exports = function(opts) {
	return function(done) {
		del(opts.target).then(() => done())
	}
};
