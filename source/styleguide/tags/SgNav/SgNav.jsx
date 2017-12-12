import SgTableOfContents from '@sg-tags/SgTableOfContents/SgTableOfContents';

export const SgNav = (props) => {
  const {
    tagName: Tag,
    className,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgNav',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <SgTableOfContents />
    </Tag>
  );
};

SgNav.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgNav.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string
};


export default SgNav;
