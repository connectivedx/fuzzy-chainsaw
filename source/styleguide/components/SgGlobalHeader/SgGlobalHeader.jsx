import SgHeading from '@sg-tags/SgHeading/SgHeading';
import SgToggleButton from '@sg-components/SgToggleButton/SgToggleButton';

export const SgGlobalHeader = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgGlobalHeader',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <SgToggleButton
        id="SgNavToggle"
        className="SgGlobalHeader__toggle"
        primeAsset="menu"
        secondAsset="close"
      />
      <SgHeading className="SgGlobalHeader__title" id="SgGlobalHeaderTitle" level="h1">Fuzzy Chainsaw</SgHeading>
      {children}
    </Tag>
  );
};

SgGlobalHeader.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgGlobalHeader.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};


export default SgGlobalHeader;
