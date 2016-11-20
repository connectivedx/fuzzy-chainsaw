import React from 'react';
import styles from './PageRoot.css';
import FontFaceSet from '../FontFaceSet/FontFaceSet';
import IconSet from '../IconSet/IconSet';

export const PageRoot__Wrapper = ({ children }) => (
	<html>
		{children}
	</html>
);

export const PageRoot__Head = ({ title, children }) => (
	<head>
		<meta charset="utf-8" />
		<title>{title}</title>
		<link rel="stylesheet" href="/assets/styles.css" />
		{children}
	</head>
);

PageRoot__Head.propTypes = {
	title: React.PropTypes.string.isRequired
}

export const PageRoot__Body = ({ className, children }) => (
	<body className={className}>
    <FontFaceSet />
		<IconSet />
		{children}
		<script src="/assets/scripts.js" />
	</body>
);

PageRoot__Body.propTypes = {
	className: React.PropTypes.string
}

export const PageRoot = ({ title, bodyClass = "", children }) => (
	<PageRoot__Wrapper>
		<PageRoot__Head title={title} />
		<PageRoot__Body className={bodyClass}>{children}</PageRoot__Body>
	</PageRoot__Wrapper>
);

PageRoot.propTypes = {
	title: React.PropTypes.string.isRequired,
	bodyClass: React.PropTypes.string
};



export default PageRoot;
