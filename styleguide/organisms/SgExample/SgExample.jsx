import Dom from 'react-dom/server';
import reactElementToString from 'react-element-to-string';
import pretty from 'pretty';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-json.min';

import SgHeading from '@sg-atoms/SgHeading/SgHeading';
import { themes } from '@source/fc-config';


const getTagName = (element) => {
  if (typeof element === 'string') return element;
  if (typeof element.type === 'string') return element.type;
  if (element.type.displayName) return element.type.displayName;
  if (element.type.name) return element.type.name;
  if (element.props && element.props.tagName) return element.props.tagName;
  return 'unknown-element';
};

export const SgExample_Section = (props) => {
  const {
    type,
    className,
    children,
    isActive,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgExample__section',
    `SgExample__section--${type}`,
    isActive && 'is-active',
    className
  ]);

  return (
    <div className={classStack} {...attrs}>
      {children}
    </div>
  );
};

SgExample_Section.defaultProps = {
  isActive: false
};

SgExample_Section.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node
};


export const SgExample_Wrapper = (props) => {
  const {
    slug,
    children,
    className,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgExample',
    className
  ]);

  return (
    <div className={classStack} id={slug} {...attrs}>
      {children}
    </div>
  );
};

SgExample_Wrapper.propTypes = {
  slug: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};


export const SgExample_Header = (props) => {
  const {
    exampleName,
    children,
    ...attrs
  } = props;

  return (
    <div className="SgExample__header" {...attrs}>
      <SgHeading level="h3" className="SgExample__name">{exampleName}</SgHeading>
    </div>
  );
};

SgExample_Header.propTypes = {
  exampleName: PropTypes.string,
  children: PropTypes.node
};


export const SgExample_Tab = (props) => {
  const {
    slug,
    name,
    children,
    isActive,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgExample__tabs-item',
    isActive && 'is-active'
  ]);

  return (
    <li className={classStack} {...attrs}>
      <a href={`#${slug}/${name}`}>{children}</a>
    </li>
  );
};

SgExample_Tab.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node
};


export const SgExample = (props) => {
  const {
    slug,
    exampleName,
    theme,
    options,
    component,
    devNotes
  } = props;

  const reactExample = reactElementToString(component, {
    displayName: getTagName,
    showDefaultProps: false
  });

  const htmlExample = Dom.renderToStaticMarkup(component);

  const classStack = FcUtils.createClassStack([
    'SgExample',
    options.fullWidth && 'SgExample--full-width',
    options.darkBackground && 'SgExample--dark-background',
    options.noPadding && 'SgExample--full-width',
    `${theme}-theme-section`
  ]);

  return (
    <SgExample_Wrapper slug={slug} className={classStack}>
      <SgExample_Header exampleName={exampleName} />

      <div className="SgExample__component">
        {component}
      </div>

      <ul className="SgExample__tabs">
        <SgExample_Tab slug={slug} name="react">React</SgExample_Tab>
        <SgExample_Tab slug={slug} name="html">HTML</SgExample_Tab>
        {devNotes &&
          <SgExample_Tab slug={slug} name="notes">Notes</SgExample_Tab>
        }
      </ul>

      <SgExample_Section title="React" type="react">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: Prism.highlight(reactExample, Prism.languages.jsx) }} />
        </pre>
      </SgExample_Section>

      <SgExample_Section title="HTML" type="html">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: Prism.highlight(pretty(htmlExample), Prism.languages.html) }} />
        </pre>
      </SgExample_Section>

      {devNotes &&
        <SgExample_Section title="NOTES" type="string">
          <pre>
            {devNotes}
          </pre>
        </SgExample_Section>
      }
    </SgExample_Wrapper>
  );
};

SgExample.defaultProps = {
  options: { },
  theme: themes.length > 0 ? themes[0].id : undefined
};

SgExample.propTypes = {
  slug: PropTypes.string,
  exampleName: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool,
    noPadding: PropTypes.bool,
    darkBackground: PropTypes.bool
  }),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  devNotes: PropTypes.string
};


export default SgExample;
