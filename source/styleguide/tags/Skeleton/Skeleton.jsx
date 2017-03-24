import React from 'react';
import Nav from 'SgTags/Nav/Nav';

const Skeleton = ({
  title,
  className,
  locals,
  children
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/assets/styles.css" />
      <link rel="stylesheet" href="/assets/styleguide.css" />
    </head>

    <body className={className}>
      <Nav locals={locals} />
      <div className="sg-styleguide" id="content">
        {children}
      </div>

      <script src="/assets/styleguide.js" />
      <script src="/assets/scripts.js" />
    </body>
  </html>
);

Skeleton.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  locals: React.PropTypes.object,
  children: React.PropTypes.node.isRequired
};

export default Skeleton;
