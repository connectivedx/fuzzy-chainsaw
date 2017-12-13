import SgTableOfContents from '@sg-tags/SgTableOfContents/SgTableOfContents';

export const SgNavigation = (props) => {
  const {
    tagName: Tag,
    className,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgNavigation',
    className
  ]);

  return (
    <Tag className={classStack} id="SgNavigation" {...attrs}>
      <SgTableOfContents />
    </Tag>
  );
};

SgNavigation.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgNavigation.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string
};


export default SgNavigation;
