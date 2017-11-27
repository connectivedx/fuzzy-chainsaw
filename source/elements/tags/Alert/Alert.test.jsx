import test from 'tape';
import { shallow } from 'enzyme';

import Alert from './Alert';

test('<Alert>', (t) => {
  const component = shallow(<Alert>Hello World</Alert>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Alert'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
