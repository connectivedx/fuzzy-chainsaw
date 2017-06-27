import test from 'tape';
import { shallow } from 'enzyme';

import Heading from './Heading';

test('<Heading>', (t) => {
  const component = shallow(<Heading>Hello</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.is('.Heading'), 'tag class');
  t.ok(component.is('.Heading--h1'), 'variant class');
  t.ok(component.is('.Heading--bold'), 'weight class');
  t.equal(component.text(), 'Hello', 'text');
  t.end();
});

test('<Heading level="h3">', (t) => {
  const component = shallow(<Heading level="h3">Wowie Zowie</Heading>);
  t.ok(component.is('h3'), 'tag name');
  t.ok(component.is('.Heading'), 'tag class');
  t.ok(component.is('.Heading--h3'), 'variant class');
  t.ok(component.is('.Heading--bold'), 'weight class');
  t.equal(component.text(), 'Wowie Zowie', 'text');
  t.end();
});

test('<Heading className="super" weight="medium">', (t) => {
  const component = shallow(<Heading className="super" weight="medium">Leg Shaking</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.is('.Heading'), 'tag class');
  t.ok(component.is('.Heading--h1'), 'variant class');
  t.ok(component.is('.Heading--medium'), 'weight class');
  t.ok(component.is('.super'), 'prop class');
  t.equal(component.text(), 'Leg Shaking', 'text');
  t.end();
});

test('<Heading tagName="div" className="duper" variant="h3 thin">', (t) => {
  const component = shallow(
    <Heading
      tagName="div"
      className="duper"
      level="h3"
      weight="thin"
    >
      Back Breaking
    </Heading>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Heading'), 'tag class');
  t.ok(component.is('.Heading--h3'), 'variant class');
  t.ok(component.is('.Heading--thin'), 'weight class');
  t.ok(component.is('.duper'), 'prop class');
  t.equal(component.text(), 'Back Breaking', 'text');
  t.end();
});
