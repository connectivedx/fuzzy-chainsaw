// Alias tagName propType because it
// gets used frequently

PropTypes.tagName = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.func
]);


/*
  Helper function for creating a nice className
  from an array of unknown values
*/

const createClassStack = (classList) => (
  classList
    .map((className) => {
      if (Array.isArray(className)) {
        return createClassStack(className);
      }

      return className;
    })
    .filter((a) => a)
    .join(' ')
);


/*
  Helper function for quickly creating a
  basic component with a className
*/

const createBasicComponent = (config) => {
  const {
    name,
    variants,
    defaultProps
  } = config;

  const Component = (props) => {
    const {
      tagName: Tag,
      className,
      variant,
      children,
      ...attrs
    } = props;

    const classStack = createClassStack([
      name,
      variants && `${name}--${variant}`,
      className
    ]);

    return (
      <Tag className={classStack} {...attrs}>
        {children}
      </Tag>
    );
  };

  Component.displayName = name;

  Component.defaultProps = defaultProps || { tagName: 'div' };

  Component.propTypes = {
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    className: PropTypes.string,
    children: PropTypes.node
  };

  if (variants) {
    Component.propTypes.variant =
      PropTypes.oneOf(variants);
  }

  return Component;
};

module.exports = {
  createBasicComponent,
  createClassStack
};
