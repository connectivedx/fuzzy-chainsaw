import test from 'tape';
import { shallow } from 'enzyme';

import Link from './Link';


test('<Link href="#/">', (t) => {
  const component = shallow(<Link href="#/">Hello World</Link>);
  t.ok(component.is('a'), 'tag name');
  t.ok(component.hasClass('link'), 'tag class');
  t.ok(component.hasClass('link--default'), 'variant class');
  t.equal(component.prop('href'), '#/', 'prop');
  t.equal(component.render().text(), 'Hello World', 'text');
  t.end();
});

test('<Link href="#/" variant="cta">', (t) => {
  const component = shallow(<Link href="#/" variant="cta">Hello World</Link>);
  t.ok(component.is('a'), 'tag name');
  t.ok(component.hasClass('link'), 'tag class');
  t.ok(component.hasClass('link--cta'), 'variant class');
  t.equal(component.prop('href'), '#/', 'prop');
  t.equal(component.render().text(), 'Hello World', 'text');
  t.end();
});

test('<Link href="#/" variant="cta">', (t) => {
  const component = shallow(<Link tagName="div" href="#/" variant="cta">Hello World</Link>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('link'), 'tag class');
  t.ok(component.hasClass('link--cta'), 'variant class');
  t.equal(component.prop('href'), '#/', 'prop');
  t.equal(component.render().text(), 'Hello World', 'text');
  t.end();
});
