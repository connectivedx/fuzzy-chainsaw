import React from 'react';
import PlaceholderSvg from './PlaceholderSvg';

export default [{
  name: "Default",
  component: (
    <PlaceholderSvg />
  ),
  test(t, component) {
    t.equal(component.is('svg'), true, 'tag name');
    t.equal(component.text(), 'FPO', 'text');
    t.end();
  }
},
{
  name: "With all available props passed in",
  component: (
    <PlaceholderSvg
      width={2000}
      height="600"
      fontSize="200%"
      fontFamily="monospace"
      fontWeight="normal"
      imgColor="tomato"
      textColor="bisque"
      text="I’m an SVG!"
    />
  ),
  test(t, component) {
    t.equal(component.is('svg'), true, 'tag name');
    t.equal(component.text(), 'I’m an SVG!', 'text');
    t.end();
  }
}];
