import React from 'react';
import Dom from 'react-dom/server';
import reactElementToString from 'react-element-to-jsx-string';
import { pd } from 'pretty-data';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

import Heading from '../Heading/Heading';

const filterProps = props => {
  const copy = Object.assign({}, props);

  if (Array.isArray(copy.children)) {
    copy.children = [ '...' ]
  }

  return copy;
}

const ExampleSection = ({
  slug,
  title,
  type,
  className = '',
  children,
  isActive = false
}) => (
  <div className={`sg-example__section sg-example__section--${type} ${isActive ? 'is-active' : ''} ${className}`}>
    {children}
  </div>
);

export default ({
  slug,
  tagName,
  exampleName,
  options,
  component
}) => {

  const reactExample = reactElementToString(component);
  const htmlExample = Dom.renderToStaticMarkup(component);
  const jsonExample = JSON.stringify(filterProps(component.props), null, 2);

  const exampleClasses = options ? [
    options.fullWidth ? 'sg-example__section--full-width' : undefined,
    options.noPadding ? 'sg-example__section--no-padding' : undefined,
    options.darkBackground ? 'sg-example__section--dark-background' : undefined
  ].filter(a => a !== undefined).join(' ') : '';

  return (
    <div className="sg-example">
      <a className="sg-expample__anchor" id={slug}></a>
      <div className="sg-example__header">
        <Heading level="3">{exampleName}</Heading>

        <ul className="sg-example__tabs">
          <li className="sg-example__tabs-item is-active"><a href={'#' + slug + '/example'}>Example</a></li>
          <li className="sg-example__tabs-item"><a href={'#' + slug + '/react'}>React</a></li>
          <li className="sg-example__tabs-item"><a href={'#' + slug + '/html'}>HTML</a></li>
          <li className="sg-example__tabs-item"><a href={'#' + slug + '/json'}>JSON</a></li>
        </ul>
      </div>

      <ExampleSection title="Example" type="example" slug={slug} isActive="true" className={exampleClasses}>
        <div dangerouslySetInnerHTML={{ __html: htmlExample }} />

        <script
          id={slug + '-data'}
          type="text/json"
          dangerouslySetInnerHTML={{ __html: jsonExample }} />
      </ExampleSection>

      <ExampleSection title="React" type="react" slug={slug}>
        <pre><code>
          <SyntaxHighlighter lanaguage="javascript" style={github} customStyle={{backgroundColor:'transparent'}}>
            { reactExample }
          </SyntaxHighlighter>
        </code></pre>
      </ExampleSection>

      <ExampleSection title="HTML" type="html" slug={slug}>
        <pre><code>
          <SyntaxHighlighter lanaguage="html" style={github} customStyle={{backgroundColor:'transparent'}}>
            { pd.xml(htmlExample) }
          </SyntaxHighlighter>
        </code></pre>
      </ExampleSection>

      <ExampleSection title="JSON" type="json" slug={slug}>
        <pre><code>
          <SyntaxHighlighter lanaguage="json" style={github} customStyle={{backgroundColor:'transparent'}}>
          { jsonExample }
          </SyntaxHighlighter>
        </code></pre>
      </ExampleSection>
    </div>
  );
};
