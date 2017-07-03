import test from 'tape';
import { shallow } from 'enzyme';

import Heading from './Heading';

test('<Heading>', (t) => {
  const component = shallow(<Heading>Hello</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.hasClass('Heading'), 'tag class');
  t.ok(component.hasClass('Heading--h1'), 'variant class');
  t.ok(component.hasClass('Heading--bold'), 'weight class');
  t.equal(component.render().text(), 'Hello', 'text');
  t.end();
});

test('<Heading level="h3">', (t) => {
  const component = shallow(<Heading level="h3">Wowie Zowie</Heading>);
  t.ok(component.is('h3'), 'tag name');
  t.ok(component.hasClass('Heading'), 'tag class');
  t.ok(component.hasClass('Heading--h3'), 'variant class');
  t.ok(component.hasClass('Heading--bold'), 'weight class');
  t.equal(component.render().text(), 'Wowie Zowie', 'text');
  t.end();
});

test('<Heading className="super" weight="medium">', (t) => {
  const component = shallow(<Heading className="super" weight="medium">Leg Shaking</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.hasClass('Heading'), 'tag class');
  t.ok(component.hasClass('Heading--h1'), 'variant class');
  t.ok(component.hasClass('Heading--medium'), 'weight class');
  t.ok(component.hasClass('super'), 'prop class');
  t.equal(component.render().text(), 'Leg Shaking', 'text');
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
  t.ok(component.hasClass('Heading'), 'tag class');
  t.ok(component.hasClass('Heading--h3'), 'variant class');
  t.ok(component.hasClass('Heading--thin'), 'weight class');
  t.ok(component.hasClass('duper'), 'prop class');
  t.equal(component.render().text(), 'Back Breaking', 'text');
  t.end();
});
