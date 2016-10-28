import React from 'react';
import Dom from 'react-dom/server';	
import { pd } from 'pretty-data';

import Heading from '../tags/heading/heading.jsx';

const json2htmlAttrs = obj =>
	Object.keys(obj)
		.filter(key => key !== 'children')
		.map(key => `${key}="${obj[key]}"`)
		.join(' ');

const getChildren = child => {
	if (Array.isArray(child))
		return child
			.map(c => buildReactExample(c.type, c.props, c.props.children))
			.join('');

	return child;
}

const buildReactExample = (tagName, props, children) => {
	const attrs = json2htmlAttrs(props);

	if (children && attrs)
		return `<${tagName} ${attrs}>${getChildren(children)}</${tagName}>`;
	else if (children && !attrs)
		return `<${tagName}>${getChildren(children)}</${tagName}>`;
	else
		return `<${tagName} ${attrs} />`;
}

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
	children,
	isActive = false
}) => (
	<div className={`sg-example__section sg-example__section--${type} ${isActive ? 'is-active' : ''}`}>
		{children}
	</div>
);

export default ({
	slug,
	tagName,
	exampleName,
	component
}) => {
	const reactExample = buildReactExample(tagName, component.props, component.props.children);

	return (
		<div className="sg-test__example sg-example">
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
				
			<ExampleSection title="Example" type="example" slug={slug} isActive="true">				
				<div>
					{component}
				</div>

				<script 
					id={slug + '-data'} 
					type="text/json" 
					dangerouslySetInnerHTML={{ __html:  JSON.stringify(component.props) }} />
			</ExampleSection>

			<ExampleSection title="React" type="react" slug={slug}>
				<pre><code>
					{ pd.xml(reactExample) }
				</code></pre>
			</ExampleSection>

			<ExampleSection title="HTML" type="html" slug={slug}>
				<pre><code>
					{ pd.xml(Dom.renderToStaticMarkup(component)) }
				</code></pre>
			</ExampleSection>

			<ExampleSection title="JSON" type="json" slug={slug}>
				<pre><code>
					{ JSON.stringify(filterProps(component.props), null, 2) }
				</code></pre>
			</ExampleSection>
		</div>
	);
};