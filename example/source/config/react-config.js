// Alias tagName propType because it
// gets used frequently

PropTypes.tagName = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.func
]);
