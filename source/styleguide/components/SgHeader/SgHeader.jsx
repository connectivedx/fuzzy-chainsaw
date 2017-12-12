import SgHeading from '@sg-tags/SgHeading/SgHeading';
import Icon from '@tags/Icon/Icon';

export const SgHeader = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgHeader',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <Icon
        className="SgHeader__menuIcon"
        id="openNavTrigger"
        name="menu"
        size="large"
      />
      <SgHeading className="SgHeader__title" level="h1">Fuzzy Chainsaw</SgHeading>
      {children}
    </Tag>
  );
};

SgHeader.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgHeader.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};


export default SgHeader;
