import SgTableOfContents from '@sg-molecules/SgTableOfContents/SgTableOfContents';
import SgRhythm from '@sg-atoms/SgRhythm/SgRhythm';

export class SgNavigation extends React.Component {
  static propTypes = {
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    className: PropTypes.string,
    variant: PropTypes.string
  };

  static defaultProps = {
    tagName: 'div',
    variant: 'default'
  };

  state = {
    filter: ''
  }

  updateFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render = () => {
    const {
      tagName: Tag,
      className,
      ...attrs
    } = this.props;

    const classStack = FcUtils.createClassStack([
      'SgNavigation',
      className
    ]);

    return (
      <Tag className={classStack} id="sg-nav" {...attrs}>
        <div id="sg-toggle" />
        <SgRhythm>
          <input className="SgNavigation__search" type="text" placeholder="Search" onChange={this.updateFilter} />
          <SgTableOfContents searchFilter={this.state.filter} />
        </SgRhythm>
      </Tag>
    );
  }
}

export default SgNavigation;

