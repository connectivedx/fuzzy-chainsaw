import './SgColorSwatch.Container';

export const SgColorSwatch = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgColorSwatch',
    className
  ]);

  return (
    <SgColorSwatch__wrapper>
      <Tag className={classStack} {...attrs}>No colors passed to SgColorWatch</Tag>
    </SgColorSwatch__wrapper>
  );
};

SgColorSwatch.defaultProps = {
  tagName: 'div'
};

SgColorSwatch.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  colors: PropTypes.object
};

const SgColorSwatch__wrapper = FcUtils.createBasicComponent({
  name: 'SgColorSwatch__wrapper',
  defaultProps: {
    tagName: 'div'
  }
});

export const SgColorSwatch__search = FcUtils.createBasicComponent({
  name: 'SgColorSwatch__controls SgColorSwatch__search',
  defaultProps: {
    tagName: 'input'
  }
});

export default SgColorSwatch;
