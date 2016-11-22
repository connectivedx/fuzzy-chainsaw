import React from 'react';
import PageRoot from './PageRoot';

export default [{
  name: 'default',
  component: (
    <PageRoot title="Super Test Page">
      Oh, Hello
    </PageRoot>
  )
}, {
  name: 'bgimage test',
  component: (
    <PageRoot title="Super Test Page">
      <div className="sg-page-root--bgimage-test"></div>
    </PageRoot>
  )
}];
