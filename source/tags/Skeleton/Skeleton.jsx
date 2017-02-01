import React from 'react';
import styles from './Skeleton.css';


export const Skeleton_Wrapper = ({
  children
}) => (
  <html>
    {children}
  </html>
);


export const Skeleton_Head = ({
  title,
  children
}) => (
  <head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/assets/styles.css" />
    {children}
  </head>
);

Skeleton_Head.propTypes = {
  title: React.PropTypes.string.isRequired
}


export const Skeleton_Body = ({
  className,
  children
}) => (
  <body className={className}>
    {children}
    <script src="/assets/scripts.js" />
  </body>
);

Skeleton_Body.propTypes = {
  className: React.PropTypes.string
}


export const Skeleton = ({
  title,
  bodyClass = '',
  children
}) => (
  <Skeleton_Wrapper>
    <Skeleton_Head title={title} />
    <Skeleton_Body className={bodyClass}>{children}</Skeleton_Body>
  </Skeleton_Wrapper>
);

Skeleton.propTypes = {
  title: React.PropTypes.string.isRequired,
  bodyClass: React.PropTypes.string
};


export default Skeleton;
