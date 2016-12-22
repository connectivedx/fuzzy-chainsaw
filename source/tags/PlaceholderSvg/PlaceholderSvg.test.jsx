import React from 'react';
import PlaceholderSvg from './PlaceholderSvg';

export default [{
  name: "default",
  component: (
    <PlaceholderSvg width={600} height='300' />
  ),
  test(t, component) {
    t.equal(component.is('svg'), true, 'tag name');
    t.equal(component.text(), 'FPO', 'text');
    t.end();
  }
}];
