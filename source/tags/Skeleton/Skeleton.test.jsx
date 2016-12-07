import React from 'react';
import Skeleton from './Skeleton';

export default [{
  name: 'default',
  component: (
    <Skeleton title="Super Test Page">
      Oh, Hello
    </Skeleton>
  )
}, {
  name: 'bgimage test',
  component: (
    <Skeleton title="Super Test Page">
      <div className="sg-page-root--bgimage-test"></div>
    </Skeleton>
  )
}];
