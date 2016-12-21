import React from 'react';
import {{name}} from './{{name}}.jsx';

export default [{
  name: "default",
  component: (
    <{{name}}>
      Hello World
    </{{name}}>
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.{{className}}'), true, 'tag class');
    t.equal(component.text(), 'Hello World', 'text');
    t.end();
  }
}];
