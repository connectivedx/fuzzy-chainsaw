import React from 'react';
import Rhythm from './Rhythm';

const children = [
  <div key="1">abc</div>,
  <div key="2">123</div>,
  <div key="3">
    <section>9990</section>
    <div>3758</div>
    <div>2389</div>
  </div>
];

// const children = 'bunnies!';

module.exports = [{
  name: 'default',
  component: (
    <Rhythm>
      {children}
    </Rhythm>
  )
}, {
  name: 'small size',
  component: (
    <Rhythm size="small">
      {children}
    </Rhythm>
  )
}, {
  name: 'large size',
  component: (
    <Rhythm size="large">
      {children}
    </Rhythm>
  )
}, {
  name: 'deep',
  component: (
    <Rhythm deep="true">
      {children}
    </Rhythm>
  )
}, {
  name: 'size/deep',
  component: (
    <Rhythm deep="true" size="small">
      {children}
    </Rhythm>
  )
}, {
  name: 'size/deep/tagName/class',
  component: (
    <Rhythm tagName="section" deep="true" size="large" className="red">
      {children}
    </Rhythm>
  )
}];
