import Dom from 'react-dom/server';
import reactElementToString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import { pd } from 'pretty-data';

import Heading from 'SgTags/Heading/Heading';

const filterProps = (component) => {
  const copy = {
    type: component.type.name,
    props: Object.assign({}, component.props)
  };

  const processChild = (child) => (
    Object.keys(child)
      .filter((key) => !(child[key] === null || Object.keys(child[key]).length === 0))
      .reduce((sum, key) => {
        if (key === 'props' && child.props.children !== undefined) {
          let children = child.props.children;

          if (Array.isArray(children)) {
            children = child.props.children.map(processChild);
          } else if (typeof children === 'object') {
            children = processChild(children);
          }

          sum.props = Object.assign({ }, child.props, { children });
        } else if (key === 'type') {
          if (child.type && child.type.name) sum.type = child.type.name;
          else sum.type = child.type;
        } else {
          sum[key] = child[key];
        }

        return sum;
      }, { })
  );


  if (Array.isArray(copy.props.children)) {
    copy.props.children = copy.props.children.map(processChild);
  }

  return copy;
};


export const Example_Section = (props) => {
  const {
    type,
    className,
    children,
    isActive,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'sg-example__section',
    `sg-example__section--${type}`,
    isActive && 'is-active',
    className
  ]);

  return (
    <div className={classStack} {...attrs}>
      {children}
    </div>
  );
};

Example_Section.defaultProps = {
  isActive: false
};

Example_Section.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node
};


export const Example_Wrapper = (props) => {
  const {
    slug,
    children,
    ...attrs
  } = props;

  return (
    <div className="sg-example" {...attrs}>
      <a className="sg-expample__anchor" id={slug}>&nbsp;</a>
      {children}
    </div>
  );
};

Example_Wrapper.propTypes = {
  slug: PropTypes.string,
  children: PropTypes.node
};


export const Example_Header = (props) => {
  const {
    exampleName,
    children,
    ...attrs
  } = props;

  return (
    <div className="sg-example__header" {...attrs}>
      <Heading level="3" className="sg-example__name">{exampleName}</Heading>

      <ul className="sg-example__tabs">
        {children}
      </ul>
    </div>
  );
};

Example_Header.propTypes = {
  exampleName: PropTypes.string,
  children: PropTypes.node
};


export const Example_Tab = (props) => {
  const {
    slug,
    name,
    children,
    isActive,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'sg-example__tabs-item',
    isActive && 'is-active'
  ]);

  return (
    <li className={classStack} {...attrs}>
      <a href={`#${slug}/${name}`}>{children}</a>
    </li>
  );
};

Example_Tab.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node
};


export const Example = (props) => {
  const {
    slug,
    exampleName,
    options,
    component
  } = props;

  const reactExample = reactElementToString(component);
  const htmlExample = Dom.renderToStaticMarkup(component);
  const jsonExample = JSON.stringify(filterProps(component), null, 2);

  const exampleClassStack = FcUtils.createClassStack([
    options.fullWidth && 'sg-example__section--full-width',
    options.noPadding && 'sg-example__section--no-padding',
    options.darkBackground && 'sg-example__section--dark-background'
  ]);

  return (
    <Example_Wrapper slug={slug}>
      <Example_Header exampleName={exampleName}>
        <Example_Tab slug={slug} name="example" isActive>Example</Example_Tab>
        <Example_Tab slug={slug} name="react">React</Example_Tab>
        <Example_Tab slug={slug} name="html">HTML</Example_Tab>
        <Example_Tab slug={slug} name="json">JSON</Example_Tab>
      </Example_Header>

      <Example_Section
        title="Example"
        type="example"
        isActive
        className={exampleClassStack}
        dangerouslySetInnerHTML={{ __html: htmlExample }}
      />

      <Example_Section title="React" type="react">
        <SyntaxHighlighter language="html" style={github} customStyle={{ backgroundColor: 'transparent' }}>
          { reactExample }
        </SyntaxHighlighter>
      </Example_Section>

      <Example_Section title="HTML" type="html">
        <SyntaxHighlighter language="html" style={github} customStyle={{ backgroundColor: 'transparent' }}>
          { pd.xml(htmlExample) }
        </SyntaxHighlighter>
      </Example_Section>

      <Example_Section title="JSON" type="json">
        <SyntaxHighlighter language="json" style={github} customStyle={{ backgroundColor: 'transparent' }}>
          { jsonExample }
        </SyntaxHighlighter>
      </Example_Section>
    </Example_Wrapper>
  );
};

Example.defaultProps = {
  options: { }
};

Example.propTypes = {
  slug: PropTypes.string,
  exampleName: PropTypes.string,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool,
    noPadding: PropTypes.bool,
    darkBackground: PropTypes.bool
  }),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ])
};


export default Example;
