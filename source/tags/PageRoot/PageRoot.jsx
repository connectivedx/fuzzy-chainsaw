import React from 'react';
import styles from './page-root.css';


export const PageRoot__Wrapper = ({ children }) => (
	<html>
		{children}
	</html>
);

export const PageRoot__Head = ({ title, children }) => (
	<head>
		<meta charset="utf-8" />
		<title>{title}</title>
		<link rel="stylesheet" href="/assets/bundle.css" />
		{children}
	</head>
);

export const PageRoot__Body = ({ className, children }) => (
	<body className={className}>
		{children}
		<script src="/assets/bundle.js" />
	</body>
);

export const PageRoot = ({ title, bodyClass = "", children }) => (
	<PageRoot__Wrapper>
		<PageRoot__Head title={title} />	
		<PageRoot__Body className={bodyClass}>{children}</PageRoot__Body>
	</PageRoot__Wrapper>
);


export default PageRoot;