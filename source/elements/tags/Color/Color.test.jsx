import test from 'tape';
import { shallow } from 'enzyme';

import Color from './Color';

test('<Color>', (t) => {
  const component = shallow(<Color>Hello World</Color>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Color'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
