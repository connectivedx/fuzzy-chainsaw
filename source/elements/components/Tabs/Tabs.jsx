import Heading from '@tags/Heading/Heading';
import Link from '@tags/Link/Link';

export class Tabs extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['horizontal--top', 'horizontal--bottom', 'vertical--left', 'vertical--right']),
    defaultTab: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'div',
    variant: 'horizontal--top',
    defaultTab: '0'
  };

  state = { isChecked: false }

  componentDidMount = () => { window.addEventListener('resize', this.resizer); }

  componentWillUnmount = () => { window.removeEventListener('resize', this.resizer); }

  resizer = () => {
    if (!this.props.variant.match('vertical')) { return; }

    const tabbings = document.querySelectorAll('.Tabs--vertical--left .Tabs__tabbings, .Tabs--vertical--right .Tabs__tabbings');
    const panes = document.querySelectorAll('.Tabs--vertical--left .Tabs__panes, .Tabs--vertical--right .Tabs__panes');

    let i = tabbings.length;
    if (document.body.offsetWidth <= 768) {
      if (i) {
        while (i--) {
          const parent = tabbings[i].parentNode;
          parent.appendChild(tabbings[i]);
          parent.appendChild(panes[i]);
        }
      }
    } else if (document.body.offsetWidth > 768) {
      if (i) {
        while (i--) {
          tabbings[i].parentNode.appendChild(
            tabbings[i]
          );
        }
      }
    }
  }

  toggle = (e) => {
    if (!this.props.variant.match('vertical')) { return; }

    const parent = e.target.parentNode;
    const panes = parent.querySelectorAll('.Tabs__panes');
    const tabbings = parent.querySelectorAll('.Tabs__tabbings');

    let i = panes.length;

    while (i--) {
      tabbings[i].classList.remove('active');
      panes[i].style.display = 'none';
    }

    e.target.classList.add('active');
    parent.querySelector(['.Tabs__panes[data-index="', e.target.dataset.index, '"]'].join('')).style.display = 'block';

    e.preventDefault();
  }

  render = () => {
    const {
      id,
      tagName: Tag,
      className,
      variant,
      children,
      defaultTab,
      ...attrs
    } = this.props;

    const classStack = FcUtils.createClassStack([
      'Tabs',
      `Tabs--${variant}`,
      className
    ]);

    const verticalTabs = React.Children.map(this.props.children, (child, i) => {
      if (!React.isValidElement(child)) { return false; }
      const title = (child.props.title) ? child.props.title : 'Missing title attribute';
      return (
        <Heading
          className="Tabs__tabbings"
          data-index={i}
          onClick={this.toggle}
          level={child.props.level}
          weight={child.props.weight}
        >
          <Link href={(['#section-', this.props.id, i].join(''))}>
            {title}
          </Link>
        </Heading>
      );
    });

    const verticalPanes = React.Children.map(this.props.children, (child, i) => {
      if (!React.isValidElement(child)) { return false; }
      return (
        <child.type className="Tabs__panes" data-index={i}>
          {child.props.children}
        </child.type>
      );
    });

    const horizontalTabsPanes = React.Children.map(this.props.children, (child, i) => {
      if (!React.isValidElement(child)) { return false; }

      const title = (child.props.title) ? child.props.title : 'Missing title attribute';
      return [
        <input
          id={['tab-', this.props.id, i].join('')}
          type="radio"
          name="tabs"
          aria-hidden="true"
          defaultChecked={this.state.isChecked}
        />,
        <label className="Tabs__tabbings" htmlFor={['tab-', this.props.id, i].join('')}>
          <Heading
            level={child.props.level}
            weight={child.props.weight}
          >
            <Link href={(['#section-', this.props.id, i].join(''))} data-index={i}>
              {title}
            </Link>
          </Heading>
        </label>,
        <child.type className="Tabs__panes">
          {child.props.children}
        </child.type>
      ];
    });

    const tabSystem = (this.props.variant.match('horizontal')) ? horizontalTabsPanes : [verticalPanes, verticalTabs];

    return (
      <Tag
        className={classStack}
        {...attrs}
      >
        {tabSystem}

      </Tag>
    );
  }
}

export default Tabs;
