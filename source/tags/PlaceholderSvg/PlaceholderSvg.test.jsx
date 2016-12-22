import React from 'react';
import PlaceholderSvg from './PlaceholderSvg.jsx';

export default [{
  name: "default",
  component: (
    <PlaceholderSvg />
  ),
  test(t, component) {
    t.equal(component.is('svg'), true, 'tag name');
    t.equal(component.text(), 'FPO', 'text');
    t.end();
  }
}];
