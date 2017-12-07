import colorVars from './SgColorSwatch__variables.json';

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

  const dehyphenator = (string) => string.replace(/-/g, ' ');

  return (
    <SgColorSwatch__wrapper>
      {
        colorVars ?
        Object.keys(colorVars).map((color, i) => (
          <Tag
            key={i}
            className={classStack}
            {...attrs}
            style={{ backgroundColor: colorVars[color] }}
          >
            <SgColorSwatch__panel>
              {dehyphenator(color)}
              <br />
              {colorVars[color]}
            </SgColorSwatch__panel>
          </Tag>
        ))
        : <Tag className={classStack} {...attrs}>No colors passed to SgColorWatch</Tag>
      }
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


export default SgColorSwatch;


const SgColorSwatch__wrapper = FcUtils.createBasicComponent({
  name: 'SgColorSwatch__wrapper',
  defaultProps: {
    tagName: 'div'
  }
});

const SgColorSwatch__panel = FcUtils.createBasicComponent({
  name: 'SgColorSwatch__panel',
  defaultProps: {
    tagName: 'div'
  }
});
