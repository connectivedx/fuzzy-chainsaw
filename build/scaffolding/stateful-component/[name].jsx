export class {{name}} extends React.Component {
  static propTypes = {
    tagName: React.PropTypes.string,
    className: React.PropTypes.string,
    variant: Rucksack.PropTypes.variants(['default']),
    children: React.PropTypes.node
  };

  static defaultProps = {
    tagName: 'div',
    variant: 'default'
  };

  state = {
    isActive: false
  }

  toggle = () => this.setState({ isActive: !this.state.isActive })

  render = () => {
    const {
      tagName: Tag,
      className,
      variant,
      children,
      ...attrs
    } = this.props;

    const classStack = Rucksack.createClassName([
      '{{className}}',
      Rucksack.createVariants('{{className}}--', variant),
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
