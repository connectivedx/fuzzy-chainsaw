import Heading from '@tags/Heading/Heading';
import Icon from '@tags/Icon/Icon';

export class Accordion extends React.Component {
  static propTypes = {
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default']),
    children: PropTypes.node,
    singly: PropTypes.string
  };

  static defaultProps = {
    tagName: 'div',
    variant: 'default',
    singly: 'false'
  };

  toggle = (e) => {
    if (!e.target.dataset.index) { return false; }

    e.preventDefault();
    const component = e.currentTarget;
    const selected = component.querySelectorAll('details')[e.target.dataset.index];

    selected.classList.add('tmp'); // temp protection

    // only one section allowed open at a time?
    if (this.props.singly === 'true') {
      this.collaseAll(component);
    }

    // change state of selected
    if (selected.hasAttribute('open')) {
      selected.removeAttribute('open');
    } else {
      selected.setAttribute('open', '');
    }

    selected.classList.toggle('open'); // IE/Edge support
    selected.classList.remove('tmp'); // tmp protection remove

    return false;
  }

  collaseAll = (component) => {
    const allOpen = component.querySelectorAll('.open:not(.tmp)');
    let i = allOpen.length;
    if (i) {
      while (i--) {
        allOpen[i].removeAttribute('open');
        allOpen[i].classList.remove('open');
      }
    }
  }

  render = () => {
    const {
      tagName: Tag,
      className,
      variant,
      children,
      singly,
      ...attrs
    } = this.props;

    const classStack = FcUtils.createClassStack([
      'Accordion',
      `Accordion--${variant}`,
      className
    ]);

    const Accordion__Sections = React.Children.map(this.props.children, (child, i) => {
      if (!React.isValidElement(child)) { return false; }

      const title = (child.props.title) ? child.props.title : 'Missing title attribute';
      const statelessIcon = (child.props.icon) ? <Icon name={child.props.icon} /> : null;

      const statefullIcons = {
        open: ((child.props.openIcon) ? <Icon name={child.props.openIcon} className="open" /> : null),
        close: ((child.props.closeIcon) ? <Icon name={child.props.closeIcon} className="close" /> : null)
      };
      return (
        <details>
          <summary>
            <Heading level={child.props.level} weight={child.props.weight}>
              <a href={(['#section-', i].join(''))} data-index={i}>
                {title}
                {statelessIcon}
                {statefullIcons.open}
                {statefullIcons.close}
              </a>
            </Heading>
          </summary>

          <child.type>
            {child.props.children}
          </child.type>
        </details>
      );
    });
    return (
      <Tag
        onClick={this.toggle}
        className={classStack}
        {...attrs}
      >
        {Accordion__Sections}
      </Tag>
    );
  }
}

export default Accordion;
