import SgHeading from '@sg-atoms/SgHeading/SgHeading';
import { createObject, getContrast, runWCAGTest } from './SgColorSwatch.Container';
import colorVars from './SgColorSwatch__Colors.json';

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
      {
        colorVars ?
        Object.keys(colorVars).map((color, i) => {
          const title = color;
          const obj = createObject(colorVars[color]);

          /* contrast tests */
          const contrastPrimary = getContrast(obj.hex, colorVars.colorTextPrimary);
          const contrastSecondary = getContrast(obj.hex, colorVars.colorTextSecondary);

          return (
            <Tag
              key={i}
              className={classStack}
              {...attrs}
              style={{ backgroundColor: obj.hex }}
            >
              <SgColorSwatch__accessibility contrastPrimary={contrastPrimary} contrastSecondary={contrastSecondary} level="AA" />
              <SgColorSwatch__accessibility variant="no-badge" contrastPrimary={contrastPrimary} contrastSecondary={contrastSecondary} level="AAA" />

              <SgColorSwatch__panel>
                <div className="SgColorSwatch__panel__title">
                  <SgHeading level="h6">Name</SgHeading>
                  <p>{title}</p>
                </div>
                <div className="SgColorSwatch__panel__hex">
                  <SgHeading level="h6">Hex</SgHeading>
                  <p>{obj.hex}</p>
                </div>
                <div className="SgColorSwatch__panel__rgb">
                  <SgHeading level="h6">RGB</SgHeading>
                  {obj.rgb.a ?
                    <p>{obj.rgb.r}, {obj.rgb.g}, {obj.rgb.b}, {obj.rgb.a}</p> : <p>{obj.rgb.r}, {obj.rgb.g}, {obj.rgb.b}</p>
                  }
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

const SgColorSwatch__accessibility = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    contrastPrimary,
    contrastSecondary,
    level,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgColorSwatch__accessibility',
    `SgColorSwatch__accessibility--${variant}`,
    level === 'A' && 'SgColorSwatch__accessibility--single',
    level === 'AA' && 'SgColorSwatch__accessibility--double',
    level === 'AAA' && 'SgColorSwatch__accessibility--triple',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <div className="SgColorSwatch__accessibility__badge SgColorSwatch__accessibility__badge--primary SgColorSwatch__accessibility__badge--normal">
        {runWCAGTest(contrastPrimary, 'normal', level)}
      </div>
      <div className="SgColorSwatch__accessibility__badge SgColorSwatch__accessibility__badge--primary SgColorSwatch__accessibility__badge--large">
        {runWCAGTest(contrastPrimary, 'large', level)}
      </div>
      <div className="SgColorSwatch__accessibility__badge SgColorSwatch__accessibility__badge--secondary SgColorSwatch__accessibility__badge--normal">
        {runWCAGTest(contrastSecondary, 'normal', level)}
      </div>
      <div className="SgColorSwatch__accessibility__badge SgColorSwatch__accessibility__badge--secondary SgColorSwatch__accessibility__badge--large">
        {runWCAGTest(contrastSecondary, 'large', level)}
      </div>
    </Tag>
  );
};

SgColorSwatch__accessibility.defaultProps = {
  tagName: 'div',
  level: 'AA'
};

SgColorSwatch__accessibility.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  contrastPrimary: PropTypes.number.isRequired,
  contrastSecondary: PropTypes.number.isRequired,
  level: PropTypes.string
};

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

export default SgColorSwatch;
