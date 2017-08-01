/* eslint-disable */
'use strict';

var React = require('react');
var PropsTypes = require('prop-types');
var omit = require('lodash.omit');

require('object.assign').shim();

// Alias tagName propType because it
// gets used frequently

PropsTypes.tagName = PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]);

/*
  Helper function for creating a nice className
  from an array of unknown values
*/

var createClassStack = function createClassStack(classList) {
  return classList.map(function (className) {
    if (Array.isArray(className)) {
      return createClassStack(className);
    }

    return className;
  }).filter(function (a) {
    return a;
  }).join(' ');
};

/*
  Helper function for quickly creating a
  basic component with a className
*/

var createBasicComponent = function createBasicComponent(config) {
  var name = config.name,
      variants = config.variants,
      defaultProps = config.defaultProps;


  var Component = function Component(props) {
    var tagName = props.tagName,
        className = props.className,
        variant = props.variant,
        children = props.children;


    var attrs = omit(props, 'tagName', 'className', 'variant', 'children');

    attrs.className = createClassStack([name, variants && name + '--' + variant, className]);

    return React.createElement(tagName, attrs, children);
  };

  Component.displayName = name;

  Component.defaultProps = defaultProps || { tagName: 'div' };

  Component.propTypes = {
    tagName: PropTypes.tagName,
    className: PropTypes.string,
    children: PropTypes.node
  };

  if (variants) {
    Component.propTypes.variant = PropTypes.oneOf(variants);
  }

  return Component;
};

module.exports = {
  createBasicComponent: createBasicComponent,
  createClassStack: createClassStack
};
