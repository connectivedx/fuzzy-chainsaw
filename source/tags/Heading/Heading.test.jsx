import test from 'tape';
import { shallow } from 'enzyme';

import Heading from './Heading';

test('<Heading>', (t) => {
  const component = shallow(<Heading>Hello</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.is('.heading'), 'tag class');
  t.ok(component.is('.heading--h1'), 'variant class');
  t.ok(component.is('.heading--default'), 'weight class');
  t.equal(component.text(), 'Hello', 'text');
  t.end();
});

test('<Heading level="3">', (t) => {
  const component = shallow(<Heading level="3">Wowie Zowie</Heading>);
  t.ok(component.is('h3'), 'tag name');
  t.ok(component.is('.heading'), 'tag class');
  t.ok(component.is('.heading--h3'), 'variant class');
  t.ok(component.is('.heading--default'), 'weight class');
  t.equal(component.text(), 'Wowie Zowie', 'text');
  t.end();
});

test('<Heading className="super" variant="medium">', (t) => {
  const component = shallow(<Heading className="super" variant="medium">Leg Shaking</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.is('.heading'), 'tag class');
  t.ok(component.is('.heading--h1'), 'variant class');
  t.ok(component.is('.heading--medium'), 'weight class');
  t.ok(component.is('.super'), 'prop class');
  t.equal(component.text(), 'Leg Shaking', 'text');
  t.end();
});

test('<Heading tagName="div" className="duper" variant="thin">', (t) => {
  const component = shallow(<Heading tagName="div" className="duper" variant="thin">Back Breaking</Heading>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.heading'), 'tag class');
  t.ok(component.is('.heading--h1'), 'variant class');
  t.ok(component.is('.heading--thin'), 'weight class');
  t.ok(component.is('.duper'), 'prop class');
  t.equal(component.text(), 'Back Breaking', 'text');
  t.end();
});
