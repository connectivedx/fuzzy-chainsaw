import SgIcon from '@sg-atoms/SgIcon/SgIcon';

export const SgToggleButton = (props) => {
  const {
    tagName: Tag,
    className,
    id,
    size,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgToggleButton',
    'SgToggleButton--is-active',
    className
  ]);

  return (
    <Tag
      className={classStack}
      id={id}
      {...attrs}
    >
      <SgIcon
        className="SgToggleButton__icon SgToggleButton__icon--menu"
        name="menu"
        size={size}
      />
      <SgIcon
        className="SgToggleButton__icon SgToggleButton__icon--close"
        name="close"
        size={size}
      />
    </Tag>
  );
};

SgToggleButton.defaultProps = {
  tagName: 'div',
  size: 'normal'
};

SgToggleButton.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default SgToggleButton;
