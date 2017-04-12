export class {{name}} extends React.Component {
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

    let classStack = Rucksack.createClassName([
      '{{className}}',
      Rucksack.createVariants('{{className}}--', variant),
      isActive && 'is-active',
      className
    ]);

    return (
      <Tag className={classStack} {...attrs}>
        {children}
      </Tag>
    );
  }

  defaultProps = {
    tagName: 'div',
    variant: 'default'
  }

  propTypes = {
    tagName: React.PropTypes.string,
    className: React.PropTypes.string,
    variant: Rucksack.PropTypes.variant(['default']),
    children: React.PropTypes.node
  }
};
