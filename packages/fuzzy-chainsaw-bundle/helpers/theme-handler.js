/* eslint-disable */

// toggle theme parameter on non CI env
// only required on html pages / dev mode
if (!process.env.CI_MODE) {
  var _require = require('querystring'),
      parse = _require.parse; // eslint-disable-line


  var query = parse(location.search.substr(1));

  if (query.theme) {
    document.querySelector('html').className = 'Theme--' + query.theme;
  }
}