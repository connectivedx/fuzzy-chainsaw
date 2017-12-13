import SgGlobalHeader from '@sg-components/SgGlobalHeader/SgGlobalHeader';
import SgNavigation from '@sg-components/SgNavigation/SgNavigation';

export const SgPageShell = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgPageShell',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <SgGlobalHeader />
      <SgNavigation />
    </Tag>
  );
};

SgPageShell.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgPageShell.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};


export default SgPageShell;
