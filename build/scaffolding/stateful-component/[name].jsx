export class {{name}} extends React.Component {
  static propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
    variant: Rucksack.PropTypes.variants(['default']),
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

    const classStack = Rucksack.createClassName([
      '{{name}}',
      Rucksack.createVariants('{{name}}--', variant),
      this.state.isActive && 'is-active',
      className
    ]);

    return (
      <Tag className={classStack} {...attrs}>
        {children}
      </Tag>
    );
  }
};

export default {{name}};
