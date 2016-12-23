import React from 'react';
import Nav from '../Nav/Nav';
import IconSet from '../../../tags/IconSet/IconSet';

export default ({
  title,
  locals,
  children
}) => (
  <html>
    <head>
      <title>{title}</title>

      <meta charSet="utf-8" />

      <link rel="stylesheet" href="/assets/styles.css" />
      <link rel="stylesheet" href="/assets/styleguide.css" />
    </head>

    <body className={className}>
      <IconSet />

      <Nav locals={locals} />
      <div className="sg-styleguide" id="content">
        {children}
      </div>

      <script src="/assets/styleguide.js" />
      <script src="/assets/scripts.js" />
    </body>
  </html>
);
