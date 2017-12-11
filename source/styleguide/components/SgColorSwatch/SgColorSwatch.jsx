import chroma from 'chroma-js';
import SgHeading from '@sg-tags/SgHeading/SgHeading';
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

  const wcagAA = (ratio, size) => {
    if (size === 'large' && ratio > 3) {
      return 'PASS';
    } else if (size === 'normal' && ratio > 4.5) {
      return 'PASS';
    }

    return 'FAIL';
  };

  return (
    <SgColorSwatch__wrapper>
      {
        colorVars ?
        Object.keys(colorVars).map((color, i) => {
          const title = color.substr(color.indexOf('color') + 5).split(/(?=[A-Z])/).join(' ');
          const hex = colorVars[color];
          const rgb = chroma(hex).rgb();

          /* contrast tests */
          const contrastPrimary = chroma.contrast(colorVars[color], colorVars.colorTextPrimary);
          const contrastSecondary = chroma.contrast(colorVars[color], colorVars.colorTextSecondary);

          return (
            <Tag
              key={i}
              className={classStack}
              {...attrs}
              style={{ backgroundColor: colorVars[color] }}
            >
              <SgColorSwatch__accessibility>
                <div className="SgColorSwatch__accessibility__badge
                  SgColorSwatch__accessibility__badge--primary
                  SgColorSwatch__accessibility__badge--normal"
                >
                  {wcagAA(contrastPrimary, 'normal')}
                </div>
                <div className="SgColorSwatch__accessibility__badge
                  SgColorSwatch__accessibility__badge--primary
                  SgColorSwatch__accessibility__badge--large"
                >
                  {wcagAA(contrastPrimary, 'large')}
                </div>
                <div className="SgColorSwatch__accessibility__badge
                  SgColorSwatch__accessibility__badge--secondary
                  SgColorSwatch__accessibility__badge--normal"
                >
                  {wcagAA(contrastSecondary, 'normal')}
                </div>
                <div className="SgColorSwatch__accessibility__badge
                  SgColorSwatch__accessibility__badge--secondary
                  SgColorSwatch__accessibility__badge--large"
                >
                  {wcagAA(contrastSecondary, 'large')}
                </div>
              </SgColorSwatch__accessibility>
              <SgColorSwatch__panel>
                <div className="SgColorSwatch__panel__title">
                  <SgHeading level="h6">Name</SgHeading>
                  <p>{title}</p>
                </div>
                <div className="SgColorSwatch__panel__hex">
                  <SgHeading level="h6">Hex</SgHeading>
                  <p>{hex}</p>
                </div>
                <div className="SgColorSwatch__panel__rgb">
                  <SgHeading level="h6">RGB</SgHeading>
                  <p>{rgb[0]}, {rgb[1]}, {rgb[2]}</p>
                </div>
              </SgColorSwatch__panel>
            </Tag>
          );
        })
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
const SgColorSwatch__accessibility = FcUtils.createBasicComponent({
  name: 'SgColorSwatch__accessibility',
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
