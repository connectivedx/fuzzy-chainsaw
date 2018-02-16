import test from 'tape';
import { shallow } from 'enzyme';

import Table from './Table';

test('<Table>', (t) => {
  const component = shallow(<Table>Hello World</Table>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.table'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
