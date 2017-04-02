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


export const Example_Section = ({
  type,
  className = '',
  children,
  isActive = false,
  ...attrs
}) => (
  <div className={`sg-example__section sg-example__section--${type} ${isActive ? 'is-active' : ''} ${className}`} {...attrs}>
    {children}
  </div>
);

Example_Section.propTypes = {
  type: React.PropTypes.string,
  className: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  children: React.PropTypes.node
};


export const Example_Wrapper = ({
  slug,
  children,
  ...attrs
}) => (
  <div className="sg-example" {...attrs}>
    <a className="sg-expample__anchor" id={slug}>&nbsp;</a>
    {children}
  </div>
);

Example_Wrapper.propTypes = {
  slug: React.PropTypes.string,
  children: React.PropTypes.node
};


export const Example_Header = ({
  exampleName,
  children,
  ...attrs
}) => (
  <div className="sg-example__header" {...attrs}>
    <Heading level="3" className="sg-example__name">{exampleName}</Heading>

    <ul className="sg-example__tabs">
      {children}
    </ul>
  </div>
);

Example_Header.propTypes = {
  exampleName: React.PropTypes.string,
  children: React.PropTypes.node
};


export const Example_Tab = ({
  slug,
  name,
  children,
  isActive,
  ...attrs
}) => (
  <li className={`sg-example__tabs-item ${isActive ? 'is-active' : ''}`} {...attrs}>
    <a href={`#${slug}/${name}`}>{children}</a>
  </li>
);

Example_Tab.propTypes = {
  slug: React.PropTypes.string,
  name: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  children: React.PropTypes.node
};


export const Example = ({
  slug,
  exampleName,
  options,
  component
}) => {
  const reactExample = reactElementToString(component);
  const htmlExample = Dom.renderToStaticMarkup(component);
  const jsonExample = JSON.stringify(filterProps(component), null, 2);

  const exampleClasses = options ? [
    options.fullWidth ? 'sg-example__section--full-width' : undefined,
    options.noPadding ? 'sg-example__section--no-padding' : undefined,
    options.darkBackground ? 'sg-example__section--dark-background' : undefined
  ].filter((a) => a !== undefined).join(' ') : '';

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
        className={exampleClasses}
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

Example.propTypes = {
  slug: React.PropTypes.string,
  exampleName: React.PropTypes.string,
  options: React.PropTypes.shape({
    fullWidth: React.PropTypes.bool,
    noPadding: React.PropTypes.bool,
    darkBackground: React.PropTypes.bool
  }),
  component: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element])
};


export default Example;
