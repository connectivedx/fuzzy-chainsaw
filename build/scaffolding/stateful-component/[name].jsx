export class {{name}} extends React.Component {
  static propTypes = {
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default']),
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'div',
    variant: 'default'
  };

  state = {
    isActive: false
  }

  toggle = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render = () => {
    const {
      tagName: Tag,
      className,
      variant,
      children,
      ...attrs
    } = this.props;

    const classStack = FcUtils.createClassStack([
      '{{cssName}}',
      `{{cssName}}--${variant}`,
      this.state.isActive && 'is-active',
      className
    ]);

    return (
      <Tag
        onClick={this.toggle}
        className={classStack}
        {...attrs}
      >
        {children}
      </Tag>
    );
  }
}

export default {{name}};
