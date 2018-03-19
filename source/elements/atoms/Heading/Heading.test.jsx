import test from 'tape';
import { shallow } from 'enzyme';

import Heading from './Heading';


test('<Heading>', (t) => {
  const component = shallow(<Heading>Hello</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.hasClass('heading'), 'tag class');
  t.ok(component.hasClass('heading--h1'), 'variant class');
  t.ok(component.hasClass('heading--bold'), 'weight class');
  t.equal(component.render().text(), 'Hello', 'text');
  t.end();
});

test('<Heading level="h3">', (t) => {
  const component = shallow(<Heading level="h3">Wowie Zowie</Heading>);
  t.ok(component.is('h3'), 'tag name');
  t.ok(component.hasClass('heading'), 'tag class');
  t.ok(component.hasClass('heading--h3'), 'variant class');
  t.ok(component.hasClass('heading--bold'), 'weight class');
  t.equal(component.render().text(), 'Wowie Zowie', 'text');
  t.end();
});

test('<Heading className="super" weight="medium">', (t) => {
  const component = shallow(<Heading className="super" weight="medium">Leg Shaking</Heading>);
  t.ok(component.is('h1'), 'tag name');
  t.ok(component.hasClass('heading'), 'tag class');
  t.ok(component.hasClass('heading--h1'), 'variant class');
  t.ok(component.hasClass('heading--medium'), 'weight class');
  t.ok(component.hasClass('super'), 'prop class');
  t.equal(component.render().text(), 'Leg Shaking', 'text');
  t.end();
});

const testD = (
  <Heading
    tagName="div"
    className="duper"
    level="h3"
    weight="thin"
  >
    Back Breaking
  </Heading>
);

test('<Heading tagName="div" className="duper" variant="h3 thin">', (t) => {
  const component = shallow(testD);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('heading'), 'tag class');
  t.ok(component.hasClass('heading--h3'), 'variant class');
  t.ok(component.hasClass('heading--thin'), 'weight class');
  t.ok(component.hasClass('duper'), 'prop class');
  t.equal(component.render().text(), 'Back Breaking', 'text');
  t.end();
});
