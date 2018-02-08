import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-json.min';
import './SgIconSwatch.Container.js';

export const SgIconSwatch = (props) => {
  const {
    icon,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgIconSwatch'
  ]);

  return (
    <div className={classStack} data-icon-name={icon.name}>
      <div className="SgIconSwatch__preview">
        <img src={icon.path} {...attrs} alt="Icon preview" />
      </div>
      <div className="SgIconSwatch__details">
        <strong>{icon.name}</strong>
        <pre>
          <code dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              ['import Icon from \'./Icon\';\n<Icon name="', icon.name, '" />'].join(''),
              Prism.languages.jsx
            )
          }}
          />
        </pre>
      </div>
    </div>
  );
};

SgIconSwatch.propTypes = {
  icon: PropTypes.object
};

export const SgIconSwatch__search = FcUtils.createBasicComponent({
  name: 'SgIconSwatch__search',
  defaultProps: {
    tagName: 'input'
  }
});

export default SgIconSwatch;
