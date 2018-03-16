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
