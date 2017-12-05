import Heading from '@tags/Heading/Heading';

const toggle = (e) => {
  const accordion = e.currentTarget;
  const section = e.target.parentNode;

  // Singly support
  if (accordion.getAttribute('data-singly') === 'true') {
    const all = accordion.querySelectorAll('[open]');
    let i = all.length;
    while (i--) {
      all[i].removeAttribute('open');
    }
  }

  // IE11 & Edge support
  if (section.hasAttribute('open')) {
    section.removeAttribute('open');
  } else {
    section.setAttribute('open', '');
  }
};

// Sections
export const Accordion__section = FcUtils.createBasicComponent({
  name: 'Accordion__section',
  defaultProps: {
    tagName: 'details'
  }
});

// Titles
export const Accordion__title = (props) => {
  const {
    className,
    children,
    level,
    weight,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Accordion__title',
    className
  ]);

  return (
    <summary className={classStack} {...attrs}>
      <Heading level={level} weight={weight}>
        {children}
      </Heading>
    </summary>
  );
};

Accordion__title.defaultProps = {
  level: 'h3',
  weight: 'bold'
};

Accordion__title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  level: PropTypes.string,
  weight: PropTypes.string
};

// Content
export const Accordion__content = FcUtils.createBasicComponent({
  name: 'Accordion__content',
  defaultProps: {
    tagName: 'div'
  }
});

// Accordion
export const Accordion = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    singly,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Accordion',
    className
  ]);

  return (
    <Tag onClick={toggle} className={classStack} data-singly={singly} {...attrs}>
      {children}
    </Tag>
  );
};

Accordion.defaultProps = {
  tagName: 'div',
  singly: 'false'
};

Accordion.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  singly: PropTypes.string
};

export default Accordion;
