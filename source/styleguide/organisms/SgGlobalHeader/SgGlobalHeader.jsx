import { Media, Media__body, Media__figure } from '@molecules/Media/Media';
import SgToggleButton from '@sg-molecules/SgToggleButton/SgToggleButton';

export const SgGlobalHeader = (props) => {
  const {
    tagName: Tag,
    className,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgGlobalHeader',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs} id="sg-header">
      <div className="SgGlobalHeader__wrapper" >
        <SgToggleButton
          id="sg-toggle"
          className="SgGlobalHeader__toggle"
        />
        <Media className="SgGlobalHeader__logo" align="middle">
          <Media__figure className="SgGlobalHeader__logo__figure">
            <a className="SgGlobalHeader__link" href="/">Fuzzy Chainsaw</a>
          </Media__figure>
          <Media__body className="SgGlobalHeader__logo__body">
            <p>Style Guide</p>
          </Media__body>
        </Media>
      </div>
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
  className: PropTypes.string
};


export default SgGlobalHeader;
