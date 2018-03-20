import { Scrollbars } from 'react-custom-scrollbars';

export const SgPageShell__header = FcUtils.createBasicComponent({
  name: 'SgPageShell__header',
  defaultProps: {
    tagName: 'header',
    role: 'banner'
  }
});

export const SgPageShell__navigation = (props) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgPageShell__navigation',
    className
  ]);

  return (
    <nav className={classStack} {...attrs}>
      <Scrollbars
        renderTrackVertical={(trackProps) => <div {...trackProps} className="SgScrollbars__track" />}
        renderThumbVertical={(thumbProps) => <div {...thumbProps} className="SgScrollbars__thumb" />}
        renderView={(containerProps) => <div {...containerProps} className="SgScrollbars__container--nav" />}
      >
        {children}
      </Scrollbars>
    </nav>
  );
};

SgPageShell__navigation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export const SgPageShell__body = FcUtils.createBasicComponent({
  name: 'SgPageShell__body',
  defaultProps: {
    tagName: 'div'
  }
});

export const SgPageShell__main = (props) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgPageShell__main',
    className
  ]);

  return (
    <div className={classStack} {...attrs} role="main" id="sg-main">
      {children}
    </div>
  );
};

SgPageShell__main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export const SgPageShell = (props) => {
  const {
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgPageShell',
    'SgPageShell--navOpen',
    `SgPageShell--${variant}`,
    className
  ]);

  return (
    <div className={classStack} {...attrs}>
      <Scrollbars
        renderTrackVertical={(trackProps) => <div {...trackProps} className="SgScrollbars__track" />}
        renderThumbVertical={(thumbProps) => <div {...thumbProps} className="SgScrollbars__thumb" />}
        renderView={(containerProps) => <div {...containerProps} className="SgScrollbars__container--content" />}
      >
        {children}
      </Scrollbars>
    </div>
  );
};

SgPageShell.defaultProps = {
  variant: 'default'
};

SgPageShell.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node
};

export default SgPageShell;
