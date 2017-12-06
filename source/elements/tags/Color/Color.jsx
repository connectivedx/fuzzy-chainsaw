import { List, List__item } from '@tags/List/List';

export const Color = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    colorName,
    colorValues,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Color',
    `Color--${variant} bg--${colorName}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <span className={`Color--swatch__preview bg--${colorName}`} {...attrs} />
      { colorValues && colorValues.map((color) => (
        <List key={color.name} variant="blank" className="Color--swatch__details">
          <List__item><strong>{color.name}</strong></List__item>
          <List__item>{color.hex}</List__item>
          <List__item>{color.css}</List__item>
        </List>
      )) }
    </Tag>
  );
};

Color.defaultProps = {
  tagName: 'div',
  variant: 'default',
  colorName: 'white'
};

Color.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  colorName: PropTypes.string,
  colorHex: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'swatch']),
  colorValues: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired
  }))
};


export default Color;
